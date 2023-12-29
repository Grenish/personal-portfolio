import React from "react";
import { UilLocationPoint, UilCodeBranch } from "@iconscout/react-unicons";

const Bolb = () => {
  return (
    <div className="w-[500px] h-[500px] bg-rose-500 absolute rounded-full top-0 -left-10 blur-[400px]"></div>
  );
};

const Home = () => {
  const currentWork = {
    title: "jujutsu-kaisen-wiki",
    description:
      "Jujutsu Kaisen Wiki is a fan-made wiki dedicated to celebrating the captivating world of Jujutsu Kaisen.",
    link: "https://github.com/Grenish/jujutsu-kaisen-wiki",
  };

  return (
    <>
      {/* <Bolb /> */}
      <div className="w-full min-h-screen flex flex-col items-start justify-center bg-dark overflow-hidden">
        <div className="w-full">
          <div className="w-[70%] p-4 m-auto flex flex-col">
            <span className="cor text-xl">Hello, there! I'm</span>
            <span className="tan text-4xl pt-5 bg-gradient-to-r from-[#CCB3E8] via-[#FEACBE] to-[#C5F2DA] text-transparent bg-clip-text font-bold">
              Grenish Rai
            </span>
            <span className="cor mt-5 text-2xl text-gray-400">
              a passionate Full Stack Web Developer and creative Designer
              dedicated to simplifying the task and crafting fresh, enjoyable
              experiences for users.
            </span>
            <div className="mt-5 flex w-[70%] justify-between gap-2">
              <div className="flex flex-col w-[500px] ">
                <span className="tan italic font-semibold flex gap-2">
                  currently <UilLocationPoint />
                </span>{" "}
                <span className="cor font-semibold text-gray-500 text-md">
                  Student
                </span>
                <span className="cor">
                  Sikkim Manipal Institute of Technology
                </span>
                <span className="cor">BCA</span>
              </div>
              <div className="w-[600px] flex flex-col">
                <span className="tan italic font-semibold ">
                  <a href={currentWork.link} className="gap-2 inline-flex">
                    working <UilCodeBranch />
                  </a>
                </span>{" "}
                <span className="cor font-semibold text-gray-500 text-md">
                  {currentWork.title}
                </span>
                <span className="cor">{currentWork.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
