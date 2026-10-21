import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, FileText, Linkedin } from "lucide-react";
import { Author, BlogPost } from "@/types/blog";
import { SanitizedHTML } from "./SanitizedHTML";

function estimateReadTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

interface AuthorProfileProps {
  author: Author;
  posts: BlogPost[];
}

export function AuthorProfile({ author, posts }: AuthorProfileProps) {
  return (
    <main className="bg-[#F7F7F7] pt-16 sm:pt-20">
      <section className="border-y border-[#E8E8E8] bg-[#F7F7F7] py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:px-8">
          <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-sm bg-[#E8E8E8]">
            {author.avatarUrl ? (
              <Image
                src={author.avatarUrl}
                alt={author.name}
                fill
                sizes="(max-width: 1024px) 280px, 280px"
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#D09947] to-[#EEC569] text-7xl font-bold text-white">
                {author.name[0]?.toUpperCase() || "A"}
              </div>
            )}
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#A97628]">
              About the Author
            </p>
            <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-[#1E1E1E] sm:text-5xl">
              {author.name}
            </h1>
            {author.bio ? (
              <SanitizedHTML html={author.bio} className="author-profile-bio" />
            ) : (
              <p className="author-profile-bio">Manufacturing insights and practical guidance from ApexBatch.</p>
            )}
            {author.socialLinkedin && (
              <a
                href={`https://www.linkedin.com/in/${author.socialLinkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on LinkedIn`}
                className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D8D8D8] text-[#5E5E5E] transition-colors hover:border-[#A97628] hover:bg-[#A97628] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A97628] focus-visible:ring-offset-2"
              >
                <Linkedin size={22} strokeWidth={2} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#1E1E1E]">
          All Articles From {author.name}
        </h2>

        {posts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="group overflow-hidden rounded-xl border border-[#E8E8E8] bg-white transition-shadow hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D09947] focus-visible:ring-offset-4">
                  <div className="relative aspect-[4/3] bg-[#F5F5F5]">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <FileText size={44} className="text-[#CFCFCF]" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#A97628]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {post.publishedAt?.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} />
                        {estimateReadTime(post.content)} min read
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-snug text-[#1E1E1E] group-hover:text-[#A97628]">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="line-clamp-3 text-sm leading-6 text-[#666]">{post.excerpt}</p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#A97628]">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-[#E8E8E8] bg-[#F7F7F7] px-6 py-8 text-[#666]">
            Articles by {author.name} will appear here soon.
          </p>
        )}
      </section>

      <style>{`
        .author-profile-bio {
          max-width: 48rem;
          color: #5E5E5E;
          font-size: 16px;
          line-height: 1.7;
        }
        .author-profile-bio p + p {
          margin-top: 1rem;
        }
      `}</style>
    </main>
  );
}
