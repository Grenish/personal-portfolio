import React from "react";
import {
  Navbar,
  About,
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
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<FeaturedWork />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Home/>
      <FeaturedWork/>
      <Footer />
    </div>
  );
};

export default App;
