import React from "react";

const Card = ({ name, icon, desc }) => {
  return (
    <div>
      <div className="flex relative items-center border-4 sm:h-20 h-24 cursor-pointer overflow-hidden border-vanilla dark:border-saffron rounded-2xl p-3 group">
        <img
          src={icon}
          alt={name}
          className=" transition-all duration-500 ease-in-out transform group-hover:-translate-x-2 group-hover:-translate-y-2"
        />
        <img
          src={icon}
          alt={name}
          className="absolute -right-5 top-2 opacity-20 w-20 -rotate-45 transition-all duration-500 group-hover:scale-110 ease-in-out transform group-hover:opacity-100 "
        />
        <div className="ml-5 transition-all duration-500 delay-100 ease-in-out transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <h2 className="text-platinum dark:text-night">{name}</h2>
          <p className="text-xs text-gray-500 dark:text-night">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
