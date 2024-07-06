'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUIStore } from '@/store';

interface Props {
  icon?: React.ReactNode;
  text: string;
  href: string;
}

const updateLocaleUrl = (currentPath: string, href: string) => {
  const newPath =
    currentPath.startsWith('/en') || currentPath.startsWith('/es')
      ? currentPath.substring(3)
      : currentPath;

  const hash = typeof window !== 'undefined' ? window.location.hash : '';

  return `${href}${newPath}${hash}`;
};

export const LanguageButton = ({ icon, text, href }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const onHandleLocale = (href: string) => {
    const newUrl = updateLocaleUrl(pathname, href);
    router.replace(newUrl);
    router.refresh();
  };

  return (
    <button
      onClick={() => onHandleLocale(href)}
      className="pt-3 h-12 w-12 flex align-middle justify-center shadow-[0_5px_15px_1px_rgb(140,0,255,55%)] hover:shadow-[0_6px_20px_rgba(140,0,255,30%)] hover:bg-violet-900 bg-violet-700 rounded-full text-white font-semibold lg:font-medium transition duration-200 ease-linear"
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
};

export const LanguageButtonMobile = ({ icon, text, href }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';
  }, [isSideMenuOpen]);

  const onHandleLocaleMobile = (href: string) => {
    const newUrl = updateLocaleUrl(pathname, href);
    useUIStore.setState({ isSideMenuOpen: false });
    router.replace(newUrl);
  };

  return (
    <button
      onClick={() => onHandleLocaleMobile(href)}
      className="pt-3 h-12 w-12 flex align-middle justify-center shadow-[0_5px_15px_1px_rgb(140,0,255,55%)] hover:shadow-[0_6px_20px_rgba(140,0,255,30%)] hover:bg-violet-900 bg-violet-700 rounded-full text-white font-semibold lg:font-medium transition duration-200 ease-linear"
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
};
