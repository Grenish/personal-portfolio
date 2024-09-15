"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandLinkedin,
  IconWorldWww,
  IconDownload,
} from "@tabler/icons-react";
import Image from "next/image";

export default function About() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-300" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <IconWorldWww className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "Download",
      icon: <IconDownload className="h-full w-full text-neutral-300" />,
      href: "#",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, scale: 0.5, y: 50, x: "-50%" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: "-50%",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="h-screen relative p-2 flex flex-col md:flex-row bg-black sm-bg-image"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000a8] to-black md:hidden"></div>

      <div className="relative h-full w-full md:w-1/2 p-5 flex flex-col items-center justify-center text-center">
        <h1 className="text-white mistrully text-4xl">Little About Me</h1>
        <p className="text-white mt-5 text-balance">
          I am currently pursuing a BCA degree at Sikkim Manipal Institute of
          Technology. What started as a fun exploration into web technologies
          has now become a true passion for me.
          <br />
        </p>
        <p className="text-white text-balance mt-2">
          Alongside my technical pursuits, I have a creative side—I enjoy
          writing poetry and stories, finding inspiration in both the digital
          and literary worlds.
        </p>
      </div>

      <div className="relative w-full md:w-1/2 p-2 hidden md:block">
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
      </div>

      {/* Floating Dock */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="fixed bottom-10 sm:left-1/2 left-auto transform -translate-x-1/2 sm:right-auto right-5 "
      >
        <FloatingDock items={links} desktopClassName="bg-neutral-900" />
      </motion.div>
    </div>
  );
}
