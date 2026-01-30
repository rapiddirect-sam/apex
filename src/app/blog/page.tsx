import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { getPublishedPosts } from "@/lib/blog";
import { Calendar, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | ApexBatch - Precision Manufacturing Insights",
  description: "Insights, updates, and expertise from the world of precision manufacturing. Learn about CNC machining, injection molding, and more.",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <Home3Header />

      {/* Hero Section */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
          background: "linear-gradient(135deg, #1a1512 0%, #2d1f15 50%, #1a1512 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Our <span style={{ color: "#EEC569" }}>Blog</span>
            </h1>
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "18px",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Insights, updates, and expertise from the world of precision manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section
        style={{
          padding: "80px 0",
          background: "#1a1a1a",
          minHeight: "50vh",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
              }}
            >
              <FileText size={48} style={{ color: "#444", margin: "0 auto 16px" }} />
              <h3 style={{ color: "#fff", fontSize: "20px", marginBottom: "8px" }}>
                No posts yet
              </h3>
              <p style={{ color: "#888" }}>Check back soon for updates!</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "32px",
              }}
            >
              {posts.map((post) => (
                <article
                  key={post.id}
                  style={{
                    background: "#2a2a2a",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #333",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                    {/* Featured Image */}
                    <div
                      style={{
                        position: "relative",
                        height: "220px",
                        background: "#1a1a1a",
                      }}
                    >
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FileText size={48} style={{ color: "#333" }} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ padding: "24px" }}>
                      {/* Date */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#888",
                          fontSize: "13px",
                          marginBottom: "12px",
                        }}
                      >
                        <Calendar size={14} />
                        {post.publishedAt?.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>

                      {/* Title */}
                      <h2
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: 600,
                          marginBottom: "12px",
                          lineHeight: 1.4,
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p
                          style={{
                            color: "#888",
                            fontSize: "14px",
                            lineHeight: 1.6,
                            marginBottom: "16px",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {post.excerpt}
                        </p>
                      )}

                      {/* Read more */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#D09947",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Read More
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Home3Footer />
    </>
  );
}
