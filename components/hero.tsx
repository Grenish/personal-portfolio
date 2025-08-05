"use client";

import { Calendar, Coffee } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(now);
      setCurrentTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-8">
        <div className="space-y-6">
          {/* Availability Status */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                Available to work
              </span>
            </div>

            <span className="hidden sm:block text-gray-400 dark:text-gray-600">
              •
            </span>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">
                {currentTime || "..."} IST
              </span>

              <span className="text-gray-400 dark:text-gray-600">•</span>

              <button
                onClick={() => {
                  window.open(
                    "https://calendar.app.google/BV6SXs8sXpmbFwdF7",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="group relative inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
              >
                <Calendar size={14} />
                <span className="text-sm whitespace-nowrap">Book a call</span>
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl flex items-end font-medium text-gray-900 dark:text-gray-100">
              Grenish Rai
              <span className="text-sm ml-2 text-gray-500 dark:text-gray-400">
                (<span className="italic">GREN-ish RYE</span>)
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-2">
              Full Stack Developer
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            I build thoughtful digital experiences with modern web technologies.
            Currently focused on creating scalable applications and contributing
            to open-source projects.
          </p>

          <div className="flex gap-4 pt-2">
            <Link
              href="/#projects"
              className="text-sm text-gray-900 dark:text-gray-100 underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 dark:text-gray-400 underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="https://buymeacoffee.com/grenish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Coffee size={14} className="inline mr-1" />
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
