"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Factory } from "lucide-react";

const stats = [
  { value: "50,000 m²", label: "Total Factory Area" },
  { value: "8", label: "Specialized Production Shops" },
  { value: "300+", label: "Advanced Equipment" },
  { value: "98%", label: "On-Time Delivery" },
];

const facilityImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
];

// Component for stat box with gold corner accents
function StatBox({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative bg-[#4A4A48]/30 p-6 border border-[#D09947]/20 hover:border-[#D09947]/50 transition-colors"
    >
      {/* Top-left corner */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D09947]" />
      {/* Bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D09947]" />

      <div className="text-center">
        <div
          className="text-3xl md:text-4xl font-bold text-white mb-1"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          {value}
        </div>
        <div
          className="text-xs text-[#D09947] uppercase tracking-wider"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export function Home2Facilities() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % facilityImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
  };

  return (
    <section className="py-24 bg-[#2E2C2B] relative overflow-hidden">
      {/* Grid pattern overlay */}
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
              <Factory className="w-4 h-4 text-[#D09947]" />
              <span
                className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                State-of-the-Art Manufacturing Environment
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Our <span className="text-[#D09947]">Facilities</span>
            </h2>
          </motion.div>
        </div>

        {/* Content Grid - Asymmetric 12-col */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left - Text Card (7 cols) */}
          <div className="col-span-12 lg:col-span-7">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#4A4A48]/40 border border-[#D09947]/20 rounded-lg p-8 mb-8"
            >
              <h3
                className="text-2xl font-bold text-[#D09947] mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Advanced Manufacturing Hub
              </h3>
              <p
                className="text-[#C5C6C9] text-base leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Located in Shenzhen&apos;s advanced manufacturing district, our 50,000 m²
                vertically integrated facility operates 8 specialized production shops and is
                equipped with 300+ advanced machines.
              </p>
              <p
                className="text-[#7A7A7C] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                We support end-to-end manufacturing in one location, including CNC
                machining, precision injection molding, sheet metal fabrication, 3D printing,
                as well as in-house surface treatment and quality inspection lines.
              </p>

              {/* Decorative line */}
              <div className="flex items-center mt-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D09947]/30 to-[#D09947]" />
                <div className="w-3 h-3 bg-[#D09947] rotate-45 ml-3" />
              </div>
            </motion.div>

            {/* Stats Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatBox
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Right - Image Carousel (5 cols, offset) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5 relative -mt-0 lg:-mt-8"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#D09947]/30">
              <Image
                src={facilityImages[currentImage]}
                alt="Manufacturing facility"
                fill
                className="object-cover transition-opacity duration-500"
              />

              {/* Gold glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D09947]/10 to-transparent" />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#000000]/60 hover:bg-[#D09947]/80 rounded flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#000000]/60 hover:bg-[#D09947]/80 rounded flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {facilityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentImage
                      ? "w-8 bg-[#D09947]"
                      : "w-3 bg-[#4A4A48] hover:bg-[#7A7A7C]"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
