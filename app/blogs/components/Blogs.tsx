"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import BlogPost from "./BlogPost";
import SkeletonPost from "./SkeletonPost";

interface Blog {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  cover_image: string | null;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastBlogElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const fetchBlogs = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dev.to/api/articles?username=grenishrai&page=${pageNum}&per_page=5`
      );

      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false);
        return;
      }

      setBlogs((prevBlogs) => {
        // Filter out any duplicates based on id
        const newBlogs = data.filter(
          (newBlog: Blog) =>
            !prevBlogs.some((existingBlog) => existingBlog.id === newBlog.id)
        );
        return [...prevBlogs, ...newBlogs];
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  return (
    <div className="min-h-screen bg-black text-white p-10 pb-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold mb-4 tracking-widest text-white mistrully">
          Blogs
        </h1>
        <p className="text-sm text-gray-400 mb-10 w-1/2 text-center">
          I sometimes write blogs about tech news and trends in the industry,
          which really inspire me to keep learning and growing.
        </p>
      </div>

      <div className="space-y-10">
        {blogs.map((blog, index) => {
          if (blogs.length === index + 1) {
            return (
              <div key={blog.id} ref={lastBlogElementRef}>
                <BlogPost post={blog} />
              </div>
            );
          } else {
            return <BlogPost key={blog.id} post={blog} />;
          }
        })}

        {loading && (
          <div className="space-y-10">
            {Array.from({ length: 2 }, (_, i) => (
              <SkeletonPost key={i} />
            ))}
          </div>
        )}

        {!hasMore && (
          <p className="text-center text-gray-400 mt-8">
            No more posts to load
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
