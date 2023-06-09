import { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Context, ContextType } from "../data/context";
import Logo from "./Logo";

const Navbar = () => {
  const { setIsDarkMode, isDarkMode } = useContext(Context) as ContextType;
  return (
    <header
      className={`w-screen px-4 lg:px-16 h-[10vh] flex items-center justify-between transition-all duration-300 ease-in-out border-b ${
        isDarkMode ? "bg-gray-900" : "bg-primaryBg"
      }`}
    >
      <Link
        to="/"
        className="cursor-pointer p-3 flex justify-center items-center"
      >
        <div className="h-full w-20">
          <Logo />
        </div>
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
