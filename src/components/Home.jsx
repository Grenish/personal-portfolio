import React, { useState } from "react";
import { grenish } from "../assets";
import { SectionWrapper } from "../hoc";
import FolderIcon from "@mui/icons-material/Folder";
import CloseIcon from "@mui/icons-material/Close";
import { socialMediaLinks } from "../constants";

const Home = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const toggleFolder = () => {
    setIsFolderOpen(!isFolderOpen);
  };

  return (
    <div className="transition-colors ease-in-out">
      <SectionWrapper>
        <div className="w-full">
          <div>
            <img
              src={grenish}
              alt=""
              className="profile-image w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full object-cover border-4 border-jasmine dark:border-dark"
            />
          </div>
          <div className="mt-4 space-y-2 font-sans">
            <h1 className="text-4xl md:text-5xl font-extrabold text-platinum dark:text-dark">
              Hi there, I'm{" "}
              <span className="text-saffron underline">Grenish Rai</span> 👋
            </h1>
            <p className="text-base md:text-lg text-alabaster dark:text-dark opacity-40">
              Web Developer and UI/UX Designer
            </p>
          </div>
          <div className="mt-5">
            <p className="text-base md:text-lg text-platinum dark:text-dark">
              Innovating through code, shaping tomorrow's tech. Currently
              pursuing BCA.
            </p>
          </div>
          <div className="text-saffron mt-2 dark:text-vanilla transition-colors duration-150">
            <p className="text-base md:text-lg text-platinum dark:text-dark">
              Find me here
            </p>
            <div
              className={`${
                isFolderOpen ? " w-72 md:w-96" : "w-10"
              } space-x-3 hidden sm:flex items-center rounded-full  transition-all ease-in-out`}
            >
              <button
                className="bg-jet dark:bg-dark p-1.5 md:p-2 rounded-full"
                onClick={toggleFolder}
              >
                <FolderIcon />
              </button>
              {isFolderOpen && (
                <div
                  className={`${
                    isFolderOpen ? "space-x-3" : "space-x-[-43.5px]"
                  } hidden sm:flex  transition-all ease-in-out duration-700 delay-700`}
                >
                  {socialMediaLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="w-11 bg-jet dark:bg-dark p-2 rounded-full"
                      />
                    </a>
                  ))}
                  <button
                    className="bg-jet dark:bg-dark p-2 rounded-full"
                    onClick={toggleFolder}
                  >
                    <CloseIcon />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
