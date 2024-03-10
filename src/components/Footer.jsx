import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="p-2 bg-night flex justify-between items-center cor text-sm sm:text-md">
        <span>&copy; {new Date().getFullYear()} Grenish Rai - Made with passion</span>
        <span>mrcoder2033d@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
