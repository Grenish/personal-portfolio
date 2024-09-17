"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import StackIcon from "tech-stack-icons";

export default function TechStack() {
  const Tech = [
    { name: "TypeScript", Techlogo: "typescript" },
    { name: "JavaScript", Techlogo: "js" },
    { name: "React", Techlogo: "reactjs" },
    { name: "Next.js", Techlogo: "nextjs" },
    { name: "Vite", Techlogo: "vitejs" },
    { name: "Tailwind CSS", Techlogo: "tailwindcss" },
    { name: "Framer Motion", Techlogo: "framer" },
    { name: "GitHub", Techlogo: "github" },
    { name: "Firebase", Techlogo: "firebase" },
    { name: "Appwrite", Techlogo: "appwrite" },
    { name: "Netlify", Techlogo: "netlify2" },
    { name: "Render", Techlogo: "render" },
    { name: "HTML5", Techlogo: "html5" },
    { name: "CSS3", Techlogo: "css3" },
    { name: "Figma", Techlogo: "figma" },
    { name: "Node.js", Techlogo: "nodejs" },
    { name: "Auth0", Techlogo: "auth0" },
    { name: "VS Code", Techlogo: "vscode" },
  ];

  const duplicatedTech = [...Tech, ...Tech]; // Duplicate the array

  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animation = useAnimation();

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth / 2;

      animation.start({
        x: -marqueeWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [animation]);

  return (
    <div className="h-screen bg-black p-5 overflow-hidden edges">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-white mistrully text-3xl mb-8">Tech Stack I Use</h1>
        <p className="text-neutral-200 w-full sm:w-1/2 text-balance text-center">
          These are the technologies I use to carefully craft my ideas into
          reality. My approach is rooted in <i className="mistrully text-2xl">precision</i> and <i className="mistrully text-2xl">creativity</i>,
          transforming concepts into functional and engaging digital experiences
        </p>

        <div className="w-full mt-10 ">
          <motion.div
            className="flex items-center gap-8"
            ref={marqueeRef}
            animate={animation}
          >
            {duplicatedTech.map((tech, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-4 rounded-xl group flex flex-col items-center min-w-[120px]"
              >
                <div className="group relative">
                  <StackIcon
                    name={tech.Techlogo}
                    className="group-hover:-translate-y-5 transition-all ease-soft-spring grayscale-[100%] group-hover:grayscale-0"
                  />
                  <span className="text-neutral-300 text-xs absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:-translate-y-2 delay-100 transition-all ease-soft-spring">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* 
    TypeScript
    JavaScript
    React
    Next.js
    Tailwind CSS
    Framer Motion
  AceternityUI
  NextUI
    GitHub
    Firebase
    Appwrite
  Vercel
    Netlify
    Render
    HTML
    CSS
    Figma
  Express
    Node.js
  React Native
    Auth0
  Clerk
*/
