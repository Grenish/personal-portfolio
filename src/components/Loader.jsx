import React, { useState, useEffect } from "react";

const Loader = () => {
  const codeingFacts = [
    "The first computer bug was identified in September 1947 as a dead moth.",
    "Coding Bugs were NOT named after an actual bug",
    "Coding has over 700 languages",
    "The first programmer was the daughter of a mad poet",
    "The first computer virus was a Creeper",
    "NASA still operates some projects on programming from the 1970's",
    "Computer was a job title, and the first programmers were women",
    "C is the only programming language that has been around for the longest.",
    "During World War II, the ENIAC (Electronic Numerical Integrator and Computer) was powered on and used to compute ballistic trajectories.",
  ];

  const [randomFact, setRandomFact] = useState(RandomFactsPerLoad);

  function RandomFactsPerLoad() {
    const random = Math.floor(Math.random() * codeingFacts.length);
    return codeingFacts[random];
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomFact(RandomFactsPerLoad());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-dark w-full h-screen flex flex-col justify-center items-center">
      <span className="loader"></span>
      <span className="text-white-200 tan text-xl">Loading...</span>
      <span className="p-2 sm:w-[500px] w-[300px]  flex flex-col justify-center items-center mt-5 glass">
        <span className="text-xl cor">Do You Know?</span>
        <span className="text-md cor">{randomFact}</span>
      </span>
    </div>
  );
};

export default Loader;
