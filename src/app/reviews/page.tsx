"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { ReviewsHero } from "@/components/reviews/ReviewsHero";
import { ReviewsGrid } from "@/components/reviews/ReviewsGrid";
import { ReviewsCTA } from "@/components/reviews/ReviewsCTA";

export default function ReviewsPage() {
  return (
    <>
      <Home3Header />
      <main className="bg-[#000000] min-h-screen">
        <ReviewsHero />
        <ReviewsGrid />
        <ReviewsCTA />
      </main>
      <Home3Footer />
    </>
  );
}
