"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  languages: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aayu",
    description: "AI Chatbot built on Gemini API",
    languages: ["API", "ReactJs", "NodeJs", "ExpressJs"],
    image: "/aayu.png",
    githubUrl: "https://github.com/Grenish/aayu",
    liveUrl: "https://aayu-red.vercel.app/",
  },
  {
    id: 2,
    title: "ChitChat",
    description: "Your go-to messaging app",
    languages: ["JavaScript", "React", "Node.js", "Express.js", "Socket.io"],
    image: "/chitchat.png",
    githubUrl: "https://github.com/Grenish/chitchat",
    liveUrl: "https://chitchat-grenish.vercel.app/",
  },
  {
    id: 3,
    title: "ML With Python",
    description: "Python nootebook for Machine Learning",
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
    id: 5,
    title: "MyResume",
    description: "Build your resume in minutes",
    languages: ["Next.js", "Tailwind CSS", "TypeScript", "Clerk", "Firebase", "Work On Progress"],
    image: "/myresume.png",
  },
];

const allLanguages = Array.from(
  new Set(projects.flatMap((project) => project.languages))
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
      className="group"
    >
      <Card className="overflow-hidden border-gray-800 hover:border-gray-700 transition-colors duration-300">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-gray-800 text-gray-200 hover:bg-gray-700"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-gray-800 text-gray-200 hover:bg-gray-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-gray-100">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.languages.map((lang) => (
              <span
                key={lang}
                className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full"
              >
                <Code2 className="inline-block w-3 h-3 mr-1" />
                {lang}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ProjectSection() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const filteredProjects = selectedLanguage
    ? projects.filter((project) => project.languages.includes(selectedLanguage))
    : projects;

  return (
    <section className="py-16 px-4 bg-black min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={selectedLanguage === null ? "secondary" : "outline"}
            onClick={() => setSelectedLanguage(null)}
            className="text-sm bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-700"
          >
            All
          </Button>
          {allLanguages.map((lang) => (
            <Button
              key={lang}
              variant={selectedLanguage === lang ? "secondary" : "outline"}
              onClick={() => setSelectedLanguage(lang)}
              className={`text-sm ${
                selectedLanguage === lang
                  ? "bg-gray-700 text-gray-100"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700"
              }`}
            >
              {lang}
            </Button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
