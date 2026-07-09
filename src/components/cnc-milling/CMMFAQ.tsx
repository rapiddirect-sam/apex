"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  label: "Frequently Asked Questions",
  title: "Your Questions, Our Expertise.",
  subheading:
    "Find answers to common questions about CNC milling quotes, DFM review, materials, tolerances, surface finishes, inspection, and delivery.",
  items: [
    {
      question: "What files do you need for a CNC milling quote?",
      answer:
        "For an accurate CNC milling quote, please upload your 3D CAD files, 2D drawings, material requirements, quantity, surface finish needs, and any critical tolerance notes. STEP, STP, IGES, X_T, SLDPRT, DXF, DWG, and PDF drawings are commonly used for review.",
    },
    {
      question: "Do you provide DFM feedback before production?",
      answer:
        "Yes. ApexBatch can review your CAD files and drawings before production to identify manufacturability risks, tolerance concerns, material options, process choices, and possible cost-saving improvements.",
    },
    {
      question: "What tolerances can you achieve for CNC milled parts?",
      answer:
        "Tolerance capability depends on material, geometry, feature size, machining strategy, and inspection requirements. Standard tolerances can follow drawing requirements or ISO standards, while tighter tolerances are reviewed by our engineers before production.",
    },
    {
      question: "Can ApexBatch support both low-mix batch and high-mix low-volume production?",
      answer:
        "Yes. ApexBatch supports both low-mix batch production, such as fewer part numbers with higher quantities, and high-mix low-volume projects with many part numbers in smaller quantities. Our team coordinates machining, materials, finishing, inspection, and delivery under one production plan.",
    },
    {
      question: "What materials are available for CNC milling?",
      answer:
        "ApexBatch supports commonly used CNC milling materials including aluminum, stainless steel, steel alloys, tool steel, titanium, copper, brass, POM, Nylon, PC, ABS, PEEK, and other engineering plastics. Material availability may vary by grade, geometry, tolerance, and application requirements.",
    },
    {
      question: "Do you offer surface finishes after CNC milling?",
      answer:
        "Yes. Surface finish options may include anodizing, hard coat anodizing, bead blasting, passivation, Alodine, plating, powder coating, painting, laser marking, and other finish options depending on the material and application.",
    },
    {
      question: "How do you inspect CNC milled parts before delivery?",
      answer:
        "Inspection can include dimensional checks, gauge inspection, CMM inspection, optical measurement, surface roughness testing, hardness testing, and finish validation based on project requirements. Inspection reports are available when required.",
    },
    {
      question: "How fast can I receive a CNC milling quote?",
      answer:
        "ApexBatch typically provides a detailed quote within 24 hours after file review, depending on part complexity, material, tolerance requirements, surface finish, and quantity.",
    },
    {
      question: "What is the typical lead time for CNC milled parts?",
      answer:
        "Typical lead times may range from 5–10 business days for simple validation parts and 2–4 weeks for production orders, depending on material availability, part complexity, tolerance requirements, surface finish, inspection needs, and order quantity.",
    },
    {
      question: "Can you support repeat orders after the first batch?",
      answer:
        "Yes. For repeat orders, ApexBatch can help maintain production records, material requirements, finish requirements, inspection standards, and batch consistency to support ongoing CNC milling programs.",
    },
  ],
};

const LEFT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 0);
const RIGHT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 1);

export function CMMFAQ() {
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
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.45,
            }}
          >
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
          <div
            style={{
              padding: "0 24px 22px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#C5C6C9",
            }}
          >
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
        background: "#34312F",
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
