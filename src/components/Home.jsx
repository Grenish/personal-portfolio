import React from "react";
import { grenish } from "../assets";
import { SectionWrapper } from "../hoc";
import { socialMediaLinks } from "../constants";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { projects } from "../constants";

const ProjectCards = ({ id, name, image, desc, url }) => {
  return (
    <div className="mt-6 w-full flex justify-center flex-col items-center">
      <div className="relative group border-4 cursor-pointer overflow-hidden border-vanilla dark:border-saffron rounded-2xl p-3 h-full dark:text-gray-100 md:h-3/4">
        <a href={url} key={id} target="_blank">
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
        </a>
      </div>
    </div>
  );
};

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
          <div className="mt-10 border-4 border-vanilla dark:border-saffron p-3 rounded-3xl">
            <p className="text-platinum font-mono dark:text-jet sm:text-sm text-xs text-justify">
              Give someone a program; you frustrate them for a day; teach them
              how to program, and you frustrate them for a lifetime - David
              Leinweber.
            </p>
          </div>
          <div className="mt-10">
            <span className="flex items-center justify-between">
              <h2 className="sm:text-4xl text-2xl font-sans font-extraBold text-platinum dark:text-night">
                Project Overview
              </h2>
              <Link to="/projects">
                <p className="text-gray-400 dark:text-gray-800 sm:text-sm text-xs text-justify mt-4">
                  {" "}
                  View all{" "}
                </p>
              </Link>
            </span>
            <div>
              {projects
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map((project) => {
                  return (
                    <ProjectCards
                      key={project.id}
                      name={project.name}
                      image={project.image}
                      desc={project.desc}
                      url={project.url}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
