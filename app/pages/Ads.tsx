import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Advertisement() {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-10 relative overflow-hidden">
      {/* Responsive background circles */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full bg-violet-800 blur-[200px] -top-36 -left-36 -z-2"></div>
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full bg-pink-600 blur-[200px] -bottom-36 -right-36 -z-2"></div>

      {/* Responsive heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold pt-5 pb-2 text-center w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
        Want to stay updated with the latest tech news and trends?
      </h1>
      <p className="text-white mb-5">Join my squad on daily.dev</p>

      {/* Parallax tilt effect on image */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.2}
        className="w-full max-w-md px-4"
      >
          <Image
            src="https://api.daily.dev/devcards/v2/rPnbtjZWAu3bld3jQ3bw9.png?type=wide&r=1lp"
            width={652}
            height={150}
            alt="Grenish rai's Dev Card"
            className="pointer-events-none w-full h-auto"
          />
        
      </Tilt>

      {/* Responsive button */}
      <LinkPreview
        url="https://dly.to/3tNUtKRe7pg"
        quality={50}
        imageSrc="/ss.png"
        isStatic
        className="text-white text-center mt-10"
      >
        <button className="bg-neutral-800 px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg">
          Join Now
        </button>
      </LinkPreview>
    </div>
  );
}
