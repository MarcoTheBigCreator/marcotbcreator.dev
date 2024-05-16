"use client";

import Link from "next/link";
import { useUIStore } from "@/store";
import clsx from "clsx";
import { navItems } from "../ui-data/nav-items";
import { languages } from "../ui-data/languages";
import { LaguageButton } from "@/components";

export const MobileMenu = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  return (
    <div>
      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed mt-20 p-3 right-0 top-0 w-screen h-screen bg-black bg-opacity-80 backdrop-blur z-20 shadow-xl transform transition-all duration-300",
          { "translate-x-full": !isSideMenuOpen }
        )}
      >
        {/* Menu */}
        {navItems.map((item) => (
          <>
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all"
            >
              <span className="ml-3 text-xl">{item.name}</span>
            </Link>
          </>
        ))}
        <Link href="/resumes/cv-harvard-en.pdf" target="_blank" download>
          <button className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all">
            <span className="ml-3 text-xl">Resume</span>
          </button>
        </Link>
        <div className="w-full h-px bg-gray-200 my-5" />

        {/* Language */}
        <div className="p-4 pl-3 flex gap-3">
          {languages.map((lang) => (
            <LaguageButton key={lang.name} text={lang.name} />
          ))}
        </div>
      </nav>
    </div>
  );
};
