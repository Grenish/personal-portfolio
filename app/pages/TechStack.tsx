"use client";

import React, { useState, ReactNode } from "react";
import {
  X,
  Minus,
  Component,
  Server,
  Database,
  Cloud,
  Hammer,
  Blocks,
} from "lucide-react";
import Image from "next/image";
import StackIcon from "tech-stack-icons";
{
  /* <StackIcon name="reactjs" /> */
}

type TechLogo = string | ReactNode;

interface Technology {
  name: string;
  logo: TechLogo;
  desc: string;
}

interface TechCategory {
  color: string;
  icon: ReactNode;
  technologies: Technology[];
}

const techStacks: Record<string, TechCategory> = {
  Frontend: {
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    icon: <Component className="w-8 h-8 text-white" />,
    technologies: [
      { name: "React.js", logo: "reactjs", desc: "UI Library" },
      { name: "Next.js", logo: "nextjs2", desc: "React Framework" },
      { name: "TypeScript", logo: "typescript", desc: "Type-safe JavaScript" },
      { name: "JavaScript", logo: "js", desc: "Programming Language" },
      { name: "Tailwind CSS", logo: "tailwindcss", desc: "Utility-first CSS" },
      { name: "three.js", logo: "threejs", desc: "3D Library" },
    ],
  },
  Backend: {
    color: "bg-gradient-to-br from-green-600 to-green-800",
    icon: <Server className="w-8 h-8 text-white" />,
    technologies: [
      { name: "Node.js", logo: "nodejs", desc: "JavaScript Runtime" },
      {
        name: "Express.js",
        logo: (
          <Image src="/express.svg" alt="Express logo" width={48} height={48} />
        ),
        desc: "Web Framework",
      },
    ],
  },
  Database: {
    color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    icon: <Database className="w-8 h-8 text-white" />,
    technologies: [
      { name: "MongoDB", logo: "mongodb", desc: "NoSQL Database" },
      {
        name: "AppWrite",
        logo: "appwrite",
        desc: "Backend as a Service",
      },
      { name: "Firebase", logo: "firebase", desc: "Cloud Database" },
    ],
  },
  Hosting: {
    color: "bg-gradient-to-br from-red-600 to-red-800",
    icon: <Cloud className="w-8 h-8 text-white" />,
    technologies: [
      {
        name: "Vercel",
        logo: (
          <Image src="/vercel.svg" alt="Vercel logo" width={48} height={48} />
        ),
        desc: "Serverless Hosting",
      },
      { name: "Netlify", logo: "netlify", desc: "Static Hosting" },
      { name: "Render", logo: "render", desc: "Cloud Hosting" },
    ],
  },
  Misc: {
    color: "bg-gradient-to-br from-purple-600 to-purple-800",
    icon: <Hammer className="w-8 h-8 text-white" />,
    technologies: [
      { name: "Git", logo: "git", desc: "Version Control" },
      { name: "VS Code", logo: "vscode", desc: "Code Editor" },
      {
        name: "Jupyter",
        logo: (
          <Image src="/jupyter.svg" alt="Jupyter logo" width={48} height={48} />
        ),
        desc: "Notebook",
      },
    ],
  },
  Hacking: {
    color: "bg-gradient-to-br from-pink-600 to-pink-800",
    icon: <Blocks className="w-8 h-8 text-white" />,
    technologies: [
      { name: "Docker", logo: "docker", desc: "Containerization" },
      { name: "AWS", logo: "aws", desc: "Cloud Services" },
    ],
  },
};

export default function TechStack() {
  const [activeWindows, setActiveWindows] = useState<string[]>([]);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const openWindow = (name: string) => {
    if (!activeWindows.includes(name)) {
      setActiveWindows([...activeWindows, name]);
    }
    setActiveWindow(name);
    setMinimizedWindows(minimizedWindows.filter((w) => w !== name));
  };

  const closeWindow = (name: string) => {
    setActiveWindows(activeWindows.filter((w) => w !== name));
    setMinimizedWindows(minimizedWindows.filter((w) => w !== name));
    if (activeWindow === name) {
      setActiveWindow(null);
    }
  };

  const minimizeWindow = (name: string) => {
    setMinimizedWindows([...minimizedWindows, name]);
    if (activeWindow === name) {
      setActiveWindow(null);
    }
  };

  const renderLogo = (logo: TechLogo) => {
    if (typeof logo === "string") {
      return <StackIcon name={logo} className="w-12 h-12" />;
    } else {
      return logo;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)]">
        {/* Left side text */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 mistrully">
              Tech Stack I Use
            </h1>
            <p className="text-sm text-gray-300">
              These are the technologies I use to carefully craft my ideas into
              reality. My approach is rooted in precision and creativity,
              transforming concepts into functional and engaging digital
              experiences.
            </p>
          </div>
        </div>

        {/* Right side folders */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10">
            {Object.entries(techStacks).map(([name, { color, icon }]) => (
              <div
                key={name}
                className="text-center cursor-pointer group"
                onClick={() => openWindow(name)}
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${color} shadow-lg 
              flex items-center justify-center transform transition-all duration-300 
              group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl
              backdrop-blur-lg bg-opacity-90`}
                >
                  {icon}
                </div>
                <p
                  className="mt-3 text-xs md:text-sm font-medium bg-gray-800 bg-opacity-50 
            px-3 py-1 rounded-full transform transition-all duration-300 
            group-hover:scale-105"
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Windows */}
      {activeWindows.map((name) => (
        <div
          key={name}
          className={`fixed bg-slate-950 rounded-xl shadow-2xl overflow-hidden
            transition-all duration-300 ${
              minimizedWindows.includes(name)
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            }`}
          style={{
            width: "calc(100% - 2rem)",
            maxWidth: "500px",
            height: "400px",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) 
              translate(${activeWindows.indexOf(name) * 20}px, 
                       ${activeWindows.indexOf(name) * 20}px)`,
            zIndex: activeWindow === name ? 50 : 10,
            display: minimizedWindows.includes(name) ? "none" : "block",
          }}
          onClick={() => setActiveWindow(name)}
        >
          {/* Window Title Bar */}
          <div
            className={`${techStacks[name].color} p-3 flex justify-between items-center`}
          >
            <div className="flex items-center space-x-3">
              {techStacks[name].icon}
              <span className="font-semibold text-white text-lg">{name}</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeWindow(name);
                }}
                className="p-1.5 hover:bg-white hover:bg-opacity-20 rounded-full"
                aria-label="Minimize window"
              >
                <Minus className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(name);
                }}
                className="p-1.5 hover:bg-white hover:bg-opacity-20 rounded-full"
                aria-label="Close window"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-6 h-full overflow-y-auto bg-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStacks[name].technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-800 rounded-xl hover:shadow-md 
                  transition-all duration-200 transform hover:scale-105
                  hover:bg-gray-600 border border-gray-600"
                >
                  <div className="flex items-center space-x-3">
                    {renderLogo(tech.logo)}
                    <div>
                      <h3 className="font-medium text-white">{tech.name}</h3>
                      <p className="text-xs text-gray-300">{tech.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
