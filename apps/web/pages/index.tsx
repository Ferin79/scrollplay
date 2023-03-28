import { useContext } from "react";
import { HiArrowRight } from "react-icons/hi";
import Logo from "../components/Logo";
import { Context, ContextType } from "../data/context";

export default function Index() {
  const { isDarkMode } = useContext(Context) as ContextType;
  return (
    <div
      className={`h-[90vh] w-screen flex flex-col lg:flex-row justify-center items-center transition-all duration-300 ease-in-out ${
        isDarkMode && "bg-black"
      }`}
    >
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center pl-8 lg:pl-16 order-2 lg:order-1">
        <h1 className="text-6xl md:text-8xl font-bold text-scroll">
          <span className="inline-block lg:flex mt-2">Let&apos;s</span>
          <span className="inline-block lg:flex ml-3 lg:ml-0 mt-2">take a</span>
          <span className="flex mt-2">screenshot</span>
        </h1>
        <div className="w-full flex mt-10 h-12">
          <input
            type="url"
            placeholder="https://example.com"
            className={`w-3/4 h-full pl-5 rounded-l-2xl focus-visible:outline-none focus:border-scroll  ${
              isDarkMode ? "bg-gray-700 border-0" : "bg-white border"
            }`}
          />
          <button className="flex justify-center items-center h-full px-5 bg-scroll rounded-r-2xl transition-all duration-300 ease-in-out hover:bg-play">
            <HiArrowRight size={25} color="white" />
          </button>
        </div>
      </div>
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 lg:order-2">
        <div className="flex justify-center items-center h-4/5 w-2/3 md:w-1/2 lg:w-3/4">
          <Logo />
        </div>
      </div>
    </div>
  );
}
