import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { Calendar, ArrowLeft, User } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all published posts
export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | ApexBatch Blog`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  return (
    <>
      <Home3Header />

      {/* Hero with Featured Image */}
      <section
        style={{
          paddingTop: "80px",
          background: "linear-gradient(135deg, #1a1512 0%, #2d1f15 50%, #1a1512 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <div>
            {/* Back link */}
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#D09947",
                textDecoration: "none",
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                color: "#888",
                fontSize: "14px",
                marginBottom: "32px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={16} />
                {post.publishedAt?.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <User size={16} />
                {post.authorEmail}
              </div>
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          padding: "60px 0 100px",
          background: "#1a1a1a",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <style>{`
            .blog-content {
              color: #C5C6C9;
              font-size: 17px;
              line-height: 1.8;
            }
            .blog-content > * + * {
              margin-top: 1.5em;
            }
            .blog-content h1 {
              font-size: 2.25em;
              font-weight: 700;
              color: #fff;
              margin-top: 2em;
            }
            .blog-content h2 {
              font-size: 1.75em;
              font-weight: 600;
              color: #fff;
              margin-top: 2em;
            }
            .blog-content h3 {
              font-size: 1.375em;
              font-weight: 600;
              color: #fff;
              margin-top: 1.5em;
            }
            .blog-content p {
              color: #C5C6C9;
            }
            .blog-content a {
              color: #D09947;
              text-decoration: underline;
            }
            .blog-content a:hover {
              color: #EEC569;
            }
            .blog-content ul,
            .blog-content ol {
              padding-left: 1.5em;
            }
            .blog-content li {
              margin-top: 0.5em;
            }
            .blog-content blockquote {
              border-left: 4px solid #D09947;
              padding-left: 1.5em;
              margin-left: 0;
              font-style: italic;
              color: #999;
            }
            .blog-content code {
              background: #2a2a2a;
              padding: 0.2em 0.5em;
              border-radius: 4px;
              font-family: monospace;
              font-size: 0.9em;
            }
            .blog-content pre {
              background: #2a2a2a;
              padding: 1.5em;
              border-radius: 12px;
              overflow-x: auto;
            }
            .blog-content pre code {
              background: none;
              padding: 0;
            }
            .blog-content img {
              max-width: 100%;
              height: auto;
              border-radius: 12px;
              margin: 2em auto;
              display: block;
            }
            .blog-content hr {
              border: none;
              border-top: 1px solid #333;
              margin: 3em 0;
            }
            .blog-content strong {
              color: #fff;
              font-weight: 600;
            }
          `}</style>
        </div>
      </section>

      <Home3Footer />
    </>
  );
}
