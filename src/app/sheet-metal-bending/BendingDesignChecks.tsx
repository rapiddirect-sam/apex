"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";
import { motion } from "@/components/ui/StaticMotion";
import { ServiceTable } from "@/components/ui/ServiceTable";

const DEFAULTS = {
  headingPrefix: "Design Checks Before ",
  headingHighlight: "Press Brake Forming",
  description:
    "A drawing can look straightforward and still need adjustment before forming. These checks focus on the features most likely to affect cost, appearance, fit, or production repeatability.",
  rows: [
    { feature: "Inside bend radius", guideline: "Meet or exceed the material’s recommended minimum radius" },
    { feature: "Flange length", prefix: "Aim for at least ", reference: "4 × material thickness", suffix: " where V-die access is required" },
    { feature: "Hole-to-bend distance", prefix: "Aim for at least ", reference: "material thickness + inside bend radius" },
    { feature: "Slot-to-bend distance", prefix: "Aim for at least ", reference: "material thickness + inside bend radius + 2 mm" },
    { feature: "Multiple bends", guideline: "Check tool clearance, bending sequence, and part access" },
    { feature: "Bend direction", guideline: "Keep directions consistent where practical to simplify setups" },
    { feature: "Cosmetic surfaces", guideline: "Identify visible faces before production so protection and tooling choices can be planned" },
  ],
  note:
    "Critical features should be shown clearly on the drawing, especially when a formed dimension controls a mating part, hardware location, gasket surface, or visible alignment.",
  closing:
    "Have a drawing ready? Send your CAD model, material, thickness, and critical requirements for an engineering assessment of your bending route.",
  cta: "Confirm Your Part’s Bending Feasibility",
};

const DESIGN_CHECK_IMAGE =
  "/sheet-metal/apexbatch-sheet-metal-bend-angle-inspection.webp";

export function BendingDesignChecks() {
  const rows = DEFAULTS.rows.map((row, index) => [
    <EditableText
      key={`feature-${index}`}
      path={`bendingDesignChecks.rows.${index}.feature`}
      defaultValue={row.feature}
    />,
    row.guideline ? (
      <EditableText
        path={`bendingDesignChecks.rows.${index}.guideline`}
        defaultValue={row.guideline}
        multiline
      />
    ) : (
      <>
        <EditableText
          path={`bendingDesignChecks.rows.${index}.prefix`}
          defaultValue={row.prefix ?? ""}
        />
        <strong className="font-semibold text-[#EEC569]">
          <EditableText
            path={`bendingDesignChecks.rows.${index}.reference`}
            defaultValue={row.reference ?? ""}
          />
        </strong>
        {row.suffix ? (
          <EditableText
            path={`bendingDesignChecks.rows.${index}.suffix`}
            defaultValue={row.suffix}
          />
        ) : null}
      </>
    ),
  ]);

  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-left lg:text-center"
        >
          <h2 className="service-section-title text-white">
            <EditableText path="bendingDesignChecks.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent">
              <EditableText path="bendingDesignChecks.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p className="service-section-copy section-reading-copy mt-6 text-left lg:text-center">
            <EditableText
              path="bendingDesignChecks.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] xl:items-stretch xl:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 grid items-center gap-8 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:order-1 xl:flex xl:flex-col xl:items-stretch"
          >
            <div className="relative h-[220px] overflow-hidden sm:h-[260px] xl:h-auto xl:min-h-[360px] xl:flex-1">
              <StaticImage
                path="bendingDesignChecks.image"
                defaultSrc={DESIGN_CHECK_IMAGE}
                alt="Technician inspecting the bend angle of a custom sheet metal part"
                fill
                sizes="(min-width: 1280px) 370px, 100vw"
                className="object-cover object-right"
              />
            </div>

            <div className="mx-auto max-w-sm rounded-xl border border-[#D09947]/30 bg-[#252220] p-5 text-center sm:p-6 md:mx-0 md:max-w-none md:text-left xl:mx-auto xl:max-w-sm xl:text-center">
              <p className="service-section-copy section-reading-copy">
                <EditableText
                  path="bendingDesignChecks.closing"
                  defaultValue={DEFAULTS.closing}
                  multiline
                />
              </p>
              <Link
                href="https://app.apexbatch.com/"
                rel="nofollow"
                className="cta-primary group mt-6 w-full max-w-none whitespace-normal text-center"
              >
                <EditableText
                  path="bendingDesignChecks.cta"
                  defaultValue={DEFAULTS.cta}
                />
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <div className="order-1 min-w-0 xl:order-2">
            <ServiceTable
              columns={[
                { header: "Design Feature", width: "38%", tone: "primary" },
                { header: "Starting Guideline", width: "62%" },
              ]}
              rows={rows}
              caption="Sheet metal bending design checks"
              minTableWidth="680px"
              headerCase="uppercase"
              bodyDensity="dense"
            />

            <div className="section-note mt-8">
              <EditableText
                path="bendingDesignChecks.note"
                defaultValue={DEFAULTS.note}
                multiline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
