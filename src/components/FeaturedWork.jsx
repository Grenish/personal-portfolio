import React, { useState } from "react";
import { zane, exsolve } from "../assets/projects";
import { motion } from "framer-motion";

const FeaturedWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
  };

  const featureWork = [
    {
      title: "Luna",
      description:
        "Luna is a chatbot fine-tuned from the PaLM (Pathway Language Model) model. It is still in beta testing, but it can already perform a variety of tasks.",
      image: zane,
      tags: ["React", "TailwindCSS", "ExpressJs", "API", "Vercel"],
    },
    {
      title: "Zane",
      description:
        "Luna is a chatbot fine-tuned from the PaLM (Pathway Language Model) model. It is still in beta testing, but it can already perform a variety of tasks.",
      image: exsolve,
      tags: ["React", "TailwindCSS", "ExpressJs", "API", "Vercel"],
    },
  ];

  return (
    <div className="bg-white-200 w-full h-screen flex items-start z-[40] justify-center relative overflow-hidden">
      <span className="text-night text-[250px] des absolute z-[-1] -bottom-40 -right-10 rotate-180 opacity-40 pointer-events-none">
        D
      </span>
      <div className="sm:w-[80%] w-[90%] mt-20">
        <div className="inline-flex items-end">
          <span className="des sm:text-[42px] text-2xl text-night font-bold pointer-events-none">
            e
          </span>
          <div className="sm:text-[42px] text-2xl tan font-semibold text-dark">
            Featured Work{" "}
          </div>{" "}
          <span className="des sm:text-[42px] text-2xl text-night font-bold">
            r
          </span>
        </div>
        <div className="slideshow flex w-full mt-10">
          {featureWork.map((work, index) => (
            <motion.div
              key={index}
              className={`${
                currentSlide === index ? "flex" : "hidden"
              } sm:flex-row flex-col justify-between items-center`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={work.image}
                alt={work.title}
                className=" sm:w-1/2 w-full object-cover rounded-3xl"
              />

              <div className="flex flex-col sm:w-1/3 w-full sm:mt-0 mt-5">
                <span className="text-3xl text-dark tan font-bold">
                  {work.title}
                </span>
                <span className="text-night cor mt-3">{work.description}</span>
                <span className="text-dark cor text-sm mt-3">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="cor text-sm mr-2 bg-dark text-white-200 px-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="w-full p-2  flex items-center justify-center mt-10">
          <div className="container">
            <input
              className="label-check"
              id="label-check"
              type="checkbox"
              onClick={nextSlide}
            />
            <label htmlFor="label-check" class="hamburger-label">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
              <label></label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
