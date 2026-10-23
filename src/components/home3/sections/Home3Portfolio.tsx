"use client";

import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  titleWhiteLine1: "Excellent Parts We Made,",
  titleHighlightLine2: "Built for Real Applications",
  portfolioItems: [
    {
      title: "CNC Machining",
      image: getImageUrl("home/5-Parts-display-CNC-Machined-Components.webp"),
    },
    {
      title: "Die Casting",
      image: getImageUrl("home/5-Parts-display-die-casting-materials-copper-parts.webp"),
    },
    {
      title: "Extrusion",
      image: getImageUrl("home/5-Parts-display-extrusion-parts-2.webp"),
    },
    {
      title: "Sheet Metal",
      image: getImageUrl("home/5-Parts-display-sheet-metal.webp"),
    },
    {
      title: "Injection Molding",
      image: getImageUrl("home/5-Parts-display-Injection-Molding.webp"),
    },
  ],
};

function PortfolioCard({ index }: { index: number }) {
  const item = DEFAULTS.portfolioItems[index];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{
        borderRadius: "18px",
        minHeight: "230px",
      }}
    >
      <div className="relative h-full w-full" style={{ minHeight: "230px" }}>
        <EditableImage
          path={`portfolio.items.${index}.image`}
          defaultSrc={item.image}
          alt={item.title || `Portfolio item ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay - darker on hover */}
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1) 60%)",
          }}
        />

        {/* Title */}
        {item.title && (
          <div className="absolute bottom-5 left-5 right-5">
            <p
              className="text-white"
              style={{
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              <EditableText
                path={`portfolio.items.${index}.title`}
                defaultValue={item.title}
              />
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Home3Portfolio() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "96px 0",
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
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "4px",
            }}
          >
            <EditableText
              path="portfolio.titleWhiteLine1"
              defaultValue={DEFAULTS.titleWhiteLine1}
            />
            <span className="text-[#EEC569]">{" "}
              <EditableText
                path="portfolio.titleHighlightLine2"
                defaultValue={DEFAULTS.titleHighlightLine2}
              />
            </span>
          </h2>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {DEFAULTS.portfolioItems.map((_, index) => (
            <PortfolioCard key={index} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
