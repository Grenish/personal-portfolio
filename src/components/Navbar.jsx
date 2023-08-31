import React from "react";
import { grenishLogoBlack, grenishLogoWhite } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="w-full p-4 fixed ">
        <nav className="w-[60%] m-auto bg-[#e8eddf26] backdrop-blur-xl p-3 rounded-full flex items-center justify-between">
          <div className="flex items-center justify-center ml-2">
            <Link to="/">
              <img src={grenishLogoWhite} className="w-[150px]" />
            </Link>
          </div>
          <div className="mr-2">
            <ul className="flex space-x-3">
              <Link to="/about">
                <li className="p-2 bg-[#0d182192] hover:bg-[#0d1821] transition rounded-full text-platinum">
                  About
                </li>
              </Link>
              <Link to="/projects">
                <li className="p-2 bg-[#0d182192] hover:bg-[#0d1821] transition rounded-full text-platinum">
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li className="p-2 bg-[#0d182192] hover:bg-[#0d1821] transition rounded-full text-platinum">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
