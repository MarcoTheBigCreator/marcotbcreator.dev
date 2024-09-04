'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Logo } from '@/components';
import { titleFont } from '@/config';
import { IoLogoGithub } from 'react-icons/io5';
import { TfiLinkedin } from 'react-icons/tfi';
import { useTranslations } from 'next-intl';

export const Footer = ({ navItems }: navItemsProps) => {
  const t = useTranslations('footerAccessibility');

  const pathname = usePathname();
  const router = useRouter();
  const [logoOnHover, setLogoOnHover] = useState('black');

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
    <div className="dashes">
      <footer className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-black px-20 py-6 text-white center w-full items-center">
        {/* Name and logo */}
        <section className="hidden lg:inline-grid space-y-2">
          <Link
            href={'/'}
            className={`${titleFont.className} text-2xl mb-2 font-semibold text-white drop-shadow-purple hover:text-violet-600 transition duration-200 ease-linear`}
            aria-label={t('goHome')}
          >
            MarcoTheBigCreator
          </Link>
          <Link
            href="mailto:marcotbcreator@gmail.com"
            aria-label={t('sendEmail')}
            className="text-lg font-light hover:text-violet-600 hover:underline transition duration-200 ease-linear"
          >
            marcotbcreator@gmail.com
          </Link>
        </section>

        {/* Social media */}
        <aside
          className="flex justify-center space-x-1"
          aria-label={t('socialMedia')}
        >
          <Link
            href="https://github.com/MarcoTheBigCreator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('gitHub')}
            className="p-4 focus:outline-none focus:ring-2 focus:ring-violet-600 rounded"
          >
            <IoLogoGithub
              size={30}
              className="text-white hover:text-purple-600 transition duration-200 ease-linear"
            />
          </Link>
          <button
            onClick={() => handleNavigation('#header')}
            onMouseEnter={() => setLogoOnHover('white')}
            onMouseLeave={() => setLogoOnHover('black')}
            aria-label={t('goToTop')}
            className="p-3 flex align-middle justify-center bg-white hover:bg-violet-600 rounded-full drop-shadow-text hover:drop-shadow-purple transition duration-200 ease-linear focus:outline-none focus:ring-2 focus:ring-violet-600"
          >
            <Logo width={40} height={40} color={logoOnHover} />
          </button>
          <Link
            href="https://www.linkedin.com/in/marcotbcreator/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('linkedIn')}
            className="p-4 focus:outline-none focus:ring-2 focus:ring-violet-600 rounded"
          >
            <TfiLinkedin
              size={25}
              className="text-white hover:text-purple-600 transition duration-200 ease-linear"
            />
          </Link>
        </aside>

        {/* Navigation */}
        <section
          className="flex justify-center lg:justify-end"
          aria-label={t('navigation')}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="m-2 px-5 p-2 flex align-middle justify-center hover:shadow-[0_6px_20px_rgba(140,0,255,55%)] hover:bg-violet-600 rounded-full text-white font-medium transition duration-200 ease-linear focus:outline-none focus:ring-2 focus:ring-violet-600"
              aria-label={`${t('navigateTo')} ${item.name}`}
            >
              {item.name}
            </button>
          ))}
        </section>
      </footer>
    </div>
  );
};
