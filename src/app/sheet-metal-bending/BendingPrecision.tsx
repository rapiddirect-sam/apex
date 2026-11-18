"use client";

import { EditableText } from "@/components/cms";
import { ServiceTable } from "@/components/ui/ServiceTable";
import { motion } from "@/components/ui/StaticMotion";

const DEFAULTS = {
  precisionHeadingPrefix: "Precision and Surface Condition ",
  precisionHeadingHighlight: "After Bending",
  precisionDescription:
    "Precision metal bending requires more than selecting a nominal angle. Final results are shaped by material thickness, grain direction, bend radius, springback, feature location, measurement method, and the sequence of cutting, forming, hardware insertion, welding, and finishing.",
  rows: [
    {
      feature: "Formed linear dimension",
      reference: "±0.3 mm",
      ability: "±0.15 mm",
    },
    { feature: "Bend angle", reference: "±1.0°", ability: "±0.5°" },
    {
      feature: "Hole-to-edge position",
      reference: "±0.2 mm",
      ability: "±0.1 mm",
    },
    {
      feature: "Flatness after welding",
      reference: "By structure and drawing",
      ability: "By structure and drawing",
    },
  ],
  appearanceHeading: "How ApexBatch Protects Cosmetic Surfaces During Bending",
  appearanceDescriptionLead: "As-bent",
  appearanceDescription:
    " parts can retain normal bend lines or light handling marks. Where a part includes cosmetic faces, ApexBatch plans the forming route, surface protection, and handling around those identified areas.",
  measureTitles: [
    "Protective Film",
    "Edge Preparation",
    "Grain-Direction Control",
    "Protective Tooling & Handling",
  ],
  measures: [
    "Protective film for sensitive aluminum, stainless, galvanized, or decorative surfaces",
    "Deburring before or after forming, based on edge and assembly requirements",
    "Grain-direction control when a decorative direction or crack-risk reduction matters",
    "Nylon tooling, protective pads, controlled handling, and appropriate packaging for scratch-sensitive parts",
  ],
};

export function BendingPrecision() {
  const rows = DEFAULTS.rows.map((row, index) => [
    <EditableText
      key={`feature-${index}`}
      path={`bendingPrecision.rows.${index}.feature`}
      defaultValue={row.feature}
    />,
    <EditableText
      key={`reference-${index}`}
      path={`bendingPrecision.rows.${index}.reference`}
      defaultValue={row.reference}
      multiline
    />,
    <strong key={`ability-${index}`} className="font-semibold text-[#EEC569]">
      <EditableText
        path={`bendingPrecision.rows.${index}.ability`}
        defaultValue={row.ability}
        multiline
      />
    </strong>,
  ]);

  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] xl:items-center xl:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 min-w-0 xl:order-1"
          >
            <ServiceTable
              columns={[
                { header: "Feature", width: "40%", tone: "primary" },
                { header: "General Reference", width: "30%" },
                { header: "ApexBatch Ability", width: "30%", tone: "accent" },
              ]}
              rows={rows}
              caption="Sheet metal bending precision reference"
              minTableWidth="620px"
              headerCase="uppercase"
              bodyDensity="dense"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 section-intro-copy--left precision-intro-copy xl:order-2"
          >
            <h2 className="service-section-title text-white">
              <EditableText path="bendingPrecision.precisionHeadingPrefix" defaultValue={DEFAULTS.precisionHeadingPrefix} />
              <span className="service-title-accent">
                <EditableText path="bendingPrecision.precisionHeadingHighlight" defaultValue={DEFAULTS.precisionHeadingHighlight} />
              </span>
            </h2>
            <p className="service-section-copy section-reading-copy mt-6 text-left">
              <EditableText
                path="bendingPrecision.precisionDescription"
                defaultValue={DEFAULTS.precisionDescription}
                multiline
              />
            </p>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 sm:mt-12 sm:pt-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:items-center lg:gap-12">
            <p className="text-sm font-semibold tracking-[0.06em] text-[#EEC569] sm:text-base">
              <EditableText
                path="bendingPrecision.appearanceHeading"
                defaultValue={DEFAULTS.appearanceHeading}
              />
            </p>
            <p className="service-section-copy section-reading-copy max-w-3xl">
              <EditableText
                path="bendingPrecision.appearanceDescriptionLead"
                defaultValue={DEFAULTS.appearanceDescriptionLead}
              />
              <EditableText
                path="bendingPrecision.appearanceDescription"
                defaultValue={DEFAULTS.appearanceDescription}
                multiline
              />
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {DEFAULTS.measures.map((measure, index) => (
              <div key={measure} className="bg-[#171717] px-6 py-6">
                <p
                  className="font-semibold uppercase text-[#EEC569]"
                  style={{ fontSize: "12px", lineHeight: 1.4, letterSpacing: "0.1em" }}
                >
                  <EditableText
                    path={`bendingPrecision.measureTitles.${index}`}
                    defaultValue={DEFAULTS.measureTitles[index]}
                  />
                </p>
                <p className="service-section-copy mt-3">
                  <EditableText
                    path={`bendingPrecision.measures.${index}`}
                    defaultValue={measure}
                    multiline
                  />
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
