"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";
import { ServiceTable } from "@/components/ui/ServiceTable";

const DEFAULTS = {
  headingPrefix: "Choose a Surface Finish by ",
  headingHighlight: "Requirement",
  introduction:
    "Not every part requires an additional finish. Where the machined surface already meets the functional, environmental and appearance requirements, an as-machined finish may be the most suitable option.",
  comparisonLead:
    "The table below compares surface treatment by the functional or visual result your part needs to achieve.",
  columns: [
    "Your primary requirement",
    "Processes to evaluate",
    "Information needed for review",
  ],
  rows: [
    [
      "Corrosion resistance",
      "Anodizing, plating, powder coating, passivation, Alodine/chromate conversion coating, electrophoresis or selected conversion coatings",
      "Material, operating environment, required specification and corrosion target",
    ],
    [
      "Wear resistance or lower friction",
      "Hard anodizing, QPQ, PVD, DLC, PTFE coating, heat treatment or selected plating",
      "Contact surfaces, loading, friction, wear conditions and critical dimensions",
    ],
    [
      "Cosmetic appearance",
      "Brushing, blasting, polishing, anodizing, painting, powder coating, plating or decorative coating",
      "Color, gloss, texture, visible surfaces, reference sample and lighting expectations",
    ],
    [
      "Dimensional control",
      "Conversion processes, controlled coatings, plating or electropolishing",
      "Critical dimensions, threads, bores, mating surfaces and whether dimensions apply before or after finishing",
    ],
    [
      "Electrical or functional performance",
      "Conductive paint, Alodine, selected plating, masking or functional coatings",
      "Contact areas, grounding, conductivity or insulation requirements, and drawing notes",
    ],
    [
      "Part identification",
      "Laser engraving, CNC engraving, screen printing or pad printing",
      "Artwork, position, marking size, durability requirement and visible-surface restrictions",
    ],
    [
      "Cleanability or smoother surfaces",
      "Mechanical polishing, electropolishing or selected machining finishes",
      "Base material, surface target, hygiene or contamination concerns, and required inspection method",
    ],
  ],
};

export function SFRequirementTable() {
  return (
    <section className="bg-[#0D0D0D] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[920px]"
        >
          <h2 className="service-section-title text-left">
            <EditableText
              path="surfaceFinishingRequirements.headingPrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />
            <span className="service-title-accent">
              <EditableText
                path="surfaceFinishingRequirements.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <div className="service-section-copy mt-5 space-y-4 text-left">
            <p>
              <EditableText
                path="surfaceFinishingRequirements.introduction"
                defaultValue={DEFAULTS.introduction}
                multiline
              />
            </p>
            <p>
              <EditableText
                path="surfaceFinishingRequirements.comparisonLead"
                defaultValue={DEFAULTS.comparisonLead}
                multiline
              />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="mb-3 text-xs font-medium tracking-[0.08em] text-[#EEC569] md:hidden">
            Swipe to compare requirements
          </p>
          <ServiceTable
            variant="standard"
            caption="Surface finishing requirements, processes to evaluate, and review information"
            minTableWidth="960px"
            bodyDensity="dense"
            columns={DEFAULTS.columns.map((column, index) => ({
              header: (
                <EditableText
                  path={`surfaceFinishingRequirements.columns.${index}`}
                  defaultValue={column}
                />
              ),
              width: index === 0 ? "26%" : index === 1 ? "40%" : "34%",
              tone: index === 0 ? "primary" : "default",
            }))}
            rows={DEFAULTS.rows.map((row, rowIndex) =>
              row.map((cell, columnIndex) => (
                <EditableText
                  key={`${rowIndex}-${columnIndex}`}
                  path={`surfaceFinishingRequirements.rows.${rowIndex}.${columnIndex}`}
                  defaultValue={cell}
                  multiline
                />
              )),
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}
