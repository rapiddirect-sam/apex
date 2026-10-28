"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Tolerances, Inspection, and Quality ",
  headingHighlight: "Requirements",
  description:
    "The table provides indicative sheet metal tolerance references for suitable parts. Final achievable results are confirmed from the approved drawing, material, thickness, geometry, bend features, finish, tooling, inspection method and measurement datum.",
  image: "/sheet-metal/inspecting-sheet-metal-part-before-delivery.avif",
  headers: ["Dimension", "General reference", "ApexBatch capability target"],
  rows: [
    ["Cutting linear tolerance", "±0.2 mm", "±0.1 mm"],
    ["Bending linear tolerance", "±0.3 mm", "±0.15 mm"],
    ["Bend angle", "±1.0°", "±0.5°"],
    ["Hole-to-edge distance", "±0.2 mm", "±0.1 mm"],
    ["Welding distortion / flatness", "Depends on part size", "Confirmed by part structure and drawing"],
  ],
};

export function SMSupplier() {
  return (
    <section className="relative overflow-hidden bg-[#000000] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="service-section-title text-white">
              <EditableText path="quality.heading" defaultValue={DEFAULTS.heading} />
              <span className="service-title-accent"><EditableText path="quality.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
            </h2>
            <p className="service-section-copy mt-6 max-w-[560px]">
              <EditableText path="quality.description" defaultValue={DEFAULTS.description} multiline />
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[4/3] overflow-hidden border border-white/10">
            <EditableImage path="quality.image" defaultSrc={DEFAULTS.image} alt="Inspecting a sheet metal part before delivery" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 w-full max-w-full overflow-x-auto border border-white/10 md:mt-16 md:overflow-visible">
          <table className="min-w-[720px] w-full border-collapse text-left md:min-w-0">
            <thead className="bg-[#292624]">
              <tr>{DEFAULTS.headers.map((header, index) => <th key={header} className="border-b border-white/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#EEC569]"><EditableText path={`quality.headers.${index}`} defaultValue={header} /></th>)}</tr>
            </thead>
            <tbody>{DEFAULTS.rows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-white/[0.07] last:border-0">{row.map((cell, cellIndex) => <td key={cellIndex} className={`px-5 py-4 text-sm leading-relaxed ${cellIndex === 2 ? "font-medium text-[#F4F1EC]" : "text-[#C5C1BD]"}`}><EditableText path={`quality.rows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline /></td>)}</tr>)}</tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
