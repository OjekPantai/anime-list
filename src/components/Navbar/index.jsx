"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2 text-color-tWhite colorte  bg-color-dark">
        <Link href="/" className="font-bold text-white text-2xl">
          Anime List
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
