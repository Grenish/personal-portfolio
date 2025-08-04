import { NextResponse } from "next/server";

export async function GET() {
  const headers: HeadersInit = {
    Accept: "application/vnd.forem.api-v1+json",
  };

  // Add API key if available
  if (process.env.DEVTO_API_KEY) {
    headers["api-key"] = process.env.DEVTO_API_KEY;
  }

  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=grenishrai&per_page=30",
      { headers }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch articles" }, { status: res.status });
    }

    const articles = await res.json();
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
