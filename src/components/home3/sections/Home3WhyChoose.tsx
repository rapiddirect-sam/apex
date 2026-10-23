"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  titleWhite: "Why Engineers ",
  titleHighlight: "Choose ApexBatch",
  ctaText: "Need an engineering and inspection review before quotation?",
  ctaButton: "Request DFM Review",
  image: "/images/home/apexbatch-engineering-review-production-planning-meeting.webp",
  imageAlt: "ApexBatch engineering team reviewing production planning requirements",
  items: [
    {
      number: "01",
      title: "Solve Problems Before Production",
      description:
        "Get practical DFM feedback before quotation—so manufacturability risks, critical dimensions and finish requirements are addressed early.",
    },
    {
      number: "02",
      title: "Clear Ownership from Quote to Delivery",
      description:
        "One project contact keeps drawing revisions, technical questions and production updates connected—so decisions do not get lost between suppliers.",
    },
    {
      number: "03",
      title: "Quality You Can Verify",
      description:
        "From inspection planning to agreed documentation, we build measurable quality controls around the features that matter to your part.",
    },
    {
      number: "04",
      title: "Built to Move Beyond the First Batch",
      description:
        "Start with pilot builds, then carry approved processes, inspection requirements and delivery planning into repeat production.",
    },
  ],
};

export function Home3WhyChoose() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentItem = DEFAULTS.items[currentSlide];

  const goTo = (index: number) => {
    setCurrentSlide((index + DEFAULTS.items.length) % DEFAULTS.items.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((index) => (index + 1) % DEFAULTS.items.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #2B2826
        `,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "56px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="whyChoose.titleWhite" defaultValue={DEFAULTS.titleWhite} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="whyChoose.titleHighlight" defaultValue={DEFAULTS.titleHighlight} />
            </span>
          </h2>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[320px] overflow-hidden rounded-2xl border-2 border-[#7F4D0F] bg-[#171717] shadow-[inset_0_0_0_1px_rgba(208,153,71,0.15),0_24px_48px_rgba(0,0,0,0.6)] lg:min-h-0"
          >
            <EditableImage
              path="homeWhyChoose.image"
              defaultSrc={DEFAULTS.image}
              alt={DEFAULTS.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="flex flex-col"
          >
            <div className="sr-only">
              {DEFAULTS.items.map((item) => (
                <h3 key={item.number}>{item.title}</h3>
              ))}
            </div>
            <div className="flex min-h-[320px] flex-1 flex-col rounded-2xl border border-[#D09947]/20 bg-white/[0.035] p-7 sm:p-8 lg:min-h-0">
              <motion.div
                key={currentItem.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-5xl font-bold leading-none text-[#D09947]/35">
                  <EditableText
                    path={`homeWhyChoose.items.${currentSlide}.number`}
                    defaultValue={currentItem.number}
                  />
                </div>
                <p className="mt-5 text-2xl font-semibold text-[#D09947]">
                  <EditableText
                    path={`homeWhyChoose.items.${currentSlide}.title`}
                    defaultValue={currentItem.title}
                  />
                </p>
                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-[#D09947] bg-[#D09947]/10">
                    <Check className="h-4 w-4 text-[#D09947]" aria-hidden="true" />
                  </span>
                  <p className="body-copy max-w-[34rem]">
                    <EditableText
                      path={`homeWhyChoose.items.${currentSlide}.description`}
                      defaultValue={currentItem.description}
                      multiline
                    />
                  </p>
                </div>
              </motion.div>

              <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(currentSlide - 1)}
                    aria-label="Previous reason"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D09947]/40 bg-black/60 transition-colors hover:bg-[#D09947]/15"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#D09947]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(currentSlide + 1)}
                    aria-label="Next reason"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D09947]/40 bg-black/60 transition-colors hover:bg-[#D09947]/15"
                  >
                    <ChevronRight className="h-5 w-5 text-[#D09947]" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {DEFAULTS.items.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`Show reason ${index + 1}`}
                      className="h-1 rounded-full transition-all"
                      style={{
                        width: index === currentSlide ? "24px" : "12px",
                        background: index === currentSlide ? "#D09947" : "#444444",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="body-copy mb-5">
            <EditableText path="homeWhyChoose.ctaText" defaultValue={DEFAULTS.ctaText} />
          </p>
          <Link href="/contact" rel="nofollow" className="cta-primary group">
            <EditableText path="homeWhyChoose.ctaButton" defaultValue={DEFAULTS.ctaButton} />
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
