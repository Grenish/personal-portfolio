import React from "react";

import { cccoil8 } from "../assets";

const BackgroundImage = () => {
  return (
    <div className="w-full h-[100%] md:h-[100%] absolute overflow-hidden z-[1]">
      <img
        src={cccoil8}
        className="roundImage w-[1500px] absolute top-[350px] left-[-130px] md:top-[-800px] md:left-[-600px] dark:opacity-10 opacity-20 transition-all ease-in-out duration-500"
      />
    </div>
  );
};

export default BackgroundImage;
