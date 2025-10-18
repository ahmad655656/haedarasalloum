import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-3 text-white bg-gradient-to-b from-gray-900 via-gray-950/50 to-black/50 xl:py-4">
      <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <Link href="/">
          <h2 className="md:text-4xl text-xl font-semibold md:-translate-x-4">
            Haedara Salloum <span className="text-accent-Default ">.</span>
          </h2>
        </Link>
        {/* desktop nav */}
        <div className="items-center hidden gap-8 xl:flex">
        <Nav />
        <Link href="/contact">
        <Button>Hire me</Button>
        </Link>
        </div>
    {/* mobile nav */}
    <div className="xl:hidden"><MobileNav /></div>
      </div>
    </header>
  );
};

export default Header;
