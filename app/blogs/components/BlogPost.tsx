import React from "react";
import { Clock } from "lucide-react";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    description: string;
    url: string;
    published_at: string;
    cover_image: string | null;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto bg-black text-gray-100 p-6 rounded-lg mb-8">
      {post.cover_image && (
        <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
          <img
            src={post.cover_image}
            alt={post.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Clock size={16} />
          <time dateTime={post.published_at}>
            {new Date(post.published_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            {post.title}
          </a>
        </h1>

        <p className="text-xl leading-relaxed text-gray-300">
          {post.description}
        </p>

        <div className="pt-4">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read More
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
