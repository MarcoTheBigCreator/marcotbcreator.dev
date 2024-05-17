"use client";

import { Logo } from "@/components/logo/Logo";
import Link from "next/link";
import {
  IoCloseOutline,
  IoDownloadOutline,
  IoReorderThreeOutline,
} from "react-icons/io5";
import { LaguageButton } from "../laguange-button/LaguageButton";
import { useUIStore } from "@/store";
import { navItems } from "../ui-data/nav-items";
import { languages } from "../ui-data/languages";

export const Navbar = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  return (
    <nav className="grid grid-cols-1 lg:grid-cols-7 gap-4 backdrop-blur-3xl fixed top-0 left-0 right-0 z-50 bg-black opacity-85 p-2 center w-full items-center">
      {/* Mobile Menu */}
      <div className="lg:hidden justify-start transition-all">
        {isSideMenuOpen ? (
          <button
            id="close-menu"
            aria-label="Close Menu"
            onClick={closeMenu}
            className="p-2 text-white font-light"
          >
            <IoCloseOutline size={40} />
          </button>
        ) : (
          <button
            id="open-menu"
            aria-label="Open Menu"
            onClick={openMenu}
            className="p-2 text-white font-light"
          >
            <IoReorderThreeOutline size={30} />
          </button>
        )}
      </div>

      {/* Brand */}
      <div className="hidden lg:flex col-span-2 justify-center ">
        <Link href="#" className="flex text-lg font-semibold gap-2 text-white">
          <Logo width={30} height={30} color="white" />
          MarcoTheBigCreator
        </Link>
      </div>
      {/* Navigation */}
      <div className="hidden lg:flex col-span-3 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="m-2 px-5 p-2 flex align-middle justify-center hover:shadow-[0_6px_20px_rgba(140,0,255,55%)] hover:bg-violet-700 rounded-full text-white font-light transition duration-200 ease-linear"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="https://drive.google.com/uc?export=download&id=1pOki3L2ewRbi2l7fKzHhpJq5h8Or8CZb"
          className="m-2 p-2 flex align-middle justify-center hover:shadow-[0_6px_20px_rgba(140,0,255,55%)] hover:bg-violet-700 rounded-full text-white font-light transition duration-200 ease-linear"
        >
          <IoDownloadOutline size={20} className="mr-1" />
          Resume
        </Link>
      </div>
      {/* Resume Button */}
      <div className="hidden lg:flex col-span-2 gap-2 justify-center">
        {languages.map((language) => (
          <LaguageButton key={language.name} text={language.name} />
        ))}
      </div>
    </nav>
  );
};
