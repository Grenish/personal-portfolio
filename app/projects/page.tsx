"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconWorldWww,
  IconDownload,
  IconBlockquote,
  IconMailSpark,
} from "@tabler/icons-react";
import ProjectSection from "./components/ProjectCard";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Projects() {
  const homeRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const isHomeInView = useInView(homeRef, { amount: 0.5 });
  const isFooterInView = useInView(footerRef, { amount: 0.1 });

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
      href: "/projects",
    },
    {
      title: "Blogs",
      icon: <IconBlockquote className="h-full w-full text-neutral-300" />,
      href: "https://dev.to/grenishrai",
    },
    {
      title: "Contact",
      icon: <IconMailSpark className="h-full w-full text-neutral-300" />,
      href: "mailto:mrcoder2033d@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/in/grenish-rai/",
    },

    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "https://github.com/Grenish",
    },
    {
      title: "Download",
      icon: <IconDownload className="h-full w-full text-neutral-300" />,
      href: "/grenishrai.pdf",
      Download: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <ProjectSection />
      <motion.div
        variants={variants}
        initial="hidden"
        animate={!isHomeInView && !isFooterInView ? "visible" : "hidden"}
        className="fixed bottom-10 sm:left-1/2 left-auto transform -translate-x-1/2 sm:right-auto right-5 z-50"
      >
        <FloatingDock items={links} desktopClassName="bg-neutral-900" />
      </motion.div>
    </div>
  );
}