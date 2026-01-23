"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const portfolioItems = [
  {
    title: "CNC Machined Components",
    label: "±0.001MM TOLERANCE",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    size: "large", // spans 2 rows
  },
  {
    title: "Precision Metal Parts",
    label: "ISO CERTIFIED QUALITY",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    size: "small",
  },
  {
    title: "Industrial Components",
    label: "HEAVY-DUTY APPLICATIONS",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    size: "tall", // spans 2 rows
  },
  {
    title: "Aluminum Machining",
    label: "LIGHTWEIGHT PRECISION",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    size: "small",
  },
  {
    title: "Precision Gears",
    label: "COMPLEX GEOMETRIES",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=800&q=80",
    size: "large", // spans 2 rows
  },
  {
    title: "Custom Machining",
    label: "TAILORED SOLUTIONS",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    size: "small",
  },
  {
    title: "Metal Components",
    label: "HIGH STRENGTH ALLOYS",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800&q=80",
    size: "tall",
  },
  {
    title: "Engineering Parts",
    label: "ADVANCED MATERIALS",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    size: "small",
  },
];

function PortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const sizeClasses = {
    large: "col-span-1 row-span-2",
    tall: "col-span-1 row-span-2",
    small: "col-span-1 row-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group relative rounded-2xl overflow-hidden ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
    >
      <div className="relative w-full h-full min-h-[240px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Label and Title */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#D4A03A]" />
            <span className="text-[#D4A03A] text-xs font-medium tracking-wider uppercase">
              {item.label}
            </span>
          </div>
          <h3 className="text-white font-bold text-lg">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function Home3Portfolio() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-2"
            style={{ fontStyle: "italic" }}
          >
            Excellent Parts We Made,
          </h2>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#D4A03A]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Built for Real Applications
          </h2>
        </motion.div>

        {/* Portfolio Grid - Bento style */}
        <div className="grid grid-cols-3 auto-rows-[220px] gap-5 mb-16">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-[#141414] border border-[#333333] rounded-2xl px-16 py-10 text-center">
            <p className="text-white/80 text-lg mb-6">
              Ready to experience precision engineering?
            </p>
            <button className="bg-[#1A1A1A] hover:bg-[#252525] border border-[#444444] text-white font-semibold py-4 px-10 rounded-full text-base transition-colors">
              Get a Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
