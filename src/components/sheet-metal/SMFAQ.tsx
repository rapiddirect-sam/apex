"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const FAQ_ITEMS = [
  {
    question: "What is sheet metal fabrication?",
    answer: "Sheet metal fabrication converts flat metal sheet into custom parts through cutting, forming, joining, finishing, inspection, and delivery.",
  },
  {
    question: "What is sheet metal?",
    answer: "Sheet metal is metal supplied in flat, controlled thicknesses. Common materials include steel, stainless steel, aluminum, copper, brass, and galvanized steel. It can be cut, bent, punched, welded, finished, and assembled into custom parts.",
  },
  {
    question: "Can you support sheet metal prototypes and production orders?",
    answer: "Yes. ApexBatch supports prototypes, low-volume orders, and repeat production. Sample support can help validate material, fit, bend geometry, finish, hardware, and assembly before larger quantities are released.",
  },
  {
    question: "What materials can you fabricate?",
    answer: "Common options include aluminum, stainless steel, carbon steel, galvanized steel, copper, and brass. The suitable material depends on strength, corrosion resistance, bendability, appearance, conductivity, finish, and intended environment.",
  },
  {
    question: "What files do you need for a sheet metal fabrication quote?",
    answer: "For flat parts, submit DXF or DWG files. For bent, welded, finished, or assembly-ready parts, include a STEP file and a PDF drawing with critical dimensions, material, finish, tolerance, quantity, and inspection requirements.",
  },
  {
    question: "What affects sheet metal fabrication cost?",
    answer: "Cost is affected by material, thickness, part size, cut length, hole and feature complexity, bend quantity, welding, hardware, finish, inspection, order quantity, and packaging requirements. A DFM review can identify practical changes before production.",
  },
  {
    question: "How long does sheet metal fabrication take?",
    answer: "Lead time depends on material availability, part complexity, quantity, secondary operations, finishing, inspection, and delivery destination. Share your required delivery date with the RFQ so the production plan can be reviewed.",
  },
];

const FAQ_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function SMFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#1A1918] py-20 lg:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_STRUCTURED_DATA) }} />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="service-section-title text-white">
            <EditableText path="faq.heading" defaultValue="Frequently Asked " />
            <span className="service-title-accent">
              <EditableText path="faq.headingHighlight" defaultValue="Questions" />
            </span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `sheet-metal-faq-answer-${index}`;
            const buttonId = `sheet-metal-faq-button-${index}`;

            return (
              <article key={item.question} className={cn("overflow-hidden rounded-xl transition-colors duration-200", isOpen ? "bg-[#D09947]/30" : "bg-[#2A2A2A] hover:bg-[#D09947]/30")}>
                <h3>
                  <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)} className="group flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6">
                    <span className="flex-1 text-[15px] font-medium leading-snug text-white sm:text-base md:text-[17px]">
                      <EditableText path={`faq.items.${index}.question`} defaultValue={item.question} />
                    </span>
                    <span className="shrink-0 pl-2 text-[#D09947] sm:pl-4">
                      <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div id={answerId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen} className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-7 text-[15px] leading-[1.7] text-white sm:px-6 sm:pr-16">
                      <EditableText path={`faq.items.${index}.answer`} defaultValue={item.answer} multiline />
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
