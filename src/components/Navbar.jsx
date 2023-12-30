import React, { useState, useEffect } from "react";

const Hamburger = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen((prev) => !prev)} className="">
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </button>
  );
};

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);


  return (
    <header className="w-full p-4 fixed z-50 top-0 left-0">
      <nav className="w-[90%] m-auto flex items-center justify-between relative">
        <span className="text-[32px] w-auto ahs cursor-pointer text-white-200 hover:text-gray-400">
          Gr
        </span>
        <span>
          <ul className="sm:flex hidden items-center">
            <li className="text-white-200 hover:text-gray-400 px-5 cursor-pointer cor text-sm font-semibold uppercase">
              About
            </li>
            <li className="text-white-200 hover:text-gray-400 px-5 cursor-pointer cor text-sm font-semibold uppercase">
              Contact
            </li>
          </ul>
        </span>

        <div className="block sm:hidden">
          <Hamburger />
          {isOpen && (
            <div className="absolute top-0 bg-rose-500">Hello World</div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
