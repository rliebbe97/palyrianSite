"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./NavlinkData";
import NavLink from "./Navlink";
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2 border-primary py-4 px-11 text-white top-0 sticky z-10 bg-background">
      <div className="flex flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-primary flex flex-row justify-center items-center"
        >
          <Image
            src={`/images/PalyrianLogo.svg`}
            height={28}
            width={28}
            alt="Palyrian logo"
          />
          <span className="invisible sm:visible ml-5 text-2xl font-bold">
            Palyrian
          </span>
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
                <li key={index}>
                  <NavLink
                    name={item?.name}
                    href={item?.link}
                    onClick={() => setIsOpen(false)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
