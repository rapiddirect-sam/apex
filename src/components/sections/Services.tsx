"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Cog,
  Layers,
  Box,
  ArrowUpDown,
  Hexagon,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "cnc-machining",
    title: "CNC Machining",
    description:
      "Precision machining for complex geometries and tight tolerances.",
    icon: Cog,
    tags: ["3/4/5-Axis Machining", "Tight Tolerances", "Material Variety"],
  },
  {
    id: "sheet-metal",
    title: "Sheet Metal",
    description:
      "Custom sheet metal fabrication for enclosures and structures.",
    icon: Layers,
    tags: ["Laser Cutting", "CNC Bending", "Welding & Assembly"],
  },
  {
    id: "injection-molding",
    title: "Injection Molding",
    description:
      "Optimized for low to medium volume plastic parts production.",
    icon: Box,
    tags: ["Rapid Prototyping", "High Volume", "Multi-Cavity Molds"],
  },
  {
    id: "extrusion",
    title: "Extrusion",
    description: "Custom profile extrusion in plastic and metal.",
    icon: ArrowUpDown,
    tags: ["Custom Profiles", "Aluminum & Plastic", "Long Lengths"],
  },
  {
    id: "die-casting",
    title: "Die Casting",
    description: "High-quality aluminum and zinc die casting.",
    icon: Hexagon,
    tags: ["Aluminum & Zinc", "High Productivity", "Thin Walls"],
  },
  {
    id: "surface-finishing",
    title: "Surface Finishing",
    description: "Professional surface treatment for enhanced durability.",
    icon: Sparkles,
    tags: ["Anodizing", "Powder Coating", "Electroplating"],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-apex-black" id="services">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">
            OUR SERVICES
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-apex-white mb-4">
            EVERYTHING YOU NEED TO MOVE
            <br />
            <span className="text-gold-primary">FROM DESIGN TO PRODUCTION</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-apex-gray rounded-2xl p-8 border border-apex-border/10 hover:border-gold-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,153,71,0.1)]"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold-primary/10 flex items-center justify-center mb-6 group-hover:bg-gold-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-apex-white mb-3">
                  {service.title.toUpperCase()}
                </h3>

                {/* Description */}
                <p className="text-apex-text-secondary mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-apex-charcoal text-apex-text-secondary rounded-full border border-apex-border/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-apex-text-secondary mb-4">
            Need a custom solution?
          </p>
          <Button size="lg">
            Get Instant Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
