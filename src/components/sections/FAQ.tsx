"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDown, MessageCircle, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What tolerances can you achieve?",
    answer:
      "We achieve tolerances as tight as ±0.01mm for CNC machining and ±0.05mm for standard parts. Our Zeiss CMM equipment verifies critical dimensions to ensure your specifications are met consistently across production runs.",
  },
  {
    question: "How do you ensure quality consistency across batches?",
    answer:
      "We implement rigorous IPQC (In-Process Quality Control) every 2 hours during production. Combined with first article inspection, final inspection, and full documentation including COC and material certificates, we maintain 99.8% quality rates across all orders.",
  },
  {
    question: "What are your typical lead times?",
    answer:
      "Standard lead times range from 5-10 business days for prototypes and 2-4 weeks for production runs depending on complexity and quantity. We offer expedited services for urgent projects. You'll receive a specific timeline with your quote.",
  },
  {
    question: "Do you provide material certification?",
    answer:
      "Yes, we provide full material traceability and certification for all orders. This includes mill certificates, material test reports, and certificates of conformance. We source materials from approved suppliers with documented quality standards.",
  },
  {
    question: "What after-sales support do you offer?",
    answer:
      "We provide comprehensive after-sales support including technical consultation, design optimization for future orders, quality issue resolution, and ongoing engineering support. Our dedicated project managers are available to assist with any concerns.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-apex-black" id="contact">
      <Container size="narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-apex-white">
            GOT QUESTIONS?
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "bg-apex-gray rounded-xl border transition-colors",
                openIndex === index
                  ? "border-gold-primary/30"
                  : "border-apex-border/10"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-apex-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gold-primary flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-apex-text-secondary">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-apex-gray to-apex-charcoal rounded-2xl p-8 md:p-12 border border-gold-primary/20 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl text-apex-white mb-4">
            STILL HAVE QUESTIONS?
          </h3>
          <p className="text-apex-text-secondary mb-8 max-w-md mx-auto">
            Our team is ready to help you with your manufacturing needs. Get in
            touch today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline">
              <MessageCircle className="mr-2 w-5 h-5" />
              Contact Sales Team
            </Button>
            <Button>
              <FileText className="mr-2 w-5 h-5" />
              Request a Quote
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
