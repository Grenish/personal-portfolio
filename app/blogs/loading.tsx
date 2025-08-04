"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [text, setText] = useState("Loading");
  const words = ["Loading", "Preparing", "Almost there", "One moment"];
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setText(words[index]);
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center">
      <div className="relative">
        <h1 className="text-2xl font-light text-gray-400 tracking-wide">
          {text}
        </h1>
        <div className="absolute -bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}
