"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  titleWhite: "Have Any ",
  titleHighlight: "Questions?",
  subtitle:
    "Find answers to common questions about our precision manufacturing services, quality standards, and production capabilities",
  faqItems: [
    {
      question:
        "What is your typical lead time for prototype vs. batch production?",
      answer:
        "Standard lead times range from 5-10 business days for prototypes and 2-4 weeks for production runs depending on complexity and quantity. We offer expedited services for urgent projects.",
    },
    {
      question:
        "How does ApexBatch support material selection for demanding applications?",
      answer:
        "We review material grade, intended application, operating conditions, performance requirements and manufacturing feasibility before quotation. Our engineers can recommend a practical material and process route based on your part requirements.",
    },
    {
      question:
        "Can I review samples or first-piece results before full production?",
      answer:
        "For applicable new-part, low-volume and production programs, sample approval, first-piece review or formal FAI can be arranged before full production proceeds. Free sample support may be available for eligible projects.",
    },
    {
      question:
        "What is covered by ApexBatch's quality warranty?",
      answer:
        "ApexBatch's quality warranty covers manufacturing-related issues confirmed to be outside the agreed project requirements, including dimensions or GD&T outside the approved specification, process-related surface-treatment defects, material not matching the agreed grade or documented requirement, and assembly-fit issues caused by production accuracy. The warranty does not generally cover customer design deficiencies, use outside agreed operating conditions, installation errors, unauthorized modifications, normal wear of tooling or consumable items, post-acceptance transit damage, or orders with unresolved payment obligations.",
    },
    {
      question:
        "How are delivery and shipment handled?",
      answer:
        "Once parts are completed and released, we provide shipment coordination and tracking information. Final payment, freight arrangements, Incoterms and delivery responsibilities are confirmed according to the agreed quotation, contract or proforma invoice.",
    },
    {
      question: "How long is the warranty period?",
      answer:
        "Quality claims for parts, surface treatment and assembly fit can generally be submitted within two years of delivery, subject to review of the specific claim, part usage, operating environment and agreed project scope. For material-related concerns under normal intended use, longer-term support of up to ten years may be considered. Final warranty duration and material-performance commitments are confirmed in the applicable quotation, contract or proforma invoice.",
    },
    {
      question: "How does the after-sales process work?",
      answer:
        "To open a quality-support case, please provide the order details and clear photos, videos or inspection evidence describing the issue. We review the case and confirm the appropriate next steps with your team. Where an ApexBatch manufacturing issue is confirmed, we will arrange an appropriate resolution—such as rework, replacement or remake—in line with the applicable order terms. For issues related to design, application conditions or other external causes, we will work with you to identify the most practical path forward.",
    },
  ],
  stillHaveQuestionsTitle: "Still Have Questions?",
  stillHaveQuestionsDescription:
    "Our engineering team is ready to discuss your specific manufacturing requirements and provide tailored solutions for your project.",
  contactButton: "Contact Us",
  quoteButton: "Get Production Quote",
};

export function Home3FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#34312F] py-20 lg:py-28"
      style={{
        background: `
          radial-gradient(
            ellipse 80% 60% at 18% 0%,
            rgba(208,153,71,0.12),
            transparent 58%
          ),
          #34312F
        `
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="service-section-title">
            <EditableText
              path="faq.titleWhite"
              defaultValue={DEFAULTS.titleWhite}
            />
            <span className="service-title-accent">
              <EditableText
                path="faq.titleHighlight"
                defaultValue={DEFAULTS.titleHighlight}
              />
            </span>
          </h2>
          <p className="service-section-copy mx-auto max-w-xl">
            <EditableText
              path="faq.subtitle"
              defaultValue={DEFAULTS.subtitle}
              multiline
            />
          </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {DEFAULTS.faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `home-faq-answer-${index}`;
              const buttonId = `home-faq-button-${index}`;

              return (
                <article
                  key={item.question}
                  className={cn(
                    "overflow-hidden rounded-xl transition-colors duration-200",
                    isOpen ? "bg-[#D09947]/30" : "bg-[#2A2A2A] hover:bg-[#D09947]/30",
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
                        <EditableText path={`faq.items.${index}.question`} defaultValue={item.question} />
                      </span>
                      <span className="shrink-0 pl-2 text-[#D09947] sm:pl-4">
                        <ChevronDown
                          className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")}
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
                        <EditableText path={`faq.items.${index}.answer`} defaultValue={item.answer} multiline />
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-[790px] rounded-2xl border border-[#3A3A3A] bg-[#2A2A2A] p-10 text-center"
        >
          <div className="w-12 h-12 bg-[#3A3A3A] rounded-xl flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-6 h-6 text-[#D09947]" />
          </div>

          <h3 className="mb-3 text-[clamp(24px,4vw,30px)] font-extrabold text-white">
            <EditableText
              path="faq.stillHaveQuestionsTitle"
              defaultValue={DEFAULTS.stillHaveQuestionsTitle}
            />
          </h3>
          <p className="mx-auto mb-8 max-w-[480px] text-[clamp(16px,2.5vw,21px)] leading-[1.5] text-[#F9EBBC]">
            <EditableText
              path="faq.stillHaveQuestionsDescription"
              defaultValue={DEFAULTS.stillHaveQuestionsDescription}
              multiline
            />
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="cta-primary group"
            >
              <EditableText
                path="faq.quoteButton"
                defaultValue={DEFAULTS.quoteButton}
              />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              rel="nofollow"
              className="cta-secondary group"
            >
              <EditableText
                path="faq.contactButton"
                defaultValue={DEFAULTS.contactButton}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
