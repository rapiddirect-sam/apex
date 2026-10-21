"use client";

import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

// Default content - used when no DB content exists
const DEFAULTS = {
  eyebrow: "ABOUT APEXBATCH",
  headingPrefix: "Power ",
  headingHighlight: "What’s Next",
  description:
    "ApexBatch helps industrial companies move validated designs into reliable production—with engineering review, scalable manufacturing resources, documented quality controls and clear project ownership from pilot runs through repeat orders.",
  tagline: "Right Parts. Right Batch. Right Now.",
  // Reuse the lead production-floor image from the “Built on Experience.
  // Focused on Production.” section so the About page has one clear visual
  // anchor across its hero and capability story.
  backgroundImage: getImageUrl(
    "about/apexbatch-cnc-machining-production-floor-with-operator.avif"
  ),
};

export function AboutHero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1a1512 0%, #2d1f15 25%, #3d2a1a 50%, #4a3520 75%, #1a1512 100%)",
        padding: "clamp(40px, 6vw, 60px) clamp(16px, 4vw, 40px)",
        paddingTop: "clamp(80px, 12vw, 120px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated GIF background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Main card container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          background: "rgba(13,13,13,0.25)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(208,153,71,0.15)",
          borderRadius: "18px",
          padding:
            "clamp(24px, 5vw, 60px) clamp(16px, 5vw, 60px) clamp(24px, 4vw, 50px)",
        }}
      >
        <p className="mb-5 text-center text-sm font-semibold tracking-[0.18em] text-[#D09947]">
          <EditableText
            path="hero.eyebrow"
            defaultValue={DEFAULTS.eyebrow}
          />
        </p>

        {/* Main heading */}
        <h1 className="mb-6 text-center text-[48px] font-bold leading-[0.95] tracking-tight md:text-[64px] lg:text-[80px]">
          <span className="text-white">
            <EditableText
              path="hero.titlePrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />
          </span>
          <span className="text-[#EEC569]">
            <EditableText
              path="hero.titleHighlight"
              defaultValue={DEFAULTS.headingHighlight}
            />
          </span>
        </h1>

        <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-[#D2D2D2] md:text-xl">
          <EditableText
            path="hero.productionDescription"
            defaultValue={DEFAULTS.description}
            multiline
          />
        </p>

        <p className="mx-auto mt-5 text-center text-lg font-semibold tracking-[0.04em] text-[#EEC569] md:text-xl">
          <EditableText
            path="hero.slogan"
            defaultValue={DEFAULTS.tagline}
          />
        </p>
      </motion.div>
    </section>
  );
}
