import type { Metadata } from 'next';
import { poppins } from '@/config/fonts';
import './globals.css';
import { Footer, Navbar } from '@/components';
import { MobileMenu } from '@/components/ui/mobile-menu/MobileMenu';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useTranslations } from 'next-intl';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: 'Marco Rodriguez',
  description:
    'Software Engineering graduated from the Polytechnic University of Durango. Tech enthusiast committed to growth. Skilled in front-end development, project leadership, and agile methodologies. A problem solver with clear communication and quick adaptability.',
  openGraph: {
    title: 'Marco Rodriguez',
    description:
      'Software Engineering graduated from the Polytechnic University of Durango. Tech enthusiast committed to growth. Skilled in front-end development, project leadership, and agile methodologies. A problem solver with clear communication and quick adaptability.',
    url: 'https://marcotbcreator.vercel.app/',
    siteName: 'Marco Rodriguez',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dmlpgks2h/image/upload/v1716493502/Portfolio/gcmyd4tr5tnsiwz3gwmk.svg',
      },
    ],
  },
  keywords: [
    'Marco Rodriguez',
    'Portfolio',
    'Software Engineer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Crummy Discord Music Bot',
    'Teslo shop',
    'TailwindCSS',
    'Vercel',
    'Talentum',
    'Polytechnic University of Durango',
    'Tech Enthusiast',
    'Agile Methodologies',
    'Project Leadership',
    'Problem Solver',
    'Clear Communication',
    'Quick Adaptability',
  ],
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
