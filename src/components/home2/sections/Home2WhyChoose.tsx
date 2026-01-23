"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, Award, ArrowRight } from "lucide-react";

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

export function Home2WhyChoose() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="capabilities" className="py-24 bg-[#000000] relative overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute bottom-20 left-0 w-[200px] h-[2px] bg-gradient-to-r from-[#D09947] to-transparent hidden lg:block"
        style={{ transform: "rotate(45deg) translateX(-50px)" }}
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
              <Award className="w-4 h-4 text-[#D09947]" />
              <span
                className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Why Engineers Trust Us
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Why Engineers <span className="text-[#D09947]">Choose ApexBatch</span>
            </h2>
          </motion.div>
        </div>

        {/* Content Grid - Asymmetric 12-col */}
        <div className="grid grid-cols-12 gap-8 items-start mb-16">
          {/* Left - Image with corner brackets (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7 relative"
          >
            {/* Corner brackets container */}
            <div className="relative p-5">
              {/* Top-left corner bracket */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#D09947]" />
              {/* Top-right corner bracket */}
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#D09947]" />
              {/* Bottom-left corner bracket */}
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#D09947]" />
              {/* Bottom-right corner bracket */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#D09947]" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded">
                <Image
                  src={slides[currentSlide].image}
                  alt="Manufacturing facility"
                  fill
                  className="object-cover transition-opacity duration-500"
                />

                {/* Gold tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D09947]/10 to-transparent" />

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#D09947] bg-[#000000]/60 hover:bg-[#D09947] flex items-center justify-center text-[#D09947] hover:text-[#000000] transition-all rounded"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#D09947] bg-[#000000]/60 hover:bg-[#D09947] flex items-center justify-center text-[#D09947] hover:text-[#000000] transition-all rounded"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-[#D09947]"
                      : "w-3 bg-[#4A4A48] hover:bg-[#7A7A7C]"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Content Card and Thumbnails (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 lg:col-span-5"
          >
            {/* Content Card with gold top border */}
            <div className="bg-[#4A4A48]/40 border border-[#4A4A48] rounded-lg overflow-hidden mb-6">
              {/* Gold top line */}
              <div className="h-1 bg-gradient-to-r from-[#D09947] via-[#D09947] to-transparent" />

              <div className="p-8">
                {/* Step Number */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-5xl font-bold text-[#D09947]/20"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {slides[currentSlide].number}
                  </span>
                  <div className="flex-1 h-px bg-[#D09947]/30" />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-[#D09947] mb-6 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {slides[currentSlide].title}
                </h3>

                {/* Checkbox with description */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-[#D09947] bg-[#D09947]/10 flex items-center justify-center flex-shrink-0 mt-1 rounded">
                    <Check className="w-4 h-4 text-[#D09947]" />
                  </div>
                  <p
                    className="text-[#C5C6C9] text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
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
                  className={`relative aspect-square overflow-hidden rounded transition-all ${
                    index === currentSlide
                      ? "ring-2 ring-[#D09947]"
                      : "opacity-60 hover:opacity-100"
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
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <p
            className="text-white text-lg font-medium"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Get Free engineering review before production.
          </p>
          <button
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-10 rounded text-sm transition-all uppercase tracking-wider flex items-center gap-2 group"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Upload Your Design
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
