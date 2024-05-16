"use client";

import { Logo } from "@/components/logo/Logo";
import Link from "next/link";
import { Button } from "../button/Button";
import { IoDownloadOutline } from "react-icons/io5";

const navItems = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Portfolio",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export const Navbar = () => {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-7 gap-4 backdrop-blur-2xl bg-transparent p-2 center w-full items-center">
      {/* Mobile Menu */}

      {/* Brand */}
      <div className="hidden md:flex col-span-2  justify-center ">
        <Link href="#" className="flex text-lg font-semibold gap-2">
          <Logo width={30} height={30} color="white" />
          MarcoTheBigCreator
        </Link>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex col-span-3 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="m-2 p-2 rounded-md transition-all hover:bg-cyan-500"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Resume Button */}
      <div className="hidden md:flex col-span-2 justify-center">
        <Link href="#">
          <Button icon={<IoDownloadOutline size={20} />} text="Resume" />
        </Link>
      </div>
    </nav>
  );
};
