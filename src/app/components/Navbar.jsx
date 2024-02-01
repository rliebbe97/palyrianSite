"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HamburgerMenuIcon from "../assets/icons/HamburgerMenuIcon";
import PalyrianLogo from '@/app/assets/PalyrianLogo.svg'

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/icamoverview" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("open", isOpen);
  };

  return (
    <nav className="border-b-2 border-primary p-4 text-white">
      <div className="flex flex-wrap justify-between items-center">
        <Link href="/" className="">
          <Image 
            src={PalyrianLogo}
            height={28}
            width={28}
          />
        </Link>
        <button
          type="button"
          className="w-10 h-10 md:hidden text-background rounded border-2 border-background p-2"
          onClick={handleToggle}
        >
          <HamburgerMenuIcon />
          <span className="sr-only">Open main menu</span>
        </button>
        <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto `}>
          <ul className="flex flex-col items-center mt-2 md:flex-row md:space-x-8">
            {NavLinks.map((item, index) => {
              return (
                <li key={index} className="text-lg py-1 hover:text-primary">
                  <Link href={item?.link} className="">
                    <span>{item?.name}</span>
                  </Link>
                  {/* <div className="bg-white border-white h-[2px]"/> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}