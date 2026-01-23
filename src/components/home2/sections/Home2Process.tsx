"use client";

import { motion } from "framer-motion";
import { Upload, FileSearch, Settings, Truck, GitBranch } from "lucide-react";

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

export function Home2Process() {
  return (
    <section id="process" className="py-24 bg-[#2E2C2B] relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208, 153, 71, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 153, 71, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
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
              <GitBranch className="w-4 h-4 text-[#D09947]" />
              <span
                className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Streamlined Workflow
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              How to Work <span className="text-[#D09947]">With Apexbatch</span>
            </h2>
            <p
              className="text-[#7A7A7C] text-lg max-w-2xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              A clear, guided process that takes you from design to delivery - without unnecessary complexity.
            </p>
          </motion.div>
        </div>

        {/* Process Steps - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-[#4A4A48]/40 border border-[#4A4A48] hover:border-[#D09947]/50 rounded-lg p-6 pt-10 transition-colors duration-300"
              >
                {/* Step Number - positioned top right */}
                <div className="absolute -top-4 right-4 w-12 h-12 bg-[#D09947] rounded flex items-center justify-center shadow-lg shadow-[#D09947]/20">
                  <span
                    className="text-[#000000] font-bold text-lg"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Icon in rounded square */}
                <div className="w-14 h-14 border-2 border-[#D09947]/50 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#D09947]" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-white leading-tight uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {step.title}
                </h3>
                {step.subtitle && (
                  <h3
                    className="text-lg font-bold text-white leading-tight mb-4 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {step.subtitle}
                  </h3>
                )}
                {!step.subtitle && <div className="mb-4" />}

                {/* Description */}
                <p
                  className="text-[#7A7A7C] text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {step.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D09947] rounded-full flex-shrink-0" />
                      <span
                        className="text-[#C5C6C9] text-xs"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting line decoration */}
        <div className="hidden lg:flex items-center justify-center mt-12">
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent to-[#D09947]/30" />
          <div className="w-3 h-3 bg-[#D09947] rotate-45 mx-4" />
          <div className="flex-1 max-w-xs h-px bg-gradient-to-l from-transparent to-[#D09947]/30" />
        </div>
      </div>
    </section>
  );
}
