import React, { useEffect, useRef, useState } from "react";
import { splat } from "../assets";
import { UilArrowCircleUp, UilArrowCircleDown } from "@iconscout/react-unicons";

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

          {/* <span className="tan">Projects</span> */}
        </div>
        <button
          onClick={toggleShutter}
          className="mt-16 absolute z-[999] bottom-5 flex justify-center items-center w-full"
        >
          <UilArrowCircleUp />
        </button>
      </div>
      {isShutterOpen ? (
        <div className="absolute w-full h-[20px] bg-rose-500 transition-all duration-200 ease-linear opacity-10 bottom-0"></div>
      ) : (
        <div className="absolute w-full h-[50vh] bg-rose-500 transition-all duration-200 ease-linear opacity-10 bottom-0 z-[99]"></div>
      )}
    </div>
  );
};

export default Projects;
