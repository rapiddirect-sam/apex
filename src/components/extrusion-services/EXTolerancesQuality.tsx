"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { EditableText } from "@/components/cms";
import { ServiceTable } from "@/components/ui/ServiceTable";

const DEFAULTS = {
  heading: "Tolerances and ",
  headingHighlight: "Quality Control",
  introduction:
    "For precision aluminum extrusion requirements, final tolerances are confirmed from the part drawing, profile geometry, alloy, length and post-machining requirements.",
  capabilitiesHeading: "Tolerance Capabilities",
  columns: ["Requirement", "Typical Capability"],
  capabilities: [
    {
      requirement: "Cross-section tolerance",
      capability: "±0.2–0.3 mm, depending on profile size",
    },
    { requirement: "Straightness", capability: "Up to 0.8 mm/m" },
    { requirement: "Cut length tolerance", capability: "±1.0 mm to ±0.5 mm" },
    { requirement: "Post-machined hole position", capability: "±0.2 mm to ±0.1 mm" },
    { requirement: "CNC cutting precision", capability: "Up to ±0.2 mm where applicable" },
  ],
  inspectionHeading: "Inspection and Documentation",
  inspectionLabel: "Quality checks cover",
  inspectionItems: [
    "Profile dimensions",
    "Length",
    "Straightness",
    "Hole positions",
    "Visible surfaces",
    "Finished-part appearance",
  ],
  documentation:
    "Material, dimensional and inspection documentation can be supplied when required.",
  standardsNote:
    "Where specified on the drawing, general tolerances for post-machined and cut features can be inspected to ISO 2768-1. Extruded profile tolerances are confirmed separately against the applicable extrusion standard and approved drawing.",
};

export function EXTolerancesQuality() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="service-section-title">
            <EditableText
              path="tolerancesQuality.heading"
              defaultValue={DEFAULTS.heading}
            />
            <span className="service-title-accent">
              <EditableText
                path="tolerancesQuality.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <p className="service-section-copy mt-5 max-w-[820px]">
            <EditableText
              path="tolerancesQuality.introduction"
              defaultValue={DEFAULTS.introduction}
              multiline
            />
          </p>
        </motion.div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(360px,44fr)] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex h-full flex-col justify-center"
          >
            <h3 className="service-subsection-title mb-6">
              <EditableText
                path="tolerancesQuality.capabilitiesHeading"
                defaultValue={DEFAULTS.capabilitiesHeading}
              />
            </h3>
            <ServiceTable
              variant="compact"
              caption="Typical aluminum extrusion tolerances and machining capabilities"
              columns={[
                { header: DEFAULTS.columns[0], width: "42%" },
                { header: DEFAULTS.columns[1] },
              ]}
              rows={DEFAULTS.capabilities.map((item, index) => [
                <EditableText
                  key="requirement"
                  path={`tolerancesQuality.capabilities.${index}.requirement`}
                  defaultValue={item.requirement}
                />,
                <EditableText
                  key="capability"
                  path={`tolerancesQuality.capabilities.${index}.capability`}
                  defaultValue={item.capability}
                />,
              ])}
            />
            <p className="mt-4 text-[14px] leading-6 text-[#BFC0C2]">
              <EditableText
                path="tolerancesQuality.standardsNote"
                defaultValue={DEFAULTS.standardsNote}
                multiline
              />
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex h-full flex-col rounded-xl border border-[#D09947]/45 bg-[#171717] p-7 shadow-[0_18px_42px_rgba(0,0,0,0.3)] sm:p-8"
          >
            <h3 className="service-subsection-title">
              <EditableText
                path="tolerancesQuality.inspectionHeading"
                defaultValue={DEFAULTS.inspectionHeading}
              />
            </h3>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.08em] text-[#EEC569]">
              <EditableText
                path="tolerancesQuality.inspectionLabel"
                defaultValue={DEFAULTS.inspectionLabel}
              />
            </p>

            <ul className="mt-5 grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {DEFAULTS.inspectionItems.map((item, index) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#D7D7D8]">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D09947]/20 text-[#EEC569]">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <EditableText
                    path={`tolerancesQuality.inspectionItems.${index}`}
                    defaultValue={item}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-[#D09947]/25 pt-6">
              <p className="service-card-copy">
                <EditableText
                  path="tolerancesQuality.documentation"
                  defaultValue={DEFAULTS.documentation}
                  multiline
                />
              </p>
              <p className="service-card-copy mt-4">
                Learn more about our{" "}
                <Link href="/quality" className="body-text-link body-text-link--dark">
                  quality control process
                </Link>
                .
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
