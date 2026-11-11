"use client";

import { motion } from "@/components/ui/StaticMotion";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Injection Molding for ",
  headingHighlight: "Specialized Requirements",
  requirements: [
    {
      title: "Rapid Injection Molding for Design Validation",
      description:
        "Evaluate production-intent geometry, material direction, and critical features before committing to repeat production. Lead time is confirmed after part and tooling scope review.",
    },
    {
      title: "Precision Injection Molding for Critical Features",
      description:
        "For critical fits, sealing areas, and functional interfaces, selected features can be evaluated to ±0.05 mm where part design and project requirements allow.",
    },
    {
      title: "Thin-Wall Injection Molding Review",
      description:
        "Wall thicknesses down to 0.5 mm can be evaluated for suitable LCP grades and part geometries. Flow length, gate location, wall transitions, cooling, and part function determine feasibility.",
    },
    {
      title: "Automotive Injection Molding",
      description:
        "Suitable for automotive parts with defined requirements for material performance, visible surfaces, temperature exposure, assembly interfaces, wear, and vibration.",
    },
    {
      title: "Medical Plastic Molding",
      description:
        "For medical-device and diagnostic-equipment components requiring controlled documentation, traceability, inspection, and packaging. ApexBatch production operations are supported by an ISO 13485:2016 management system.",
    },
  ],
  note:
    "If your project includes regulatory, sterilization, biocompatibility, cleanroom, or validation requirements, we review and confirm them with you before the production route is agreed.",
};

export function IMSpecializedRequirements() {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl lg:max-w-none">
          <h2 className="service-section-title text-white lg:whitespace-nowrap">
            <EditableText path="specializedRequirements.headingPrefix" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="specializedRequirements.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {DEFAULTS.requirements.map((requirement, index) => (
            <motion.article
              key={requirement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-[#252220] p-6 sm:p-7 lg:col-span-2 [&:nth-child(4)]:lg:col-span-3 [&:nth-child(5)]:lg:col-span-3"
            >
              <h3 className="text-xl font-bold leading-tight text-white sm:text-[22px]">
                <EditableText path={`specializedRequirements.requirements.${index}.title`} defaultValue={requirement.title} />
              </h3>
              <p className="service-section-copy mt-4 text-[15px] leading-6">
                {index === 0 ? (
                  <>
                    Evaluate production-intent geometry, material direction, and critical features before committing to repeat production. Lead time is confirmed after part and tooling scope review. {" "}
                    <Link href="/blog/prototype-injection-molding-guide" className="body-text-link body-text-link--dark">
                      Learn when prototype injection molding fits.
                    </Link>
                  </>
                ) : (
                  <EditableText path={`specializedRequirements.requirements.${index}.description`} defaultValue={requirement.description} multiline />
                )}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="section-note mx-auto mt-8 max-w-[1050px]">
          <p>
            <EditableText path="specializedRequirements.note" defaultValue={DEFAULTS.note} multiline />
          </p>
        </div>
      </div>
    </section>
  );
}
