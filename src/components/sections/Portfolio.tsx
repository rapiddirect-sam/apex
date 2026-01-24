"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const portfolioItems = [
  {
    title: "Precision Metal Parts",
    subtitle: "ISO Certified",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    size: "large",
  },
  {
    title: "CNC Components",
    subtitle: "±0.01mm Tolerance",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
    size: "normal",
  },
  {
    title: "Aluminum Machining",
    subtitle: "Lightweight",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    size: "normal",
  },
  {
    title: "Industrial Parts",
    subtitle: "Heavy-Duty",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    size: "normal",
  },
  {
    title: "Precision Gears",
    subtitle: "Complex Geometry",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=600&q=80",
    size: "normal",
  },
  {
    title: "Engineering Parts",
    subtitle: "Advanced Materials",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    size: "normal",
  },
];

export function Portfolio() {
  return (
    <section className="py-32 bg-apex-void relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(212,160,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,58,1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
            <p className="text-technical text-gold-primary mb-4">
              Our Work
            </p>
            <h2 className="text-display text-display-xl text-white">
              Built for
              <br />
              <span className="text-gray-500">Real Applications</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md">
            From prototypes to production runs, we deliver precision parts
            that meet the demands of critical applications.
          </p>
        </motion.div>

        {/* Portfolio Grid - Masonry-like layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative overflow-hidden ${
                item.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${
                item.size === "large" ? "aspect-square" : "aspect-square"
              }`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-apex-void via-apex-void/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                  <h3 className="text-display text-lg lg:text-xl text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-gold-primary text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border border-gold-primary/0 group-hover:border-gold-primary/30 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
