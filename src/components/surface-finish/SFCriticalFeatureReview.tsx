"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const REVIEW_AREAS = [
  {
    title: "Protect Critical Fits and Functional Areas",
    description:
      "Threads, bores, sealing faces, bearing seats, mating surfaces and electrical contacts may require masking, protection or a clearly defined before- and after-finish condition.",
  },
  {
    title: "Achieve a Finish That Matches the Intended Appearance",
    description:
      "For customer-facing parts, we review the visible surfaces, required texture, brush direction, gloss, color and available visual reference. A process name alone may not fully define the result you expect.",
  },
  {
    title: "Review Geometry Before It Becomes a Finishing Problem",
    description:
      "Deep cavities, small holes, enclosed features and complex internal surfaces can affect process access, holding, drainage and finish consistency. Identifying these areas early helps avoid avoidable rework and late changes.",
  },
];

export function SFCriticalFeatureReview() {
  return (
    <section className="bg-[#34312F] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[880px] text-left lg:mx-auto lg:text-center"
        >
          <h2 className="service-section-title">
            <EditableText
              path="surfaceFinishingCriticalReview.headingPrefix"
              defaultValue="Critical Feature Review "
            />
            <span className="service-title-accent">
              <EditableText
                path="surfaceFinishingCriticalReview.headingHighlight"
                defaultValue="Before Finishing"
              />
            </span>
          </h2>
          <div className="service-section-copy mt-5 space-y-4">
            <p>
              <EditableText
                path="surfaceFinishingCriticalReview.introduction"
                defaultValue="A finish can affect more than appearance. Coating build-up may change a critical fit, fixturing may leave marks on visible surfaces, and untreated contact areas may need to be protected or masked."
                multiline
              />
            </p>
            <p>
              <EditableText
                path="surfaceFinishingCriticalReview.processReview"
                defaultValue="Once a suitable finishing process has been identified, ApexBatch confirms the drawing for critical features that may affect the result. This helps identify practical constraints before quotation or production approval and establish a process that supports both appearance and intended function."
                multiline
              />
            </p>
          </div>
        </motion.div>

        <div className="mt-14 border-y border-white/10">
          {REVIEW_AREAS.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-5 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[100px_minmax(0,1fr)] md:gap-10 md:py-10"
            >
              <span className="text-sm font-bold tracking-[0.16em] text-[#EEC569]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                  <EditableText
                    path={`surfaceFinishingCriticalReview.areas.${index}.title`}
                    defaultValue={area.title}
                  />
                </h3>
                <p className="mt-3 max-w-[860px] text-[16px] leading-[1.75] text-[#C5C6C9]">
                  <EditableText
                    path={`surfaceFinishingCriticalReview.areas.${index}.description`}
                    defaultValue={area.description}
                    multiline
                  />
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-6 border border-[#EEC569]/35 bg-[#EEC569]/[0.05] p-7 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="max-w-[700px]">
            <p className="text-base font-semibold text-[#EEC569]">
              <EditableText
                path="surfaceFinishingCriticalReview.ctaHeading"
                defaultValue="Clarify Critical Finish Details Before Quotation"
              />
            </p>
            <p className="mt-2 text-[15px] leading-[1.7] text-[#C5C6C9]">
              <EditableText
                path="surfaceFinishingCriticalReview.ctaDescription"
                defaultValue="Send your drawing, material and critical features. We will assess threads, visible surfaces, contact areas and masking needs before the finishing process is selected."
                multiline
              />
            </p>
          </div>
          <Link href="/contact" rel="nofollow" className="cta-primary shrink-0 group">
            <EditableText
              path="surfaceFinishingCriticalReview.ctaLabel"
              defaultValue="Review My Finish Requirements"
            />
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
