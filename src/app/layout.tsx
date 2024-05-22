import type { Metadata } from 'next';
import { poppins } from '@/config/fonts';
import './globals.css';
import { Footer, Navbar } from '@/components';
import { MobileMenu } from '@/components/ui/mobile-menu/MobileMenu';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Marco Rodriguez',
  description: "Marco Rodriguez's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen pt-16 dark">
      <body className={poppins.className}>
        <Navbar />
        <MobileMenu />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
