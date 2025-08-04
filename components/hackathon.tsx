"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface HackathonEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  year: string;
  duration: string;
  team?: string;
  achievement?: string;
  technologies: string[];
  images: string[];
  primaryImage?: string;
  links?: {
    github?: string;
    demo?: string;
    devpost?: string;
  };
}

const hackathons: HackathonEvent[] = [
  {
    id: "1",
    title: "Smart India Hackathon",
    description:
      "Presented a prototype by leveraging a fine-tuned AI model trained on a large dermatological dataset, resulting in accurate detection and classification of skin diseases, with an emphasis on early cancer diagnosis.",
    date: "October",
    year: "2023",
    duration: "48h",
    team: "Team of 4",
    technologies: ["React Native", "ReactJs", "AI/ML", "Python Jupyter"],
    primaryImage: "/hackathons/SIH2.webp",
    images: [
      "/hackathons/ethglobal-1.jpg",
      "/hackathons/ethglobal-2.jpg",
      "/hackathons/ethglobal-3.jpg",
    ],
    links: {
      github: "https://github.com/Grenish/project",
      demo: "https://demo.com",
    },
  },
  {
    id: "2",
    title: "Dark Pattern Buster Hackathon",
    description:
      "Developed a browser extension by implementing automated detection of deceptive UI/UX patterns and providing contextual guidance, resulting in improved user awareness and easier navigation away from dark patterns on websites.",
    date: "March",
    year: "2023",
    duration: "3 months",
    team: "Team of 3",
    primaryImage: "/hackathons/dpbh.png",
    technologies: ["TensorFlow", "Flutter", "Google Cloud"],
    images: ["/hackathons/google-1.jpg", "/hackathons/google-2.jpg"],
    links: {
      github: "https://github.com/Grenish/project",
      demo: "https://demo.com",
    },
  },
];

export default function HackathonTimeline() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<HackathonEvent | null>(
    null
  );

  return (
    <section className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="mb-16">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">
            Hackathons
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-16">
            48-hour sprints of innovation, collaboration, and problem-solving.
            Each event pushed boundaries and created lasting connections.
          </p>
        </header>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Year markers */}
          <div className="hidden md:block absolute -left-20 top-0 bottom-0">
            {Array.from(new Set(hackathons.map((h) => h.year))).map(
              (year, index) => (
                <div
                  key={year}
                  className="absolute text-sm font-medium text-gray-600"
                  style={{ top: `${index * 33.33}%` }}
                >
                  {year}
                </div>
              )
            )}
          </div>

          {/* Events */}
          <div className="space-y-2">
            {hackathons.map((hackathon, index) => (
              <article
                key={hackathon.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(hackathon.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="relative p-6 md:p-8 rounded-2xl border border-gray-900 hover:border-gray-800 bg-gray-950/50 hover:bg-gray-900/30 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedEvent(hackathon)}
                >
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    {/* Date Column */}
                    <div className="md:col-span-2">
                      <div className="space-y-1">
                        <p className="text-xl font-light text-gray-100">
                          {hackathon.date}
                        </p>
                        <p className="text-xs text-gray-500 md:hidden">
                          {hackathon.year}
                        </p>
                        <p className="text-xs text-gray-600">
                          {hackathon.duration}
                        </p>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-7 space-y-3">
                      <div>
                        <h3 className="text-xl font-medium text-gray-100 mb-1.5 group-hover:text-gray-300 transition-colors">
                          {hackathon.title}
                        </h3>
                        {hackathon.achievement && (
                          <span className="inline-block text-xs font-medium text-amber-500/80 mb-2">
                            ✦ {hackathon.achievement}
                          </span>
                        )}
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {hackathon.description}
                        </p>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        {hackathon.team && <span>{hackathon.team}</span>}
                        <span className="text-gray-700">·</span>
                        <span>
                          {hackathon.technologies.length} technologies
                        </span>
                        {hackathon.images.length > 0 && (
                          <>
                            <span className="text-gray-700">·</span>
                            <span>{hackathon.images.length} photos</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Preview Column */}
                    <div className="md:col-span-3 relative">
                      {hackathon.primaryImage && hoveredId === hackathon.id && (
                        <div className="absolute right-0 top-0 w-40 h-24 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Image
                            src={hackathon.primaryImage}
                            alt={hackathon.title}
                            fill
                            className="object-cover"
                            sizes="160px"
                          />
                        </div>
                      )}
                      <div className="flex justify-end">
                        <div className="w-8 h-8 rounded-full border border-gray-800 group-hover:border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          <ArrowUpRight
                            size={14}
                            className="text-gray-600 group-hover:text-gray-400 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-transparent via-gray-600 to-transparent group-hover:h-12 transition-all duration-300"></div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 flex items-center justify-between py-6 border-t border-gray-900">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-xl font-light text-gray-100">
                {hackathons.length}
              </p>
              <p className="text-xs text-gray-500">Events</p>
            </div>
            <div>
              <p className="text-xl font-light text-gray-100">
                {hackathons.filter((h) => h.achievement).length}
              </p>
              <p className="text-xs text-gray-500">Awards</p>
            </div>
            <div>
              <p className="text-xl font-light text-gray-100">
                {hackathons.reduce((acc, h) => acc + h.technologies.length, 0)}
              </p>
              <p className="text-xs text-gray-500">Technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-8 border-b border-gray-800">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-medium text-gray-100 mb-2">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-gray-400">
                    {selectedEvent.date} {selectedEvent.year} ·{" "}
                    {selectedEvent.duration}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-500 hover:text-gray-300 transition-colors p-2"
                >
                  ✕
                </button>
              </div>
              {selectedEvent.achievement && (
                <span className="inline-block text-sm font-medium text-amber-500/80">
                  ✦ {selectedEvent.achievement}
                </span>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                {selectedEvent.description}
              </p>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Images */}
              {selectedEvent.images.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Project Gallery
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedEvent.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden bg-gray-800"
                      >
                        <Image
                          src={image}
                          alt={`${selectedEvent.title} ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {selectedEvent.links && (
                <div className="flex gap-4 pt-4">
                  {selectedEvent.links.github && (
                    <a
                      href={selectedEvent.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                      View Code
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {selectedEvent.links.demo && (
                    <a
                      href={selectedEvent.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                      Live Demo
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
