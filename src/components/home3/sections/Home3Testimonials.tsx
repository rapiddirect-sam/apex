"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { REVIEW_DATA } from "@/components/reviews/ReviewsGrid";

export function Home3Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);
  const review = REVIEW_DATA[activeIndex];
  const reviewCount = REVIEW_DATA.length;

  const goTo = useCallback(
    (index: number) => setActiveIndex((index + reviewCount) % reviewCount),
    [reviewCount]
  );

  const handleTouchStart = (event: React.TouchEvent) => {
    swipeStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const startX = swipeStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    swipeStartX.current = null;

    if (startX === null || endX === undefined || Math.abs(endX - startX) < 48) return;
    goTo(activeIndex + (endX < startX ? 1 : -1));
  };

  return (
    <section className="relative overflow-hidden bg-[#2B2826] py-16 sm:py-20 lg:py-24">
      <Image
        src="/images/home/apexbatch-global-network-map.avif"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.38] brightness-[1.7] invert"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="section-title">
            What Our Clients <span className="service-title-accent">Are Saying</span>
          </h2>
        </motion.div>

        <motion.article
          key={review.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-10 flex flex-col px-2 py-4 sm:block sm:min-h-[360px] sm:px-4 sm:py-6 lg:px-8 lg:py-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#EEC569]">
            {review.projectType}
          </p>
          <blockquote className="mx-auto mt-8 max-w-5xl text-center text-[clamp(0.9375rem,1.35vw,1.125rem)] font-normal italic leading-[1.7] text-[#C5C1BD]">
            “{review.quote}”
          </blockquote>

          <div className="mt-8 flex items-center gap-3 sm:absolute sm:bottom-6 sm:left-4 sm:mt-0 lg:left-8">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous client review"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D09947]/40 text-[#EEC569] transition-colors hover:bg-[#D09947]/10"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="text-xs font-semibold tracking-[0.12em] text-[#AAA7A3]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(reviewCount).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next client review"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D09947]/40 text-[#EEC569] transition-colors hover:bg-[#D09947]/10"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <footer className="mt-6 text-right sm:absolute sm:bottom-6 sm:right-4 sm:mt-0 lg:right-8">
            <p className="text-sm font-semibold text-white">{review.name}</p>
            <p className="mt-1 text-xs text-[#AAA7A3]">{review.location}</p>
          </footer>
        </motion.article>
      </div>
    </section>
  );
}
