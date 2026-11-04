'use client';

import { useTranslations } from 'next-intl';
import { useUIStore } from '@/store';

interface Props {
  icon?: React.ReactNode;
  text: string;
  href: string;
  tabIndex?: number;
}

const navigateToLocale = (href: string) => {
  if (href !== '/en' && href !== '/es') return;
  const url = new URL(window.location.href);
  url.pathname = url.pathname.replace(/^\/(en|es)(?=\/|$)/, href);
  window.location.assign(url.pathname + url.search + url.hash);
};

export const LanguageButton = ({ icon, text, href, tabIndex }: Props) => {
  const t = useTranslations('languageButtonAccessibility');

  return (
    <button
      type="button"
      onClick={() => navigateToLocale(href)}
      tabIndex={tabIndex}
      className="pt-3 h-12 w-12 flex align-middle justify-center shadow-[0_5px_15px_1px_rgb(140,0,255,55%)] hover:shadow-[0_6px_20px_rgba(140,0,255,30%)] hover:bg-violet-900 bg-violet-700 rounded-full text-white font-semibold lg:font-medium transition duration-200 ease-linear"
      aria-label={`${t('changeTo')} ${text}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
};

export const LanguageButtonMobile = ({ icon, text, href, tabIndex }: Props) => {
  const t = useTranslations('languageButtonAccessibility');

  const onHandleLocale = () => {
    useUIStore.setState({ isSideMenuOpen: false });
    navigateToLocale(href);
  };

  return (
    <button
      type="button"
      onClick={onHandleLocale}
      tabIndex={tabIndex}
      className="pt-3 h-12 w-12 flex align-middle justify-center shadow-[0_5px_15px_1px_rgb(140,0,255,55%)] hover:shadow-[0_6px_20px_rgba(140,0,255,30%)] hover:bg-violet-900 bg-violet-700 rounded-full text-white font-semibold lg:font-medium transition duration-200 ease-linear"
      aria-label={`${t('changeTo')} ${text}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
};
