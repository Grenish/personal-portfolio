import React from "react";
import {
  Navbar,
  Home,
  Contact,
  Footer,
  Projects,
  Loader,
  FeaturedWork,
} from "./components";
import { Route, Routes, useLocation } from "react-router";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Projects />} />
      </Routes>
      {pathname !== "/work" && <FeaturedWork />}
      <Footer />
    </div>
  );
};

export default App;
