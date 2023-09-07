import React from "react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="mb-10">
          <h2 className="text-3xl font font-extraBold text-platinum dark:text-night mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 dark:text-gray-800 text-justify mt-4">
            You can reach me through the following:
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center space-y-5">
          <div className="flex flex-row justify-center items-center space-x-5">
            
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
