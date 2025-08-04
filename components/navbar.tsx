"use client";

import {
  House,
  Rss,
  FolderGit2,
  PersonStanding,
  AtSign,
  FileDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, CSSProperties } from "react";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Routes that should always use mobile-style navbar
  const mobileStyleRoutes = ["/blogs"];
  const shouldUseMobileStyle = mobileStyleRoutes.some(route => 
    pathname.startsWith(route)
  );

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);

    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Calculate navbar position
  const getNavbarStyle = (): CSSProperties => {
    // Return default style for SSR
    if (!isClient) {
      return {
        position: "fixed",
        bottom: "16px",
        left: 0,
        right: 0,
      };
    }

    // Mobile or specific routes: always fixed at bottom
    if (isMobile || shouldUseMobileStyle) {
      return {
        position: "fixed",
        bottom: "16px",
        left: 0,
        right: 0,
      };
    }

    // Desktop: scroll behavior
    const viewportHeight = window.innerHeight;
    const navbarOffset = 16;
    const stickyPoint = viewportHeight - 730;

    if (scrollPosition < stickyPoint) {
      return {
        position: "fixed",
        bottom: `${navbarOffset}px`,
        left: 0,
        right: 0,
      };
    } else {
      const topPosition =
        viewportHeight - navbarOffset - 80 - (scrollPosition - stickyPoint);

      if (topPosition <= navbarOffset) {
        return {
          position: "sticky",
          top: `${navbarOffset}px`,
          left: 0,
          right: 0,
        };
      } else {
        return {
          position: "absolute",
          top: `${scrollPosition + topPosition}px`,
          left: 0,
          right: 0,
        };
      }
    }
  };

  // Calculate navbar width based on scroll position (desktop only)
  const getNavbarWidth = () => {
    if (!isClient || isMobile || shouldUseMobileStyle) return "max-w-fit";

    const viewportHeight = window.innerHeight;
    const transitionStart = viewportHeight * 0.8;
    const transitionEnd = viewportHeight;

    if (scrollPosition < transitionStart) {
      // Initial wider state
      return "max-w-4xl";
    } else if (scrollPosition < transitionEnd) {
      // Transitioning
      return "max-w-3xl";
    } else {
      return "max-w-xl";
    }
  };

  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: PersonStanding, label: "About", href: "" },
    { icon: Rss, label: "Blog", href: "/blogs" },
    { icon: FolderGit2, label: "Projects", href: "" },
    { icon: AtSign, label: "Contact", href: "" },
  ];

  return (
    <header className="w-full z-50 transition-none" style={getNavbarStyle()}>
      <div className="px-4">
        <nav
          className={`bg-white/80 dark:bg-gray-950/40 backdrop-blur-md mx-auto rounded-full shadow-sm border border-gray-200 dark:border-gray-800 transition-all duration-300 ${getNavbarWidth()}`}
        >
          <div
            className={`flex items-center ${
              isMobile || shouldUseMobileStyle ? "gap-1" : "gap-2 md:gap-4"
            } ${isMobile || shouldUseMobileStyle ? "px-3" : "px-6 md:px-8"} py-3 ${
              isMobile || shouldUseMobileStyle ? "justify-center" : "justify-between"
            } w-full`}
          >
            {/* Logo */}
            <a
              href="/"
              className="group relative p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Image
                src="/logo.jpeg"
                width={20}
                height={20}
                alt="Logo"
                className="dark:invert opacity-70 group-hover:opacity-100 transition-opacity"
              />
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                  Grenish
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900 dark:border-t-gray-100"></div>
                </div>
              </div>
            </a>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700" />

            {/* Navigation Items Container */}
            <div
              className={`flex items-center ${
                isMobile || shouldUseMobileStyle ? "gap-1" : "gap-2 md:gap-3"
              }`}
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors"
                    />
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                        {item.label}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900 dark:border-t-gray-100"></div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700" />

            {/* Resume Button */}
            <button className="group relative p-2.5 rounded-full bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              <FileDown
                size={18}
                strokeWidth={2}
                className="text-white dark:text-gray-900"
              />
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                  Resume
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900 dark:border-t-gray-100"></div>
                </div>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
