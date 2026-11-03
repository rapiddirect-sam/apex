"use client";

import { EditableText } from "@/components/cms";
import { motion } from "@/components/ui/StaticMotion";
import { TechnicalDataTable } from "@/components/ui/TechnicalDataTable";

const DEFAULTS = {
  heading: "Compare Injection Molding ",
  headingHighlight: "Routes",
  rows: [
    ["Custom thermoplastic part", "Plastic Injection Molding", "Material, geometry, appearance, tolerances, and quantity"],
    ["Dedicated mold before production", "Injection Mold Tooling", "Tooling strategy, complexity, expected quantity, and approval plan"],
    ["Soft-touch or sealing feature", "Overmolding", "Material pairing, interface design, bonding, hardness, and wear"],
    ["Integrated functional component", "Insert Molding", "Insert positioning, retention, plastic coverage, and assembly"],
  ],
  headers: ["Your project need", "Route to evaluate", "Key considerations"],
};

export function IMRouteComparison() {
  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div className="max-w-4xl">
          <h2 className="service-section-title text-white">
            <EditableText path="routeComparison.headingPrefix" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="routeComparison.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
        </motion.div>
        <div className="mt-10">
          <TechnicalDataTable
            headers={DEFAULTS.headers.map((header, index) => <EditableText key={header} path={`routeComparison.headers.${index}`} defaultValue={header} />)}
            rows={DEFAULTS.rows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`routeComparison.rows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />))}
            highlightColumn={1}
            minTableWidth="760px"
          />
        </div>
      </div>
    </section>
  );
}
