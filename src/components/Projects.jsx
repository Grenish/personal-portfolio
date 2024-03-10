import React, { useEffect, useRef, useState } from "react";
import { UilArrowCircleUp, UilArrowCircleDown } from "@iconscout/react-unicons";
import {
  luna,
  zane,
  codersclub,
  webchitchat,
  dashboard,
  imageflex,
} from "../assets/projects";
import { Carousel } from "@material-tailwind/react";

const Projects = () => {
  const divRef = useRef(null);
  const [isShutterOpen, setShutterOpen] = useState(false);

  useEffect(() => {
    let timeoutId;

    const followCursor = (e) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const div = divRef.current;
        if (div) {
          const mouseX = e.pageX;
          const mouseY = e.pageY;
          div.style.left = mouseX - div.offsetWidth / 2 + "px";
          div.style.top = mouseY - div.offsetHeight / 2 + "px";
        }
      }, 10);
    };

    document.addEventListener("mousemove", followCursor);

    return () => {
      document.removeEventListener("mousemove", followCursor);
    };
  }, []);

  const toggleShutter = () => {
    setShutterOpen((prevState) => !prevState);
  };

  const projects = [
    {
      name: "Zane",
      image: zane,
      description:
        "ZANE is a mockup chatbot.",
      stack: "React // TailwindCSS",
    },
    {
      name: "Luna",
      image: luna,
      description:
        "Luna is a chatbot fine-tuned from the PaLM (Pathway Language Model) model. It is still in beta testing, but it can already perform a variety of tasks.",
      stack: "React // TailwindCSS // Express.js // API // Nodejs",
    },
    {
      name: "Dashboard",
      image: dashboard,
      description:
        "This project is a mockup project of company or personal dashboard.",
      stack: "React // TailwindCSS",
    },
    {
      name: "ChitChat",
      image: webchitchat,
      description:
        "ChitChat is an SPA (Single Page Application) that allows users to chat with each other in real-time.",
      stack: "React // TailwindCSS // SocketIo // Nodejs // Express",
    },
    {
      name: "ImageFlex",
      image: imageflex,
      description:
        "ImageFlex is a website to download the best quality images online.",
      stack: "HTML // CSS // JavaScript // API",
    },
    {
      name: "CodersClub",
      image: codersclub,
      description:
        "This is an exclusive website for the coding club of SMIT, Sikkim Manipal Institute of Technology",
      stack: "React // TailwindCSS // Nodejs",
    },
  ];

  return (
    <div className="w-full bg-night relative">
      <div
        ref={divRef}
        className="absolute z-1 w-[150px] h-[150px] bg-gradient-to-r from-[#ffeec2] scale-100 to-indigo-700 transition-all blur-3xl rounded-full"
      ></div>

      <div className="h-screen">
        <div className="h-full flex flex-col items-center justify-center ">
          <div className="tan sm:text-8xl text-4xl relative group">
            <span className="absolute -left-1 -top-1 text-night blur-[2.5px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-0ut sm:ml-6 ml-0 pointer-events-none">
              <span className="des">s</span>
              Projects
              <span className="des">D</span>
            </span>
            <span className="relative sm:ml-6 ml-0 pointer-events-none">
              <span className="des">s</span>
              Projects
              <span className="des">D</span>
            </span>
          </div>
        </div>
        <button
          onClick={toggleShutter}
          className="mt-16 absolute z-[999] bottom-5 flex justify-center items-center w-full"
        >
          {isShutterOpen ? <UilArrowCircleDown /> : <UilArrowCircleUp />}
        </button>
      </div>
      {isShutterOpen ? (
        <div className="absolute w-full sm:h-[50vh] h-[70vh] px-2 transition-all duration-200 ease-linear bottom-0 z-[99]">
          <Carousel className="overflow-hidden">
            {projects.map((project, index) => (
              <div className="w-full h-full bg-[#fffdf734] rounded-t-xl flex flex-row justify-center items-center backdrop-blur-sm text-dark overflow-hidden">
                <div
                  key={index}
                  className="sm:w-[80%] overflow-hidden w-full sm:h-auto h-full p-2 flex sm:flex-row flex-col opacity-100 transition-opacity delay-300 ease-in-out"
                >
                  <div className="sm:w-[500px] w-full sm:h-[250px] h-[190px] overflow-hidden rounded-xl ">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:ml-10 ml-0 sm:mt-0 mt-5 flex flex-col sm:w-1/2 w-full text-white-100">
                    <span className="tan sm:text-5xl text-xl">
                      {project.name}
                    </span>
                    <span className="mt-5 cor">{project.description}</span>
                    <span className="mt-5 text-sm cor">{project.stack}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="absolute w-full h-[20px] px-2 transition-all duration-200 ease-linear bottom-0">
          <div className="w-full h-full bg-[#fffdf734] rounded-t-xl flex justify-center items-center text-dark overflow-hidden">
            <div className="sm:w-[80%] w-full sm:h-auto h-full p-2 flex sm:flex-row flex-col opacity-0 transition-opacity duration-150 ease-in-out">
              <div className="sm:w-[500px] w-full sm:h-[250px] h-[190px] overflow-hidden rounded-xl ">
                <img src={zane} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="sm:ml-10 ml-0 sm:mt-0 mt-5 flex flex-col sm:w-1/2 w-full text-white-100">
                <span className="tan sm:text-5xl text-xl">ZANE</span>
                <span className="mt-5 cor">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  aspernatur ipsa deserunt. Numquam expedita suscipit repellat
                  cum est natus nostrum quos ullam magni?
                </span>
                <span className="mt-5 text-sm cor">React // TailwindCSS</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
