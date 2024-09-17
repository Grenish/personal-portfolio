"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandLinkedin,
  IconWorldWww,
  IconDownload,
  IconBlockquote

} from "@tabler/icons-react";
import LoadingScreen from "./components/LoadingScreen";
import About from "./pages/About";
import Hero from "./pages/Hero";
import TechStack from "./pages/TechStack";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Page() {
  const homeRef = useRef(null);
  const isHomeInView = useInView(homeRef, { amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, scale: 0.5, y: 100, x: "-50%" },
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
      title: "Blogs",
      icon: <IconBlockquote className="h-full w-full text-neutral-300" />,
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

  return (
    <div>
      <Hero ref={homeRef} />
      <About />
      <TechStack />
      <motion.div
        variants={variants}
        initial="hidden"
        animate={!isHomeInView ? "visible" : "hidden"}
        className="fixed bottom-10 sm:left-1/2 left-auto transform -translate-x-1/2 sm:right-auto right-5 z-50"
      >
        <FloatingDock items={links} desktopClassName="bg-neutral-900" />
      </motion.div>
    </div>
  );
}
