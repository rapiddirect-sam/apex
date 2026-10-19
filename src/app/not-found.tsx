import type { Metadata } from "next";
import Link from "next/link";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { NotFoundExperience } from "@/components/NotFoundExperience";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ApexBatch",
  robots: {
    index: false,
    follow: true,
  },
};

/**
 * Next.js renders this route with an HTTP 404 for unmatched URLs. Keep this
 * page outside the sitemap and do not assign a canonical URL to a missing page.
 */
export default function NotFound() {
  return (
    <>
      <Home3Header />
      <main id="main-content" className="not-found-page">
        <div className="not-found-grid" aria-hidden="true" />
        <section
          className="not-found-content"
          aria-labelledby="not-found-heading"
        >
          <p className="not-found-code" aria-hidden="true">404</p>
          <div className="not-found-copy">
            <h1 id="not-found-heading" tabIndex={-1}>
              Page Not Found
            </h1>
            <p className="not-found-kicker">This Page Is Out of Tolerance.</p>
            <p className="not-found-description">
              The page you&apos;re looking for may have been moved, renamed, or no
              longer exists.
            </p>
          </div>
          <div className="not-found-actions" aria-label="Helpful links">
            <Link href="/" className="not-found-action not-found-action-primary">
              Back to Homepage
            </Link>
            <Link href="/cnc-machining" className="not-found-action not-found-action-secondary">
              Explore CNC Machining
            </Link>
          </div>
        </section>
        <NotFoundExperience />
      </main>
      <Home3Footer />
    </>
  );
}
