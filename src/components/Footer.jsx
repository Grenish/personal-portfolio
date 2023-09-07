import React from "react";
import { grenishLogoWhite, grenishLogoBlack } from "../assets";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-center">
        <div className="flex flex-col items-center justify-center space-y-2 w-11/12 md:w-3/4 xl:w-7/12 border-t border-platinum dark:border-jet p-5">
          <p className="text-center text-platinum dark:text-dark">
            Made with passion &copy; All Rights Reserved
          </p>
          <p className="text-center text-platinum dark:text-dark text-xs">2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
