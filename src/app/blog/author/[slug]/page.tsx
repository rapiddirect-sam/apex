import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { AuthorProfile } from "@/components/blog/AuthorProfile";
import { getAuthorBySlug, getAllAuthors } from "@/lib/authors";
import { getPublishedPosts } from "@/lib/blog";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const authors = await getAllAuthors();
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    return { title: "Author Not Found | ApexBatch" };
  }

  const description = author.bio.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  return {
    title: `${author.name} | ApexBatch Blog`,
    description: description || `Articles by ${author.name} at ApexBatch.`,
    alternates: { canonical: `/blog/author/${author.slug}` },
    openGraph: {
      title: `${author.name} | ApexBatch Blog`,
      description: description || `Articles by ${author.name} at ApexBatch.`,
      images: author.avatarUrl ? [author.avatarUrl] : [],
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = (await getPublishedPosts()).filter((post) => post.authorRef === author.id);

  return (
    <>
      <Home3Header />
      <div className="blog-scrollbar-theme">
        <AuthorProfile author={author} posts={posts} />
      </div>
      <Home3Footer />
    </>
  );
}
