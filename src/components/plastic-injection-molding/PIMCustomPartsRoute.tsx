"use client";

import Link from "next/link";
import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";
import { TechnicalDataTable } from "@/components/ui/TechnicalDataTable";

const DEFAULTS = {
  headingPrefix: "Custom Plastic Parts and ",
  headingHighlight: "Applications",
  introduction: "ApexBatch supports custom plastic parts built around functional, cosmetic, assembly, and production requirements.",
  applications: [
    "Enclosures, housings, covers, panels, bezels, and protective components",
    "Clips, brackets, mounts, snap features, bosses, and fastening details",
    "Connectors, terminals, electrical interfaces, and cable-management features",
    "Gears, levers, handles, and functional mechanical components",
    "Consumer, industrial, electrical, and equipment parts",
    "Parts requiring controlled color, texture, visible surfaces, or repeatable functional features",
  ],
  insertPrefix: "For threaded inserts, terminals, bushings, pins, magnets, or other integrated components, see ",
  insertLink: "Insert Molding",
  routeHeadingPrefix: "When Is Plastic Injection Molding the Right ",
  routeHeadingHighlight: "Route?",
  routeIntroduction: "Choose plastic injection molding services when your project needs molded parts for design validation, pilot builds, or repeat production, and the design is sufficiently stable to justify dedicated tooling.",
  headers: ["Consideration", "Plastic Injection Molding", "CNC Machining", "3D Printing"],
  rows: [
    ["Best fit", "Stable designs and planned repeat production", "Lower quantities or precision-machined geometry", "Early concepts and rapid iteration"],
    ["Upfront investment", "Dedicated tooling", "No dedicated mold", "No dedicated mold"],
    ["Design changes", "Best completed before tooling", "More flexible after initial production", "Usually most flexible"],
    ["Material and appearance", "Molded resin grades, colors, textures, and repeatability", "Stock material plus finishing", "Process-specific materials and finishes"],
  ],
  note: "If the design is changing frequently or quantity is very low, CNC machining or 3D printing may be a better starting route.",
  cta: "Discuss a Similar Part",
};

export function PIMCustomPartsRoute() {
  return (
    <>
      <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-left lg:text-center">
          <h2 className="service-section-title text-white">
            <EditableText path="customPartsRoute.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent"><EditableText path="customPartsRoute.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p className="service-section-copy mt-6 lg:mx-auto lg:max-w-4xl">
            <EditableText path="customPartsRoute.introduction" defaultValue={DEFAULTS.introduction} multiline />
          </p>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DEFAULTS.applications.map((application, index) => (
            <motion.div key={application} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="border border-white/10 bg-[#1A1918] px-5 py-5">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-[#F4F1EC]"><EditableText path={`customPartsRoute.applications.${index}`} defaultValue={application} multiline /></p>
            </motion.div>
          ))}
        </div>

        <p className="service-section-copy mx-auto mt-8 max-w-4xl">
          <EditableText path="customPartsRoute.insertPrefix" defaultValue={DEFAULTS.insertPrefix} />
          <Link href="/insert-molding" className="body-text-link body-text-link--dark"><EditableText path="customPartsRoute.insertLink" defaultValue={DEFAULTS.insertLink} /></Link>.
        </p>
      </div>
      </section>

      <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="service-section-title text-white">
            <EditableText path="customPartsRoute.routeHeadingPrefix" defaultValue={DEFAULTS.routeHeadingPrefix} />
            <span className="service-title-accent"><EditableText path="customPartsRoute.routeHeadingHighlight" defaultValue={DEFAULTS.routeHeadingHighlight} /></span>
          </h2>
          <p className="service-section-copy mt-6 max-w-4xl"><EditableText path="customPartsRoute.routeIntroduction" defaultValue={DEFAULTS.routeIntroduction} multiline /></p>
          <div className="mt-8">
            <TechnicalDataTable
              headers={DEFAULTS.headers.map((header, index) => <EditableText key={header} path={`customPartsRoute.headers.${index}`} defaultValue={header} />)}
              rows={DEFAULTS.rows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`customPartsRoute.rows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />))}
              highlightColumn={1}
              minTableWidth="920px"
            />
          </div>
          <div className="section-note mt-7"><p><EditableText path="customPartsRoute.note" defaultValue={DEFAULTS.note} multiline /></p></div>
          <div className="mt-7 flex justify-center"><Link href="/contact" className="cta-primary"><EditableText path="customPartsRoute.cta" defaultValue={DEFAULTS.cta} /></Link></div>
        </div>
      </section>
    </>
  );
}
