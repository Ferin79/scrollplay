import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./data/context";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
      <ToastContainer />
    </ContextProvider>
  );
};

export default App;
