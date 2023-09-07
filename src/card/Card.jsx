import React from "react";

const Card = ({ name, icon }) => {
  return (
    <div>
      <div className="flex items-center justify-center border-8 w-[350px] border-platinum dark:border-dark p-2 rounded-full">
        <div className="flex justify-evenly items-center">
          <img src={icon} alt={name} className="w-10" />
          <h2 className="text-platinum dark:text-dark">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
