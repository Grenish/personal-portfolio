import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <header className="px-28 relative">
        <nav className="p-5 flex justify-between items-center">
          <div className="font-sat text-2xl">Grenish Rai</div>

          <div
            className={`bg-white-200 text-dark rounded-full w-[40px] h-[40px] flex justify-center items-center relative`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <CloseIcon className="text-2xl cursor-pointer" />
            ) : (
              <MenuIcon className="text-2xl cursor-pointer" />
            )}

            {isOpen && (
              <div className={`${isOpen ? "w-[140px] h-[140px]" : "w-[40px] h-[40px]"} absolute bg-white-200 top-0 right-0 z-[-1] rounded-full transition ease-in-out duration-200`}>
                Hello World
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
