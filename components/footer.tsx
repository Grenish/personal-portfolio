"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/grenish" },
    { name: "LinkedIn", href: "https://linkedin.com/in/grenish-rai" },
    { name: "Twitter", href: "https://twitter.com/grenish_rai" },
    { name: "Email", href: "mailto:mrcoder2033d@gmail.com" },
    { name: "Buy me a coffee", href: "https://buymeacoffee.com/grenish" },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-light text-gray-100">Grenish Rai</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Full stack developer crafting thoughtful digital experiences 
              with modern technologies and clean code.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span>Available for work</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              {socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-100 transition-colors group"
                  >
                    <span>{item.name}</span>
                    {item.href.startsWith("http") && (
                      <ArrowUpRight 
                        size={12} 
                        className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
              © {currentYear} Grenish Rai. All rights reserved.
            </p>
            
            {/* Optional: Add a subtle back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors flex items-center gap-1 group"
            >
              <span>Back to top</span>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="group-hover:-translate-y-0.5 transition-transform"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}