"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Wrench } from "lucide-react";

const services = [
  {
    title: "CNC Machining",
    description: "Precision machining for complex geometries and tight tolerances.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&q=80",
    tags: ["3/4/5-Axis Machining", "Tight Tolerances", "Material Variety"],
  },
  {
    title: "Sheet Metal",
    description: "Custom sheet metal fabrication for enclosures and structures.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80",
    tags: ["Laser Cutting", "CNC Bending", "Welding & Assembly"],
  },
  {
    title: "Injection Molding",
    description: "Optimized for low to medium volume plastic parts production.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    tags: ["Rapid Prototyping", "High Volume", "Multi-Cavity Molds"],
  },
  {
    title: "Extrusion",
    description: "Custom profile extrusion in plastic and metal.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    tags: ["Custom Profiles", "Aluminum & Plastic", "Long Lengths"],
  },
  {
    title: "Die Casting",
    description: "High-quality aluminum and zinc die casting.",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=400&q=80",
    tags: ["Aluminum & Zinc", "High Productivity", "Thin Walls"],
  },
  {
    title: "Surface Finishing",
    description: "Professional surface treatment for enhanced durability.",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=400&q=80",
    tags: ["Anodizing", "Powder Coating", "Electroplating"],
  },
];

export function Home2Services() {
  return (
    <section id="services" className="py-24 bg-[#000000] relative overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute top-20 right-0 w-[300px] h-[2px] bg-gradient-to-l from-[#D09947] to-transparent hidden lg:block"
        style={{ transform: "rotate(-45deg) translateX(100px)" }}
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
              <Wrench className="w-4 h-4 text-[#D09947]" />
              <span
                className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Manufacturing Capabilities
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Our <span className="text-[#D09947]">Services</span>
            </h2>
            <p
              className="text-[#7A7A7C] text-lg max-w-2xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Everything You Need to Move from Design to Production
            </p>
          </motion.div>
        </div>

        {/* Services Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#4A4A48]/30 rounded-lg overflow-hidden border border-[#4A4A48] hover:border-[#D09947] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-[#D09947]/0 group-hover:bg-[#D09947]/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-white mb-3 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#7A7A7C] text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-[#D09947] border border-[#D09947]/30 rounded bg-[#D09947]/5"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#D09947] text-sm font-medium hover:text-[#EEC569] transition-colors group/link uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <p
            className="text-[#7A7A7C] text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Need a custom solution?
          </p>
          <button
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-10 rounded text-sm transition-all uppercase tracking-wider flex items-center gap-2 group"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Get Instant Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
