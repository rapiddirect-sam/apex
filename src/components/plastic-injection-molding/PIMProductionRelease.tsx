"use client";

import { motion } from "@/components/ui/StaticMotion";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "From Initial Samples to Production ",
  headingHighlight: "Release",
  paragraphs: [
    "ApexBatch supports prototype plastic injection molding for projects that need molded parts to review fit, function, selected resin behavior, and appearance before pilot or repeat production.",
    "Before tooling and production begin, we define the validation requirements and review initial samples against the agreed drawing, critical interfaces, cosmetic criteria, and inspection scope. We also confirm secondary operations, marking, finishing, assembly, packaging, and delivery requirements before release.",
  ],
  toolingPromptPrefix: "Need to review tool selection, mold steel, cavity strategy, runner systems, T1 changes, or mold ownership? Explore our ",
  toolingPromptLink: "Injection Mold Tooling Services",
};

export function PIMProductionRelease() {
  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 md:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] md:gap-12 lg:gap-16">
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:order-2">
          <h2 className="service-section-title text-white">
            <EditableText path="productionRelease.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent"><EditableText path="productionRelease.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-t border-white/10 md:order-1">
          {DEFAULTS.paragraphs.map((paragraph, index) => (
            <div key={paragraph} className="border-b border-white/10 py-5 sm:py-6">
              <p className="text-[15px] leading-relaxed text-[#CFCFD2]">
                {index === 1 ? (
                  <>
                    Before tooling and production begin, we define the validation requirements and review initial samples against the agreed drawing, critical interfaces, cosmetic criteria, and inspection scope. We also confirm secondary operations, marking, finishing, assembly, packaging, and delivery requirements before release. For more detail, see our {" "}
                    <Link href="/blog/prototype-injection-molding-guide" className="body-text-link body-text-link--dark">
                      prototype injection molding
                    </Link>{" "}
                    guide.
                  </>
                ) : (
                  <EditableText path={`productionRelease.paragraphs.${index}`} defaultValue={paragraph} multiline />
                )}
              </p>
            </div>
          ))}
          <div className="border-b border-white/10 py-5 sm:py-6">
            <p className="text-[15px] leading-relaxed text-[#CFCFD2]">
              <EditableText path="productionRelease.toolingPromptPrefix" defaultValue={DEFAULTS.toolingPromptPrefix} />
              <Link href="/injection-mold-tooling" className="body-text-link body-text-link--dark"><EditableText path="productionRelease.toolingPromptLink" defaultValue={DEFAULTS.toolingPromptLink} /></Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
