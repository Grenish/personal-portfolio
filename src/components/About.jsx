import React from "react";
import { SectionWrapper } from "../hoc";
import { grenish2 } from "../assets";
import { Card } from "../Cards";
import { techStack } from "../constants";
import { Transition } from "@headlessui/react";

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
              className="profile-image w-[250px] h-[250px] md:w-[250px] md:h-[250px] object-cover border-4 border-saffron dark:border-dark"
            />
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-3xl font font-extraBold text-platinum dark:text-night">
            Tools I Use
          </h2>
          <p className="text-gray-400 dark:text-gray-800 text-justify mt-4">
            This is the technology stack I use the most on my daily work or just
            for fun
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-5">
            {techStack.map((tech, index) => (
              <Transition
                show={true}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                key={index}
              >
                <div className="mx-2">
                  <Card
                    name={tech.name}
                    icon={tech.icon}
                    desc={tech.desc}
                    color={tech.color}
                  />
                </div>
              </Transition>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
