import React from "react";
import {
  Navbar,
  Home,
  Footer,
  Projects,
  FeaturedWork,
} from "./components";
import { Route, Routes, useLocation } from "react-router";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar />
      <Analytics />
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
