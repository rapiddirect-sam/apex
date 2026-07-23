"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  label: "Frequently Asked Questions",
  title: "Your Questions, Our Expertise.",
  subheading:
    "Find answers to common questions about laser cutting quotes, DFM review, materials, tolerances, edge quality, secondary operations, and delivery.",
  items: [
    {
      question: "What files do you need for a laser cutting quote?",
      answer:
        "Upload a DXF or DWG file for flat profiles, or a STEP file for formed parts. Include a PDF drawing when tolerances, finishes, inspection requirements, or other specifications need to be communicated.",
    },
    {
      question: "Do you provide DFM feedback before production?",
      answer:
        "Yes. Our engineers review cut paths, feature sizes, material thickness, bend requirements, and secondary operations before production, and recommend practical adjustments when manufacturability, quality, or cost can be improved.",
    },
    {
      question: "What tolerances can you achieve for laser cut parts?",
      answer:
        "ApexBatch typically maintains contour tolerances of \u00B10.1 mm for suitable parts between 0.2 and 2.0 mm thick. Actual tolerances depend on material, thickness, geometry, part size, and feature requirements.",
    },
    {
      question: "What materials and thicknesses can you laser cut?",
      answer:
        "We cut aluminum, stainless steel, carbon steel, copper, and brass. Maximum thicknesses reach 25 mm for carbon steel, 15 mm for stainless steel and aluminum, and 12.7 mm for copper.",
    },
    {
      question: "What is the minimum hole or feature size for laser cutting?",
      answer:
        "As a general guideline, holes, slots, and narrow webs should be at least equal to the sheet thickness. Smaller features may be possible depending on the material, thickness, geometry, and required repeatability.",
    },
    {
      question: "What edge quality can I expect from laser cutting?",
      answer:
        "Laser-cut edges typically have fine vertical lines and a matte appearance. Burrs, oxidation, and heat effects vary by material and thickness, with deburring or finishing available when smoother edges are required.",
    },
    {
      question: "Can you provide secondary operations after laser cutting?",
      answer:
        "Yes. ApexBatch supports deburring, bending, tapping, welding, surface finishing, hardware installation, and assembly, allowing laser-cut parts and complete sheet metal components to be produced through one coordinated workflow.",
    },
    {
      question: "How long does it take to receive a quote and finished parts?",
      answer:
        "A detailed quote and DFM feedback are typically provided within 24 hours. Production time depends on material availability, part complexity, quantity, secondary operations, inspection requirements, and delivery destination.",
    },
  ],
};

const LEFT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 0);
const RIGHT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 1);

export function LCFAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const renderFaqCard = (index: number) => {
    const item = DEFAULTS.items[index];
    const isOpen = openItems.has(index);

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06 }}
        className="overflow-hidden transition-shadow duration-200"
        style={{
          background: "#1A1A1A",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <button
          type="button"
          onClick={() => toggle(index)}
          className="w-full text-left flex items-start justify-between gap-4"
          style={{
            padding: "22px 24px",
            cursor: "pointer",
            background: "transparent",
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.45 }}>
            <EditableText path={`faq.items.${index}.question`} defaultValue={item.question} />
          </span>
          <ChevronDown
            className="shrink-0 transition-transform duration-300"
            style={{
              width: "20px",
              height: "20px",
              color: "#D09947",
              marginTop: "2px",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>

        <div
          className="transition-all duration-300 overflow-hidden"
          style={{
            maxHeight: isOpen ? "320px" : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div style={{ padding: "0 24px 22px", fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9" }}>
            <EditableText path={`faq.items.${index}.answer`} defaultValue={item.answer} multiline />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "56px" }}
        >
          <span
            className="inline-block"
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              background: "transparent",
              border: "1px solid #D09947",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            <EditableText path="faq.label" defaultValue={DEFAULTS.label} />
          </span>

          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.15,
              marginTop: "20px",
            }}
          >
            <EditableText path="faq.title" defaultValue={DEFAULTS.title} />
          </h2>

          <p
            className="mx-auto w-[80%]"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "16px",
            }}
          >
            <EditableText path="faq.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start" style={{ gap: "16px" }}>
          <div className="flex flex-col" style={{ gap: "16px" }}>
            {LEFT_COLUMN_INDICES.map((index) => renderFaqCard(index))}
          </div>
          <div className="flex flex-col" style={{ gap: "16px" }}>
            {RIGHT_COLUMN_INDICES.map((index) => renderFaqCard(index))}
          </div>
        </div>
      </div>
    </section>
  );
}
