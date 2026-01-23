"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

export function Home3Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-[#D4A03A]" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>Services</span>
          </h2>
          <p className="text-white text-lg">
            Everything You Need to Move from Design to Production
          </p>
        </motion.div>

        {/* Services Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#141414] rounded-xl overflow-hidden border border-transparent hover:border-[#D4A03A]/70 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags - muted gold/brown border */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-[#9A9A8A] border border-[#3D3D32] rounded-full bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[#D4A03A] text-sm font-medium hover:text-[#E4B04A] transition-colors group/link"
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
          className="text-center"
        >
          <p className="text-[#888888] text-sm mb-4">
            Need a custom solution?
          </p>
          <button className="bg-gradient-to-r from-[#D4A03A] to-[#C49432] hover:from-[#E4B04A] hover:to-[#D4A442] text-[#0A0A0A] font-semibold py-3.5 px-10 rounded-lg text-base transition-all duration-300">
            Get Instant Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
