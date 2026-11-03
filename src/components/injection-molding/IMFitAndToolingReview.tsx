"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";

const DEFAULTS = {
  fit: {
    heading: "Is Injection Molding Right for Your ",
    headingHighlight: "Part?",
    paragraphs: [
      "Injection molding forms a part by injecting molten plastic into a purpose-designed mold, allowing it to cool and solidify, and then ejecting the finished part. The same approved tool can then produce repeatable parts across prototype, pilot, and repeat-production programs.",
      "It is often suitable for custom plastic parts that need defined geometry, functional features, controlled material performance, and planned repeat production.",
    ],
    image: "/injection-molding/injection-molded-parts-on-conveyor.avif",
    imageAlt: "Injection molded plastic parts moving along a production conveyor",
  },
  lifecycle: {
    heading: "From Design Review to ",
    headingHighlight: "Repeat Production",
    introduction:
      "Whether the project starts with prototype injection molding, low-volume injection molding, or an approved repeat-production program, each stage has different decisions to make.",
    beforeTooling: {
      label: "01",
      heading: "What We Review Before Tooling",
      description: "The review defines the molding route, tooling scope, and requirements to resolve before tooling release.",
      items: [
      "Material direction and intended operating environment",
      "Wall thickness, draft, ribs, bosses, undercuts, and ejection",
      "Critical dimensions, mating surfaces, sealing areas, and assembly interfaces",
      "Visible surfaces, texture, color, gloss, and parting-line expectations",
      "Inserts, terminals, overmolding interfaces, and secondary operations",
      "Inspection, documentation, packaging, and delivery requirements",
      ],
      cta: "Submit Your CAD for DFM Review",
    },
    initialParts: {
      label: "02",
      heading: "Initial Parts and Approval",
      reviewLabel: "ApexBatch reviews",
      review: "Approved material, critical dimensions, visible surfaces, functional features, and agreed inspection results.",
      approvalLabel: "You approve",
      approval: "Whether the initial parts meet the agreed requirements, or which changes are needed before production release.",
    },
    repeatProduction: {
      label: "03",
      heading: "Repeat Production",
      reviewLabel: "ApexBatch reviews",
      review: "Approved material, tooling status, inspection requirements, packaging, documentation, and delivery plan.",
      approvalLabel: "You approve",
      approval: "Batch schedule, approved revisions, and any changes to the original production requirements.",
    },
    note: "Before repeat production, you receive a clear approval record covering the drawing revision, material, critical features, inspection criteria, and any agreed deviations.",
  },
};

export function IMFitAndToolingReview({ showFit = true, showLifecycle = true }: { showFit?: boolean; showLifecycle?: boolean }) {
  return (
    <>
      {showFit ? (
      <section className="bg-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 md:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] md:gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="service-section-title text-white">
              <EditableText path="fitAndTooling.fit.headingPrefix" defaultValue={DEFAULTS.fit.heading} />
              <span className="service-title-accent"><EditableText path="fitAndTooling.fit.headingHighlight" defaultValue={DEFAULTS.fit.headingHighlight} /></span>
            </h2>
            <div className="mt-6 space-y-5">
              {DEFAULTS.fit.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className="service-section-copy max-w-[620px]">
                  <EditableText path={`fitAndTooling.fit.paragraphs.${index}`} defaultValue={paragraph} multiline />
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#171717]">
            <StaticImage
              path="fitAndTooling.fit.image"
              defaultSrc={DEFAULTS.fit.image}
              alt={DEFAULTS.fit.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
      ) : null}

      {showLifecycle ? (
      <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
            <h2 className="service-section-title text-white">
              <EditableText path="fitAndTooling.lifecycle.headingPrefix" defaultValue={DEFAULTS.lifecycle.heading} />
              <span className="service-title-accent"><EditableText path="fitAndTooling.lifecycle.headingHighlight" defaultValue={DEFAULTS.lifecycle.headingHighlight} /></span>
            </h2>
            <p className="service-section-copy mt-6 max-w-3xl">
              <EditableText path="fitAndTooling.lifecycle.introduction" defaultValue={DEFAULTS.lifecycle.introduction} multiline />
            </p>
          </motion.div>

          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 grid min-w-0 gap-8 rounded-xl border border-white/10 bg-[#252220] p-6 sm:p-8 md:grid-cols-[minmax(190px,0.31fr)_minmax(0,0.69fr)] md:items-center md:gap-10">
            <div className="min-w-0">
              <span className="inline-flex rounded-full border border-[#D09947]/60 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-[#EEC569]">
                <EditableText path="fitAndTooling.lifecycle.beforeTooling.label" defaultValue={DEFAULTS.lifecycle.beforeTooling.label} />
              </span>
              <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                <EditableText path="fitAndTooling.lifecycle.beforeTooling.heading" defaultValue={DEFAULTS.lifecycle.beforeTooling.heading} />
              </h3>
              <p className="service-section-copy mt-4">
                <EditableText path="fitAndTooling.lifecycle.beforeTooling.description" defaultValue={DEFAULTS.lifecycle.beforeTooling.description} multiline />
              </p>
              <Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group mt-6 w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap">
                <EditableText path="fitAndTooling.lifecycle.beforeTooling.cta" defaultValue={DEFAULTS.lifecycle.beforeTooling.cta} />
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="min-w-0">
              <motion.ol initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {DEFAULTS.lifecycle.beforeTooling.items.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-[#F0F0F1]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#EEC569]" aria-hidden="true" />
                    <span className="min-w-0"><EditableText path={`fitAndTooling.lifecycle.beforeTooling.items.${index}`} defaultValue={item} multiline /></span>
                  </li>
                ))}
              </motion.ol>
            </div>
          </motion.article>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[DEFAULTS.lifecycle.initialParts, DEFAULTS.lifecycle.repeatProduction].map((stage, index) => (
              <motion.article key={stage.heading} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-[#252220] p-6 sm:p-8">
                <span className="inline-flex rounded-full border border-[#D09947]/60 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-[#EEC569]">
                  <EditableText path={`fitAndTooling.lifecycle.${index === 0 ? "initialParts" : "repeatProduction"}.label`} defaultValue={stage.label} />
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-white">
                  <EditableText path={`fitAndTooling.lifecycle.${index === 0 ? "initialParts" : "repeatProduction"}.heading`} defaultValue={stage.heading} />
                </h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#EEC569]">
                      <EditableText path={`fitAndTooling.lifecycle.${index === 0 ? "initialParts" : "repeatProduction"}.reviewLabel`} defaultValue={stage.reviewLabel} />
                    </p>
                    <p className="service-section-copy mt-2">
                      <EditableText path={`fitAndTooling.lifecycle.${index === 0 ? "initialParts" : "repeatProduction"}.review`} defaultValue={stage.review} multiline />
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#EEC569]">
                      <EditableText path={`fitAndTooling.lifecycle.${index === 0 ? "initialParts" : "repeatProduction"}.approvalLabel`} defaultValue={stage.approvalLabel} />
                    </p>
                    <p className="service-section-copy mt-2">
                      <EditableText path={`fitAndTooling.lifecycle.${index === 0 ? "initialParts" : "repeatProduction"}.approval`} defaultValue={stage.approval} multiline />
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="section-note mx-auto mt-8 max-w-[1050px]">
            <p><EditableText path="fitAndTooling.lifecycle.note" defaultValue={DEFAULTS.lifecycle.note} multiline /></p>
          </div>
        </div>
      </section>
      ) : null}
    </>
  );
}
