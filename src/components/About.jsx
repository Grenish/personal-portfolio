import React from "react";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-sans font-extraBold text-platinum dark:text-night">
              About me
            </h2>
            <p className="text-gray-400 dark:text-gray-900">
              I am a dedicated front-end web developer and UI/UX designer with a
              strong passion for technology and open source projects. Currently,
              I am pursuing a Bachelor's in Computer Applications (BCA) at SMIT,
              Majitar. I thrive on continuous learning and embrace new
              challenges eagerly.
            </p>
            <p className="text-gray-400 dark:text-gray-800">
              In addition to my tech pursuits, I have a deep love for literature
              and enjoy reading books. I am also proficient in playing musical
              instruments such as the guitar and piano. I have a strong affinity
              for music and thoroughly enjoy listening to songs, with my
              favorite singer being Ed Sheeran.
            </p>
            <p className="text-gray-400 dark:text-gray-800">
              Furthermore, I am an enthusiast of Japanese anime, often referred
              to as a 'weeb.' My favorite anime series is Naruto, and I hold a
              particular fondness for the character Itachi Uchiha. Currently, I
              am engrossed in the world of One Piece.
            </p>
          </div>
          <div className="">
            
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
