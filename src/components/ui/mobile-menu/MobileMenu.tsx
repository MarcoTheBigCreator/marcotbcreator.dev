'use client';

import Link from 'next/link';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { LaguageButtonMobile } from '@/components';
import { useEffect } from 'react';
import { languages } from '@/locales';
import { navItemsProps } from '@/interfaces';

export const MobileMenu = ({ navItems, href }: navItemsProps) => {
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
            onClick={() => useUIStore.setState({ isSideMenuOpen: false })}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href={href}
          className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all ml-3 text-xl font-semibold text-white"
          onClick={() => useUIStore.setState({ isSideMenuOpen: false })}
        >
          CV
        </Link>
        <div className="w-full h-px bg-gray-200 my-5" />

        {/* Language */}
        <div className="p-4 pl-3 pb-24 flex gap-3">
          {languages.map((language) => (
            <LaguageButtonMobile
              key={language.name}
              text={language.name}
              href={language.href}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};
