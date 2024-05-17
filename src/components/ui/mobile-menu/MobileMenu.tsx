"use client";

import Link from "next/link";
import { useUIStore } from "@/store";
import clsx from "clsx";
import { navItems } from "../ui-data/nav-items";
import { languages } from "../ui-data/languages";
import { LaguageButton } from "@/components";

export const MobileMenu = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  if (isSideMenuOpen) {
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="lg:hidden">
      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-3 right-0 top-20 w-screen h-screen bg-black bg-opacity-95 backdrop-blur z-20 shadow-xl transform transition-all duration-300 overflow-y-auto overflow-x-auto",
          { "translate-x-full": !isSideMenuOpen }
        )}
      >
        {/* Menu */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all"
          >
            <span className="ml-3 text-xl text-twhite">{item.name}</span>
          </Link>
        ))}
        <Link href="https://drive.google.com/uc?export=download&id=1pOki3L2ewRbi2l7fKzHhpJq5h8Or8CZb">
          <button className="flex items-center mt-10 p-2 hover:bg-violet-700 rounded transition-all">
            <span className="ml-3 text-xl text-white">Resume</span>
          </button>
        </Link>
        <div className="w-full h-px bg-gray-200 my-5" />

        {/* Language */}
        <div className="p-4 pl-3 pb-24 flex gap-3">
          {languages.map((lang) => (
            <LaguageButton key={lang.name} text={lang.name} />
          ))}
        </div>
      </nav>
    </div>
  );
};
