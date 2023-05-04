import Link from "next/link";
import React from "react";

// Assets
import logo from "@assets/logo.png";
import Image from "next/image";

type Props = {};

const Navbar = () => {
  return (
    <header className="flex flex-wrap justify-around items-center bg-gray-50 text-white px-5 py-3 gap-3 sm:py-6 sm:px-10 drop-shadow-md shadow-black">
      <Link
        className="border-b-2 border-transparent hover:border-white ease transition duration-300"
        href="/"
      >
        <Image
          className="min-w-[150px]"
          alt="Risk Thinking Ai logo"
          src={logo}
        />
      </Link>
    </header>
  );
};

export default Navbar;
