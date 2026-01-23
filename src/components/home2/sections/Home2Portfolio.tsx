"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Images, ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "CNC Machined Components",
    label: "±0.001MM TOLERANCE",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    size: "large",
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
    size: "tall",
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
    size: "large",
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
      className={`group relative rounded-lg overflow-hidden border border-[#4A4A48] hover:border-[#D09947]/50 transition-colors ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
    >
      <div className="relative w-full h-full min-h-[240px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/30 to-transparent" />

        {/* Gold tint on hover */}
        <div className="absolute inset-0 bg-[#D09947]/0 group-hover:bg-[#D09947]/10 transition-colors duration-300" />

        {/* Label and Title */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#D09947]" />
            <span
              className="text-[#D09947] text-xs font-medium tracking-wider uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {item.label}
            </span>
          </div>
          <h3
            className="text-white font-bold text-lg uppercase tracking-wide"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function Home2Portfolio() {
  return (
    <section className="py-24 bg-[#000000] relative overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute top-20 right-0 w-[200px] h-[2px] bg-gradient-to-l from-[#D09947] to-transparent hidden lg:block"
        style={{ transform: "rotate(-45deg) translateX(100px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - Asymmetric */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D09947]/30 rounded mb-6">
              <Images className="w-4 h-4 text-[#D09947]" />
              <span
                className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Our Work
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-2"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Excellent Parts We Made,
            </h2>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#D09947] uppercase tracking-tight"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Built for Real Applications
            </h2>
          </motion.div>
        </div>

        {/* Portfolio Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-5 mb-16">
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
          <div className="bg-[#4A4A48]/40 border border-[#4A4A48] rounded-lg px-16 py-10 text-center">
            <p
              className="text-[#C5C6C9] text-lg mb-6"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Ready to experience precision engineering?
            </p>
            <button
              className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-10 rounded text-sm transition-all uppercase tracking-wider flex items-center gap-2 group mx-auto"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
