import React from "react";

const Navbar = () => {
  return (
    <header className="w-full p-4 fixed top-0 left-0">
      <nav className="w-[90%] m-auto flex items-center justify-between">
        <span className="text-[32px] w-auto ahs cursor-pointer text-white-200 hover:text-gray-400">
          Gr
        </span>
        <span>
          <ul className="flex items-center">
            <li className="text-white-200 hover:text-gray-400 px-5 cursor-pointer cor text-sm font-semibold uppercase">
              About
            </li>
            <li className="text-white-200 hover:text-gray-400 px-5 cursor-pointer cor text-sm font-semibold uppercase">
              Contact
            </li>
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
