"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Our ",
  headingHighlight: "CNC Turning",
  headingSuffix: " Capabilities",
  intro:
    "ApexBatch supports CNC turning for precision metal and plastic parts, from prototype validation to repeat production.",
  rangeTitle: "Machining Range",
  rangeItems: [
    { label: "Maximum Part Diameter", value: "800 mm" },
    { label: "Maximum Part Length", value: "1500 mm" },
    { label: "Minimum Part Diameter", value: "1 mm" },
    { label: "Minimum Hole Diameter", value: "0.3 mm" },
    { label: "Maximum L/D Ratio", value: "15:1" },
    { label: "Best Surface Roughness", value: "Ra 0.8" },
  ],
  featuresTitle: "Supported Features",
  featuresItems: [
    "Turning",
    "Boring",
    "Drilling",
    "Tapping",
    "Threading",
    "Grooving",
    "Knurling",
    "Parting",
    "Facing",
    "Internal & External Turning",
    "Secondary CNC Milling",
  ],
  cards: [
    {
      title: "Round Components",
      description: "Shafts, sleeves, bushings, spacers, pins, rollers, and cylindrical housings.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/cnc-turning.webp",
    },
    {
      title: "Hole & Thread Features",
      description: "Bored holes, drilled holes, tapped holes, internal threads, and external threads.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-Automotive Sensor Mount.webp",
    },
    {
      title: "Complex Turned Parts",
      description: "Slots, flats, side holes, cross holes, eccentric holes, and multi-face features.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-production-workshop-2.webp",
    },
    {
      title: "Prototype to Repeat Runs",
      description: "Support for prototypes, low-volume batches, high-mix parts, and repeat production.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-factory-3.webp",
    },
  ],
  ctaText: "Not sure if your part fits CNC turning? Upload your CAD files for a free DFM review.",
};

const INTRO_TEXT_STYLE = { fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C" } as const;
const CARD_DESC_STYLE = { fontSize: "14px", lineHeight: 1.5, color: "#7A7A7C" } as const;

export function CMTServices() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "88px 0 72px", background: "#34312F" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-right"
        >
          <h2
            className="text-white"
            style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.15 }}
          >
            <EditableText path="services.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="services.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="services.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p className="ml-auto w-[80%]" style={{ ...INTRO_TEXT_STYLE, marginTop: "18px" }}>
            <EditableText path="services.intro" defaultValue={DEFAULTS.intro} />
          </p>
        </motion.div>

        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/8 bg-[#1A1A1A] p-5 md:p-6"
          >
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#EEC569]">
              <EditableText path="services.rangeTitle" defaultValue={DEFAULTS.rangeTitle} />
            </h3>
            <dl className="space-y-2.5">
              {DEFAULTS.rangeItems.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-white/6 pb-2.5 last:border-0 last:pb-0"
                >
                  <dt style={INTRO_TEXT_STYLE}>
                    <EditableText path={`services.rangeItems.${index}.label`} defaultValue={item.label} />
                  </dt>
                  <dd
                    className="shrink-0 text-right font-semibold text-white"
                    style={{ fontSize: "18px", lineHeight: 1.6 }}
                  >
                    <EditableText path={`services.rangeItems.${index}.value`} defaultValue={item.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="rounded-xl border border-white/8 bg-[#1A1A1A] p-5 md:p-6"
          >
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#EEC569]">
              <EditableText path="services.featuresTitle" defaultValue={DEFAULTS.featuresTitle} />
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {DEFAULTS.featuresItems.map((feature, index) => (
                <li key={feature} className="flex items-center gap-2.5" style={INTRO_TEXT_STYLE}>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D09947]" aria-hidden="true" />
                  <EditableText path={`services.featuresItems.${index}`} defaultValue={feature} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DEFAULTS.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-white/6 bg-[#141414]"
            >
              <div className="flex flex-1 flex-col p-3.5">
                <h4 className="mb-1 font-bold text-white" style={{ fontSize: "18px", lineHeight: 1.4 }}>
                  <EditableText path={`services.cards.${index}.title`} defaultValue={card.title} />
                </h4>
                <p style={CARD_DESC_STYLE}>
                  <EditableText path={`services.cards.${index}.description`} defaultValue={card.description} multiline />
                </p>
              </div>
              <div className="relative mt-auto aspect-[3/2] w-full shrink-0 border-t border-white/6 bg-[#0e0e0e]">
                <EditableImage
                  path={`services.cards.${index}.image`}
                  defaultSrc={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={80}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[640px]" style={INTRO_TEXT_STYLE}>
            <EditableText path="services.ctaText" defaultValue={DEFAULTS.ctaText} multiline />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 font-bold uppercase tracking-[0.1em] text-[#EEC569] transition-colors hover:text-[#F1DB9A]"
            style={{ fontSize: "18px", lineHeight: 1.6 }}
          >
            Upload CAD Files
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
