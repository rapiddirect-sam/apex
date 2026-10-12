"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Tooling, Production Volume, Lead Time and ",
  headingHighlight: "Quote Factors",
  introduction:
    "Custom aluminum extrusion is built around the cross-section. When your required geometry cannot be achieved with an existing profile, a custom die is used to form that shape consistently.",
  toolingHeading: "Tooling",
  toolingIntroduction:
    "Aluminum extrusion tooling is developed around the profile’s cross-section, including cavities, channels, ribs, mounting features and wall thicknesses. Tooling requirements and cost are affected by:",
  toolingFactors: [
    "Profile size and geometry",
    "Solid, hollow or multi-cavity construction",
    "Wall thickness and corner design",
    "Alloy and tolerance requirements",
    "Expected production volume",
  ],
  volumeHeading: "Production Volume",
  volumePrefix: "Typical production volume is ",
  volumeRange: "500 m to 10,000 m per batch.",
  volumeDescription:
    "Our aluminum extrusion MOQ and batch volume depend on profile geometry, extrusion length, alloy, tooling, machining, surface finishing and total project demand.",
  leadTimeHeading: "Lead Time",
  leadTimeDescription:
    "Aluminum extrusion lead time is determined by die development, material availability, production scheduling, profile complexity, CNC machining, finishing, inspection, packaging and shipping requirements.",
  quoteHeading: "Request a Quote",
  quoteFactors:
    "Aluminum extrusion cost is primarily affected by die complexity, alloy, quantity, machining and finishing.",
  quoteIntroduction: "For an accurate quotation, send the information available for your project:",
  quoteItems: [
    {
      label: "Part design",
      description: "Cross-section drawing, PDF, DWG, STEP file or sample photo",
    },
    {
      label: "Material and quantity",
      description: "Alloy, temper, profile length and total order quantity",
    },
    {
      label: "Critical requirements",
      description: "Key dimensions, tolerances and visible surfaces",
    },
    {
      label: "Secondary operations",
      description: "Cutting, CNC machining, drilling, tapping and surface finish",
    },
    {
      label: "Delivery needs",
      description: "Packaging and destination requirements",
    },
  ],
  missingDetailsLead: "Missing some details?",
  missingDetailsTail: "Send your drawing first—we will help define the rest.",
  cta: "Upload Your Drawing for Review",
};

export function EXToolingQuote() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-14"
        >
          <h2 className="service-section-title max-w-[1080px]">
            <EditableText path="toolingQuote.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText
                path="toolingQuote.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <p className="service-section-copy mt-5 max-w-[840px]">
            <EditableText
              path="toolingQuote.introduction"
              defaultValue={DEFAULTS.introduction}
              multiline
            />
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-white/[0.08] bg-[#171717] p-7 sm:p-8"
        >
          <h3 className="service-subsection-title">
            <EditableText
              path="toolingQuote.toolingHeading"
              defaultValue={DEFAULTS.toolingHeading}
            />
          </h3>
          <p className="service-section-copy mt-5 max-w-[960px]">
            <EditableText
              path="toolingQuote.toolingIntroduction"
              defaultValue={DEFAULTS.toolingIntroduction}
              multiline
            />
          </p>
          <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEFAULTS.toolingFactors.map((factor, index) => (
              <li key={factor} className="flex items-start gap-3 text-[15px] leading-6 text-[#D7D7D8]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EEC569]" />
                <EditableText
                  path={`toolingQuote.toolingFactors.${index}`}
                  defaultValue={factor}
                />
              </li>
            ))}
          </ul>
        </motion.article>

        <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full rounded-xl border border-white/[0.08] bg-[#171717] p-7 sm:p-8"
          >
            <h3 className="service-subsection-title">
              <EditableText
                path="toolingQuote.volumeHeading"
                defaultValue={DEFAULTS.volumeHeading}
              />
            </h3>
            <p className="service-section-copy mt-5">
              <EditableText
                path="toolingQuote.volumePrefix"
                defaultValue={DEFAULTS.volumePrefix}
              />
              <strong className="font-bold text-[#EEC569]">
                <EditableText
                  path="toolingQuote.volumeRange"
                  defaultValue={DEFAULTS.volumeRange}
                />
              </strong>
            </p>
            <p className="service-section-copy mt-4">
              <EditableText
                path="toolingQuote.volumeDescription"
                defaultValue={DEFAULTS.volumeDescription}
                multiline
              />
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full rounded-xl border border-white/[0.08] bg-[#171717] p-7 sm:p-8"
          >
            <h3 className="service-subsection-title">
              <EditableText
                path="toolingQuote.leadTimeHeading"
                defaultValue={DEFAULTS.leadTimeHeading}
              />
            </h3>
            <p className="service-section-copy mt-5">
              <EditableText
                path="toolingQuote.leadTimeDescription"
                defaultValue={DEFAULTS.leadTimeDescription}
                multiline
              />
            </p>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-xl border border-white/[0.08] bg-[#111111] p-7 sm:p-8 lg:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:gap-14">
            <div className="flex flex-col items-start">
              <h3 className="service-subsection-title">
                <EditableText
                  path="toolingQuote.quoteHeading"
                  defaultValue={DEFAULTS.quoteHeading}
                />
              </h3>
              <p className="service-section-copy mt-5">
                <EditableText
                  path="toolingQuote.quoteFactors"
                  defaultValue={DEFAULTS.quoteFactors}
                  multiline
                />
              </p>
              <p className="mt-6 rounded-r-lg border-l-2 border-[#D09947] bg-[#D09947]/10 px-4 py-3 text-[16px] font-medium leading-[1.65] text-[#F0F0F0]">
                <strong className="font-bold text-[#EEC569]">
                  <EditableText
                    path="toolingQuote.missingDetailsLead"
                    defaultValue={DEFAULTS.missingDetailsLead}
                  />
                </strong>{" "}
                <EditableText
                  path="toolingQuote.missingDetailsTail"
                  defaultValue={DEFAULTS.missingDetailsTail}
                  multiline
                />
              </p>
              <Link
                href="https://app.apexbatch.com/"
                rel="nofollow"
                className="group mt-7 inline-flex items-center justify-center gap-2 rounded bg-[#D09947] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-[#EEC569]"
              >
                <EditableText path="toolingQuote.cta" defaultValue={DEFAULTS.cta} />
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div>
              <p className="service-section-copy">
                <EditableText
                  path="toolingQuote.quoteIntroduction"
                  defaultValue={DEFAULTS.quoteIntroduction}
                  multiline
                />
              </p>
              <ul className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {DEFAULTS.quoteItems.map((item, index) => (
                  <li key={item.label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-5">
                    <strong className="text-[14px] font-bold text-[#EEC569]">
                      <EditableText
                        path={`toolingQuote.quoteItems.${index}.label`}
                        defaultValue={item.label}
                      />
                    </strong>
                    <span className="text-[14px] leading-6 text-[#C5C6C9]">
                      <EditableText
                        path={`toolingQuote.quoteItems.${index}.description`}
                        defaultValue={item.description}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
