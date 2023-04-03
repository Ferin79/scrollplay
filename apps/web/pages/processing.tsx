import axios from "axios";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Logo from "../components/Logo";
import { LoadingTextArr, SERVER_URL } from "../constant";
import { Context, ContextType } from "../data/context";

const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
};

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const getRandomText = () => {
  return LoadingTextArr[Math.floor(Math.random() * LoadingTextArr.length)];
};

const Processing = () => {
  const router = useRouter();
  const [text, setText] = useState(LoadingTextArr[0]);
  const { isDarkMode } = useContext(Context) as ContextType;

  useEffect(() => {
    if (router.query.url === undefined) {
      router.replace("/");
    }
    axios
      .post(`${SERVER_URL}/generate-screenshot`, { ...router.query })
      .then((response) => {
        toast("Process completed");
        router.push({
          pathname: "/result",
          query: response.data,
        });
      })
      .catch((error) => {
        toast.error(error.message);
        setTimeout(() => {
          router.replace("/");
        }, 3000);
      });
  }, [router]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const interval = setTimeout(() => {
      setText(getRandomText());
    }, 10000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div
      className={`w-full h-[90vh] flex justify-center items-center ${
        isDarkMode ? "bg-gray-900" : "bg-primaryBg"
      }`}
    >
      <div className="w-[80%] lg:w-1/3 h-full flex flex-col justify-evenly items-center">
        <motion.h1
          className={`text-5xl lg:text-6xl font-bold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
          variants={container}
          initial="hidden"
          animate="show"
        >
          Loading
          <motion.span variants={listItem}>.</motion.span>
          <motion.span variants={listItem}>.</motion.span>
          <motion.span variants={listItem}>.</motion.span>
        </motion.h1>
        <h2
          className={`text-lg font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          It usually takes a minute.
        </h2>
        <Logo />
        <motion.h2
          className="text-3xl text-scroll mt-10"
          key={text}
          variants={variants}
          animate={"show"}
          initial="hide"
        >
          {text}
        </motion.h2>
      </div>
    </div>
  );
};

export default Processing;
