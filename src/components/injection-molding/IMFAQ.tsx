"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Injection Molding ",
  headingHighlight: "FAQs",
  items: [
    {
      question: "Which injection molding service is right for my project?",
      answer:
        "Choose plastic molding for standard thermoplastic parts, overmolding for soft-touch or sealing features, insert molding for integrated functional components, and tooling support when the mold itself is the immediate purchase decision.",
    },
    {
      question: "What is the injection molding process?",
      answer:
        "Injection molding forms a part by injecting molten plastic into a purpose-designed mold, allowing it to cool and solidify, and then ejecting the finished part. The process is commonly used when a stable design needs repeatable custom parts across planned production quantities.",
    },
    {
      question: "When is injection molding a good fit?",
      answer:
        "Injection molding is often a strong option when the part design is stable enough to justify dedicated tooling and the project needs repeatable plastic parts. Early concepts, frequently changing designs, very low quantities, or certain complex geometries may be better evaluated with another manufacturing route first.",
    },
    {
      question: "What is the difference between mold tooling and molded-part production?",
      answer:
        "Tooling creates the mold. Molded-part production uses the approved mold, material, process, and quality requirements to manufacture parts.",
    },
    {
      question: "How is injection molding different from CNC machining or 3D printing?",
      answer:
        "Injection molding uses dedicated tooling to make repeatable parts from a selected resin. CNC machining removes material from stock, while 3D printing builds parts layer by layer. The best route depends on design maturity, quantity, material requirements, appearance, tolerances, and the need for repeat production.",
    },
    {
      question: "Who owns the injection mold?",
      answer:
        "Tool ownership, storage, maintenance, modification, and transfer terms should be confirmed in the quotation and project agreement before tooling begins. The agreed scope should clearly state the rights and responsibilities for the specific tooling program.",
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

export function IMFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_STRUCTURED_DATA) }} />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="service-section-title">
            <EditableText path="faq.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="faq.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
          {DEFAULTS.items.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `injection-faq-answer-${index}`;
            const buttonId = `injection-faq-button-${index}`;

            return (
              <article
                key={item.question}
                className={cn("overflow-hidden rounded-xl transition-colors duration-200", isOpen ? "bg-[#D09947]/30" : "bg-[#2A2A2A] hover:bg-[#D09947]/30")}
              >
                <h3>
                  <button id={buttonId} type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={contentId} className="group flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6">
                    <span className="flex-1 text-[15px] font-medium leading-snug text-white sm:text-base md:text-[17px]">
                      <EditableText path={`faq.items.${index}.question`} defaultValue={item.question} />
                    </span>
                    <span className="shrink-0 pl-2 text-[#D09947] sm:pl-4"><ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} aria-hidden="true" /></span>
                  </button>
                </h3>
                <div id={contentId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen} className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
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
