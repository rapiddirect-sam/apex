export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  status: "draft" | "published";
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  authorId: string;
  authorEmail: string;
  metaTitle: string | null;
  metaDescription: string | null;
}

export interface BlogPostInput {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  status: "draft" | "published";
  metaTitle?: string;
  metaDescription?: string;
}
