"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Github, ExternalLink, Code2, Package, Folder } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  languages: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface NpmPackage {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  downloads: number;
  version: string;
  npmUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aayu",
    description: "AI Chatbot built on Gemini API",
    languages: ["API", "React.js", "NodeJs", "Express.js"],
    image: "/aayu.png",
    githubUrl: "https://github.com/Grenish/aayu",
    liveUrl: "https://aayu-red.vercel.app/",
  },
  {
    id: 2,
    title: "ChitChat",
    description: "Your go-to messaging app",
    languages: ["JavaScript", "React.js", "Node.js", "Express.js", "Socket.io"],
    image: "/chitchat.png",
    githubUrl: "https://github.com/Grenish/chitchat",
    liveUrl: "https://chitchat-grenish.vercel.app/",
  },
  {
    id: 3,
    title: "ML With Python",
    description: "Python notebook for Machine Learning",
    languages: ["Python", "GitHub", "Jupyter Notebook"],
    image: "/mlwithpython.png",
    githubUrl: "https://github.com/Grenish/ml-with-python",
  },
  {
    id: 4,
    title: "ImageFlex",
    description: "High quality image for free",
    languages: ["HTML", "CSS", "JavaScript", "API"],
    image: "/imageflex.png",
    githubUrl: "https://github.com/Grenish/imageflex",
    liveUrl: "https://imageflex.netlify.app/",
  },
  {
    id: 5,
    title: "SnugNest",
    description: "Home and comfort for the cardigans.",
    languages: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/snugnest.png",
    githubUrl: "https://github.com/Grenish/snugnest",
    liveUrl: "https://snugnest.vercel.app/",
  },
  {
    id: 6,
    title: "MyResume",
    description: "Build your resume in minutes",
    languages: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Clerk",
      "Firebase",
      "Work In Progress",
    ],
    image: "/myresume.png",
  },
  {
    id: 7,
    title: "Rust Projects",
    description: "A repository containing Rust projects while learning",
    languages: ["Rust"],
    image: "/rustpr.png",
    githubUrl: "https://github.com/Grenish/rust-projects"
  },
];

const npmPackages: NpmPackage[] = [
  {
    id: 1,
    title: "@grenishrai/loaderjs",
    description:
      "A lightweight JavaScript library designed to enhance user experience by adding customizable loading animations to web projects.",
    technologies: ["JavaScript", "CSS"],
    downloads: 5,
    version: "1.0.0",
    npmUrl: "https://www.npmjs.com/package/@grenishrai/loaderjs",
    githubUrl: "https://github.com/Grenish/loaderjs",
  },
  {
    id: 2,
    title: "@grenishrai/toastjs",
    description:
      "A lightweight JavaScript library that allows you to display customizable toast notifications on your web page.",
    technologies: ["CSS", "JavaScript"],
    downloads: 25,
    version: "1.0.0",
    npmUrl: "https://www.npmjs.com/package/@grenishrai/toastjs",
    githubUrl: "https://github.com/Grenish/toastjs/blob/main/package/README.md",
  },
];

const CustomButton = ({
  children,
  onClick,
  active = false,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-lg font-medium text-sm
      transition-all duration-300
      ${
        active
          ? "bg-purple-800 text-purple-100"
          : "bg-purple-900/30 text-purple-200 hover:bg-purple-800/40"
      }
      ${className}
    `}
  >
    {children}
  </button>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-100">
    {children}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <div className="flex flex-col h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton className="flex items-center">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </CustomButton>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </CustomButton>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.languages.map((lang) => (
              <Badge key={lang}>
                <Code2 className="inline-block w-3 h-3 mr-1" />
                {lang}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PackageCard = ({ npmPackage }: { npmPackage: NpmPackage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <div className="flex flex-col h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 p-6">
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                {npmPackage.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {npmPackage.description}
              </p>
            </div>
            <Badge>v{npmPackage.version}</Badge>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {npmPackage.technologies.map((tech) => (
              <Badge key={tech}>
                <Package className="inline-block w-3 h-3 mr-1" />
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto pt-4 border-t border-gray-800 gap-2">
          <span className="text-sm text-gray-400 mb-2 sm:mb-0">
            {npmPackage.downloads.toLocaleString()} downloads
          </span>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
            <a
              href={npmPackage.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <CustomButton className="flex items-center w-full sm:w-auto">
                <Package className="h-4 w-4 mr-2" />
                NPM
              </CustomButton>
            </a>
            <a
              href={npmPackage.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <CustomButton className="flex items-center w-full sm:w-auto">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </CustomButton>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FilterButtons = ({
  items,
  selectedFilter,
  setSelectedFilter,
}: {
  items: string[];
  selectedFilter: string | null;
  setSelectedFilter: (filter: string | null) => void;
}) => (
  <div className="flex flex-wrap justify-center gap-2 mb-8">
    {items.map((item) => (
      <button
        key={item}
        onClick={() => setSelectedFilter(selectedFilter === item ? null : item)}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedFilter === item
            ? "bg-purple-600 text-white"
            : "bg-purple-100 text-purple-800 hover:bg-purple-200"
        }`}
      >
        {item}
        {selectedFilter === item && (
          <span className="ml-2 font-bold">&times;</span>
        )}
      </button>
    ))}
  </div>
);

const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => (
  <div className="flex justify-center mb-8">
    <div className="inline-flex p-1 rounded-lg bg-purple-900/20">
      <CustomButton
        active={activeTab === "projects"}
        onClick={() => setActiveTab("projects")}
        className="flex items-center"
      >
        <Folder className="w-4 h-4 mr-2" />
        Projects
      </CustomButton>
      <CustomButton
        active={activeTab === "packages"}
        onClick={() => setActiveTab("packages")}
        className="flex items-center"
      >
        <Package className="w-4 h-4 mr-2" />
        NPM Packages
      </CustomButton>
    </div>
  </div>
);

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedProjectLanguage, setSelectedProjectLanguage] = useState<
    string | null
  >(null);
  const [selectedPackageTech, setSelectedPackageTech] = useState<string | null>(
    null
  );

  // Ensure unique languages and technologies
  const allProjectLanguages = Array.from(
    new Set(
      projects.flatMap((project) =>
        project.languages.map((lang) => lang.trim())
      )
    )
  ).sort();

  const allPackageTechnologies = Array.from(
    new Set(
      npmPackages.flatMap((pkg) => pkg.technologies.map((tech) => tech.trim()))
    )
  ).sort();

  // Improved filtering logic
  const filteredProjects = selectedProjectLanguage
    ? projects.filter((project) =>
        project.languages.some(
          (lang) => lang.trim() === selectedProjectLanguage
        )
      )
    : projects;

  const filteredPackages = selectedPackageTech
    ? npmPackages.filter((pkg) =>
        pkg.technologies.some((tech) => tech.trim() === selectedPackageTech)
      )
    : npmPackages;

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-purple-950 min-h-screen pb-32">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-light text-center mb-5 text-gray-100 mistrully"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Work
        </motion.h2>
        <motion.p
          className="text-sm md:text-base font-light text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Here are some projects and packages I've developed, inspired by a
          vision to transform exceptional ideas into impactful experiences. I'm
          continuously working on new ideas, striving to bring even more
          extraordinary concepts to life.
        </motion.p>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FilterButtons
                items={allProjectLanguages}
                selectedFilter={selectedProjectLanguage}
                setSelectedFilter={setSelectedProjectLanguage}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "packages" && (
            <motion.div
              key="packages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FilterButtons
                items={allPackageTechnologies}
                selectedFilter={selectedPackageTech}
                setSelectedFilter={setSelectedPackageTech}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((npmPackage) => (
                  <PackageCard key={npmPackage.id} npmPackage={npmPackage} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
