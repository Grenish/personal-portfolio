"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const headingRef = useRef(null);
  const firstParaRef = useRef(null);
  const secondParaRef = useRef(null);
  const imageRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true });
  const firstParaInView = useInView(firstParaRef, { once: true });
  const secondParaInView = useInView(secondParaRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className="h-screen relative overflow-y-auto p-2 flex flex-col md:flex-row bg-black sm-bg-image">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000a8] to-black md:hidden"></div>

      <div className="relative h-full w-full md:w-1/2 p-5 flex flex-col items-center justify-center text-center">
        <motion.h1
          ref={headingRef}
          className="text-white mistrully text-4xl drop-shadow-md"
          initial={{ scale: 0 }}
          animate={headingInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          Little About Me
        </motion.h1>

        <motion.p
          ref={firstParaRef}
          className="text-white mt-5 text-balance"
          initial={{ x: "-100%", opacity: 0 }}
          animate={firstParaInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I am currently pursuing a BCA degree at Sikkim Manipal Institute of
          Technology. What started as a fun exploration into web technologies
          has now become a true passion for me.
          <br />
        </motion.p>

        <motion.p
          ref={secondParaRef}
          className="text-white text-balance mt-2"
          initial={{ x: "-100%", opacity: 0 }}
          animate={secondParaInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Alongside my technical pursuits, I have a creative side—I enjoy
          writing poetry and stories, finding inspiration in both the digital
          and literary worlds.
        </motion.p>
      </div>

      <motion.div
        ref={imageRef}
        className="relative w-full md:w-1/2 p-2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={imageInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1713429237253-8d786de46f31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={400}
          height={500}
          className="h-full w-full object-cover rounded-xl pointer-events-none"
          alt="Image Source: Unsplash"
        />
        <span className="absolute text-black bottom-5 right-5 ">
          Image Source:{" "}
          <a
            href="https://unsplash.com/photos/a-large-body-of-water-surrounded-by-mountains-lGBBBXtdO1k"
            target="_blank"
            className="underline cursor-pointer"
          >
            Unsplash
          </a>
        </span>
      </motion.div>
    </div>
  );
}
