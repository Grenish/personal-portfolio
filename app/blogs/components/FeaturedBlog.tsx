"use client";

import { Clock, Tags } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogArticle {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published_at: string;
  tag_list: string[];
  url: string;
}

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-neutral-800 ${className}`}
      {...props}
    />
  );
}

export default function FeaturedBlog({
  username = "grenishrai",
}: {
  username?: string;
}) {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setArticles([]); // Clear existing articles while loading
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${username}&per_page=4`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError("Failed to load articles. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [username]);

  const LoadingSkeleton = () => (
    <div className="w-full sm:px-20 px-1">
      <div className="pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Blogs
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-10 p-5">
        {/* Main featured article skeleton */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-xl overflow-hidden">
            <Skeleton className="w-full h-[400px]" />
          </div>
          <div className="p-2">
            <Skeleton className="w-32 h-4 mt-4 mb-2" />
            <Skeleton className="w-full h-8 mb-2" />
            <Skeleton className="w-full h-16 mb-4" />
            <div className="flex gap-2">
              <Skeleton className="w-24 h-6" />
              <Skeleton className="w-24 h-6" />
              <Skeleton className="w-24 h-6" />
            </div>
          </div>
        </div>

        {/* Side articles skeletons */}
        <div className="w-full lg:w-1/2 space-y-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="rounded-xl overflow-hidden w-full md:w-1/3">
                <Skeleton className="w-full h-40 md:h-[15vh]" />
              </div>
              <div className="flex-1 p-2">
                <Skeleton className="w-24 h-3 mb-2" />
                <Skeleton className="w-full h-6 mb-2" />
                <Skeleton className="w-full h-12 mb-3" />
                <div className="flex gap-2">
                  <Skeleton className="w-20 h-5" />
                  <Skeleton className="w-20 h-5" />
                  <Skeleton className="w-20 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-5" role="alert">
        {error}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center p-5">No articles found for this user.</div>
    );
  }

  return (
    <div className="w-full sm:px-20 px-1 ">
      <div className="pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Blogs
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-10 sm:p-5 p-0 pb-2">
        {/* main div */}
        {articles[0] && (
          <div className="w-full lg:w-1/2 group cursor-pointer">
            <Link href={articles[0].url} rel="noopener noreferrer">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={
                    articles[0].cover_image ||
                    "/placeholder.svg?height=1000&width=1000"
                  }
                  alt={articles[0].title}
                  width={1000}
                  height={1000}
                  className="w-full sm:h-[45vh] h-[30vh] object-cover group-hover:scale-110 transition-transform ease-in-out duration-200"
                />
              </div>
              <div className="p-2">
                <div className="text-gray-400 text-xs md:text-sm flex items-center gap-2 mb-1">
                  <Clock size={16} />
                  <p>
                    {new Date(articles[0].published_at).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h2 className="text-xl md:text-3xl font-bold mb-2">
                    {articles[0].title}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-200 mb-3">
                    {articles[0].description}
                  </p>
                </div>
                <div className="text-xs flex gap-2 flex-wrap">
                  {articles[0].tag_list.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-2 bg-neutral-900 w-fit p-1 rounded-xl px-3"
                    >
                      <Tags size="13" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* side div */}
        <div className="w-full lg:w-1/2 p-3 space-y-5">
          {articles.slice(1).map((article) => (
            <Link key={article.id} href={article.url} rel="noopener noreferrer">
              <div className="flex flex-col md:flex-row items-start md:items-center group gap-4 pb-4">
                <div className="rounded-xl overflow-hidden h-40 md:h-[15vh] w-full md:w-1/3">
                  <Image
                    src={
                      article.cover_image ||
                      "/placeholder.svg?height=1000&width=1000"
                    }
                    alt={article.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-in-out duration-200"
                  />
                </div>
                <div className="p-2 flex-1">
                  <div className="text-gray-400 text-xs flex items-center gap-2 mb-1">
                    <Clock size={12} />
                    <p>{new Date(article.published_at).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold mb-2">
                      {article.title}
                    </h2>
                    <p className="text-xs text-gray-200 mb-3">
                      {article.description}
                    </p>
                  </div>
                  <div className="text-xs flex gap-2 flex-wrap">
                    {article.tag_list.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-2 bg-neutral-900 w-fit p-1 rounded-xl px-3"
                      >
                        <Tags size="13" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
