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

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-dark dark:bg-alabaster transition-colors">
      {pathname !== "/error" && pathname !== "/success" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {pathname === "/error" && <Route path="/error" element={<Error />} />}
        {pathname === "/success" && (
          <Route path="/success" element={<Success />} />
        )}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
