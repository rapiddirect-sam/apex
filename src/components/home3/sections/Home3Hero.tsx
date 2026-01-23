"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

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
    <section className="relative min-h-[90vh] bg-[#0A0A0A] pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80')"
        }}
      />
      {/* Dark overlay - heavier on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(90vh-64px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 w-full py-16 lg:py-20">
          {/* Left Column - Headlines and Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[40px] md:text-[52px] lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              Precision
            </h1>
            <h1 className="text-[40px] md:text-[52px] lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              Manufacturing,
            </h1>
            <h1
              className="text-[40px] md:text-[52px] lg:text-[56px] font-normal text-[#D4A03A] leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
            >
              Intelligent Living
            </h1>

            <p className="text-white/90 text-base font-medium mb-8">
              Your Partner for High-Precision Batch Manufacturing
            </p>

            {/* Social Proof Boxes */}
            <div className="flex flex-wrap gap-4">
              {/* Box 1 - Dark with avatars */}
              <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A03A] to-[#8B6914] border-2 border-[#1A1A1A]"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs">
                    <span className="font-bold">20M+</span> Ads Created For <span className="font-bold">23,560+</span> Happy Customers
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D4A03A] text-[#D4A03A]" />
                    ))}
                    <span className="text-white text-xs ml-1">5.0</span>
                  </div>
                </div>
              </div>

              {/* Box 2 - Transparent */}
              <div className="px-4 py-3">
                <p className="text-white text-xs">
                  <span className="font-bold">20M+</span> Ads Created
                </p>
                <p className="text-white text-xs">
                  For <span className="font-bold">23,560+</span> Happy Customers
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-[#D4A03A] text-[#D4A03A]" />
                  ))}
                  <span className="text-white text-xs ml-1">5.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center lg:justify-end"
          >
            <div className="bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl p-6 w-full max-w-md border border-white/10">
              {/* Feature List */}
              <ul className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#D4A03A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#D4A03A]" />
                    </div>
                    <span className="text-white text-sm">
                      <span className="text-[#D4A03A] font-semibold">{feature.highlight}</span>{" "}
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-[#D4A03A] hover:bg-[#C4903A] text-[#0A0A0A] font-semibold py-4 px-6 rounded-full text-base transition-colors mb-6">
                Get Instant Quote
              </button>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-[#D4A03A] text-xl font-bold">{stat.value}</div>
                    <div className="text-white/60 text-[10px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
