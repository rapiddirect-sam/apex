"use client";

import { motion } from "@/components/ui/StaticMotion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Design Review Before ",
  headingHighlight: "Production",
  description:
    "The most effective time to resolve manufacturing risk is before cutting begins. Our engineering review focuses on the features that affect feasibility, cost, part quality, and final assembly.",
  ctaText: "Request Free DFM Feedback",
  reviews: [
    {
      title: "Sheet Metal Bend Radius, Flange Length, and Tool Access",
      description:
        "Bend feasibility depends on material, thickness, temper, radius, flange length, tooling, and bend order. Short flanges, return bends, or closely spaced bends may need adjustment before production.",
    },
    {
      title: "Holes, Slots, and Cutouts Near Bends",
      description:
        "Holes and slots can change shape during forming when they sit near a bend zone. Mark functional features and critical post-bend dimensions clearly in your drawing.",
    },
    {
      title: "Flat Pattern, K-Factor, and Final Dimensions",
      description:
        "CAD defaults do not always match the approved material, radius, tooling, or measurement datum. Identify the dimensions that matter on the completed formed part.",
    },
    {
      title: "Corners, Welding, Hardware, and Assembly",
      description:
        "Corner relief, welding access, hardware placement, coating clearance, cosmetic surfaces, and assembly fit should be reviewed together. This helps prevent avoidable changes after the part has been cut or formed.",
    },
  ],
};

export function SMProcess() {
  return (
    <section className="relative overflow-hidden bg-[#000000] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:order-2 lg:self-center">
            <h2 className="service-section-title text-white">
              <EditableText path="process.heading" defaultValue={DEFAULTS.heading} />
              <span className="service-title-accent"><EditableText path="process.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
            </h2>
            <p className="service-section-copy mt-6 max-w-[470px]">
              <EditableText path="process.description" defaultValue={DEFAULTS.description} multiline />
            </p>
            <Link href="/contact" className="cta-primary group mt-8 inline-flex">
              <EditableText path="process.ctaText" defaultValue={DEFAULTS.ctaText} />
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="space-y-3 lg:order-1">
            {DEFAULTS.reviews.map((review, index) => (
              <motion.article key={review.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="border-l-2 border-[#EEC569]/60 bg-[#292624]/80 px-6 py-5 sm:px-7">
                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                  <EditableText path={`process.reviews.${index}.title`} defaultValue={review.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C5C1BD]">
                  <EditableText path={`process.reviews.${index}.description`} defaultValue={review.description} multiline />
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
