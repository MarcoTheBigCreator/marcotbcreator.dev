'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import { useUIStore } from '@/store';
import { LanguageButtonMobile } from '@/components';
import { languages } from '@/locales';

export const MobileMenu = ({ navItems, href }: navItemsProps) => {
  const t = useTranslations('navbarAccessibility');

  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSideMenuOpen) {
        useUIStore.setState({ isSideMenuOpen: false });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSideMenuOpen]);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (itemHref: string) => {
    const languagePrefix = pathname.split('/')[1];
    const newUrl = `/${languagePrefix}${itemHref}`;
    router.push(newUrl.startsWith('//') ? `/${itemHref}` : newUrl);
    useUIStore.setState({ isSideMenuOpen: false });
  };

  return (
    <div className="w-full h-full lg:hidden">
      {/* Sidemenu */}
      <nav
        aria-label={t('mobileNavigation')}
        role="navigation"
        className={clsx(
          'fixed p-3 right-0 top-10 w-screen h-screen bg-black z-20 shadow-xl transform transition-all duration-300 overflow-y-auto',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      >
        {/* Menu */}
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.href)}
            className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all ml-3 text-xl font-semibold text-white"
            aria-label={`${t('goTo')} ${item.name}`}
            tabIndex={isSideMenuOpen ? 0 : -1}
          >
            {item.name}
          </button>
        ))}
        <Link
          href={href}
          className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all ml-3 text-xl font-semibold text-white"
          onClick={() => useUIStore.setState({ isSideMenuOpen: false })}
          aria-label={t('cv')}
          tabIndex={isSideMenuOpen ? 0 : -1}
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
              tabIndex={isSideMenuOpen ? 0 : -1}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};
