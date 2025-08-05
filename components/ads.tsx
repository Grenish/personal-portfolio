"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function DailyDevSection() {
  return (
    <section className="min-h-screen bg-gray-950 flex items-center justify-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-3xl -top-48 -left-48" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-pink-600/5 blur-3xl -bottom-48 -right-48" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-light text-gray-100 mb-3">
            Developer Community
          </h2>
          <p className="text-base text-gray-400">
            Connect with like-minded developers on daily.dev
          </p>
        </div>

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.1}
          glareBorderRadius="12px"
          scale={1}
          transitionSpeed={2000}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-2xl -z-10" />

            <Image
              src="https://api.daily.dev/devcards/v2/rPnbtjZWAu3bld3jQ3bw9.png?type=wide&r=8ck"
              width={652}
              height={150}
              alt="Grenish rai's Dev Card"
              className="w-full h-auto rounded-xl shadow-2xl"
              priority
            />
          </div>
        </Tilt>

        <div className="text-center space-y-6">
          <a
            href="https://dly.to/nBrr5pBkQH0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-gray-300 hover:text-gray-100 transition-colors duration-300"
          >
            <span>Join the community</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
            <span>50+ active members</span>
            <span className="text-gray-800">•</span>
            <span>Daily discussions</span>
            <span className="text-gray-800">•</span>
            <span>Quality content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
