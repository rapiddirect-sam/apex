"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EditableText } from "@/components/cms";
import { motion } from "@/components/ui/StaticMotion";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "What is the maximum bend length you can support?",
    answer:
      "Our metal bending services support bend lengths up to 3000 mm. The final production route is confirmed from the material, thickness, formed geometry, handling requirements, and critical dimensions of the part.",
  },
  {
    question: "Can you bend 6061 aluminum?",
    answer:
      "Yes, for suitable part geometry and material condition. Because some 6061 tempers are more prone to cracking at tight radii, 5052 or 5754 can be a better choice when bendability is the priority. Share the grade, temper, thickness, and bend geometry for a practical recommendation.",
  },
  {
    question: "Can holes or slots be placed close to a bend?",
    answer:
      "Yes, but their distance from the bend line needs to be checked before forming. Features placed too close can distort, interfere with tooling, or affect the fit of the finished part.",
  },
  {
    question: "Can finishing be completed after bending?",
    answer:
      "Yes. Powder coating, anodizing, brushing, polishing, electropolishing, e-coating, and plating are completed after forming. Specify the required finish before production so visible surfaces, masking, thread protection, and assembly clearances can be planned correctly.",
  },
  {
    question: "Do you accept prototype and low-volume orders?",
    answer:
      "Yes. Projects can begin with one part, whether you are validating a prototype, preparing a low-volume build, or planning repeat production.",
  },
  {
    question: "How quickly can I receive bent sheet metal parts?",
    answer:
      "Simple prototypes can often move through production within 3–5 business days once requirements are confirmed. Low-volume orders typically require 7–10 business days. Repeat or higher-volume production is commonly scheduled within 2–3 weeks, depending on quantity, material availability, secondary operations, inspection, and shipping. Expedited production may be available for eligible projects, with a typical surcharge of 20–50%.",
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

export function BendingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_STRUCTURED_DATA) }} />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="service-section-title text-white">
            <EditableText path="bendingFaq.heading" defaultValue="Frequently Asked " />
            <span className="service-title-accent">
              <EditableText path="bendingFaq.headingHighlight" defaultValue="Questions" />
            </span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `bending-faq-answer-${index}`;
            const buttonId = `bending-faq-button-${index}`;

            return (
              <article key={item.question} className={cn("overflow-hidden rounded-xl transition-colors duration-200", isOpen ? "bg-[#D09947]/30" : "bg-[#2A2A2A] hover:bg-[#D09947]/30")}>
                <h3>
                  <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)} className="group flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6">
                    <span className="flex-1 text-[15px] font-medium leading-snug text-white sm:text-base md:text-[17px]">
                      <EditableText path={`bendingFaq.items.${index}.question`} defaultValue={item.question} />
                    </span>
                    <span className="shrink-0 pl-2 text-[#D09947] sm:pl-4">
                      <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div id={answerId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen} className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-7 text-[15px] leading-[1.7] text-white sm:px-6 sm:pr-16">
                      <EditableText path={`bendingFaq.items.${index}.answer`} defaultValue={item.answer} multiline />
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
