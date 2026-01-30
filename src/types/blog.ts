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
}

export interface BlogPostInput {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  status: "draft" | "published";
}
