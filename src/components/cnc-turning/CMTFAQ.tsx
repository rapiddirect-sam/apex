"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  label: "Frequently Asked Questions",
  title: "Your Questions, Our Expertise.",
  subheading:
    "Find answers to common questions about CNC turning quotes, DFM review, materials, tolerances, surface finishes, inspection, and delivery.",
  items: [
    {
      question: "What parts can CNC turning make?",
      answer:
        "CNC turning is suitable for round, cylindrical, threaded, and rotational parts, such as shafts, pins, bushings, sleeves, spacers, standoffs, threaded inserts, connectors, fittings, nozzles, rollers, and precision cylindrical housings.",
    },
    {
      question: "Can ApexBatch produce plastic CNC turned parts?",
      answer:
        "Yes. ApexBatch supports CNC turning for both metal and plastic parts. Common plastic options include POM, PTFE, PEEK, PA, PC, PMMA, ABS, PE, PP, FR-4, and Bakelite, depending on your application, tolerance, and surface requirements.",
    },
    {
      question: "What materials are available for CNC turning?",
      answer:
        "ApexBatch supports commonly used metals and engineering plastics for CNC turning, including aluminum, stainless steel, steel, brass, copper, bronze, titanium, POM, PEEK, PTFE, PA, PC, PMMA, and ABS. Material selection can be reviewed based on strength, weight, wear resistance, corrosion resistance, insulation, or appearance needs.",
    },
    {
      question: "What tolerances can ApexBatch achieve for CNC turned parts?",
      answer:
        "Our standard CNC turning tolerance is ±0.05 mm, with precision tolerance down to ±0.01 mm for selected features. Roundness, concentricity, and runout requirements can also be reviewed based on material, geometry, wall thickness, part size, and drawing requirements.",
    },
    {
      question: "What is the difference between CNC turning and CNC milling?",
      answer:
        "CNC turning rotates the workpiece while cutting tools shape round or cylindrical features. CNC milling uses rotating cutting tools to remove material from a fixed workpiece, making it more suitable for flat surfaces, pockets, slots, and complex 3D shapes.",
    },
    {
      question: "How do I know if my part needs CNC turning or CNC milling?",
      answer:
        "Choose CNC turning if your part is mainly round, cylindrical, threaded, or shaft-like. Choose CNC milling if your part has complex flat surfaces, pockets, slots, or multi-face features. Some parts may require both CNC turning and secondary milling.",
    },
    {
      question: "What CNC turning operations can ApexBatch support?",
      answer:
        "ApexBatch supports turning, boring, drilling, tapping, threading, grooving, knurling, parting, facing, internal and external turning, and secondary milling for features such as flats, slots, side holes, cross holes, and other non-round details.",
    },
    {
      question: "How long does CNC turning take?",
      answer:
        "CNC turning lead time depends on material availability, part complexity, tolerance requirements, surface finish, inspection needs, and order quantity. After reviewing your drawings and requirements, ApexBatch can provide a clearer production lead time with your quote.",
    },
    {
      question: "How much does CNC turning cost?",
      answer:
        "CNC turning cost depends on material, part size, geometry, machining time, tolerance requirements, surface finish, inspection needs, and production quantity. The most accurate way to estimate cost is to upload your CAD files and drawings for review.",
    },
    {
      question: "What should I include in my CNC turning RFQ?",
      answer:
        "To get a faster and more accurate quote, please provide CAD files, 2D drawings, material requirements, quantity, tolerances, thread specifications, surface finish needs, inspection requirements, and any special packaging or delivery needs.",
    },
  ],
};

const LEFT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 0);
const RIGHT_COLUMN_INDICES = DEFAULTS.items.map((_, index) => index).filter((index) => index % 2 === 1);

export function CMTFAQ() {
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
