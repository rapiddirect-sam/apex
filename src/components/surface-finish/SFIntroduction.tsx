"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "Surface Finishing as Part of the ",
  headingHighlight: "Production Route",
  descriptionPrimary:
    "Surface finishing can protect a part, control its appearance or support a defined functional requirement. The appropriate process depends on the material, geometry, critical features, operating conditions and specification.",
  descriptionSecondary:
    "Rather than being treated only as a final cosmetic step, surface finishing is planned as part of the production route. Common surface finishing applications include corrosion protection, wear performance, appearance, electrical function and part identification. Depending on the requirement, the route may include mechanical preparation, conversion processes, coatings, plating, marking or other surface treatments.",
};

export function SFIntroduction() {
  return (
    <section className="relative overflow-hidden bg-[#34312F] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
        >
          <h2 className="service-section-title max-w-[980px] text-left lg:order-2">
            <EditableText
              path="surfaceFinishingIntroduction.headingPrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />
            <span className="service-title-accent">
              <EditableText
                path="surfaceFinishingIntroduction.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>

          <div className="service-section-copy mt-5 max-w-[980px] space-y-4 text-left lg:order-1 lg:mt-0">
            <p>
              <EditableText
                path="surfaceFinishingIntroduction.routeSummary"
                defaultValue={DEFAULTS.descriptionPrimary}
                multiline
              />
            </p>
            <details className="group border-t border-white/15 pt-4">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-[#EEC569] marker:hidden [&::-webkit-details-marker]:hidden">
                Read full finishing guidance
                <span className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
                  ↓
                </span>
              </summary>
              <div className="mt-4 space-y-4">
                <p>
                  <EditableText
                    path="surfaceFinishingIntroduction.routeDetails"
                    defaultValue={DEFAULTS.descriptionSecondary}
                    multiline
                  />
                </p>
                <p>
                  <EditableText
                    path="surfaceFinishingIntroduction.scopeDetailsPrefix"
                    defaultValue="For parts manufactured by ApexBatch, finishing requirements are incorporated into the quoted manufacturing scope, including applicable "
                  />
                  <Link href="/quality" className="body-text-link body-text-link--dark">
                    <EditableText
                      path="surfaceFinishingIntroduction.scopeDetailsQualityLink"
                      defaultValue="inspection and documentation requirements"
                    />
                  </Link>
                  <EditableText
                    path="surfaceFinishingIntroduction.scopeDetailsSuffix"
                    defaultValue=". For customer-supplied parts, contact us before quotation to confirm eligibility, part condition, handling and responsibility."
                    multiline
                  />
                </p>
              </div>
            </details>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
