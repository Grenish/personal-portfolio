import React from "react";

const Error = () => {
  return (
    <div>
      <div
        id="error-page"
        tabindex="-1"
        className="h-screen w-screen bg-red-100 flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-red-600">
          Oops...Something went wrong
        </h1>
        <p className="mt-2 text-lg md:text-2xl text-red-700">
          Please try again later.
        </p>
        <a
          href="/"
          className="mt-5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
