import { AnimatePresence } from "framer-motion";
import { Navigate, Routes as RawRoutes, Route } from "react-router-dom";
import Index from "./pages";
import Processing from "./pages/processing";
import Result from "./pages/result";

const Routes = () => {
  return (
    <AnimatePresence>
      <RawRoutes>
        <Route path="/" element={<Index />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Navigate to="/" />} />
      </RawRoutes>
    </AnimatePresence>
  );
};

export default Routes;
