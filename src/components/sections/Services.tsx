"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "CNC Machining",
    description: "Precision machining for complex geometries with tolerances as tight as ±0.01mm.",
    capabilities: ["3/4/5-Axis", "Tight Tolerances", "Material Variety"],
  },
  {
    id: "02",
    title: "Sheet Metal",
    description: "Custom fabrication for enclosures and structural components.",
    capabilities: ["Laser Cutting", "CNC Bending", "Welding"],
  },
  {
    id: "03",
    title: "Injection Molding",
    description: "Optimized for low to medium volume plastic parts production.",
    capabilities: ["Rapid Tooling", "Multi-Cavity", "Insert Molding"],
  },
  {
    id: "04",
    title: "Die Casting",
    description: "High-quality aluminum and zinc die casting for production runs.",
    capabilities: ["Aluminum", "Zinc Alloys", "Thin Walls"],
  },
  {
    id: "05",
    title: "Extrusion",
    description: "Custom profile extrusion in aluminum and engineering plastics.",
    capabilities: ["Custom Profiles", "Long Lengths", "Complex Shapes"],
  },
  {
    id: "06",
    title: "Surface Finishing",
    description: "Professional surface treatment for enhanced durability and aesthetics.",
    capabilities: ["Anodizing", "Powder Coating", "Electroplating"],
  },
];

export function Services() {
  return (
    <section className="py-32 bg-apex-void relative overflow-hidden" id="services">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(212,160,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,58,1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Accent gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_50%_80%_at_100%_20%,rgba(255,77,0,0.05),transparent_50%)]" />

      <Container className="relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-technical text-signal mb-4">
              Manufacturing Services
            </p>
            <h2 className="text-display text-display-xl text-white">
              From Design
              <br />
              <span className="text-gold-gradient">to Production</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              Full-spectrum manufacturing capabilities under one roof.
              We handle everything from rapid prototyping to high-volume
              production with consistent quality.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Asymmetric layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-apex-iron/20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-apex-void p-8 lg:p-10 hover:bg-apex-slate/50 transition-all duration-500 relative"
            >
              {/* Service number */}
              <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                <span className="text-display text-4xl text-apex-iron/50 group-hover:text-gold-primary/30 transition-colors">
                  {service.id}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-display text-2xl text-white mb-4 group-hover:text-gold-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capabilities tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1 text-xs text-gray-500 border border-apex-iron/30 bg-apex-deep/50"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="flex items-center gap-2 text-gray-600 group-hover:text-gold-primary transition-colors">
                  <span className="text-xs uppercase tracking-wider">Learn more</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-16 border-t border-apex-iron/20"
        >
          <p className="text-gray-500 text-center md:text-left">
            Need a custom manufacturing solution?
          </p>
          <Button size="lg" variant="signal">
            Get Instant Quote
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
