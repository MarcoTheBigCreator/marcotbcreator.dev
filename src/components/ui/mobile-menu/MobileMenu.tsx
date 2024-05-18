'use client';

import Link from 'next/link';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { navItems } from '../ui-data/nav-items';
import { languages } from '../ui-data/languages';
import { LaguageButton } from '@/components';
import { useEffect } from 'react';

export const MobileMenu = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';
  }, [isSideMenuOpen]);

  return (
    <div className="w-full h-full lg:hidden">
      {/* Sidemenu */}
      <nav
        className={clsx(
          'fixed p-3 right-0 top-10 w-screen h-screen bg-black z-20 shadow-xl transform transition-all duration-300 overflow-y-auto overflow-x-auto',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      >
        {/* Menu */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all ml-3 text-xl font-semibold text-twhite"
          >
            {item.name}
          </Link>
        ))}
        <Link href="https://res.cloudinary.com/dmlpgks2h/image/upload//fl_attachment:cv-en//v1715931123/Portfolio/cv-en.pdf?_s=public-apps">
          <button className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all ml-3 text-xl font-semibold text-white">
            Resume
          </button>
        </Link>
        <div className="w-full h-px bg-gray-200 my-5" />

        {/* Language */}
        <div className="p-4 pl-3 pb-24 flex gap-3">
          {languages.map((lang) => (
            <LaguageButton key={lang.name} text={lang.name} />
          ))}
        </div>
      </nav>
    </div>
  );
};
