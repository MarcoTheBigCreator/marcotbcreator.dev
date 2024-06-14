import fs from 'fs';
import path from 'path';

export const generateBlogMetadata = async (slug: string) => {
  const filePath = path.join(process.cwd(), 'src/locales', 'en.json');
  const fileContents = await fs.promises.readFile(filePath, 'utf8');

  const BlogData = JSON.parse(fileContents);

  const blogMetadata = BlogData.portfolioBlog[slug];

  return blogMetadata;
};
