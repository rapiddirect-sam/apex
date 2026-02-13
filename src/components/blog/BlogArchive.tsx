"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, Category } from "@/types/blog";
import {
  Calendar,
  ArrowRight,
  FileText,
  Clock,
  Search,
  ChevronDown,
} from "lucide-react";
import { getImageUrl } from "@/lib/utils";

function estimateReadTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words < 1500) return 5;
  if (words <= 2000) return 8;
  return 10;
}

interface BlogArchiveProps {
  posts: BlogPost[];
  categories: Category[];
}

export function BlogArchive({ posts, categories }: BlogArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        !selectedCategory || post.categoryId === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const selectedCategoryName =
    categories.find((c) => c.id === selectedCategory)?.name || "All Categories";

  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId) return null;
    return categories.find((c) => c.id === categoryId)?.name || null;
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          paddingTop: "120px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Image
            src={getImageUrl("home/3-our-services-cnc-machining.webp")}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(15,13,13,0.75), rgba(15,13,13,0.85))",
            }}
          />
        </div>

        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.3,
                marginBottom: "16px",
              }}
            >
              Expert Insights{" "}
              <br className="hidden sm:block" />
              Practical Techniques{" "}
              <br className="hidden sm:block" />
              Industry Trends
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "16px",
                lineHeight: 1.6,
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              Created for Manufacturing Professionals, actionable knowledge you
              can apply directly.
            </p>

            {/* Search Bar */}
            <div
              style={{
                position: "relative",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#999",
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 44px",
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "15px",
                  color: "#1E1E1E",
                  outline: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "28px 0 20px",
              borderBottom: "1px solid #E5E5E5",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1E1E1E",
              }}
            >
              {searchQuery
                ? `Search results`
                : selectedCategory
                  ? selectedCategoryName
                  : "Latest Articles"}
              {" "}
              <span style={{ color: "#999", fontWeight: 400 }}>
                ({filteredPosts.length})
              </span>
            </h2>

            {/* Category Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  background: "#FFFFFF",
                  border: "1px solid #D4D4D4",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1E1E1E",
                  cursor: "pointer",
                }}
              >
                {selectedCategoryName}
                <ChevronDown
                  size={16}
                  style={{
                    transition: "transform 0.2s",
                    transform: showCategoryDropdown
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>

              {showCategoryDropdown && (
                <>
                  <div
                    style={{
                      position: "fixed",
                      inset: 0,
                      zIndex: 40,
                    }}
                    onClick={() => setShowCategoryDropdown(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 4px)",
                      right: 0,
                      minWidth: "200px",
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      borderRadius: "10px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      zIndex: 50,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => {
                        setSelectedCategory("");
                        setShowCategoryDropdown(false);
                      }}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "10px 16px",
                        textAlign: "left",
                        background:
                          selectedCategory === "" ? "#F5F5F5" : "transparent",
                        border: "none",
                        fontSize: "14px",
                        color: "#1E1E1E",
                        cursor: "pointer",
                        fontWeight: selectedCategory === "" ? 600 : 400,
                      }}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setShowCategoryDropdown(false);
                        }}
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px 16px",
                          textAlign: "left",
                          background:
                            selectedCategory === cat.id
                              ? "#F5F5F5"
                              : "transparent",
                          border: "none",
                          fontSize: "14px",
                          color: "#1E1E1E",
                          cursor: "pointer",
                          fontWeight:
                            selectedCategory === cat.id ? 600 : 400,
                        }}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section
        style={{
          padding: "40px 0 80px",
          background: "#FFFFFF",
          minHeight: "50vh",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
              }}
            >
              <FileText
                size={48}
                style={{ color: "#D4D4D4", margin: "0 auto 16px" }}
              />
              <h3
                style={{
                  color: "#1E1E1E",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                {searchQuery ? "No results found" : "No posts yet"}
              </h3>
              <p style={{ color: "#888", fontSize: "15px" }}>
                {searchQuery
                  ? "Try adjusting your search or category filter."
                  : "Check back soon for updates!"}
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("");
                  }}
                  style={{
                    marginTop: "20px",
                    padding: "10px 24px",
                    background: "#1E1E1E",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "28px",
              }}
            >
              {filteredPosts.map((post) => {
                const categoryName = getCategoryName(post.categoryId);
                const readTime = estimateReadTime(post.content);

                return (
                  <article
                    key={post.id}
                    className="group"
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid #E8E8E8",
                      transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 32px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      {/* Featured Image */}
                      <div
                        style={{
                          position: "relative",
                          height: "200px",
                          background: "#F5F5F5",
                          overflow: "hidden",
                        }}
                      >
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            style={{
                              objectFit: "cover",
                              transition: "transform 0.5s",
                            }}
                            className="group-hover:scale-105"
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
                            <FileText size={48} style={{ color: "#D4D4D4" }} />
                          </div>
                        )}

                        {/* Category Badge */}
                        {categoryName && (
                          <span
                            style={{
                              position: "absolute",
                              top: "12px",
                              left: "12px",
                              background:
                                "linear-gradient(135deg, #D09947, #EEC569)",
                              color: "#FFFFFF",
                              fontSize: "11px",
                              fontWeight: 700,
                              padding: "5px 12px",
                              borderRadius: "6px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {categoryName}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ padding: "20px 24px 24px" }}>
                        {/* Meta: Date + Read Time */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              color: "#B0960E",
                              fontSize: "13px",
                            }}
                          >
                            <Calendar size={13} />
                            {post.publishedAt?.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              color: "#B0960E",
                              fontSize: "13px",
                            }}
                          >
                            <Clock size={13} />
                            {readTime} min read
                          </div>
                        </div>

                        {/* Title */}
                        <h2
                          style={{
                            color: "#1E1E1E",
                            fontSize: "18px",
                            fontWeight: 700,
                            marginBottom: "10px",
                            lineHeight: 1.4,
                          }}
                        >
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        {post.excerpt && (
                          <p
                            style={{
                              color: "#666",
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

                        {/* Read More */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            color: "#D09947",
                            fontSize: "14px",
                            fontWeight: 600,
                          }}
                        >
                          Read More
                          <ArrowRight
                            size={15}
                            className="group-hover:translate-x-1"
                            style={{ transition: "transform 0.2s" }}
                          />
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
