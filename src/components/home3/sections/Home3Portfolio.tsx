"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const portfolioItems = [
  {
    title: "CNC Machined Components",
    label: "±0.001MM TOLERANCE",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    gridArea: "hero", // Hero card - spans 2 rows, 2 columns
  },
  {
    title: "Precision Metal Parts",
    label: "ISO CERTIFIED QUALITY",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    gridArea: "small1",
  },
  {
    title: "Industrial Components",
    label: "HEAVY-DUTY APPLICATIONS",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    gridArea: "small2",
  },
  {
    title: "Aluminum Machining",
    label: "LIGHTWEIGHT PRECISION",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    gridArea: "small3",
  },
  {
    title: "Precision Gears",
    label: "COMPLEX GEOMETRIES",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=800&q=80",
    gridArea: "small4",
  },
  {
    title: "Custom Machining",
    label: "TAILORED SOLUTIONS",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
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

        {/* Label and Title */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D09947]" />
            <span
              className="text-[#D09947] font-medium uppercase"
              style={{
                fontSize: "12px",
                letterSpacing: "0.08em",
              }}
            >
              {item.label}
            </span>
          </div>
          <h3
            className="text-white"
            style={{
              fontSize: isHero ? "22px" : "18px",
              fontWeight: 600,
              marginTop: "6px",
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
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "4px",
            }}
          >
            Excellent Parts We Made,
          </h2>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#D09947",
            }}
          >
            Built for Real Applications
          </h2>
        </motion.div>

        {/* Portfolio Grid - Asymmetric editorial layout */}
        {/* Desktop: Hero card (2fr) + 2 small cards (1fr each) on top row, then 3 small cards on bottom */}
        <div
          className="grid gap-6 mb-16"
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

        {/* Bottom row - 3 equal cards */}
        <div
          className="grid gap-6 mb-16"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <PortfolioCard item={portfolioItems[5]} index={5} />
          <PortfolioCard
            item={{
              title: "Metal Components",
              label: "HIGH STRENGTH ALLOYS",
              image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800&q=80",
              gridArea: "small6",
            }}
            index={6}
          />
          <PortfolioCard
            item={{
              title: "Engineering Parts",
              label: "ADVANCED MATERIALS",
              image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
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
            className="text-center min-h-[280px] flex flex-col items-center justify-center"
            style={{
              padding: "64px 48px",
              borderRadius: "28px",
              border: "2px solid #7F4D0F",
              background: `
                radial-gradient(60% 80% at 50% 50%, rgba(249,235,188,0.12), rgba(0,0,0,0) 65%),
                #000000
              `,
              boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            <p
              className="mb-9"
              style={{
                color: "#D09947",
                fontSize: "30px",
                fontWeight: 500,
              }}
            >
              Ready to experience precision engineering?
            </p>
            <button
              className="text-[#0A0A0A] font-semibold text-base transition-all hover:brightness-110"
              style={{
                background: "#D09947",
                borderRadius: "11px",
                padding: "16px 32px",
                boxShadow: "0 4px 15px rgba(208,153,71,0.3)",
              }}
            >
              Get a Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
