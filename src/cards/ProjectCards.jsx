import React from "react";

const ProjectCards = ({ id, name, image, desc, url }) => {
  return (
    <div>
      <a href={url} key={id}>
        <div className="relative group border-4 cursor-pointer overflow-hidden border-vanilla dark:border-saffron rounded-2xl p-3 h-full dark:text-gray-100 md:h-3/4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg transform transition-all duration-200 ease-linear group-hover:opacity-25 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-transparent bg-opacity-25 flex flex-col items-center justify-center transition-all duration-200 group-hover:bg-transparent">
            <h2 className="sm:text-xl text-lg border-4 bg-[#3335334a] backdrop-blur-sm group-hover:backdrop-blur-none group-hover:bg-transparent border-jasmine dark:bg-[#EFDC9E4a] group-hover:border-transparent dark:text-night group-hover:text-platinum group-hover:dark:text-jet p-2 rounded-xl md:text-3xl text-alabaster font-bold">
              {name}
            </h2>
            <p className="text-xs opacity-0 group-hover:opacity-100 md:text-sm text-platinum dark:text-jet">
              {desc}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCards;
