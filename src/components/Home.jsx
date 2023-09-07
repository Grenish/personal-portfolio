import React from "react";
import { grenish } from "../assets";
import { SectionWrapper } from "../hoc";
import { socialMediaLinks } from "../constants";
import Tooltip from "@mui/material/Tooltip";

const Home = () => {
  return (
    <div className="transition-colors ease-in-out">
      <SectionWrapper>
        <div className="w-full">
          <div>
            <img
              src={grenish}
              alt="An image of myself"
              className="profile-image w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-cover border-4 border-jasmine dark:border-dark"
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
          <div className="mt-5 font-sans">
            <p className="text-base md:text-lg text-platinum dark:text-dark">
              Innovating through code, shaping tomorrow's tech. Currently
              pursuing BCA.
            </p>
          </div>
          <div className="text-saffron font-sans mt-2 flex items-center space-x-3 dark:text-vanilla transition-colors duration-150">
            <p className="text-base md:text-lg text-platinum dark:text-dark">
              Find me here
            </p>
            {socialMediaLinks.map((link) => (
              <Tooltip title={link.name} key={link.name}>
                <a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-11 bg-jet dark:bg-platinum p-2 rounded-full"
                  />
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
