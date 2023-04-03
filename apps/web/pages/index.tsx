import { useFormik } from "formik";
import { useContext } from "react";
import { BiError } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import { Variants, motion } from "framer-motion";
import clsx from "clsx";
import { Context, ContextType } from "../data/context";
import { useRouter } from "next/router";

const formValidation = yup.object({
  url: yup.string().required().url(),
  width: yup.number().required().min(300).max(1920),
  height: yup.number().required().min(500).max(1080),
  duration: yup.number().required().min(3).max(15),
  pageLoadsIn: yup.number().required().min(1).max(10),
});

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeInOut", duration: 1 } },
};

export default function Index() {
  const { isDarkMode } = useContext(Context) as ContextType;
  const router = useRouter();

  const formFieldClassNames = clsx(
    "text-md lg:text-lg capitalize font-normal  tracking-[0.69px] leading-8",
    isDarkMode ? "text-gray-300" : "text-[#121212bf]"
  );

  const formInputClassNames = clsx(
    "focus-visible:outline-none focus:border-scroll",
    isDarkMode
      ? "bg-gray-600 border-0 text-white"
      : "bg-white border text-black"
  );

  const formInputHelperClassNames = clsx(
    "w-10 h-10 flex justify-center items-center rounded-r-lg",
    isDarkMode ? "bg-gray-800 border-l border-white" : "bg-gray-200"
  );

  const formInputHelperTextClassNames = clsx(
    "text-md lg:text-lg",
    isDarkMode ? "text-gray-200" : "text-black border-none"
  );

  const formik = useFormik({
    initialValues: {
      url: "",
      width: 1920,
      height: 1080,
      duration: 5,
      pageLoadsIn: 5,
    },
    isInitialValid: false,
    validationSchema: formValidation,
    onSubmit: (values, action) => {
      action.setSubmitting(true);
      router.push({
        pathname: "/processing",
        query: { ...values },
      });
      action.resetForm();
      action.setSubmitting(false);
    },
  });

  return (
    <div
      className={`h-fit lg:h-[90vh] w-screen flex flex-col lg:flex-row justify-center items-center transition-all  duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-900" : "bg-primaryBg"
      }`}
    >
      <div className="h-auto lg:h-full w-full lg:w-1/2 flex flex-col justify-center mt-10 lg:mt-0 px-5 md:px-16">
        <motion.h1
          className="text-5xl lg:text-7xl font-bold text-scroll"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={listItem}
            className="inline-block lg:flex mt-2"
          >
            Let&apos;s&nbsp;
          </motion.span>
          <motion.span
            variants={listItem}
            className="inline-block lg:flex mt-2"
          >
            take a&nbsp;
          </motion.span>
          <motion.span
            variants={listItem}
            className="inline-block lg:flex mt-2"
          >
            screenshot
          </motion.span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.5, ease: "easeInOut" },
          }}
          className="text-xl md:text-3xl font-normal text-play w-full lg:w-3/4 mt-8 md:mt-16 tracking-[0.69px]"
        >
          Elevate your website presentations with our animated scrolling
          screenshot maker.
        </motion.h2>
      </div>

      <div className="h-auto lg:h-full w-full lg:w-1/2 flex flex-col justify-center px-5 mt-10 lg:mt-0 md:px-16 mb-20">
        <div className="w-full flex flex-col mb-10">
          <span className={formFieldClassNames}>Website:</span>
          <input
            type="url"
            placeholder="https://example.com"
            className={`w-full lg:w-3/4 h-12 pl-5 rounded-lg ${formInputClassNames}`}
            {...formik.getFieldProps("url")}
          />
          {formik.touched.url && formik.errors.url?.length && (
            <p className="mt-1 text-scroll flex items-center">
              <BiError className="mr-1" />
              {formik.errors.url}
            </p>
          )}
        </div>

        <div className="flex justify-between xs:justify-start items-center">
          <span className={formFieldClassNames}>Width:</span>
          <div className="ml-0 xs:ml-3 flex">
            <input
              className={`w-14 md:w-20 h-10 pl-2 rounded-l-lg ${formInputClassNames}`}
              type="number"
              placeholder="1920"
              {...formik.getFieldProps("width")}
            />
            <div className={formInputHelperClassNames}>
              <span className={formInputHelperTextClassNames}>px</span>
            </div>
          </div>
          <span className={`${formFieldClassNames} mx-0 xs:mx-3`}>
            <AiOutlineClose />
          </span>
          <span className={formFieldClassNames}>Height:</span>
          <div className="ml-0 xs:ml-3 flex">
            <input
              className={`w-14 md:w-20 h-10 pl-2 rounded-l-lg ${formInputClassNames}`}
              type="number"
              placeholder="1080"
              {...formik.getFieldProps("height")}
            />
            <div className={formInputHelperClassNames}>
              <span className={formInputHelperTextClassNames}>px</span>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-10">
          {formik.touched.width && formik.errors.width?.length && (
            <p className="mt-1 text-scroll flex items-center">
              <BiError className="mr-1" />
              {formik.errors.width}
            </p>
          )}
          {formik.touched.height && formik.errors.height?.length && (
            <p className="mt-1 text-scroll flex items-center">
              <BiError className="mr-1" />
              {formik.errors.height}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <span className={formFieldClassNames}>Duration:</span>
          <div className="ml-3 flex">
            <input
              className={`w-14 md:w-20 h-10 pl-2 rounded-l-lg ${formInputClassNames}`}
              type="number"
              placeholder="5"
              {...formik.getFieldProps("duration")}
            />
            <div className={formInputHelperClassNames}>
              <span className={formInputHelperTextClassNames}>sec</span>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-10">
          {formik.touched.duration && formik.errors.duration?.length && (
            <p className="mt-1 text-scroll flex items-center">
              <BiError className="mr-1" />
              {formik.errors.duration}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <span className={formFieldClassNames}>Page Loads In:</span>
          <div className="ml-3 flex">
            <input
              className={`w-14 md:w-20 h-10 pl-2 rounded-l-lg ${formInputClassNames}`}
              type="number"
              placeholder="5"
              {...formik.getFieldProps("pageLoadsIn")}
            />
            <div className={formInputHelperClassNames}>
              <span className={formInputHelperTextClassNames}>sec</span>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-10">
          {formik.touched.pageLoadsIn && formik.errors.pageLoadsIn?.length && (
            <p className="mt-1 text-scroll flex items-center">
              <BiError className="mr-1" />
              {formik.errors.pageLoadsIn}
            </p>
          )}
        </div>

        <button
          disabled={!formik.isValid}
          className="flex justify-center items-center w-fit h-12 px-5 disabled:bg-[#D98888] disabled:cursor-not-allowed disabled:border-none border border-scroll rounded-lg transition-all duration-300 ease-in-out hover:bg-scroll group"
          onClick={() => formik.handleSubmit()}
        >
          <span className="text-scroll group-hover:text-white group-disabled:text-white mr-2">
            Generate
          </span>
          <HiArrowRight
            size={25}
            className="text-scroll group-hover:text-white group-disabled:text-white"
          />
        </button>
      </div>
    </div>
  );
}
