"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const RECORD_GROUPS = [
  {
    number: "01",
    title: "Engineering",
    description: "Customer part number and approved drawing revision.",
  },
  {
    number: "02",
    title: "Material and Production",
    description: "Production order, traveler, material lot, work center, and applicable process parameters.",
  },
  {
    number: "03",
    title: "Inspection",
    description: "Inspection results and operator or inspector identification.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Packaging, labeling and shipment identification.",
  },
];

const GALLERY_IMAGES = [
  {
    image: "/quality/apexbatch-engineering-record-review.webp",
    alt: "ApexBatch engineers reviewing controlled production records",
    label: "Engineering review",
  },
  {
    image: "/quality/apexbatch-controlled-inspection-workflow.webp?v=20261118",
    alt: "Controlled inspection workflow with quality workstations and material flow",
    label: "Controlled inspection workflow",
  },
  {
    image: "/quality/apexbatch-ZEISS-CMM-inspection-lab.webp",
    alt: "ZEISS CMM inspection lab supporting dimensional verification",
    label: "ZEISS CMM inspection",
  },
  {
    image: "/quality/apexbatch-quality-office-and-packaging-support.webp",
    alt: "Quality office and production support area",
    label: "Quality and delivery support",
  },
];

export function QualityTraceability() {
  return (
    <section className="bg-[#34312F] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="section-title">
            <EditableText path="traceability.title" defaultValue="Full Traceability for " />
            <span className="text-[#EEC569]">
              <EditableText
                path="traceability.titleHighlight"
                defaultValue="Controlled Production Programs"
              />
            </span>
          </h2>
          <p className="body-copy mt-5">
            <EditableText
              path="traceability.intro"
              defaultValue="For each controlled production program, our unified digital system permanently retains project requirements and material, production, inspection, and shipment records—supporting 100% traceability for repeat orders, quality reviews, and engineering changes."
              multiline
            />
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-stretch lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:flex lg:flex-col"
          >
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#EEC569]">
              <EditableText path="traceability.recordsLabel" defaultValue="Traceable records can include" />
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:flex-1 lg:auto-rows-fr">
              {RECORD_GROUPS.map((group, index) => (
                <article
                  key={group.title}
                  className="h-full border border-white/10 bg-[#171717] p-5 transition-colors duration-300 hover:border-[#D09947]/55 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-xs font-bold tracking-[0.14em] text-[#EEC569]">
                      {group.number}
                    </span>
                    <h3 className="section-card-title">
                      <EditableText
                        path={`traceability.groups.${index}.title`}
                        defaultValue={group.title}
                      />
                    </h3>
                  </div>
                  <p className="body-copy mt-3">
                    <EditableText
                      path={`traceability.groups.${index}.description`}
                      defaultValue={group.description}
                      multiline
                    />
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-5 hidden border-l border-[#EEC569]/50 pl-4 text-xs leading-relaxed text-[#A9A19A] lg:block">
              <EditableText
                path="traceability.scopeNote"
                defaultValue="The exact traceability scope is defined in the agreed quality plan."
                multiline
              />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {GALLERY_IMAGES.map((image, index) => (
              <figure
                key={image.image}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#222]"
              >
                <Image
                  src={image.image}
                  alt={image.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 45vw, 27vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                  <EditableText
                    path={`traceability.gallery.${index}.label`}
                    defaultValue={image.label}
                  />
                </figcaption>
              </figure>
            ))}
          </motion.div>

          <p className="border-l border-[#EEC569]/50 pl-4 text-xs leading-relaxed text-[#A9A19A] lg:hidden">
            <EditableText
              path="traceability.scopeNote"
              defaultValue="The exact traceability scope is defined in the agreed quality plan."
              multiline
            />
          </p>
        </div>
      </div>
    </section>
  );
}
