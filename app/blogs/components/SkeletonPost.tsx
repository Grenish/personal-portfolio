import React from "react";

const SkeletonPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-gray-800 text-gray-100 p-6 rounded-lg mb-8 animate-pulse">
      <div className="relative aspect-video mb-8 bg-gray-700 rounded-lg"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        <div className="h-8 bg-gray-700 rounded w-2/3"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-4/5"></div>
      </div>
    </article>
  );
};

export default SkeletonPost;
