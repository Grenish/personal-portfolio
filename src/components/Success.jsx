import React from "react";

const Success = () => {
  return (
    <div
      id="success-page"
      tabindex="-1"
      className="h-screen w-screen bg-green-100 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-green-600">
        Message Sent Successfully!
      </h1>
      <p className="mt-2 text-lg md:text-2xl text-green-700">
        We will get back to you soon.
      </p>
      <a
        href="/"
        className="mt-5 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        Return to Home
      </a>
    </div>
  );
};

export default Success;
