"use client";

import { motion } from "framer-motion";
import { Upload, FileSearch, Settings, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Submit Your Design",
    description: "Upload your CAD files and basic requirements. Our team reviews your drawings, materials, tolerances, and application needs.",
    bullets: ["STEP, IGES, STL", "PDF Drawings", "3D Models"],
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Engineering",
    subtitle: "Review & Quotation",
    description: "Within 24 hours, we provide a manufacturability review, process recommendations, pricing, and lead time options.",
    bullets: ["Automated Pricing", "DFM Analysis", "Material Selection"],
  },
  {
    number: "03",
    icon: Settings,
    title: "Production",
    subtitle: "& Quality Control",
    description: "Once confirmed, we start production with controlled processes and in-process inspections to ensure every part meets specifications.",
    bullets: ["CNC Machining", "Quality Control", "Progress Updates"],
  },
  {
    number: "04",
    icon: Truck,
    title: "Delivery",
    subtitle: "& Ongoing Support",
    description: "Parts are shipped with tracking and inspection records. Our team remains available for follow-up support and future production needs.",
    bullets: ["CMM Inspection", "Quality Certs", "Fast Shipping"],
  },
];

export function Home3Process() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Work{" "}
            <span
              className="text-[#D4A03A]"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              With Apexbatch
            </span>
          </h2>
          <p
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ fontStyle: "italic" }}
          >
            A clear, guided process that takes you from design
            <br />
            to delivery - without unnecessary complexity.
          </p>
        </motion.div>

        {/* Process Steps - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-[#1A1A1A] rounded-xl p-6 pt-8"
              >
                {/* Step Number - positioned top right, overlapping */}
                <div className="absolute -top-4 right-4 w-12 h-12 bg-[#D4A03A] rounded-full flex items-center justify-center">
                  <span className="text-[#0A0A0A] font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon in rounded square */}
                <div className="w-14 h-14 border-2 border-[#D4A03A] rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#D4A03A]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <h3 className="text-lg font-semibold text-white leading-tight mb-4">
                    {step.subtitle}
                  </h3>
                )}
                {!step.subtitle && <div className="mb-4" />}

                {/* Description */}
                <p className="text-[#888888] text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4A03A] rounded-full flex-shrink-0" />
                      <span className="text-[#777777] text-xs">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
