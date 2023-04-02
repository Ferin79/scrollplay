import React, { useContext, useState } from "react";
import { Context, ContextType } from "../data/context";
import { Error404Text } from "../constant";

const getRandomText = () => {
  return Error404Text[Math.floor(Math.random() * Error404Text.length)];
};

const FourOhFour = () => {
  const { isDarkMode } = useContext(Context) as ContextType;
  const [text] = useState(getRandomText());

  return (
    <div
      className={`h-[90vh] w-screen flex flex-col lg:flex-row justify-center items-center transition-all  duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-900" : "bg-primaryBg"
      }`}
    >
      <div className="w-[80%] lg:w-3/4">
        <h1
          className={`text-4xl lg:text-6xl font-bold mb-10 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          404: Not Found
        </h1>
        <h2 className={`text-2xl lg:text-3xl font-bold text-scroll`}>{text}</h2>
      </div>
    </div>
  );
};

export default FourOhFour;
