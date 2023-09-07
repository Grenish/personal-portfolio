import React from "react";
import { SectionWrapper } from "../hoc";
import { grenish2 } from "../assets";
import { Card } from "../card";
import { techStack } from "../constants";


const About = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-[60%] xl:w-[50%] space-y-2">
            <h2 className="text-4xl font-sans font-extraBold text-platinum dark:text-night">
              About me
            </h2>
            <p className="text-gray-400 dark:text-gray-900 text-justify">
              I'm a front-end web developer and UI/UX designer who's passionate
              about tech and open source. I'm currently pursuing BCA at SMIT,
              Majitar.
            </p>
            <p className="text-gray-400 dark:text-gray-800 text-justify">
              In my free time, I like to read, play guitar and piano, and listen
              to music. I'm a big fan of Ed Sheeran and anime, especially Naruto
              and One Piece.
            </p>
          </div>
          <div className="w-full sm:w-[40%] xl:w-[50%] flex justify-center">
            <img
              src={grenish2}
              alt="An image of myself"
              className="profile-image w-[250px] h-[250px] md:w-[250px] md:h-[250px] object-cover border-4 border-jasmine dark:border-dark"
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl font font-extraBold text-platinum dark:text-night">
            Tech I Use
          </h2>
          <div className="flex flex-wrap justify-center mt-4">
            {techStack.map((tech) => (
              <Card key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
