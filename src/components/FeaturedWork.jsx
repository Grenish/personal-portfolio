import React from "react";

const FeaturedWork = () => {
  const featureWork = [
    {
      title: "Luna",
      description:
        "Luna is a chatbot fine-tuned from the PaLM (Pathway Language Model) model. It is still in beta testing, but it can already perform a variety of tasks.",
    },
  ];

  return (
    <div className="bg-white-200 w-full h-screen flex items-start z-[40] justify-center relative overflow-hidden">
      <span className="text-night text-[250px] des absolute z-[-1] -bottom-40 -right-10 rotate-180 opacity-40 pointer-events-none">
        D
      </span>
      <div className="sm:w-[80%] w-[90%] mt-20">
        <div className="inline-flex items-end">
          <span className="des sm:text-[42px] text-2xl text-night font-bold">e</span>
          <div className="sm:text-[42px] text-2xl tan font-semibold text-dark">
            Featured Work{" "}
          </div>{" "}
          <span className="des sm:text-[42px] text-2xl text-night font-bold">r</span>
        </div>
        <div className="flex flex-col bg-rose-500 sm:w-[400px] w-[350px]">
          <span className="text-dark text-xl tan">Luna</span>
          <span>
            Luna is a chatbot fine-tuned from the PaLM (Pathway Language Model)
            model. It is still in beta testing, but it can already perform a
            variety of tasks
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
