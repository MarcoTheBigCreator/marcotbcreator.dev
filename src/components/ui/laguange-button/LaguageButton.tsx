'use client';

import { useUIStore } from '@/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  icon?: React.ReactNode;
  text: string;
  href: string;
}

export const LaguageButton = ({ icon, text, href }: Props) => {
  const router = useRouter();

  const onHandleLocale = (href: string) => {
    router.replace(href);
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

export const LaguageButtonMobile = ({ icon, text, href }: Props) => {
  const router = useRouter();

  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';
  }, [isSideMenuOpen]);

  const onHandleLocaleMobile = (href: string) => {
    useUIStore.setState({ isSideMenuOpen: false });
    router.replace(href);
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
