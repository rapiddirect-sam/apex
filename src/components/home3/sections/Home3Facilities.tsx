"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="relative p-6"
    >
      {/* Top-left corner */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4A03A]" />
      {/* Top-right corner */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4A03A]" />
      {/* Bottom-left corner */}
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4A03A]" />
      {/* Bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4A03A]" />

      <div className="text-center">
        <div className="text-[32px] md:text-[40px] font-bold text-[#D4A03A] mb-1">
          {value}
        </div>
        <div className="text-[14px] text-[#7A7A7C]">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export function Home3Facilities() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % facilityImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
  };

  return (
    <section className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Subtitle with lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#D4A03A]/50" />
            <span className="text-[#D4A03A]/70 text-xs tracking-[0.3em] uppercase">
              State-of-the-Art Manufacturing Environment
            </span>
            <div className="w-12 h-px bg-[#D4A03A]/50" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our<span className="bg-gradient-to-r from-[#D09947] to-[#EEC569] bg-clip-text text-transparent font-bold"> Facilities</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Text Card and Stats */}
          <div>
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#4A4A48] rounded-lg p-6 mb-6"
            >
              <h3 className="text-xl font-semibold text-[#D4A03A] mb-4">
                Advanced Manufacturing Hub
              </h3>
              <p className="text-[#C5C6C9] text-sm leading-relaxed mb-2">
                Located in Shenzhen&apos;s advanced manufacturing district, our 50,000 m²
                vertically integrated facility operates 8 specialized production shops and is
                equipped with 300+ advanced machines.
              </p>
              <p className="text-[#C5C6C9] text-sm leading-relaxed">
                We support end-to-end manufacturing in one location, including CNC
                machining, precision injection molding, sheet metal fabrication, 3D printing,
                as well as in-house surface treatment and quality inspection lines.
              </p>

              {/* Decorative line with diamond */}
              <div className="flex items-center mt-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4A03A]/30 to-[#D4A03A]/50" />
                <div className="w-2 h-2 bg-[#D4A03A] rotate-45 ml-2" />
              </div>
            </motion.div>

            {/* Stats Grid - 2x2 with corner accents */}
            <div className="grid grid-cols-2 gap-3">
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

          {/* Right - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#D4A03A]/30">
              <Image
                src={facilityImages[currentImage]}
                alt="Manufacturing facility"
                fill
                className="object-cover transition-opacity duration-500"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {facilityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentImage
                      ? "w-6 bg-[#D4A03A]"
                      : "w-3 bg-[#444444] hover:bg-[#666666]"
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
