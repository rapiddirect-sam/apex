"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const FAQ_ITEMS = [
  {
    question: "What is the difference between surface roughness and surface finishing?",
    answer:
      "Surface roughness, often expressed as Ra, describes a surface characteristic. Surface finishing is the process route used to achieve a required functional or visual result; an Ra value alone is not a complete finish specification.",
  },
  {
    question: "Will finishing affect threads, fits or mating surfaces?",
    answer:
      "It can. Identify critical threads, bores, sealing faces, mating features and electrical contacts on the drawing so they can be reviewed before the finishing process is selected.",
  },
  {
    question: "Can you match a color, gloss level or cosmetic reference?",
    answer:
      "Where applicable, provide a color standard, approved sample or reference image. Final appearance can be affected by the base material, surface preparation, texture, lighting and process conditions.",
  },
  {
    question: "Which surface finishing process is right for my part?",
    answer:
      "Start with the primary requirement—such as corrosion resistance, wear performance, appearance, dimensional control, electrical function or marking—then provide the material, drawing and applicable specification. The suitable surface finishing process depends on how the part will be used, as well as its geometry and critical features.",
  },
  {
    question: "What should I include in a surface-finishing RFQ?",
    answer:
      "Send the 2D drawing and/or 3D model, material grade, required process or specification, critical dimensions and areas to mask or protect, cosmetic reference where applicable, quantity and delivery requirement. If you are unsure of the process, describe the intended application and result instead.",
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

export function SFFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_STRUCTURED_DATA) }} />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="service-section-title">
            <EditableText path="surfaceFinishingFaq.headingPrefix" defaultValue="Frequently Asked " />
            <span className="service-title-accent">
              <EditableText path="surfaceFinishingFaq.headingHighlight" defaultValue="Questions" />
            </span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `surface-finishing-faq-answer-${index}`;
            const buttonId = `surface-finishing-faq-button-${index}`;

            return (
              <article key={item.question} className={cn("overflow-hidden rounded-xl transition-colors duration-200", isOpen ? "bg-[#D09947]/30" : "bg-[#2A2A2A] hover:bg-[#D09947]/30")}>
                <h3>
                  <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)} className="group flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6">
                    <span className="flex-1 text-[15px] font-medium leading-snug text-white sm:text-base md:text-[17px]">
                      <EditableText path={`surfaceFinishingFaq.items.${index}.question`} defaultValue={item.question} />
                    </span>
                    <span className="shrink-0 pl-2 text-[#D09947] sm:pl-4">
                      <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div id={answerId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen} className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-7 text-[15px] leading-[1.7] text-white sm:px-6 sm:pr-16">
                      <EditableText path={`surfaceFinishingFaq.items.${index}.answer`} defaultValue={item.answer} multiline />
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
