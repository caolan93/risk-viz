import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-wrap justify-around items-center bg-black text-white px-5 py-3 gap-3 sm:py-6 sm:px-1">
      <ul className="flex basis-full flex-col gap-2 md:flex-row justify-evenly">
        <li className="text-center md:text-left">Github</li>
        <li className="text-center md:text-left">Toronto, ON.</li>
        <li className="text-center md:text-left">
          &copy; All Rights Reserved 2023.
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

{
  /* <header className="flex flex-wrap justify-around items-center bg-gray-50 text-white px-5 py-3 gap-3 sm:py-6 sm:px-10 drop-shadow-md shadow-black">
  <Link
    className="border-b-2 border-transparent hover:border-white ease transition duration-300"
    href="/"
  >
    <Image className="min-w-[150px]" alt="Risk Thinking Ai logo" src={logo} />
  </Link>
  <nav className="flex gap-2 items-center sm:gap-4">
    <Link
      className="bg-orange-400 text-white font-bold py-2 px-3 text-sm sm:py-3 sm:px-5 rounded-full whitespace-pre"
      href="/"
    >
      Sign In
    </Link>
    <Link
      className="bg-orange-400 text-white font-bold py-2 px-3 text-sm sm:py-3 sm:px-5 rounded-full whitespace-pre"
      href="/"
    >
      Create Accout
    </Link>
  </nav>
</header>; */
}
