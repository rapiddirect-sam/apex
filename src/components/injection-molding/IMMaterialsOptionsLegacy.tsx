"use client";

import Link from "next/link";
import { EditableText } from "@/components/cms";
import { TechnicalDataTable } from "@/components/ui/TechnicalDataTable";

const DEFAULTS = {
  heading: "Material Families Across Our Molding ",
  headingHighlight: "Services",
  description: "We support material selection for custom molded parts, including standard plastics, engineering resins, reinforced grades, and high-performance options. Confirm the required material direction early when part performance, appearance, or production planning is critical.",
  headers: ["Material family", "Materials and variants available for project review"],
  rows: [
    ["ABS and PC blends", "ABS natural, black, milky white, flame-retardant ABS, antistatic ABS, and black PC/ABS"],
    ["Polycarbonate", "PC transparent, black, white, and other grade options"],
    ["Nylon and reinforced nylon", "PA6, PA66, PA6+GF15, and PA6+GF30"],
    ["Engineering and structural plastics", "PP+GF30, POM, PBT, ASA, PVC, and PPE/PPO blends"],
    ["High-performance plastics", "PEEK / Polyether Ether Ketone, PEEK+CF, PEEK+GF, PPSU, and PVDF"],
    ["Additional material directions", "HDPE, GPPS, PEI, TPE-S, and TPU, subject to material and process confirmation"],
  ],
  note: "Exact resin grade, color, reinforcement level, certification requirements, and molding suitability are confirmed during engineering and quotation review.",
};

export function IMMaterialsOptionsLegacy() {
  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="service-section-title text-white"><EditableText path="materialsOptions.headingPrefix" defaultValue={DEFAULTS.heading} /><span className="service-title-accent"><EditableText path="materialsOptions.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span></h2>
        <p className="service-section-copy mt-6 max-w-4xl"><EditableText path="materialsOptions.description" defaultValue={DEFAULTS.description} multiline /></p>
        <div className="mt-10">
          <TechnicalDataTable
            headers={DEFAULTS.headers.map((header, index) => <EditableText key={header} path={`materialsOptions.headers.${index}`} defaultValue={header} />)}
            rows={DEFAULTS.rows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`materialsOptions.rows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />))}
            highlightColumn={0}
          />
        </div>
        <div className="section-note mt-8"><p><EditableText path="materialsOptions.note" defaultValue={DEFAULTS.note} multiline /></p></div>
        <p className="service-section-copy mt-6">Need to compare resin properties before choosing a molding route? Explore our <Link href="/materials" className="body-text-link body-text-link--dark">Material Library</Link> for material overviews and selection references.</p>
      </div>
    </section>
  );
}
