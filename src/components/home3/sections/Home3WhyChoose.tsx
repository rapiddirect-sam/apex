"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    number: "01",
    title: "Comprehensive Free Services",
    description: "Full-spectrum support including DFM analysis, process optimization, design validation, and quality inspection. Reduce trial costs with free engineering verification.",
  },
  {
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    number: "02",
    title: "Expert Engineering Team",
    description: "Our team of experienced engineers provides technical consultation and design optimization to ensure manufacturability and cost-effectiveness.",
  },
  {
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    number: "03",
    title: "Quality Guaranteed",
    description: "ISO-certified processes with rigorous quality control at every stage. Full documentation and traceability for all production runs.",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    number: "04",
    title: "Fast Turnaround",
    description: "Rapid prototyping and efficient production scheduling. Get your parts delivered on time, every time with our streamlined processes.",
  },
];

export function Home3WhyChoose() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="capabilities" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Engineers{" "}
            <span
              className="text-[#D4A03A]"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Choose ApexBatch
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Left - Image with corner brackets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Corner brackets container */}
            <div className="relative p-4">
              {/* Top-left corner bracket */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4A03A]" />
              {/* Top-right corner bracket */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4A03A]" />
              {/* Bottom-left corner bracket */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4A03A]" />
              {/* Bottom-right corner bracket */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4A03A]" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={slides[currentSlide].image}
                  alt="Manufacturing facility"
                  fill
                  className="object-cover transition-opacity duration-500"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#D4A03A] bg-black/50 hover:bg-black/70 flex items-center justify-center text-[#D4A03A] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#D4A03A] bg-black/50 hover:bg-black/70 flex items-center justify-center text-[#D4A03A] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-6 bg-white"
                      : "w-3 bg-[#444444] hover:bg-[#666666]"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Content Card and Thumbnails */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Content Card with gold top border */}
            <div className="bg-[#141414] rounded-lg overflow-hidden mb-6">
              {/* Gold top line */}
              <div className="h-0.5 bg-gradient-to-r from-[#D4A03A] via-[#D4A03A] to-transparent" />

              <div className="p-6">
                {/* Step Number */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#D4A03A]/30">
                    {slides[currentSlide].number}
                  </span>
                  <div className="flex-1 h-px bg-[#333333]" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#D4A03A] mb-6">
                  {slides[currentSlide].title}
                </h3>

                {/* Checkbox with description */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 border-2 border-[#D4A03A] bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#D4A03A]" />
                  </div>
                  <p className="text-[#CCCCCC] text-base leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative aspect-square overflow-hidden transition-all ${
                    index === currentSlide
                      ? "ring-2 ring-[#D4A03A]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white text-lg font-medium mb-4">
            Get Free engineering review before production.
          </p>
          <button className="bg-gradient-to-r from-[#D4A03A] to-[#C49432] hover:from-[#E4B04A] hover:to-[#D4A442] text-[#0A0A0A] font-semibold py-3.5 px-10 rounded-lg text-base transition-all duration-300">
            Upload Your Design
          </button>
        </motion.div>
      </div>
    </section>
  );
}
