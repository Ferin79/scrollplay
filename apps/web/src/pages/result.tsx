import React, { useContext, useEffect, useState } from "react";
import { Context, ContextType } from "../data/context";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(Context) as ContextType;
  const [isSuccessed, setIsSuccessed] = useState(false);

  useEffect(() => {
    if (!location.state || !location.state.data) {
      navigate("/");
    }
    setIsSuccessed(true);
  }, [location.state, navigate]);

  if (!isSuccessed) {
    return (
      <div
        className={`w-full h-[90vh] flex justify-center items-center ${
          isDarkMode ? "bg-gray-900" : "bg-primaryBg"
        }`}
      >
        <div className="w-[80%] lg:w-1/3 h-full flex flex-col justify-center items-center">
          <h1
            className={`text-5xl lg:text-6xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Something went wrong
          </h1>
          <h2 className="text-3xl text-scroll mt-10">Try again later.</h2>
        </div>
      </div>
    );
  }

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
        src={(location.state?.data?.url as string) || ""}
      />

      <a
        href={(location.state?.data?.url as string) || ""}
        download
        className="mt-10 py-3 px-5 bg-play rounded-2xl text-white"
      >
        Click to download
      </a>
    </div>
  );
};

export default Result;
