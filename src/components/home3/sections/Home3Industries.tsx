"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const industries = [
  {
    title: "Medical Devices",
    description: "ISO 13485 compliant precision components for life-critical applications. Full traceability and documentation for regulatory compliance.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
  },
  {
    title: "Aerospace",
    description: "AS9100 certified high-performance parts with full traceability. Meeting the strictest quality and safety standards for aviation.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    title: "Automotive",
    description: "IATF 16949 quality management for OEM and aftermarket components. High-volume production with consistent precision.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
  },
  {
    title: "Consumer Electronics",
    description: "Production of precision metal and plastic components for enclosures, internal frames, and functional assemblies in consumer electronics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
];

export function Home3Industries() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industries{" "}
            <span
              className="text-[#D4A03A]"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              We Serve
            </span>
          </h2>
          <p className="text-white text-base md:text-lg max-w-3xl mx-auto">
            Supporting medium-to-large batch production across industries with strict
            performance, compliance, and delivery requirements.
          </p>
        </motion.div>

        {/* Industries Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map((industry, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                {/* Background image */}
                <div className="relative aspect-[16/11]">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />

                  {/* Title */}
                  <div className="absolute top-5 left-5">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    className="absolute top-5 right-5 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(index);
                    }}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#D4A03A]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#D4A03A]" />
                    )}
                  </button>

                  {/* Expanded Description - Frosted Glass Overlay */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-4 left-4 right-4"
                      >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                          <p className="text-white/90 text-sm leading-relaxed">
                            {industry.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
