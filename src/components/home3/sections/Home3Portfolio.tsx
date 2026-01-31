"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/utils";

const portfolioItems = [
  {
    title: "CNC Machining",
    label: "",
    image: getImageUrl("home/5-Parts-display-CNC-Machined-Components.webp"),
    gridArea: "hero", // Hero card - spans 2 rows, 2 columns
  },
  {
    title: "Die Casting",
    label: "",
    image: getImageUrl("home/5-Parts-display-die-casting-materials-copper-parts.webp"),
    gridArea: "small1",
  },
  {
    title: "Extrusion",
    label: "",
    image: getImageUrl("home/5-Parts-display-extrusion-parts-2.webp"),
    gridArea: "small2",
  },
  {
    title: "Sheet Metal",
    label: "",
    image: getImageUrl("home/5-Parts-display-sheet-metal.webp"),
    gridArea: "small3",
  },
  {
    title: "Injection Molding",
    label: "",
    image: getImageUrl("home/5-Parts-display-Injection-Molding.webp"),
    gridArea: "small4",
  },
  {
    title: "",
    label: "",
    image: getImageUrl("home/5-Parts-display-CNC06-1.webp"),
    gridArea: "small5",
  },
];

function PortfolioCard({
  item,
  index,
  isHero = false
}: {
  item: typeof portfolioItems[0];
  index: number;
  isHero?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{
        borderRadius: "18px",
        minHeight: isHero ? "500px" : "230px",
      }}
    >
      <div className="relative w-full h-full" style={{ minHeight: isHero ? "500px" : "230px" }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay - darker on hover */}
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1) 60%)",
          }}
        />

        {/* Title */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3
            className="text-white"
            style={{
              fontSize: isHero ? "22px" : "18px",
              fontWeight: 600,
            }}
          >
            {item.title}
          </h3>
        </div>
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
            Excellent Parts We Made,
          </h2>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#EEC569",
            }}
          >
            Built for Real Applications
          </h2>
        </motion.div>

        {/* Portfolio Grid - Mobile: single column, Tablet: 2 columns, Desktop: asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mb-16">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Desktop Grid - Asymmetric editorial layout */}
        <div
          className="hidden lg:grid gap-6 mb-16"
          style={{
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "240px 240px",
            gridTemplateAreas: `
              "hero small1 small2"
              "hero small3 small4"
            `,
          }}
        >
          {/* Hero Card - spans 2 rows */}
          <div style={{ gridArea: "hero" }}>
            <PortfolioCard item={portfolioItems[0]} index={0} isHero />
          </div>

          {/* Small Cards */}
          <div style={{ gridArea: "small1" }}>
            <PortfolioCard item={portfolioItems[1]} index={1} />
          </div>
          <div style={{ gridArea: "small2" }}>
            <PortfolioCard item={portfolioItems[2]} index={2} />
          </div>
          <div style={{ gridArea: "small3" }}>
            <PortfolioCard item={portfolioItems[3]} index={3} />
          </div>
          <div style={{ gridArea: "small4" }}>
            <PortfolioCard item={portfolioItems[4]} index={4} />
          </div>
        </div>

        {/* Bottom row - 3 equal cards on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <PortfolioCard item={portfolioItems[5]} index={5} />
          <PortfolioCard
            item={{
              title: "",
              label: "",
              image: getImageUrl("home/5-Parts-display-CNC10-3.webp"),
              gridArea: "small6",
            }}
            index={6}
          />
          <PortfolioCard
            item={{
              title: "",
              label: "",
              image: getImageUrl("home/5-Parts-display-CNC21-1.webp"),
              gridArea: "small7",
            }}
            index={7}
          />
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            className="text-center min-h-[280px] flex flex-col items-center justify-center w-full max-w-3xl"
            style={{
              padding: "clamp(32px, 6vw, 64px) clamp(24px, 5vw, 48px)",
              borderRadius: "28px",
              border: "2px solid #7F4D0F",
              background: "linear-gradient(to bottom, #000000, #34312F)",
              boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            <p
              className="mb-9"
              style={{
                color: "#D09947",
                fontSize: "clamp(20px, 3.5vw, 30px)",
                fontWeight: 500,
              }}
            >
              Ready to experience precision engineering?
            </p>
            <Link
              href="/contact"
              className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
