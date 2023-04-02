import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import { ContextProvider } from "../data/context";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <AnimatePresence>
          <Component {...pageProps} key={router.asPath} />;
        </AnimatePresence>
        <ToastContainer />
      </ContextProvider>
    </>
  );
}

export default MyApp;
