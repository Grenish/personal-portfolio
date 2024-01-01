import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenuOpen = () => {
    setOpen((prevState) => !prevState);
  };

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
            <li className="text-white-200 hover:text-gray-400 px-5 cursor-pointer cor text-sm font-semibold uppercase">
              Resume
            </li>
          </ul>
        </span>

        <div className="sm:hidden flex items-center justify-center">
          <button aria-expanded={isOpen} className="">
            <input type="checkbox" id="checkbox" onClick={toggleMenuOpen} />
            <label htmlFor="checkbox" className="toggle">
              <span className="bars" id="bar1"></span>
              <span className="bars" id="bar2"></span>
              <span className="bars" id="bar3"></span>
            </label>
          </button>
          {isOpen && (
            <span className=" bg-[#fe4b8a5e] backdrop-blur-sm rounded-xl absolute left-0 top-14 z-[999] w-full p-2 transition-all duration-300">
              <ul className="flex items-center justify-around">
                <li className="text-white-200 hover:text-gray-400 px-5 cursor-pointer cor text-sm font-semibold uppercase">
                  About
                </li>
                <li className="text-white-200 hover:text-gray-400 px-5 cursor-pointer cor text-sm font-semibold uppercase">
                  Contact
                </li>
                <li className="text-white-200 hover:text-gray-400 px-5 cursor-pointer cor text-sm font-semibold uppercase">
                  Resume
                </li>
              </ul>
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
