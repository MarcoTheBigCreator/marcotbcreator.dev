'use client';

import Link from 'next/link';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { LanguageButtonMobile } from '@/components';
import { useEffect } from 'react';
import { languages } from '@/locales';
import { navItemsProps } from '@/interfaces';
import { usePathname, useRouter } from 'next/navigation';

export const MobileMenu = ({ navItems, href }: navItemsProps) => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';
  }, [isSideMenuOpen]);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (itemHref: string) => {
    const isOnMainPage = pathname === '/en' || pathname === '/es';
    if (isOnMainPage) {
      // Si estás en la página principal, navega directamente al ID de la sección
      router.push(itemHref);
    } else {
      // Si estás en una página de proyecto, redirige a la página principal con el ID de la sección
      const newUrl = `/${pathname.split('/')[0]}${itemHref}`;
      router.push(newUrl.startsWith('//') ? `/${itemHref}` : newUrl);
    }
    useUIStore.setState({ isSideMenuOpen: false });
  };

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
          <button
            key={item.name}
            onClick={() => handleNavigation(item.href)}
            className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all ml-3 text-xl font-semibold text-white"
          >
            {item.name}
          </button>
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
            <LanguageButtonMobile
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
