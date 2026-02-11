"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";
import { getImageUrl } from "@/lib/utils";

const DEFAULTS = {
  backgroundImage: getImageUrl("quality/servicebg.png"),
  titlePart1: "Precision ",
  titleHighlight: "Quality Assurance",
  titlePart2: " System",
  description:
    "At ApexBatch, quality is not just a department\u2014it\u2019s embedded in every stage of our manufacturing process. Our comprehensive three-phase quality assurance system ensures every component meets the highest standards of precision, reliability, and consistency.",
  stats: [
    { value: "\u00B10.01-0.05mm", label: "Tolerance Control" },
    { value: "100%", label: "Traceability" },
    { value: "ISO Certified", label: "Quality Management" },
  ],
};

export function QualityHero() {
  return (
    <section
      className="relative pt-24 pb-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.10),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-30">
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Quality background"
          fill
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208, 153, 71, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 153, 71, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            <span className="text-white">
              <EditableText path="hero.titlePart1" defaultValue={DEFAULTS.titlePart1} />
            </span>
            <span style={{ color: "#EEC569" }}>
              <EditableText path="hero.titleHighlight" defaultValue={DEFAULTS.titleHighlight} />
            </span>
            <span className="text-white">
              <EditableText path="hero.titlePart2" defaultValue={DEFAULTS.titlePart2} />
            </span>
          </h1>

          <p
            style={{
              color: "#C5C6C9",
              fontSize: "18px",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            <EditableText
              path="hero.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {DEFAULTS.stats.map((stat, index) => (
              <div
                key={index}
                className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1 flex-1"
                style={{
                  background: "linear-gradient(to right, rgba(208,153,71,0.4) 0%, #EEC569 100%)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}
              >
                <div
                  className="text-lg sm:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap"
                >
                  <EditableText
                    path={`hero.stats.${index}.value`}
                    defaultValue={stat.value}
                  />
                </div>
                <div
                  className="text-white/80 text-xs sm:text-sm"
                >
                  <EditableText
                    path={`hero.stats.${index}.label`}
                    defaultValue={stat.label}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
