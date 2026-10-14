"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const FAQ_ITEMS = [
  {
    question: "What CNC machining tolerances can ApexBatch support?",
    answer: "General CNC tolerances are typically ±0.05 mm, with precision tolerances down to ±0.01 mm available for applicable parts. Selected ground, bored or precision-machined features can achieve tolerances as tight as ±0.003 mm under controlled conditions.",
  },
  {
    question: "How frequently are parts inspected during production?",
    answer: "Inspection frequency is defined by the project control plan. For applicable production programs, scheduled IPQC can be performed at two-hour intervals and may be increased according to process risk, part complexity or customer-specific requirements.",
  },
  {
    question: "What quality documentation and traceability are available?",
    answer: "Depending on project requirements, we can provide dimensional inspection reports, FAI reports, material certificates, surface treatment certificates and defined batch traceability records.",
  },
  {
    question: "Can you follow customer-specific inspection requirements?",
    answer: "Yes. Customer drawings, inspection sheets, critical characteristics, sampling requirements and control plans can be reviewed before quotation and incorporated into the project quality plan where feasible.",
  },
  {
    question: "How are quality concerns handled during production or after delivery?",
    answer: "Affected material or parts are identified and contained according to the available part, order and batch information. Our team reviews the approved drawing, inspection records, production history and reported issue to determine the affected scope and root cause. Corrective action is implemented and verified where required. If a manufacturing nonconformance attributable to ApexBatch is confirmed, an appropriate resolution such as rework, remake or replacement is arranged according to the applicable order terms.",
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

export function QualityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_STRUCTURED_DATA) }} />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="service-section-title">
            <EditableText path="qualityFaq.heading" defaultValue="Quality Assurance " />
            <span className="service-title-accent"><EditableText path="qualityFaq.headingHighlight" defaultValue="FAQs" /></span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `quality-faq-answer-${index}`;
            const buttonId = `quality-faq-button-${index}`;
            return (
              <article key={item.question} className={cn("overflow-hidden rounded-xl transition-colors duration-200", isOpen ? "bg-[#D09947]/30" : "bg-[#2A2A2A] hover:bg-[#D09947]/30")}>
                <h3>
                  <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)} className="group flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6">
                    <span className="flex-1 text-base font-semibold leading-snug text-white sm:text-lg md:text-[21px]">
                      <EditableText path={`qualityFaq.items.${index}.question`} defaultValue={item.question} />
                    </span>
                    <span className="shrink-0 pl-2 text-[#D09947] sm:pl-4"><ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} aria-hidden="true" /></span>
                  </button>
                </h3>
                <div id={answerId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen} className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-7 text-[15px] leading-[1.7] text-white sm:px-6 sm:pr-16">
                      <EditableText path={`qualityFaq.items.${index}.answer`} defaultValue={item.answer} multiline />
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
