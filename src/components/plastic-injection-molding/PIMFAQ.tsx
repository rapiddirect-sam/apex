"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Plastic Injection Molding ",
  headingHighlight: "FAQs",
  items: [
    {
      question: "What affects plastic injection molding cost?",
      answer: "Tooling complexity, part size, resin, cavity strategy, surface requirements, critical tolerances, quantity, inspection scope, and secondary operations affect injection molding cost. A DFM review identifies the highest-impact features before tooling is released.",
    },
    {
      question: "How is lead time determined for a custom plastic molding project?",
      answer: "Lead time is set by part complexity, tooling route, resin availability, surface requirements, initial-part sampling, inspection scope, approved changes, and delivery requirements. We confirm the production plan after reviewing the project scope.",
    },
    {
      question: "Is there a minimum order quantity for custom molding?",
      answer: "ApexBatch does not apply one universal minimum order quantity across every project. The suitable tooling and production route are assessed against design maturity, part complexity, material, expected quantity, and repeat-production requirements.",
    },
    {
      question: "Can a mold be modified if my plastic part design changes?",
      answer: "Modification may be possible. We assess the proposed change, existing tooling construction, affected features, material, and production status before confirming tooling work, cost, approval steps, and schedule implications.",
    },
    {
      question: "Can an existing plastic injection mold be transferred to ApexBatch?",
      answer: "Transfer feasibility is assessed from the tool condition, design records, resin, machine compatibility, and required production standards. Ownership, storage, maintenance, modification, transfer, and repeat-production responsibilities should be confirmed in the project agreement before work begins.",
    },
  ],
};

const FAQ_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DEFAULTS.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function PIMFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_STRUCTURED_DATA) }} />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="service-section-title">
            <EditableText path="plasticInjectionFaq.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="plasticInjectionFaq.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
          {DEFAULTS.items.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `plastic-injection-faq-answer-${index}`;
            const buttonId = `plastic-injection-faq-button-${index}`;

            return (
              <article key={item.question} className={cn("overflow-hidden rounded-xl transition-colors duration-200", isOpen ? "bg-[#D09947]/30" : "bg-[#2A2A2A] hover:bg-[#D09947]/30")}>
                <h3>
                  <button id={buttonId} type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={contentId} className="group flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6">
                    <span className="flex-1 text-[15px] font-medium leading-snug text-white sm:text-base md:text-[17px]"><EditableText path={`plasticInjectionFaq.items.${index}.question`} defaultValue={item.question} /></span>
                    <span className="shrink-0 pl-2 text-[#D09947] sm:pl-4"><ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} aria-hidden="true" /></span>
                  </button>
                </h3>
                <div id={contentId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen} className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden"><p className="px-5 pb-7 text-[15px] leading-[1.7] text-white sm:px-6 sm:pr-16"><EditableText path={`plasticInjectionFaq.items.${index}.answer`} defaultValue={item.answer} multiline /></p></div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
