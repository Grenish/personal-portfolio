import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: string;
  year: string;
  url?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Authrix",
    description:
      "Authrix is a comprehensive authentication library designed for enterprise-grade applications. Built with TypeScript-first architecture, it provides complete authentication flows including JWT tokens, OAuth SSO, 2FA email verification, forgot password systems, and user profile management across any JavaScript framework or runtime environment.",
    category: "NPM Package",
    year: "2025",
    url: "https://www.npmjs.com/package/authrix",
    featured: true,
  },
  {
    title: "Detoxify",
    description:
      "Detoxify is a browser extension designed to give you control over your YouTube experience by hiding YouTube Shorts from your home feed, offering a distraction-free, streamlined interface. Currently compatible with Firefox and soon to be available for Chrome and other Chromium-based browsers.",
    category: "SaaS Product",
    year: "2024",
    url: "https://github.com/Grenish/detoxify",
    featured: true,
  },
  {
    title: "Make Sam Happy",
    description:
      '"Make Sam Happy" is an interactive AI-driven game where you take on the challenge of consoling Sam, an emotionally complex character struggling with deep sadness and loneliness. Sam\'s emotions shift between six states—happy, sad, smirk, doubtful, emotionless, and angry—based on how you interact with him.',
    category: "AI/ML",
    year: "2025",
    url: "https://make-sam-happy.vercel.app/",
  },
  {
    title: "Valorant API",
    description:
      "Valorant-API is an open-source, unofficial API that provides detailed information about Valorant agents, lore, maps, and weapons. This project is created for fun and is not affiliated with Riot Games.",
    category: "Data Visualization",
    year: "2025",
    url: "https://github.com/Grenish/valorant-api",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-950">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-medium text-gray-100 mb-4">Projects</h2>
          <p className="text-sm text-gray-400 mb-16">
            A collection of projects I've worked on, ranging from web
            applications to AI-powered tools.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-10 border-b border-gray-900 hover:border-gray-700 transition-all duration-300"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* Year & Category */}
                <div className="md:col-span-2 space-y-1">
                  <p className="text-sm font-medium text-gray-100">
                    {project.year}
                  </p>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>

                {/* Title & Description */}
                <div className="md:col-span-9">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                        {project.title}
                        {project.featured && (
                          <span className="inline-block ml-3 text-xs font-normal text-gray-500 align-middle">
                            Featured
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="p-2 rounded-full group-hover:bg-gray-800 transition-all duration-300">
                    <ArrowUpRight
                      size={20}
                      className="text-gray-400 group-hover:text-gray-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-20 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            {projects.length} projects showcased
          </p>
          <a
            href="https://github.com/Grenish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-100 transition-colors flex items-center gap-2 group"
          >
            View archive
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
