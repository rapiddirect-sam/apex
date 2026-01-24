"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "medical",
    title: "Medical Devices",
    description: "Precision components requiring ISO 13485 compliance, biocompatible materials, and stringent quality control for life-critical applications.",
    capabilities: ["Surgical instruments", "Implant components", "Diagnostic equipment", "FDA-compliant"],
    accent: "from-signal to-signal-muted",
  },
  {
    id: "aerospace",
    title: "Aerospace",
    description: "High-performance components meeting AS9100 standards with advanced materials, tight tolerances, and full traceability.",
    capabilities: ["Structural parts", "Engine components", "Avionics housings", "Defense applications"],
    accent: "from-gold-primary to-gold-muted",
  },
  {
    id: "automotive",
    title: "Automotive",
    description: "Automotive-grade components for OEM and aftermarket applications with IATF 16949 quality management systems.",
    capabilities: ["Powertrain", "Chassis parts", "Interior components", "EV battery housings"],
    accent: "from-white to-gray-400",
  },
  {
    id: "electronics",
    title: "Consumer Electronics",
    description: "Precision enclosures and components with exceptional surface finishes for the world's leading tech brands.",
    capabilities: ["Device enclosures", "Heat sinks", "Connectors", "Display components"],
    accent: "from-gold-hot to-gold-primary",
  },
];

export function Industries() {
  const [activeId, setActiveId] = useState<string>("medical");

  const activeIndustry = industries.find(i => i.id === activeId);

  return (
    <section className="py-32 bg-apex-deep relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(42,50,61,0.5),transparent_70%)]" />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-technical text-gold-primary mb-4">
            Industries We Serve
          </p>
          <h2 className="text-display text-display-xl text-white mb-6">
            Cross-Industry
            <br />
            <span className="text-gray-500">Manufacturing Excellence</span>
          </h2>
        </motion.div>

        {/* Industries Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Industry tabs */}
          <div className="lg:col-span-4 space-y-2">
            {industries.map((industry, index) => (
              <motion.button
                key={industry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveId(industry.id)}
                className={cn(
                  "w-full text-left p-6 border transition-all duration-300",
                  activeId === industry.id
                    ? "bg-apex-slate border-gold-primary/30"
                    : "bg-transparent border-apex-iron/20 hover:border-apex-iron/50"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "text-display text-xl transition-colors",
                    activeId === industry.id ? "text-white" : "text-gray-500"
                  )}>
                    {industry.title}
                  </span>
                  <span className={cn(
                    "text-technical transition-colors",
                    activeId === industry.id ? "text-gold-primary" : "text-gray-600"
                  )}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active industry details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeIndustry && (
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-apex-slate border border-apex-iron/20 p-8 lg:p-12 h-full"
                >
                  {/* Accent bar */}
                  <div className={cn(
                    "w-16 h-1 mb-8 bg-gradient-to-r",
                    activeIndustry.accent
                  )} />

                  <h3 className="text-display text-3xl text-white mb-6">
                    {activeIndustry.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {activeIndustry.description}
                  </p>

                  {/* Capabilities */}
                  <div className="grid grid-cols-2 gap-4">
                    {activeIndustry.capabilities.map((cap, i) => (
                      <motion.div
                        key={cap}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-gold-primary" />
                        <span className="text-gray-400 text-sm">{cap}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
