import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Article, PaginatedArticlesResponse } from "@/types";
import PaginationControls from "@/components/PaginationControls";

interface BlogsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getArticles(page: number = 1, perPage: number = 15): Promise<PaginatedArticlesResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const url = new URL('/api/articles', baseUrl);
  url.searchParams.set('page', page.toString());
  url.searchParams.set('per_page', perPage.toString());

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch articles: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

function BlogSkeleton() {
  return (
    <div className="space-y-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="animate-pulse py-6 border-b border-gray-900">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="h-5 bg-gray-900 rounded-md w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-900 rounded-md w-full mb-1"></div>
              <div className="h-3 bg-gray-900 rounded-md w-2/3"></div>
            </div>
            <div className="h-8 w-8 bg-gray-900 rounded-full ml-6"></div>
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

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  // Await searchParams before using its properties (Next.js 15 requirement)
  const resolvedSearchParams = await searchParams;
  
  // Parse pagination parameters from searchParams
  const pageParam = resolvedSearchParams.page;
  const pageValue = Array.isArray(pageParam) ? pageParam[0] : pageParam || '1';
  const page = Math.max(1, parseInt(pageValue, 10));
  const perPage = 15; // Fixed per page for consistent pagination

  let data: PaginatedArticlesResponse;
  let error: string | null = null;

  try {
    data = await getArticles(page, perPage);
  } catch (err) {
    error = err instanceof Error ? err.message : 'An unexpected error occurred';
    // Provide fallback data structure
    data = {
      articles: [],
      pagination: {
        currentPage: page,
        totalPages: 0,
        totalCount: 0,
        perPage,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };
  }

  const { articles, pagination } = data;

  // Group articles by year (maintain existing functionality)
  const articlesByYear = articles.reduce((acc: Record<number, Article[]>, article: Article) => {
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
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-gray-100 mb-4">
            Blogs
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Exploring the intersection of code, design, and human experience through 
            technical articles and thoughtful reflections.
          </p>
        </header>

        {/* Error State */}
        {error && (
          <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              </div>
              <h3 className="text-sm font-medium text-red-400">Failed to load articles</h3>
            </div>
            <p className="text-sm text-red-300/80 mb-4">{error}</p>
            <Link
              href="/blogs"
              className="text-xs text-red-400 hover:text-red-300 underline transition-colors"
            >
              Try again
            </Link>
          </div>
        )}

        {/* Articles List */}
        <Suspense fallback={<BlogSkeleton />}>
          {articles.length === 0 && !error ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-4">
                <ArrowUpRight size={20} className="text-gray-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">No articles found</h3>
              <p className="text-sm text-gray-500">
                {page > 1 ? 'This page doesn\'t have any articles.' : 'No articles are available at the moment.'}
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {years.map((year) => (
                <section key={year}>
                  {/* Year Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {year}
                    </h2>
                    <div className="flex-1 h-px bg-gray-900"></div>
                  </div>

                  {/* Articles for this year */}
                  <div className="space-y-1">
                    {articlesByYear[Number(year)].map((article: Article, index: number) => {
                      const tags = getTags(article.tag_list);
                      const date = new Date(article.published_at);
                      const isLastInYear = index === articlesByYear[Number(year)].length - 1;

                      return (
                        <Link
                          key={article.id}
                          href={`/blogs/${article.id}`}
                          className={`group block py-6 ${
                            !isLastInYear ? "border-b border-gray-900" : ""
                          }`}
                        >
                          <article className="flex items-start justify-between gap-6">
                            <div className="flex-1 space-y-2">
                              {/* Date and metadata */}
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <time dateTime={article.published_at}>
                                  {date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </time>
                                <span className="text-gray-700">·</span>
                                <span>{article.reading_time_minutes} min</span>
                                {article.page_views_count && article.page_views_count > 100 && (
                                  <>
                                    <span className="text-gray-700">·</span>
                                    <span className="text-gray-400">
                                      {(article.page_views_count / 1000).toFixed(1)}k views
                                    </span>
                                  </>
                                )}
                              </div>

                              {/* Title */}
                              <h3 className="text-lg md:text-xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors leading-tight">
                                {article.title}
                              </h3>

                              {/* Description */}
                              <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
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
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-8 h-8 rounded-full border border-gray-800 group-hover:border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                <ArrowUpRight 
                                  size={14} 
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
          )}
        </Suspense>

        {/* Pagination Controls */}
        {!error && pagination.totalPages > 1 && (
          <PaginationControls
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            hasNextPage={pagination.hasNextPage}
            hasPreviousPage={pagination.hasPreviousPage}
            baseUrl="/blogs"
          />
        )}

        {/* Footer */}
        {(articles.length > 0 || pagination.totalCount > 0) && (
          <footer className="mt-16 pt-8 border-t border-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                {pagination.totalCount > 0 ? (
                  <>
                    Showing {articles.length} of {pagination.totalCount} articles
                    {pagination.totalPages > 1 && (
                      <span> · Page {pagination.currentPage} of {pagination.totalPages}</span>
                    )}
                    {years.length > 0 && <span> · {years.length} years of writing</span>}
                  </>
                ) : (
                  `${articles.length} articles · ${years.length} years of writing`
                )}
              </p>
              <a
                href="https://dev.to/grenishrai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-2 group"
              >
                View on dev.to
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}