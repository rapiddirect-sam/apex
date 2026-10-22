"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Custom Aluminum Extrusion ",
  headingHighlight: "FAQs",
  items: [
    {
      question: "When are custom aluminum extrusions the right choice?",
      answer:
        "Custom extrusion is suitable when your part needs a dedicated cross-section, integrated channels or cavities, specific mounting features, a weight-saving structure or a profile that cannot be achieved efficiently with standard material and machining alone.",
    },
    {
      question: "Do I need a custom die?",
      answer:
        "A custom aluminum extrusion die is required for a project-specific cross-section. The die is designed around the profile geometry, wall thickness, cavities, material and tolerance requirements.",
    },
    {
      question: "Can complex hollow or multi-cavity profiles be produced?",
      answer:
        "Yes. We support medium- to high-complexity profiles, including hollow, semi-hollow, multi-cavity and irregular cross-sections. Final feasibility is reviewed against the profile geometry, wall thickness, alloy, length and tolerance requirements.",
    },
    {
      question: "How should I specify critical dimensions and tolerances?",
      answer:
        "Mark all assembly-critical dimensions, mating surfaces, hole locations, visible surfaces and straightness requirements on the drawing. This allows the manufacturing and inspection approach to be defined before production.",
    },
    {
      question: "Can you deliver finished parts instead of raw extrusion lengths?",
      answer:
        "Yes. Profiles can be supplied with cut-to-length processing, CNC machining, drilling, tapping, deburring, surface finishing, inspection and project-specific packaging.",
    },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DEFAULTS.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function EXFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#34312F] py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <h2 className="service-section-title">
            <EditableText path="extrusionFaq.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText
                path="extrusionFaq.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {DEFAULTS.items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `aluminum-extrusion-faq-answer-${index}`;
            const buttonId = `aluminum-extrusion-faq-button-${index}`;

            return (
              <article
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-xl transition-colors duration-200",
                  isOpen
                    ? "bg-[#D09947]/30"
                    : "bg-[#2A2A2A] hover:bg-[#D09947]/30",
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="flex-1 text-[15px] font-medium leading-snug text-white sm:text-base md:text-[17px]">
                      <EditableText
                        path={`extrusionFaq.items.${index}.question`}
                        defaultValue={item.question}
                      />
                    </span>
                    <span className="shrink-0 pl-2 text-[#D09947] sm:pl-4">
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-7 text-[15px] leading-[1.7] text-white sm:px-6 sm:pr-16">
                      <EditableText
                        path={`extrusionFaq.items.${index}.answer`}
                        defaultValue={item.answer}
                        multiline
                      />
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
