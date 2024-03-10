import React from "react";
import { UilLocationPoint, UilCodeBranch } from "@iconscout/react-unicons";

const Home = () => {
  const currentWork = {
    title: "jujutsu-kaisen-wiki",
    description:
      "Jujutsu Kaisen Wiki is a fan-made wiki dedicated to celebrating the captivating world of Jujutsu Kaisen.",
    link: "https://github.com/Grenish/jujutsu-kaisen-wiki",
  };

  return (
    <div className=" bg-night relative z-0 overflow-hidden">
      <div className="blob"></div>
      <div className="w-full min-h-screen flex flex-col items-start justify-center  overflow-hidden">
        <div className="w-full px-4  md:px-8 lg:px-16 xl:px-32">
          <div className="sm:w-full md:w-10/12 lg:w-10/12 xl:w-4/5 px-4 mx-auto flex flex-col">
            <span className="cor sm:text-xl text-base">Hi, there! I'm</span>
            <h1 className="tan sm:text-4xl text-xl sm:pt-5 pt-2 bg-gradient-to-r from-[#fe4b8b] via-[#5BC4E6] to-[#FFEEC2] text-transparent bg-clip-text font-bold">
              Grenish Rai
            </h1>
            <span className="cor sm:mt-5 mt-2 sm:text-2xl text-xl text-gray-300">
              a passionate Full Stack Web Developer and creative Designer
              dedicated to simplifying the task and crafting fresh, enjoyable
              experiences for users.
            </span>
            <div className="mt-5 flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex flex-col w-[300px]">
                <span className="tan italic font-semibold flex gap-2 sm:text-md text-sm">
                  currently <UilLocationPoint />
                </span>
                <span className="cor font-semibold text-gray-500 text-md">
                  Student
                </span>
                <span className="cor sm:text-md text-sm">
                  Sikkim Manipal Institute of Technology
                </span>
                <span className="cor sm:text-md text-sm">BCA</span>
              </div>
              <div className="md:w-[300px] flex flex-col mt-4 md:mt-0">
                <span className="tan italic font-semibold">
                  <a
                    href={currentWork.link}
                    className="gap-2 inline-flex sm:text-md text-sm"
                    target="_blank"
                  >
                    working <UilCodeBranch />
                  </a>
                </span>
                <span className="cor font-semibold text-gray-500 sm:text-md text-sm">
                  {currentWork.title}
                </span>
                <span className="cor sm:text-md text-sm">
                  {currentWork.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
