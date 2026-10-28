"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Custom Sheet Metal Parts ",
  headingHighlight: "Manufactured by ApexBatch",
  description:
    "ApexBatch manufactures custom metal parts from flat sheet stock through finished or assembly-ready delivery. These examples show common production routes and the engineering details reviewed before production.",
  parts: [
    {
      title: "Enclosures & Chassis",
      description:
        "Custom enclosures, chassis, control panels, and cabinets with ventilation, mounting features, PEM hardware, protective finishes, and optional final assembly.",
      route: "Laser cutting → CNC bending → Hardware insertion → Surface finishing → Assembly",
      review: "Ventilation, fit-up, hardware access, cosmetic surfaces, coating clearance, and installation access.",
      image: "/sheet-metal/custom-sheet-metal-server-rack-enclosure.avif",
    },
    {
      title: "Equipment Components",
      description:
        "Brackets, mounting plates, housings, frames, and machine components built to drawing-defined dimensions and assembly interfaces.",
      route: "Laser cutting → CNC bending → Deburring → Welding or finishing",
      review: "Hole locations, bend angles, mating features, edge condition, and assembly alignment.",
      image: "/sheet-metal/custom-sheet-metal-equipment-frame.avif",
    },
    {
      title: "Guards, Panels & Formed Components",
      description:
        "Panels, covers, guards, support structures, and formed components with controlled features, marking, finishing, and assembly-ready details.",
      route: "Laser cutting → Forming → Welding or hardware insertion → Surface finishing → Inspection",
      review: "Flatness, visible surfaces, color and grain direction, weld distortion, marking, and packaging protection.",
      image: "/sheet-metal/precision-formed-sheet-metal-structural-parts.avif",
    },
  ],
};

export function SMCustomParts() {
  return (
    <section className="relative overflow-hidden bg-[#121110] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl text-left lg:mx-auto lg:text-center"
        >
          <h2 className="service-section-title text-white">
            <EditableText path="customParts.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText path="customParts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p className="service-section-copy mt-6 max-w-3xl lg:mx-auto">
            <EditableText path="customParts.description" defaultValue={DEFAULTS.description} multiline />
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DEFAULTS.parts.map((part, index) => (
            <motion.article
              key={part.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden border border-white/10 bg-[#1A1918] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <EditableImage
                  path={`customParts.items.${index}.image`}
                  defaultSrc={part.image}
                  alt={part.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  <EditableText path={`customParts.items.${index}.title`} defaultValue={part.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C5C1BD]">
                  <EditableText path={`customParts.items.${index}.description`} defaultValue={part.description} multiline />
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EEC569]">Typical route</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#F4F1EC]">
                    <EditableText path={`customParts.items.${index}.route`} defaultValue={part.route} multiline />
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#AAA7A3]">Engineering review</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#C5C1BD]">
                    <EditableText path={`customParts.items.${index}.review`} defaultValue={part.review} multiline />
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
