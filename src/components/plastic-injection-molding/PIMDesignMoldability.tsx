"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";
import { TechnicalDataTable } from "@/components/ui/TechnicalDataTable";

const DEFAULTS = {
  headingPrefix: "Design for Moldability: Standard Guidance and ",
  headingHighlight: "Advanced Feature Evaluation",
  introduction:
    "Use these values as practical starting points for plastic part design. Thin-wall, low-draft, deep-rib, and tight-tolerance features can be evaluated when the material, geometry, tooling route, and inspection plan are defined.",
  headers: ["Design element", "Recommended starting point", "Advanced feature evaluation", "Design focus"],
  rows: [
    [
      "Wall thickness",
      "1.5–3.0 mm",
      "Down to 0.5 mm for suitable LCP grades and part geometries",
      "Maintain reasonably uniform walls to reduce sink, warp, and uneven cooling.",
    ],
    [
      "Draft angle",
      "1°–3°",
      "Down to 0.5° for selected smooth-surface features",
      "Textured surfaces generally require more draft.",
    ],
    [
      "Rib thickness",
      "50–60% of the main wall",
      "Around 30% for deeper ribs",
      "Helps add stiffness while reducing sink marks on the opposite surface.",
    ],
    [
      "Mold feature tolerance",
      "±0.03 mm per 25 mm",
      "Down to ±0.01 mm for applicable tooling features",
      "Confirmed by tool steel, feature geometry, and machining method.",
    ],
    [
      "Part tolerance",
      "±0.1 mm for general dimensions",
      "Down to ±0.05 mm for agreed critical features",
      "Influenced by resin shrinkage, geometry, tooling, and inspection method.",
    ],
  ],
  note:
    "Critical dimensions should be assigned where they affect fit, sealing, movement, or assembly—not across every feature.",
  cta: "Submit CAD for DFM Review",
};

export function PIMDesignMoldability() {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-left lg:text-center">
          <h2 className="service-section-title text-white">
            <EditableText path="plasticInjectionMoldability.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent">
              <EditableText path="plasticInjectionMoldability.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p className="service-section-copy mt-6 max-w-4xl lg:mx-auto">
            <EditableText path="plasticInjectionMoldability.introduction" defaultValue={DEFAULTS.introduction} multiline />
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
          <TechnicalDataTable
            headers={DEFAULTS.headers.map((header, index) => <EditableText key={header} path={`plasticInjectionMoldability.headers.${index}`} defaultValue={header} />)}
            rows={DEFAULTS.rows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`plasticInjectionMoldability.rows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />))}
            highlightColumn={2}
            minTableWidth="980px"
          />
        </motion.div>

        <p className="service-section-copy mx-auto mt-7 max-w-4xl text-center">
          <EditableText path="plasticInjectionMoldability.note" defaultValue={DEFAULTS.note} multiline />
        </p>
        <div className="mt-7 flex justify-center">
          <Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group whitespace-nowrap">
            <EditableText path="plasticInjectionMoldability.cta" defaultValue={DEFAULTS.cta} />
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
