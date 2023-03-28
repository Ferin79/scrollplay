import Link from "next/link";
import React, { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Context, ContextType } from "../data/context";

const Navbar = () => {
  const { setIsDarkMode, isDarkMode } = useContext(Context) as ContextType;
  return (
    <header
      className={`w-screen px-4 lg:px-16 h-[10vh] flex items-center justify-between transition-all duration-300 ease-in-out border-b ${
        isDarkMode && "bg-black"
      }`}
    >
      <Link href="/" className="cursor-pointer p-3">
        <span className="uppercase text-xl lg:text-2xl tracking-wider md:tracking-[10px] font-bold text-scroll">
          scroll
        </span>
        <span className="uppercase text-xl lg:text-2xl tracking-wider md:tracking-[10px] font-bold ml-1 md:ml-3 text-play">
          play
        </span>
      </Link>
      {isDarkMode ? (
        <div
          onClick={() => {
            setIsDarkMode(false);
            localStorage.setItem("darkmode", "false");
          }}
          className="cursor-pointer p-3"
        >
          <BsFillSunFill className="text-yellow-400" size={25} />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsDarkMode(true);
            localStorage.setItem("darkmode", "true");
          }}
          className="cursor-pointer p-3"
        >
          <BsFillMoonFill className="text-yellow-400" size={25} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
