import React from "react";
import {
  Navbar,
  About,
  Home,
  Contact,
  Footer,
  Projects,
  Loader,
  FeaturedWork
} from "./components";
import { Route, Routes, useLocation } from "react-router";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar />
      <Home />
      <FeaturedWork />
    </div>
  );
};

export default App;
