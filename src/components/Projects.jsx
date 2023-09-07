import React from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { ProjectCards } from "../Cards";

const Projects = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="mb-10">
          <h2 className="text-3xl font font-extraBold text-platinum dark:text-night mb-4">
            My Works
          </h2>
          <p className="text-gray-400 dark:text-gray-800 text-justify mt-4">
            Here are some of the projects I have worked on.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center space-y-5">
          {projects.map((project) => {
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
      </SectionWrapper>
    </div>
  );
};

export default Projects;
