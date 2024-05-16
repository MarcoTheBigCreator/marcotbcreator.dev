import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { MobileMenu } from "@/components/ui/mobile-menu/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marco Rodriguez",
  description: "Marco Rodriguez's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen pt-16">
      <body className={inter.className}>
        <Navbar />
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        {children}
      </body>
    </html>
  );
}
