import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getMessages, getTranslations } from 'next-intl/server';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Footer, MobileMenu, Navbar } from '@/components';
import { poppins } from '@/config';

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale });

  const MetadataTitle = await getTranslations({ locale, namespace: 'title' });
  const authorsList = t.raw('authors') as { name: string }[];
  const keywordsList = t.raw('keywords') as string[];

  const openGraphMetadata = await getTranslations({
    locale,
    namespace: 'openGraph',
  });
  const openGraphImages = openGraphMetadata.raw('images') as string[];

  const twitterMetadata = await getTranslations({
    locale,
    namespace: 'twitter',
  });
  const twitterImages = twitterMetadata.raw('images') as string[];

  return {
    title: {
      template: MetadataTitle('template'),
      default: MetadataTitle('default'),
    },
    description: t('description'),
    applicationName: t('applicationName'),
    authors: authorsList,
    generator: t('generator'),
    keywords: keywordsList,
    creator: t('creator'),
    publisher: t('publisher'),
    metadataBase: new URL(t('metadataBase')),
    openGraph: {
      title: openGraphMetadata('title'),
      description: openGraphMetadata('description'),
      url: openGraphMetadata('url'),
      siteName: openGraphMetadata('siteName'),
      type: openGraphMetadata('type') as OGtype,
      locale: openGraphMetadata('locale'),
      images: openGraphImages,
    },
    twitter: {
      card: twitterMetadata('card') as TwitterCard,
      title: twitterMetadata('title'),
      description: twitterMetadata('description'),
      images: twitterImages,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();

  const t = await getTranslations();
  const navItems = t.raw('navItems');
  const cvLink = t('cvLink');

  return (
    <html lang={locale} className="min-h-screen pt-16 dark">
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar navItems={navItems} href={cvLink} />
          <MobileMenu navItems={navItems} href={cvLink} />
          {children}
          <Footer navItems={navItems} href={cvLink} />
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
