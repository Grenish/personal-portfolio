import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import MarkdownRenderer from "@/components/MarkdownRenderer";

interface Article {
  id: number;
  title: string;
  description: string;
  body_html: string;
  body_markdown: string;
  published_at: string;
  reading_time_minutes: number;
  page_views_count?: number;
  public_reactions_count?: number;
  comments_count?: number;
  tag_list: string | string[];
  tags?: string[];
  cover_image: string | null;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
  url: string;
  canonical_url?: string;
}

async function getArticle(id: string) {
  const headers: HeadersInit = {
    Accept: "application/vnd.forem.api-v1+json",
  };

  if (process.env.DEVTO_API_KEY) {
    headers["api-key"] = process.env.DEVTO_API_KEY;
  }

  const res = await fetch(`https://dev.to/api/articles/${id}`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

function getTags(article: Article): string[] {
  if (article.tags && Array.isArray(article.tags)) {
    return article.tags;
  }
  if (article.tag_list) {
    if (typeof article.tag_list === "string") {
      return article.tag_list
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
    }
    if (Array.isArray(article.tag_list)) {
      return article.tag_list;
    }
  }
  return [];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article: Article | null = await getArticle(id);

  if (!article) {
    notFound();
  }

  const tags = getTags(article);
  const date = new Date(article.published_at);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section with Cover Image */}
      {article.cover_image && (
        <div className="relative h-[40vh] md:h-[50vh] w-full">
          <Image
            src={article.cover_image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        </div>
      )}

      <article className="relative">
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto px-6 md:px-8 pt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to writing</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className={`max-w-4xl mx-auto px-6 md:px-8 ${article.cover_image ? 'pt-8' : 'pt-16'} pb-12`}>
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-100 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm">
            {/* Author */}
            <div className="flex items-center gap-3">
              {article.user.profile_image && (
                <Image
                  src={article.user.profile_image}
                  alt={article.user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="text-gray-100 font-medium">{article.user.name}</p>
                <p className="text-gray-500">@{article.user.username}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-gray-800" />

            {/* Date and Reading Time */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500">
              <time dateTime={article.published_at}>
                {date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-gray-700">·</span>
              <span>{article.reading_time_minutes} min read</span>
              {article.page_views_count && article.page_views_count > 100 && (
                <>
                  <span className="text-gray-700">·</span>
                  <span>{(article.page_views_count / 1000).toFixed(1)}k views</span>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          {article.description && (
            <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed">
              {article.description}
            </p>
          )}
        </header>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="h-px bg-gray-900" />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
          <MarkdownRenderer
            content={article.body_markdown}
            className="prose-lg"
          />
        </div>

        {/* Article Footer */}
        <footer className="max-w-4xl mx-auto px-6 md:px-8 pb-20">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="pb-12">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tagged with
                </h3>
                <div className="flex-1 h-px bg-gray-900" />
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-gray-400 px-3 py-1.5 rounded-full border border-gray-800 hover:border-gray-700 hover:text-gray-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Engagement Stats */}
          {(article.public_reactions_count || article.comments_count) && (
            <div className="flex items-center gap-8 py-8 border-t border-b border-gray-900 text-sm">
              {article.public_reactions_count !== undefined && article.public_reactions_count > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-2xl">❤️</span>
                  <div>
                    <p className="text-gray-100 font-medium">{article.public_reactions_count}</p>
                    <p className="text-gray-500 text-xs">Reactions</p>
                  </div>
                </div>
              )}
              {article.comments_count !== undefined && article.comments_count > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-gray-100 font-medium">{article.comments_count}</p>
                    <p className="text-gray-500 text-xs">Comments</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-12">
            <Link
              href="/blogs"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-2 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              More articles
            </Link>

            <a
              href={article.url || article.canonical_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-2 group"
            >
              Read on dev.to
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.cover_image ? [article.cover_image] : [],
    },
  };
}