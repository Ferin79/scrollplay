import React, { useContext } from "react";
import { Context, ContextType } from "../data/context";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { isDarkMode } = useContext(Context) as ContextType;

  return (
    <div
      className={`w-full h-[90vh] flex flex-col justify-center items-center ${
        isDarkMode ? "bg-gray-900" : "bg-primaryBg"
      }`}
    >
      <video
        width="720"
        height="720"
        controls
        autoPlay
        src={(location.state.data.url as string) || ""}
      />

      <a
        href={(location.state.data.query.url as string) || ""}
        download
        className="mt-10 py-3 px-5 bg-play rounded-2xl text-white"
      >
        Click to download
      </a>
    </div>
  );
};

export default Result;
