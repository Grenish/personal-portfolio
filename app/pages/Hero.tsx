"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroProps {}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  const reveal = {
    hidden: { clipPath: "inset(0% 0% 100% 0%)" },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 1,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div ref={ref} className="hero-body min-h-screen flex flex-col justify-center items-center text-center relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="overflow-hidden"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="hero-title text-5xl sm:text-3xl md:text-5xl font-bold pt-5 pb-2 text-balance"
            variants={reveal}
          >
            Hi, I'm <i className="mistrully">Grenish Rai</i>
          </motion.h1>
        </motion.div>

        <motion.div
          className="overflow-hidden mt-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-semibold pt-2 pb-1"
            variants={reveal}
          >
            A <i className="mistrully">Full Stack Web Developer</i> &{" "}
            <i className="mistrully">Designer</i>
          </motion.h2>
        </motion.div>

        <motion.div
          className="overflow-hidden mt-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400"
            variants={reveal}
          >
            Innovating through code, shaping tomorrow's tech
          </motion.p>
        </motion.div>
      </div>

      <div className="text-white absolute bottom-10 animate-bounce transition ease-soft-spring">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          width="32"
          height="32"
          className="rotate-180"
        >
          <path d="M196,88a27.86,27.86,0,0,0-13.35,3.39A28,28,0,0,0,144,74.7V44a28,28,0,0,0-56,0v80l-3.82-6.13A28,28,0,0,0,35.73,146l4.67,8.23C74.81,214.89,89.05,240,136,240a88.1,88.1,0,0,0,88-88V116A28,28,0,0,0,196,88Zm12,64a72.08,72.08,0,0,1-72,72c-37.63,0-47.84-18-81.68-77.68l-4.69-8.27,0-.05A12,12,0,0,1,54,121.61a11.88,11.88,0,0,1,6-1.6,12,12,0,0,1,10.41,6,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,104,152V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V100a12,12,0,0,1,24,0v20a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0Z"></path>
        </svg>
      </div>
    </div>
  )
});

export default Hero;