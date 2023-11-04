import React from "react";
import {
  Navbar,
  About,
  BlogPosts,
  Home,
  Contact,
  Footer,
  Projects,
  Success,
  Error,
} from "./components";
import { Route, Routes, useLocation } from "react-router";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
