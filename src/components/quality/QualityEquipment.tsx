"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const EQUIPMENT = [
  {
    name: "ZEISS CMM Precision Inspection",
    description: "Measures complex geometries, multi-surface relationships and applicable GD&T features, including position, profile, perpendicularity, concentricity and datum relationships.",
    image: "/quality/apexbatch-zeiss-cmm-probe-precision-dimensional-inspection.avif",
    alt: "ApexBatch ZEISS CMM probe performing precision dimensional inspection",
  },
  {
    name: "IM-X Series Image Dimension Measurement System",
    description: "Supports rapid and repeatable image-based measurement of multiple dimensions and features, making it suitable for production inspection and repeated part verification.",
    image: "/quality/apexbatch-im-x-image-dimension-measurement-system.avif",
    alt: "ApexBatch IM-X Series image dimension measurement system",
  },
  {
    name: "Automatic Optical Measuring Instrument",
    description: "Provides automatic, non-contact measurement of profiles, hole diameters, hole spacing, edge features and small two-dimensional characteristics.",
    image: "/quality/apexbatch-automatic-optical-measuring-instrument-part-inspection.avif",
    alt: "ApexBatch automatic optical measuring instrument inspecting part features",
  },
  {
    name: "Surface Roughness Tester",
    description: "Measures specified surface roughness characteristics such as Ra to verify functional, sealing, friction and appearance requirements.",
    image: "/quality/apexbatch-surface-roughness-tester-machined-surface-finish.avif",
    alt: "ApexBatch surface roughness tester verifying a machined surface finish",
  },
];

export function QualityEquipment() {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex min-h-[280px] items-center overflow-hidden rounded-xl border border-white/10 bg-[#171717] sm:min-h-[300px] lg:min-h-[320px]"
        >
          <Image
            src="/quality/apexbatch-zeiss-cmm-quality-inspection-lab-with-two-operators.webp"
            alt="ApexBatch ZEISS CMM quality inspection lab with two operators"
            fill
            unoptimized
            className="object-cover object-center"
            sizes="(max-width: 1279px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/5" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl px-6 py-12 sm:px-10 lg:px-14">
            <h2 className="section-title">
              <EditableText path="equipment.title" defaultValue="Our Precision Measurement and " />
              <span className="text-[#EEC569]"><EditableText path="equipment.titleHighlight" defaultValue="Inspection Equipment" /></span>
            </h2>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {EQUIPMENT.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              className="group grid overflow-hidden rounded-xl border border-[#D09947]/25 bg-[#171717] transition duration-300 hover:-translate-y-1 hover:border-[#D09947]/70 sm:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#222] sm:aspect-auto sm:min-h-[230px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 38vw, 19vw"
                />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-6">
                <h3 className="section-card-title">
                  <EditableText path={`equipment.items.${index}.name`} defaultValue={item.name} />
                </h3>
                <p className="body-copy mt-3">
                  <EditableText path={`equipment.items.${index}.description`} defaultValue={item.description} multiline />
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
