'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@/components/logo/Logo';
import {
  IoCloseOutline,
  IoDownload,
  IoDownloadOutline,
  IoReorderTwoOutline,
} from 'react-icons/io5';
import { useUIStore } from '@/store';
import { languages } from '@/locales';
import { titleFont } from '@/config';
import { LanguageButton } from '../ui/language-button/LanguageButton';
import { useTranslations } from 'next-intl';

export const Navbar = ({ navItems, href }: navItemsProps) => {
  const t = useTranslations('navbarAccessibility');

  const openMenu = useUIStore((state) => state.openSideMenu);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  const [isLogoOnHover, setIsLogoOnHover] = useState('white');
  const [isResumeOnHover, setIsResumeOnHover] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (itemHref: string) => {
    const isOnMainPage = pathname === '/en' || pathname === '/es';
    if (isOnMainPage) {
      router.push(itemHref);
    } else {
      const newUrl = `/${pathname.split('/')[0]}${itemHref}`;
      router.push(newUrl.startsWith('//') ? `/${itemHref}` : newUrl);
    }
  };

  return (
    <nav
      className="grid grid-cols-1 lg:grid-cols-7 gap-4 backdrop-blur-3xl fixed top-0 left-0 right-0 z-50 bg-black opacity-95 p-2 center w-full items-center"
      aria-label={t('navigation')}
    >
      {/* Mobile Menu */}
      <div className="lg:hidden justify-start transition-all">
        {isSideMenuOpen ? (
          <button
            id="close-menu"
            aria-label={t('closeMenu')}
            onClick={closeMenu}
            className="p-2 text-white font-medium"
          >
            <IoCloseOutline size={40} />
          </button>
        ) : (
          <button
            id="open-menu"
            aria-label={t('openMenu')}
            onClick={openMenu}
            className="p-2 text-white font-medium"
          >
            <IoReorderTwoOutline size={40} />
          </button>
        )}
      </div>

      {/* Brand */}
      <div className="hidden lg:flex col-span-2 justify-center">
        <button
          onClick={() => handleNavigation('#header')}
          onMouseEnter={() => setIsLogoOnHover('rgb(124,58,237)')}
          onMouseLeave={() => setIsLogoOnHover('white')}
          className={`${titleFont.className} flex text-lg font-semibold gap-2 text-white hover:text-violet-600 transition duration-200 ease-linear`}
          aria-label={t('goToTop')}
        >
          <Logo width={25} height={25} color={isLogoOnHover} />
          MarcoTheBigCreator
        </button>
      </div>

      {/* Navigation */}
      <ul className="hidden lg:flex col-span-3 justify-center" role="menu">
        {navItems.map((item) => (
          <li key={item.name} role="none">
            <button
              onClick={() => handleNavigation(item.href)}
              className="m-2 px-5 p-2 flex align-middle justify-center hover:shadow-[0_6px_20px_rgba(140,0,255,55%)] hover:bg-violet-700 rounded-full text-white font-medium transition duration-200 ease-linear"
              aria-label={`${t('goTo')} ${item.name}`}
              role="menuitem"
            >
              {item.name}
            </button>
          </li>
        ))}
        <li role="none">
          <Link
            href={href}
            className="m-2 p-2 flex align-middle justify-center hover:shadow-[0_6px_20px_rgba(140,0,255,55%)] hover:bg-violet-700 rounded-full text-white font-medium transition duration-200 ease-linear"
            onMouseEnter={() => setIsResumeOnHover(true)}
            onMouseLeave={() => setIsResumeOnHover(false)}
            aria-label={t('cv')}
            role="menuitem"
            rel="noopener noreferrer"
          >
            {isResumeOnHover ? (
              <IoDownload size={20} className="mr-1" />
            ) : (
              <IoDownloadOutline size={20} className="mr-1" />
            )}
            CV
          </Link>
        </li>
      </ul>

      {/* Resume Button */}
      <div className="hidden lg:flex col-span-2 gap-4 justify-center">
        {languages.map((language) => (
          <LanguageButton
            key={language.name}
            text={language.name}
            href={language.href}
            aria-label={`${t('language')} ${language.name}`}
          />
        ))}
      </div>
    </nav>
  );
};
