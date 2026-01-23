"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp, Building2 } from "lucide-react";

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

export function Home2Industries() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#2E2C2B] relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208, 153, 71, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 153, 71, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
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
              <Building2 className="w-4 h-4 text-[#D09947]" />
              <span
                className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Industry Solutions
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Industries <span className="text-[#D09947]">We Serve</span>
            </h2>
            <p
              className="text-[#7A7A7C] text-lg max-w-2xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Supporting medium-to-large batch production across industries with strict
              performance, compliance, and delivery requirements.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group rounded-lg overflow-hidden border border-[#4A4A48] hover:border-[#D09947]/50 cursor-pointer transition-colors"
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

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-[#000000]/20" />

                  {/* Title */}
                  <div className="absolute top-5 left-5">
                    <h3
                      className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-archivo)" }}
                    >
                      {industry.title}
                    </h3>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    className="absolute top-5 right-5 w-10 h-10 bg-[#D09947] hover:bg-[#EEC569] rounded flex items-center justify-center transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(index);
                    }}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#000000]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#000000]" />
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
                        <div className="bg-[#4A4A48]/80 backdrop-blur-md border border-[#D09947]/30 rounded-lg p-5">
                          <p
                            className="text-[#C5C6C9] text-sm leading-relaxed"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          >
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
