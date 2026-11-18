"use client";

import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";
import { motion } from "@/components/ui/StaticMotion";

const BENEFITS = [
  {
    title: "One Coordinated Production Route",
    description:
      "We coordinate laser cutting, bending, hardware insertion, welding, finishing, and inspection under one production plan—so your part moves forward with fewer supplier handoffs.",
  },
  {
    title: "A Practical Review Before Production",
    description:
      "We check bend access, nearby holes and slots, visible surfaces, hardware locations, and assembly interfaces before material is cut.",
  },
  {
    title: "A Clearer Quote Scope",
    description:
      "See what is included in your quote before production begins: manufacturing, secondary operations, inspection, packaging, and delivery.",
  },
];

const PRODUCTION_IMAGES = [
  { src: "/sheet-metal/apexbatch-cnc-press-brake-tooling-setup.png", label: "Tooling setup", alt: "CNC press brake tooling setup" },
  { src: "/sheet-metal/apexbatch-cnc-press-brake-operator-control.png", label: "Programmed press brake operation", alt: "Operator controlling an AMADA CNC press brake" },
  { src: "/sheet-metal/apexbatch-sheet-metal-part-press-brake-forming.png", label: "Formed-part handling", alt: "Operator handling a formed sheet metal part at a press brake" },
];

export function BendingWhyChoose() {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-left lg:text-center">
          <h2 className="service-section-title text-white">
            <EditableText path="bendingWhyChoose.headingPrefix" defaultValue="Why Choose ApexBatch for " />
            <span className="service-title-accent">
              <EditableText path="bendingWhyChoose.headingHighlight" defaultValue="Metal Bending Services" />
            </span>
          </h2>
          <p className="service-section-copy mt-6">
            <EditableText path="bendingWhyChoose.description" defaultValue="ApexBatch is built for teams that need more than a bent blank. Our CNC metal bending services can be planned around the finished part, with the material, bend sequence, critical interfaces, hardware, welding, surface treatment, inspection, and delivery scope considered together." multiline />
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <motion.article key={benefit.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border border-white/10 bg-[#1A1918] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[#D09947]/50">
              <h3 className="text-xl font-semibold text-white"><EditableText path={`bendingWhyChoose.items.${index}.title`} defaultValue={benefit.title} /></h3>
              <p className="mt-3 text-sm leading-relaxed text-[#C5C1BD]"><EditableText path={`bendingWhyChoose.items.${index}.description`} defaultValue={benefit.description} multiline /></p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PRODUCTION_IMAGES.map((image, index) => (
            <figure key={image.src} className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-[#1A1918]">
              <StaticImage path={`bendingWhyChoose.images.${index}`} defaultSrc={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-xs font-semibold uppercase tracking-[0.1em] text-white"><EditableText path={`bendingWhyChoose.images.${index}.label`} defaultValue={image.label} /></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
