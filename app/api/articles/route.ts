import { NextRequest, NextResponse } from "next/server";
import { PaginatedArticlesResponse } from "@/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Parse pagination parameters with defaults
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const perPage = Math.min(30, Math.max(1, parseInt(searchParams.get('per_page') || '15', 10)));

  const headers: HeadersInit = {
    Accept: "application/vnd.forem.api-v1+json",
  };

  // Add API key if available
  if (process.env.DEVTO_API_KEY) {
    headers["api-key"] = process.env.DEVTO_API_KEY;
  }

  try {
    // First, get total count by fetching first page with per_page=1
    const countRes = await fetch(
      "https://dev.to/api/articles?username=grenishrai&per_page=1",
      { headers }
    );

    if (!countRes.ok) {
      if (countRes.status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429, headers: { 'Retry-After': '60' } }
        );
      }
      return NextResponse.json(
        { error: "Failed to fetch articles from dev.to API" },
        { status: countRes.status }
      );
    }

    // Get total count from response headers or estimate from large fetch
    let totalCount = 0;
    const totalCountHeader = countRes.headers.get('x-total-count');

    if (totalCountHeader) {
      totalCount = parseInt(totalCountHeader, 10);
    } else {
      // Fallback: fetch a large number to estimate total
      const estimateRes = await fetch(
        "https://dev.to/api/articles?username=grenishrai&per_page=1000",
        { headers }
      );
      if (estimateRes.ok) {
        const allArticles = await estimateRes.json();
        totalCount = allArticles.length;
      }
    }

    // Now fetch the actual page
    const res = await fetch(
      `https://dev.to/api/articles?username=grenishrai&page=${page}&per_page=${perPage}`,
      { headers }
    );

    if (!res.ok) {
      if (res.status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429, headers: { 'Retry-After': '60' } }
        );
      }
      return NextResponse.json(
        { error: "Failed to fetch articles from dev.to API" },
        { status: res.status }
      );
    }

    const articles = await res.json();

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / perPage);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    const response: PaginatedArticlesResponse = {
      articles,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        perPage,
        hasNextPage,
        hasPreviousPage,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Articles API error:', error);
    return NextResponse.json(
      { error: "An unexpected error occurred while fetching articles" },
      { status: 500 }
    );
  }
}
