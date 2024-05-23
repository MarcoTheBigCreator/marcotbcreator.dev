import { Logo } from '@/components';
import { titleFont } from '@/config/fonts';
import { navItems } from '@/locales';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';
import { TfiLinkedin } from 'react-icons/tfi';

export const Footer = () => {
  return (
    <div className="dashes">
      <footer className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-black px-20 py-6 text-white center w-full items-center">
        {/* Name and logo */}
        <section className="hidden lg:inline-grid space-y-2">
          <Link
            href={'/'}
            className={`${titleFont.className} text-2xl mb-2 font-semibold text-white drop-shadow-purple hover:text-violet-600 transition duration-200 ease-linear`}
          >
            MarcoTheBigCreator
          </Link>
          <Link
            href="mailto:marcotbcreator@gmail.com"
            aria-label="Email me at"
            className="text-lg font-light on hover:text-violet-400 hover:underline transition duration-200 ease-linear"
          >
            marcotbcreator@gmail.com
          </Link>
        </section>

        {/* Social media */}
        <aside className="flex justify-center space-x-1">
          <Link
            href={'https://github.com/MarcoTheBigCreator'}
            target="_blank"
            aria-label="GitHub"
            className="p-4"
          >
            <IoLogoGithub
              size={30}
              className="text-white hover:text-purple-600 transition duration-200 ease-linear"
            />
          </Link>
          <Link
            href={'/'}
            aria-label="Logo of MarcoTheBigCreator to go to the home page"
            className="p-3 flex align-middle justify-center bg-white hover:bg-violet-600 rounded-full drop-shadow-text hover:drop-shadow-purple transition duration-200 ease-linear"
          >
            <Logo width={40} height={40} color="black" />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/marcotbcreator/'}
            target="_blank"
            aria-label="LinkedIn"
            className="p-4"
          >
            <TfiLinkedin
              size={25}
              className="text-white hover:text-purple-600 transition duration-200 ease-linear"
            />
          </Link>
        </aside>

        {/* Navigation */}
        <section className="flex justify-center lg:justify-end ">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="m-2 px-5 p-2 flex align-middle justify-center hover:shadow-[0_6px_20px_rgba(140,0,255,55%)] hover:bg-violet-700 rounded-full text-white font-medium transition duration-200 ease-linear"
            >
              {item.name}
            </Link>
          ))}
        </section>
      </footer>
    </div>
  );
};
