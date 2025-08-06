"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  baseUrl: string;
  isLoading?: boolean;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  baseUrl,
  isLoading = false,
}: PaginationControlsProps) {
  const router = useRouter();
  const [navigating, setNavigating] = useState(false);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage <= 4) {
        // Near the beginning
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Near the end
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handleNavigation = useCallback(async (page: number) => {
    if (page === currentPage || navigating || isLoading) return;
    
    setNavigating(true);
    const url = page === 1 ? baseUrl : `${baseUrl}?page=${page}`;
    router.push(url);
    
    // Reset navigating state after a short delay
    setTimeout(() => setNavigating(false), 500);
  }, [currentPage, navigating, isLoading, baseUrl, router]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target !== document.body) return; // Only handle when no input is focused
      
      switch (event.key) {
        case "ArrowLeft":
          if (hasPreviousPage) {
            event.preventDefault();
            handleNavigation(currentPage - 1);
          }
          break;
        case "ArrowRight":
          if (hasNextPage) {
            event.preventDefault();
            handleNavigation(currentPage + 1);
          }
          break;
        case "Home":
          if (currentPage !== 1) {
            event.preventDefault();
            handleNavigation(1);
          }
          break;
        case "End":
          if (currentPage !== totalPages) {
            event.preventDefault();
            handleNavigation(totalPages);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages, hasNextPage, hasPreviousPage, handleNavigation]);

  const pageNumbers = getPageNumbers();
  const isDisabled = isLoading || navigating;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="relative">
      <nav
        className="flex items-center justify-center gap-2 mt-12"
        role="navigation"
        aria-label="Pagination Navigation"
      >
        {/* Previous Button */}
        <button
          onClick={() => handleNavigation(currentPage - 1)}
          disabled={!hasPreviousPage || isDisabled}
          className="group relative p-2.5 rounded-full border border-gray-800 hover:border-gray-700 focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:border-gray-900 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          aria-label={`Go to previous page (Page ${currentPage - 1})`}
          tabIndex={0}
        >
          <ChevronLeft
            size={16}
            className="text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 group-disabled:text-gray-700 transition-colors"
          />
          
          {/* Tooltip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0 group-focus:translate-y-0 z-10">
            <div className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
              Previous
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
            </div>
          </div>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1" role="group" aria-label="Page numbers">
          {pageNumbers.map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-3 py-2 text-gray-600 text-sm"
                  aria-hidden="true"
                >
                  ...
                </span>
              );
            }

            const pageNumber = page as number;
            const isCurrentPage = pageNumber === currentPage;

            return (
              <button
                key={pageNumber}
                onClick={() => handleNavigation(pageNumber)}
                disabled={isCurrentPage || isDisabled}
                className={`
                  relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-950
                  ${
                    isCurrentPage
                      ? "bg-gray-100 text-gray-900 cursor-default"
                      : "text-gray-400 hover:text-gray-300 hover:bg-gray-900/50 focus:text-gray-300 focus:bg-gray-900/50"
                  }
                  ${isDisabled ? "opacity-50" : ""}
                `}
                aria-label={`${isCurrentPage ? "Current page, " : "Go to "}page ${pageNumber}`}
                aria-current={isCurrentPage ? "page" : undefined}
                tabIndex={0}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handleNavigation(currentPage + 1)}
          disabled={!hasNextPage || isDisabled}
          className="group relative p-2.5 rounded-full border border-gray-800 hover:border-gray-700 focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:border-gray-900 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          aria-label={`Go to next page (Page ${currentPage + 1})`}
          tabIndex={0}
        >
          <ChevronRight
            size={16}
            className="text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 group-disabled:text-gray-700 transition-colors"
          />
          
          {/* Tooltip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0 group-focus:translate-y-0 z-10">
            <div className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
              Next
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
            </div>
          </div>
        </button>
      </nav>

      {/* Loading overlay */}
      {isDisabled && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-950/50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-4 h-4 border-2 border-gray-600 border-t-gray-300 rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        </div>
      )}

      {/* Screen reader instructions */}
      <div className="sr-only" aria-live="polite">
        {isDisabled && "Loading new page..."}
        {!isDisabled && `Page ${currentPage} of ${totalPages}. Use arrow keys to navigate, Home for first page, End for last page.`}
      </div>
    </div>
  );
}