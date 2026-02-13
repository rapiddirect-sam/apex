export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  status: "draft" | "published";
  categoryId: string | null;
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
  categoryId?: string | null;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryInput {
  name: string;
  slug: string;
}
