"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

const features = [
  { highlight: "30-60", text: "Minute quote response" },
  { highlight: "±0.01-0.05mm", text: "Precision control" },
  { highlight: "ISO-certified", text: "Quality system" },
  { highlight: "Free", text: "Technical Support" },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Projects Done" },
  { value: "99.8%", label: "Accuracy Rate" },
];

export function Home3Hero() {
  return (
    <section className="relative min-h-screen bg-[#000000] pt-20 overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208, 153, 71, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 153, 71, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background image - right side only */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `url('${getImageUrl("home/1-homepage-banner.webp")}')`,
        }}
      />
      {/* Diagonal gradient overlay on image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent hidden lg:block" />

      {/* Diagonal gold accent line */}
      <div
        className="absolute top-40 left-0 w-[200px] h-[2px] bg-gradient-to-r from-[#D09947] to-transparent hidden lg:block"
        style={{ transform: "rotate(-45deg) translateX(-50px)" }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid grid-cols-12 gap-8 w-full py-20">
          {/* Left Column - Headlines (spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D09947]/30 rounded mb-8">
              <div className="w-2 h-2 bg-[#D09947] rounded-full animate-pulse" />
              <span className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]">
                Precision Engineering
              </span>
            </div>

            <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold text-white leading-[0.95] tracking-tight uppercase mb-2">
              Precision
            </h1>
            <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold text-white leading-[0.95] tracking-tight uppercase mb-2">
              Manufacturing,
            </h1>
            <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold text-[#D09947] leading-[0.95] tracking-tight uppercase mb-8">
              Built to Last
            </h1>

            <p className="text-[#7A7A7C] text-lg max-w-xl mb-10 leading-relaxed">
              Your Partner for High-Precision Batch Manufacturing. Industrial-grade
              quality with rapid turnaround times.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider flex items-center gap-2 group"
              >
                Get Instant Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#capabilities"
                className="border border-[#4A4A48] hover:border-[#D09947] text-white font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider"
              >
                View Capabilities
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D09947] to-[#7F4D0F] border-2 border-[#000000]"
                  />
                ))}
              </div>
              <div>
                <p className="text-white text-sm">
                  <span className="font-bold text-[#D09947]">25M+</span> Parts Created
                </p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-[#D09947] text-[#D09947]" />
                  ))}
                  <span className="text-[#7A7A7C] text-xs ml-2">22,500+ Happy Customers</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Card (spans 4 cols, offset) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-center"
          >
            <div className="bg-[#4A4A48]/40 backdrop-blur-md rounded-lg p-8 w-full border border-[#D09947]/20 relative overflow-hidden">
              {/* Gold glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D09947]/20 rounded-full blur-3xl" />

              {/* Feature List */}
              <ul className="space-y-5 mb-8 relative">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#D09947]/10 border border-[#D09947]/30 rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#D09947]" />
                    </div>
                    <span className="text-white text-sm">
                      <span className="text-[#D09947] font-semibold">
                        {feature.highlight}
                      </span>{" "}
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D09947]/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-[#D09947] text-2xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-[#7A7A7C] text-[10px] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D09947]/50 to-transparent" />
    </section>
  );
}
