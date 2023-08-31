import React, { useState, useEffect } from "react";
import { grenishLogoBlack, grenishLogoWhite } from "../assets";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const savedTheme = localStorage.getItem('themePreference') || 'light';
  const [darkMode, setDarkMode] = useState(savedTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem('themePreference', darkMode);
  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full p-4 fixed z-[9999]">
        <nav className=" border-[3px] border-vanilla dark:border-dark w-11/12 md:w-3/4 xl:w-7/12 m-auto bg-[#e8eddf26] dark:bg-[#24242326] backdrop-blur-xl p-5 md:p-3 rounded-[20px] flex items-center justify-between">
          <div className="flex items-center justify-center ml-0 md:ml-2">
            <Link to="/">
              {darkMode === "dark" ? (
                <img
                  src={grenishLogoBlack}
                  className="w-[100px] md:w-[150px]"
                />
              ) : (
                <img
                  src={grenishLogoWhite}
                  className="w-[100px] md:w-[150px]"
                />
              )}
            </Link>
          </div>
          <div className="sm:block hidden">
            <ul className="flex space-x-3 mr-2 ">
              <Link to="/about">
                <li className="p-2 bg-[#0d182192] hover:bg-[#0d1821] dark:bg-[#e8eddf71] dark:text-dark  transition rounded-full text-platinum">
                  About
                </li>
              </Link>
              <Link to="/projects">
                <li className="p-2 bg-[#0d182192] hover:bg-[#0d1821] dark:bg-[#e8eddf71] dark:text-dark  transition rounded-full text-platinum">
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li className="p-2 bg-[#0d182192] hover:bg-[#0d1821] dark:bg-[#e8eddf71] dark:text-dark  transition rounded-full text-platinum">
                  Contact
                </li>
              </Link>
              <button>
                <li
                  className="p-2 bg-[#0d182192] hover:bg-[#0d1821] dark:bg-[#e8eddf71] dark:text-dark  transition rounded-full text-platinum"
                  onClick={toggleDarkMode}
                >
                  {darkMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                </li>
              </button>
            </ul>
          </div>
          <div className="sm:hidden block relative">
            <button
              onClick={toggleMenu}
              className="text-platinum dark:text-dark"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="sm:hidden block fixed bg-[#152939a5] dark:bg-[#EFDC9Ea5] backdrop-blur-md top-0 left-0 w-full z-[-999] rounded-b-xl transition duration-100">
            <ul className="flex flex-col mt-20 space-y-2 p-4">
              <Link to="/about">
                <li className="p-3 text-lg dark:text-dark  dark:hover:text-dark transition rounded-full text-platinum ">
                  About
                </li>
              </Link>
              <Link to="/projects">
                <li className="p-3 text-lg dark:text-dark  dark:hover:text-dark transition rounded-full text-platinum ">
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li className="p-3 text-lg dark:text-dark  dark:hover:text-dark transition rounded-full text-platinum ">
                  Contact
                </li>
              </Link>
              <li className="p-3 text-lg dark:text-dark  dark:hover:text-dark transition rounded-full text-platinum ">
                <button onClick={toggleDarkMode}>
                  {darkMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
