"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";
import { useCMS } from "@/contexts/CMSContext";

const AUTO_PLAY_MS = 4000;

const DEFAULTS = {
  heading: "CNC Turning ",
  headingHighlight: "Workshop & Inspection Facilities",
  subheading: "See the CNC Turning, inspection, finishing, and delivery support behind ApexBatch's high-precision manufacturing workflow.",
  items: [
    {
      title: "CNC Turning Workshop",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-machine-overview-1.webp",
    },
    {
      title: "Swiss-Type Turning Area",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/cnc-turning.webp",
    },
    {
      title: "Quality Inspection Lab",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-factory-3.webp",
    },
    {
      title: "Surface Finishing Support",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-factory-3.webp",
    },
    {
      title: "Assembly & Packaging Area",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/cnc-turning.webp",
    },
  ],
};

function FacilityCard({
  item,
  index,
  isActive,
}: {
  item: (typeof DEFAULTS.items)[number];
  index: number;
  isActive: boolean;
}) {
  return (
    <article
      className="group h-full overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        border: isActive ? "2px solid #D09947" : "1px solid rgba(255,255,255,0.22)",
        boxShadow: isActive
          ? "0 0 0 1px rgba(208,153,71,0.35), 0 24px 60px rgba(0,0,0,0.45), 0 0 32px rgba(208,153,71,0.35)"
          : "0 24px 60px rgba(0,0,0,0.45)",
      }}
    >
      <div className="relative min-h-[360px] h-full overflow-hidden">
        <EditableImage
          path={`facilities.items.${index}.image`}
          defaultSrc={item.image}
          alt={item.title}
          fill
          className={`object-cover transition-transform duration-500 ${isActive ? "group-hover:scale-105" : ""}`}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-5 pointer-events-none">
          <h3
            className="text-white drop-shadow-md pointer-events-auto"
            style={{
              fontSize: isActive ? "28px" : "22px",
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: "90%",
            }}
          >
            <EditableText path={`facilities.items.${index}.title`} defaultValue={item.title} />
          </h3>
        </div>
      </div>
    </article>
  );
}

function getNormalizedDiff(index: number, activeIndex: number, length: number) {
  let diff = index - activeIndex;
  while (diff > length / 2) diff -= length;
  while (diff < -length / 2) diff += length;
  return diff;
}

export function CMTFacilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { isEditMode } = useCMS();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const itemCount = DEFAULTS.items.length;

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + itemCount) % itemCount);
  }, [itemCount]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  useEffect(() => {
    if (isPaused || isEditMode) return;

    const timer = window.setInterval(nextSlide, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, isEditMode, nextSlide]);

  const getCardLayout = (diff: number) => {
    const cardWidth = isMobile ? "82%" : "50%";

    if (diff === 0) {
      return {
        left: isMobile ? "9%" : "25%",
        width: cardWidth,
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
      };
    }

    if (diff === -1) {
      return {
        left: isMobile ? "-24%" : "-10%",
        width: cardWidth,
        y: 18,
        scale: isMobile ? 0.92 : 0.94,
        opacity: 0.88,
        zIndex: 10,
      };
    }

    if (diff === 1) {
      return {
        left: isMobile ? "42%" : "60%",
        width: cardWidth,
        y: 18,
        scale: isMobile ? 0.92 : 0.94,
        opacity: 0.88,
        zIndex: 10,
      };
    }

    return {
      left: diff < 0 ? "-55%" : "105%",
      width: cardWidth,
      y: 24,
      scale: 0.88,
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "56px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.15,
            }}
          >
            <EditableText path="facilities.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="facilities.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p
            className="mx-auto w-[80%]"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "16px",
            }}
          >
            <EditableText path="facilities.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous facility"
            className="absolute left-0 top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)] md:flex"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "8px",
              background: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(208,153,71,0.35)",
            }}
          >
            <ChevronLeft className="w-5 h-5" style={{ color: "#D09947" }} />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next facility"
            className="absolute right-0 top-1/2 z-40 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)] md:flex"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "8px",
              background: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(208,153,71,0.35)",
            }}
          >
            <ChevronRight className="w-5 h-5" style={{ color: "#D09947" }} />
          </button>

          <div className="relative overflow-hidden" style={{ height: "380px" }}>
            {DEFAULTS.items.map((item, index) => {
              const diff = getNormalizedDiff(index, activeIndex, itemCount);
              const layout = getCardLayout(diff);
              const isActive = diff === 0;
              const isAdjacent = Math.abs(diff) === 1;

              return (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => isAdjacent && goTo(index)}
                  aria-label={isActive ? item.title : `View ${item.title}`}
                  className="absolute top-0 p-0 border-0 bg-transparent text-left"
                  initial={false}
                  animate={layout}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    cursor: isAdjacent ? "pointer" : "default",
                    pointerEvents: isActive || isAdjacent ? "auto" : "none",
                  }}
                >
                  <FacilityCard item={item} index={index} isActive={isActive} />
                </motion.button>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-3" style={{ marginTop: "28px" }}>
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous facility"
              className="flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)] md:hidden"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "rgba(0,0,0,0.55)",
                border: "1px solid rgba(208,153,71,0.35)",
              }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: "#D09947" }} />
            </button>

            <div className="flex gap-2">
              {DEFAULTS.items.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to facility ${index + 1}`}
                  className="h-1 rounded-full transition-all"
                  style={{
                    width: index === activeIndex ? "24px" : "12px",
                    background: index === activeIndex ? "#D09947" : "#444444",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next facility"
              className="flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)] md:hidden"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "rgba(0,0,0,0.55)",
                border: "1px solid rgba(208,153,71,0.35)",
              }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: "#D09947" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
