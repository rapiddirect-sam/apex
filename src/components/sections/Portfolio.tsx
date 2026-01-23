"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const portfolioItems = [
  {
    title: "Precision Metal Parts",
    subtitle: "ISO Certified Quality",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    title: "CNC Machined Components",
    subtitle: "±0.01mm Tolerance",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
  },
  {
    title: "Aluminum Machining",
    subtitle: "Lightweight & Precision",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    title: "Industrial Components",
    subtitle: "Heavy-Duty Applications",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    title: "Precision Gears",
    subtitle: "Complex Geometries",
    image:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=600&q=80",
  },
  {
    title: "Engineering Parts",
    subtitle: "Advanced Materials",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
  {
    title: "Metal Components",
    subtitle: "High Strength Alloys",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80",
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-apex-black">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">
            EXCELLENT PARTS WE MADE
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-apex-white">
            BUILT FOR REAL APPLICATIONS
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "h-[400px] md:h-full" : "h-[200px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-apex-black via-apex-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-display text-lg text-apex-white">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="text-gold-primary text-sm">{item.subtitle}</p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-primary/50 rounded-xl transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
