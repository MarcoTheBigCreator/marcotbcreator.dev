import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import sharp from 'sharp';

const baseUrl = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3000';
const request = (path, headers = {}) => fetch(new URL(path, baseUrl), {
  redirect: 'manual',
  headers: { 'User-Agent': 'Googlebot', ...headers },
  signal: AbortSignal.timeout(15_000),
});
const decodeHtml = (value) => value.replace(/&(amp|quot|#x27|lt|gt);/g, (_, entity) => ({
  amp: '&', quot: '"', '#x27': "'", lt: '<', gt: '>',
})[entity]);
const descriptionOf = (html) => {
  const match = html.match(/<meta name="description" content="([^"]*)"/);
  assert.ok(match, 'description metadata missing');
  return decodeHtml(match[1]);
};

for (const locale of ['en', 'es']) {
  const messages = JSON.parse(await readFile(`src/locales/${locale}.json`, 'utf8'));

  test(`${locale} portfolio has matching language and metadata`, async () => {
    const response = await request('/' + locale);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(`<html lang="${locale}"`));
    assert.equal(descriptionOf(html), messages.description);
    assert.ok(html.includes(messages.navbarAccessibility.navigation));
  });

  for (const [slug, project] of Object.entries(messages.portfolioBlog)) {
    test(`${locale} project ${slug} renders with its own metadata`, async () => {
      const response = await request('/' + locale + '/blog/' + slug);
      assert.equal(response.status, 200);
      const html = await response.text();
      assert.ok(html.includes(`<html lang="${locale}"`));
      assert.equal(descriptionOf(html), project.summary);
      assert.ok(html.includes('role="article"'));
      assert.ok(html.includes('q=100'), 'project image quality changed');
    });
  }

  for (const path of ['/blog/project-that-does-not-exist', '/page-that-does-not-exist']) {
    test(`${locale}${path} returns 404`, async () => {
      const response = await request('/' + locale + path);
      assert.equal(response.status, 404);
      await response.arrayBuffer();
    });
  }
}

for (const [name, headers, locale] of [
  ['default locale', {}, 'en'],
  ['browser language', { 'Accept-Language': 'es-MX,es;q=0.9' }, 'es'],
  ['saved language', { Cookie: 'NEXT_LOCALE=es', 'Accept-Language': 'en' }, 'es'],
]) {
  test(`root redirect respects ${name} and retains the query`, async () => {
    const response = await request('/?source=smoke', headers);
    assert.equal(response.status, 307);
    const location = new URL(response.headers.get('location'), baseUrl);
    assert.equal(location.origin, new URL(baseUrl).origin);
    assert.equal(location.pathname, '/' + locale);
    assert.equal(location.search, '?source=smoke');
  });
}

test('compiled CSS and JavaScript are available', async () => {
  const response = await request('/en');
  const html = await response.text();
  const assets = [...html.matchAll(/(?:src|href)="([^" ]+\.(?:js|css)(?:\?[^" ]*)?)"/g)]
    .map((match) => match[1])
    .filter((path) => path.startsWith('/_next/'));
  for (const extension of ['.js', '.css']) {
    const path = assets.find((path) => path.includes(extension));
    assert.ok(path, `missing ${extension} asset`);
    const response = await request(path);
    assert.equal(response.status, 200);
    assert.ok((await response.arrayBuffer()).byteLength > 0);
  }
});

test('patched sharp processes SVG and raster images with its native engine', async () => {
  const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="purple"/></svg>');
  const raster = await sharp(svg).resize(2, 2).png().toBuffer();
  const metadata = await sharp(raster).metadata();
  assert.equal(metadata.width, 2);
  assert.equal(metadata.height, 2);
  assert.equal(metadata.format, 'png');
});
