import React from "react";
import {
  Navbar,
  About,
  BlogPosts,
  Home,
  Contact,
  Footer,
  Projects,
} from "./components";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
