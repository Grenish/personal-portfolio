export interface PaginationMetadata {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  perPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  slug?: string;
  published_at: string;
  reading_time_minutes: number;
  page_views_count?: number;
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
  body_html?: string;
  body_markdown?: string;
  public_reactions_count?: number;
  comments_count?: number;
}

export interface PaginatedArticlesResponse {
  articles: Article[];
  pagination: PaginationMetadata;
}