import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useTranslations } from 'next-intl';
import { Footer, MobileMenu, Navbar } from '@/components';
import { poppins } from '@/config';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: {
    template: '%s | Marco Rodriguez',
    default: 'Marco Rodriguez',
  },
  description:
    'Software Engineering graduated from the Polytechnic University of Durango. Tech enthusiast committed to growth. Skilled in front-end development, project leadership, and agile methodologies. A problem solver with clear communication and quick adaptability.',
  openGraph: {
    title: 'Marco Rodriguez',
    description:
      'Software Engineering graduated from the Polytechnic University of Durango. Tech enthusiast committed to growth. Skilled in front-end development, project leadership, and agile methodologies. A problem solver with clear communication and quick adaptability.',
    url: 'https://marcotbcreator.dev/',
    siteName: 'Marco Rodriguez',
    locale: 'en_US',
    type: 'website',
    images: [
      `https://res.cloudinary.com/dmlpgks2h/image/upload/v1716268304/Portfolio/xtyrtmbbmdckey25ek1l.png`,
    ],
  },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const t = useTranslations();
  const navItems = t.raw('navItems');
  const cvLink = t('cvLink');

  return (
    <html lang={locale} className="min-h-screen pt-16 dark">
      <body className={poppins.className}>
        <Navbar navItems={navItems} href={cvLink} />
        <MobileMenu navItems={navItems} href={cvLink} />
        {children}
        <Footer navItems={navItems} href={cvLink} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
