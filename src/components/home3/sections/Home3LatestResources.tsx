"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText } from "lucide-react";

export interface LatestResourcePost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  publishedAt: string | null;
}

export function Home3LatestResources({ posts }: { posts: LatestResourcePost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-[#171615] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="section-title">
            Make Better <span className="service-title-accent">Manufacturing Decisions</span>
          </h2>
          <Link href="/blog" className="body-text-link body-text-link--dark inline-flex items-center gap-2 text-sm">
            Explore All Resources <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-xl border border-[#EEC569]/20 bg-[#24211F] shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EEC569]/60 hover:shadow-[0_16px_34px_rgba(0,0,0,0.36)]"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative aspect-video overflow-hidden bg-[#11100E]">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FileText className="h-10 w-10 text-[#EEC569]/45" aria-hidden="true" />
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  {post.publishedAt ? (
                    <p className="flex items-center gap-1.5 text-xs font-medium text-[#B0960E]">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  ) : null}
                  <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-[1.35] text-[#F4F1EC] sm:text-xl">
                    {post.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#EEC569]">
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
