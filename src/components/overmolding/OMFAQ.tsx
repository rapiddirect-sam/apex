"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  label: "Frequently Asked Questions",
  title: "Your Questions, Our Expertise.",
  subheading:
    "Find answers to common questions about overmolding materials, bonding, tooling, silicone overmolding, and production support.",
  items: [
    {
      question: "What materials can ApexBatch use for overmolding?",
      answer:
        "ApexBatch commonly works with TPE, TPU, TPV, and project-specific LSR over compatible plastic or metal substrates. Existing combinations include TPE over PC+ABS, TPU over ABS, TPV over POM, and TPE over anodized aluminum. Exact resin grades must be reviewed before tooling because compatibility can vary within the same material family.",
    },
    {
      question: "How do you determine whether two overmolding materials will bond?",
      answer:
        "We evaluate the exact resin grades, supplier data, molding conditions, substrate condition, part geometry, functional loads, and operating environment. Depending on the material pair, bonding may rely on chemical adhesion, mechanical retention, or both. Holes, grooves, undercuts, wraparound edges, and textured interfaces can improve retention where chemical adhesion alone may not be sufficient.",
    },
    {
      question: "Can ApexBatch provide silicone overmolding?",
      answer:
        "ApexBatch evaluates silicone and LSR overmolding on a project-specific basis. Silicone tooling, curing behavior, bonding systems, and processing conditions differ from thermoplastic TPE, TPU, and TPV overmolding. Please provide the silicone grade, substrate material, target hardness, part geometry, operating environment, and bonding requirements so our engineers can assess feasibility before quotation.",
    },
    {
      question: "How thick should the overmold layer be?",
      answer:
        "A typical starting range is 1.0–3.0 mm, but the final thickness depends on the material, hardness, flow length, part geometry, surface requirements, and functional performance. Keeping the overmold reasonably uniform and using gradual transitions between thick and thin areas generally improves filling, cooling, appearance, and edge durability.",
    },
    {
      question: "What tooling does an overmolding project require?",
      answer:
        "The tooling route depends on the material pair, part geometry, validation stage, production volume, and automation requirements. ApexBatch supports two-tool transfer, two-shot molding, and rotary-table molding, together with prototype and production tooling. Mold configurations can include single-cavity, 2–8 cavity, and project-specific hot-runner options.",
    },
    {
      question: "How long do tooling and T1 validation take?",
      answer:
        "Typical T1 lead time is four to six weeks after the design is frozen. Complex mold structures, special materials, multi-cavity layouts, hot-runner systems, or additional validation requirements may require more time. T1 samples are reviewed for dimensions, appearance, flash, incomplete filling, alignment, bonding, hardness, and required functional performance.",
    },
    {
      question: "What information is required for a custom overmolding quote?",
      answer:
        "Please provide the 3D CAD model, available 2D drawings, substrate material, overmold material, target Shore hardness, expected quantity, annual demand, color or texture requirements, operating environment, and functional requirements. Known bonding, sealing, pull-off, assembly, or cosmetic boundary requirements should also be included. ApexBatch uses this information to prepare DFM feedback, a tooling recommendation, quotation, and lead-time plan.",
    },
    {
      question: "What bonding tests and quality documents are available?",
      answer:
        "Depending on the part requirements, validation can include Shore hardness, pull-off strength, peel resistance, leak testing, dimensional inspection, appearance checks, and assembly verification. Available documentation includes FAI, dimensional reports, material certificates, process parameter records, and PPAP Level 3 when required. Material batches, molding parameters, production dates, and operators can also be traced through repeat production.",
    },
  ],
};

const LEFT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 0);
const RIGHT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 1);

export function OMFAQ() {
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
          style={{ padding: "22px 24px", cursor: "pointer", background: "transparent" }}
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

        <div className="transition-all duration-300 overflow-hidden" style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}>
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

          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.15, marginTop: "20px" }}>
            <EditableText path="faq.title" defaultValue={DEFAULTS.title} />
          </h2>

          <p className="mx-auto w-[80%]" style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "16px" }}>
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
