"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  Stethoscope,
  Plane,
  Car,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "medical",
    title: "Medical Devices",
    icon: Stethoscope,
    description:
      "Precision components for medical devices requiring ISO 13485 compliance, biocompatible materials, and stringent quality control.",
    capabilities: [
      "Surgical instruments",
      "Implant components",
      "Diagnostic equipment parts",
      "FDA-compliant manufacturing",
    ],
  },
  {
    id: "aerospace",
    title: "Aerospace",
    icon: Plane,
    description:
      "High-performance aerospace components meeting AS9100 standards with advanced materials and tight tolerances.",
    capabilities: [
      "Aircraft structural parts",
      "Engine components",
      "Avionics housings",
      "Defense applications",
    ],
  },
  {
    id: "automotive",
    title: "Automotive",
    icon: Car,
    description:
      "Automotive-grade components for OEM and aftermarket applications with IATF 16949 quality management.",
    capabilities: [
      "Powertrain components",
      "Chassis parts",
      "Interior components",
      "EV battery housings",
    ],
  },
  {
    id: "electronics",
    title: "Consumer Electronics",
    icon: Smartphone,
    description:
      "Precision enclosures and components for consumer electronics with exceptional surface finishes.",
    capabilities: [
      "Device enclosures",
      "Heat sinks",
      "Connectors",
      "Display components",
    ],
  },
];

export function Industries() {
  const [expandedId, setExpandedId] = useState<string | null>("medical");

  return (
    <section className="py-24 bg-apex-charcoal">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-apex-white mb-4">
            SUPPORTING PRODUCTION ACROSS INDUSTRIES
          </h2>
          <p className="text-apex-text-secondary text-lg max-w-2xl mx-auto">
            Supporting medium-to-large batch production across industries with
            strict performance, compliance, and delivery requirements.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isExpanded = expandedId === industry.id;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "bg-apex-gray rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden",
                  isExpanded
                    ? "border-gold-primary/50"
                    : "border-apex-border/10 hover:border-apex-border/30"
                )}
                onClick={() =>
                  setExpandedId(isExpanded ? null : industry.id)
                }
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                        isExpanded
                          ? "bg-gold-primary/20"
                          : "bg-apex-charcoal"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-6 h-6 transition-colors",
                          isExpanded
                            ? "text-gold-primary"
                            : "text-apex-text-secondary"
                        )}
                      />
                    </div>
                    <h3 className="font-display text-xl text-apex-white">
                      {industry.title.toUpperCase()}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-apex-text-secondary transition-transform duration-300",
                      isExpanded && "rotate-180 text-gold-primary"
                    )}
                  />
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-apex-border/10 pt-4">
                        <p className="text-apex-text-secondary mb-4">
                          {industry.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {industry.capabilities.map((cap) => (
                            <div
                              key={cap}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                              <span className="text-apex-white/80">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
