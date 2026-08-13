"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  label: "Frequently Asked Questions",
  title: "Your Questions, Our Expertise.",
  subheading:
    "Get answers to common questions about materials, inserts, sourcing, production, quality requirements, and starting your custom insert molding project.",
  items: [
    {
      question: "What types of inserts can ApexBatch use for insert molding?",
      answer:
        "ApexBatch has experience with brass and stainless steel threaded inserts, studs, bushings, sleeves, pins, electrical terminals and contacts, conductive strips, magnets, and stamped metal parts. Other custom insert types can be evaluated based on geometry, material, positioning, and functional requirements.",
    },
    {
      question: "What plastics and insert materials are compatible with insert molding?",
      answer:
        "ApexBatch has experience with combinations such as PA66 with stainless steel inserts, PBT-GF with brass inserts, PC with copper-alloy terminals, PPS with stainless steel or brass inserts, and ABS with brass threaded inserts. Exact compatibility depends on resin grade, shrinkage, thermal expansion, molding conditions, and application requirements.",
    },
    {
      question: "Can I supply my own inserts, or can ApexBatch source them?",
      answer:
        "Yes. Inserts can be supplied by the customer, sourced by ApexBatch as standard components, manufactured internally when custom processing is appropriate, or coordinated through partner suppliers. The most suitable sourcing route can be determined during project review based on insert specifications, quantity, and production requirements.",
    },
    {
      question: "Does ApexBatch support silicone insert molding?",
      answer:
        "Yes. ApexBatch supports both LSR (liquid silicone rubber) insert molding and solid silicone insert molding. Metal and other compatible functional inserts can be evaluated based on the specific silicone grade, insert geometry, molding requirements, and intended application.",
    },
    {
      question: "How does ApexBatch keep inserts positioned during molding?",
      answer:
        "ApexBatch primarily uses manual insert loading with fixture assistance. Depending on the part and insert, positioning may use locating posts, mold cores, magnetic positioning, fixtures, locating features, and poka-yoke structures. Insert geometry such as knurls, grooves, or flats can also help prevent rotation or movement during molding.",
    },
    {
      question: "How does ApexBatch verify insert retention and part quality?",
      answer:
        "Insert-molded parts can be checked for insert presence, orientation, position, thread integrity, flash, incomplete filling, cracking, and critical dimensions. Inspection methods include dedicated gauges, thread gauges, 2D measurement, CMM, and assembly checks. ApexBatch can also perform pull-out, torque-out, thread tightening, and actual assembly testing in-house.\n\nElectrical continuity and sealing-related testing can be coordinated externally when required.",
    },
    {
      question: "What production volumes and repeat-order requirements can ApexBatch support?",
      answer:
        "Production volume is evaluated by project. ApexBatch is particularly suited to low- and medium-volume production, repeat batches, split deliveries, and long-term recurring orders. Tooling, process parameters, inspection requirements, and production records can be retained, with mold maintenance, minor tooling changes, batch traceability, and rolling production support available for repeat programs.",
    },
    {
      question: "What information should I provide for an insert molding quote?",
      answer:
        "A 2D drawing or 3D CAD model and target quantity are enough to start an initial review. If available, you can also provide the resin, insert specification, critical dimensions, functional requirements, and inspection needs. Our engineers can help identify additional information required during DFM rather than requiring every detail before the first inquiry.",
    },
  ],
};

const LEFT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 0);
const RIGHT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 1);

export function InsFAQ() {
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
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #34312F`,
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
