"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "How Does Plastic Injection Molding ",
  headingHighlight: "Work?",
  introduction:
    "Our plastic injection molding services use a controlled cycle of clamping, plasticizing, filling, packing, cooling, and ejection to produce repeatable plastic parts from an approved mold.",
  steps: [
    {
      title: "Prepare and Plasticize the Resin",
      description:
        "The selected resin is dried where required, fed into the machine barrel, heated, and plasticized by the screw. Resin grade, moisture condition, color, reinforcement, and processing temperature affect flow, surface appearance, and final part performance.",
    },
    {
      title: "Close and Clamp the Mold",
      description:
        "The injection machine closes the mold and applies clamping force to keep the tool closed during filling and packing. The selected press is planned around the part’s projected area, resin, cavity layout, and tooling requirements.",
    },
    {
      title: "Fill the Mold Cavity",
      description:
        "The screw moves forward and injects molten resin through the runner and gate system into the mold cavity. Part geometry, wall thickness, gate location, venting, and resin flow behavior affect whether the cavity fills consistently.",
    },
    {
      title: "Pack and Hold the Part",
      description:
        "After filling, pressure is applied for a controlled period as the resin begins to solidify. This stage helps form critical features and can reduce the effect of material shrinkage in suitable part areas.",
    },
    {
      title: "Cool the Part",
      description:
        "The mold removes heat until the part is stable enough for release. Wall thickness, resin, cooling design, part geometry, and cycle settings affect cooling time, warpage, shrinkage, and dimensional consistency.",
    },
    {
      title: "Open and Eject",
      description:
        "The mold opens and the ejection system releases the molded part. Draft, surface texture, undercuts, ejector location, and part geometry affect clean release and the appearance of visible surfaces.",
    },
    {
      title: "Inspect and Approve",
      description:
        "Initial parts are checked against the agreed drawing, material, critical features, surface requirements, and inspection criteria before repeat production begins.",
    },
  ],
};

export function PIMProcess() {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-left lg:text-center">
          <h2 className="service-section-title text-white">
            <EditableText path="plasticInjectionProcess.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent"><EditableText path="plasticInjectionProcess.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p className="service-section-copy mt-6 lg:mx-auto lg:max-w-4xl">
            <EditableText path="plasticInjectionProcess.introduction" defaultValue={DEFAULTS.introduction} multiline />
          </p>
        </motion.div>

        <ol className="mx-auto mt-14 max-w-[1100px] border-t border-white/10">
          {DEFAULTS.steps.map((step, index) => (
            <li key={step.title} className="border-b border-white/10">
              <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
                className="grid gap-x-6 gap-y-3 py-7 sm:grid-cols-[56px_minmax(0,0.42fr)_minmax(0,0.58fr)] sm:py-8"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                  <EditableText path={`plasticInjectionProcess.steps.${index}.title`} defaultValue={step.title} />
                </h3>
                <p className="text-[15px] leading-relaxed text-[#C5C1BD]">
                  <EditableText path={`plasticInjectionProcess.steps.${index}.description`} defaultValue={step.description} multiline />
                </p>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
