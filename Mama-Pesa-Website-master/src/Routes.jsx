import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import BuyAirtime from "pages/BuyAirtime";
import BillPayment from "pages/BillPayment";
import Learnmore from "pages/Learn more/learnmore"
import NotFound from "pages/NotFound";
const Landing = React.lazy(() => import("pages/Landing"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/airtime-purchase" element={<BuyAirtime />} />
          <Route path="/bill-payment" element={<BillPayment />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/learn-more" element={<Learnmore />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
