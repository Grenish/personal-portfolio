"use client";

import { Clock, Tags } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";

interface BlogArticle {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published_at: string;
  tag_list: string[];
  url: string;
  reading_time_minutes: number;
}

type BlogTagProps = {
  text: string;
};

const BlogTag = ({ text }: BlogTagProps) => (
  <span className="flex items-center gap-2 bg-neutral-900 w-fit p-1 rounded-xl px-3">
    <Tags size="13" /> {text}
  </span>
);

const DateDisplay = ({
  date,
  readingTime,
}: {
  date: string;
  readingTime: number;
}) => (
  <div className="text-gray-400 text-sm flex items-center gap-2 mb-1">
    <Clock size={16} />
    <p>
      {new Date(date).toLocaleDateString()} • {readingTime} min read
    </p>
  </div>
);

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`animate-pulse rounded-md bg-neutral-800 ${className}`}
    {...props}
  />
);

const BlogCard = ({ article }: { article: BlogArticle }) => (
  <div className="group cursor-pointer h-full">
    <Link href={article.url} rel="noopener noreferrer" target="_blank">
      <div className="rounded-xl overflow-hidden">
        <Image
          src={article.cover_image || "/placeholder.svg?height=1000&width=1000"}
          alt={article.title}
          width={1000}
          height={1000}
          className="w-full h-[200px] md:h-[250px] object-cover group-hover:scale-110 transition-transform ease-in-out duration-200"
        />
      </div>
      <div className="p-2">
        <DateDisplay
          date={article.published_at}
          readingTime={article.reading_time_minutes}
        />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-200 mb-3">{article.description}</p>
        </div>
        <div className="text-xs flex gap-2 flex-wrap">
          {article.tag_list.slice(0, 5).map((tag) => (
            <BlogTag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </Link>
  </div>
);

const SkeletonCard = () => (
  <div className="h-full">
    <div className="rounded-xl overflow-hidden">
      <Skeleton className="w-full h-[200px] md:h-[250px]" />
    </div>
    <div className="p-2">
      <Skeleton className="w-32 h-4 mb-2" />
      <div>
        <Skeleton className="w-full h-8 mb-2" />
        <Skeleton className="w-full h-16 mb-3" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="w-16 h-6" />
        <Skeleton className="w-16 h-6" />
        <Skeleton className="w-16 h-6" />
      </div>
    </div>
  </div>
);

export default function AllBlogs() {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const articlesPerPage = 9;

  const fetchArticles = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://dev.to/api/articles?username=grenishrai&page=${page}&per_page=${articlesPerPage}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      setArticles((prevArticles) => {
        const newArticles = data.filter(
          (article: BlogArticle) =>
            !prevArticles.some((prevArticle) => prevArticle.id === article.id)
        );
        return [...prevArticles, ...newArticles];
      });
      setHasMore(data.length > 0);
    } catch (err) {
      setError("Failed to load articles. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) {
      fetchArticles(page);
    }
  }, [page, hasMore]);

  const lastArticleRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  if (error) {
    return (
      <div className="text-center text-red-500 p-5" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-5 mb-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          All Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => {
            if (articles.length === index + 1) {
              return (
                <div ref={lastArticleRef} key={article.id}>
                  <BlogCard article={article} />
                </div>
              );
            } else {
              return <BlogCard key={article.id} article={article} />;
            }
          })}
          {isLoading &&
            Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={`skeleton-${index}`} />
            ))}
        </div>
        {!isLoading && articles.length === 0 && (
          <div className="text-center text-gray-400 p-5">
            No articles found for this user.
          </div>
        )}
      </div>
    </div>
  );
}