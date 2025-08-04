import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  slug: string;
  published_at: string;
  reading_time_minutes: number;
  page_views_count: number;
  tag_list: string | string[];
  cover_image: string | null;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}

async function getArticles() {
  const headers: HeadersInit = {
    Accept: "application/vnd.forem.api-v1+json",
  };

  if (process.env.DEVTO_API_KEY) {
    headers["api-key"] = process.env.DEVTO_API_KEY;
  }

  const res = await fetch(
    "https://dev.to/api/articles?username=grenishrai&per_page=30",
    {
      headers,
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
}

function BlogSkeleton() {
  return (
    <div className="space-y-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="animate-pulse py-8 border-b border-gray-900">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="h-7 bg-gray-900 rounded-md w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-900 rounded-md w-full mb-2"></div>
              <div className="h-4 bg-gray-900 rounded-md w-2/3"></div>
            </div>
            <div className="h-10 w-10 bg-gray-900 rounded-full ml-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function getTags(tagList: string | string[]): string[] {
  if (!tagList) return [];
  if (typeof tagList === "string") {
    return tagList.split(",").map((tag) => tag.trim());
  }
  return tagList;
}

export default async function BlogsPage() {
  const articles: Article[] = await getArticles();

  // Group articles by year
  const articlesByYear = articles.reduce((acc, article) => {
    const year = new Date(article.published_at).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(article);
    return acc;
  }, {} as Record<number, Article[]>);

  const years = Object.keys(articlesByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-100 mb-6">
            Blogs
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Exploring the intersection of code, design, and human experience through 
            technical articles and thoughtful reflections.
          </p>
        </header>

        {/* Articles List */}
        <Suspense fallback={<BlogSkeleton />}>
          <div className="space-y-16">
            {years.map((year) => (
              <section key={year}>
                {/* Year Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {year}
                  </h2>
                  <div className="flex-1 h-px bg-gray-900"></div>
                </div>

                {/* Articles for this year */}
                <div className="space-y-1">
                  {articlesByYear[Number(year)].map((article, index) => {
                    const tags = getTags(article.tag_list);
                    const date = new Date(article.published_at);
                    const isLastInYear = index === articlesByYear[Number(year)].length - 1;

                    return (
                      <Link
                        key={article.id}
                        href={`/blogs/${article.id}`}
                        className={`group block py-8 ${
                          !isLastInYear ? "border-b border-gray-900" : ""
                        }`}
                      >
                        <article className="flex items-start justify-between gap-8">
                          <div className="flex-1 space-y-3">
                            {/* Date and metadata */}
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              <time dateTime={article.published_at}>
                                {date.toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                })}
                              </time>
                              <span className="text-gray-700">·</span>
                              <span>{article.reading_time_minutes} min</span>
                              {article.page_views_count > 100 && (
                                <>
                                  <span className="text-gray-700">·</span>
                                  <span className="text-gray-400">
                                    {(article.page_views_count / 1000).toFixed(1)}k views
                                  </span>
                                </>
                              )}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors leading-tight">
                              {article.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed line-clamp-2">
                              {article.description}
                            </p>

                            {/* Primary tag */}
                            {tags.length > 0 && (
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {tags[0]}
                                </span>
                                {tags.length > 1 && (
                                  <span className="text-xs text-gray-600">
                                    +{tags.length - 1} more
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Arrow indicator */}
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-10 h-10 rounded-full border border-gray-800 group-hover:border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                              <ArrowUpRight 
                                size={16} 
                                className="text-gray-600 group-hover:text-gray-400 transition-colors"
                              />
                            </div>
                          </div>
                        </article>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </Suspense>

        {/* Footer */}
        {articles.length > 0 && (
          <footer className="mt-24 pt-12 border-t border-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {articles.length} articles · {years.length} years of writing
              </p>
              <a
                href="https://dev.to/grenishrai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-2 group"
              >
                View on dev.to
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}