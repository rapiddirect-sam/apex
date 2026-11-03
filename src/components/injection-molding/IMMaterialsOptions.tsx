"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";
import { useState } from "react";

const DEFAULTS = {
  heading: "Injection Molding Materials and Color Options",
  description: "Select resin around load, heat, wear, chemical exposure, electrical requirements, appearance, dimensions, and expected production quantity.",
  families: [
    {
      name: "General-Purpose Plastics",
      materials: "ABS; PP, HDPE, and GPPS subject to availability",
      use: "Cost-effective housings, covers, packaging components, and general-purpose plastic parts.",
      directions: "ABS natural, black, milky white, flame-retardant, and antistatic directions.",
      image: "/images/materials/cnc-plastics/ABS%20Series%20Plastics%201.webp",
      imageAlt: "ABS plastic material pellets",
    },
    {
      name: "Engineering Plastics",
      materials: "PC, PC/ABS, PA6, PA66, POM, and PBT",
      use: "Parts requiring strength, heat resistance, wear resistance, or dimensional stability.",
      directions: "PC transparent, black, or white; PC/ABS black; PA66 black directions.",
      image: "/images/materials/cnc-plastics/PC%20(Polycarbonate)%20Series%201.webp",
      imageAlt: "Polycarbonate engineering plastic material pellets",
    },
    {
      name: "Reinforced Plastics",
      materials: "PP+GF30, PA6+GF15, and PA6+GF30",
      use: "Structural parts that need added stiffness and reinforcement performance.",
      directions: "Black reinforced grades for project review.",
      image: "/images/materials/cnc-plastics/PA%20(Nylon)%20Series%201.webp",
      imageAlt: "Nylon engineering plastic material pellets",
    },
    {
      name: "High-Performance Plastics",
      materials: "PEEK, PPSU, PVDF, PPE/PPO blends; PEI subject to availability",
      use: "Demanding thermal, chemical, electrical, or mechanical requirements.",
      directions: "PEEK natural, PEEK+CF, PEEK+GF black; PPSU, PVDF, and PPE/PPO blend directions.",
      image: "/images/materials/cnc-plastics/PEEK%20(Polyether%20Ether%20Ketone)%20Series%201.webp",
      imageAlt: "PEEK high-performance plastic material pellets",
    },
    {
      name: "Flexible Materials",
      materials: "TPE-S and TPU subject to availability",
      use: "Flexible standalone parts, protective features, seals, grips, or repeated-bend performance.",
      directions: "Grade, hardness, color, and molding suitability are confirmed by project.",
      image: "/injection-molding/tpe-tpu-thermoplastic-elastomer-pellets.avif",
      imageAlt: "TPE and TPU thermoplastic elastomer raw material pellets",
    },
  ],
  note: "Exact resin grade, color, reinforcement level, certification requirements, and molding suitability are confirmed during quotation.",
  cta: "Explore the Material Library",
};

export function IMMaterialsOptions() {
  const [activeFamily, setActiveFamily] = useState(0);
  const family = DEFAULTS.families[activeFamily];

  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-left lg:text-center">
          <h2 className="service-section-title text-white">
            <EditableText path="materialsOptions.heading" defaultValue={DEFAULTS.heading} />
          </h2>
          <p className="service-section-copy mt-6 lg:mx-auto lg:max-w-4xl">
            <EditableText path="materialsOptions.description" defaultValue={DEFAULTS.description} multiline />
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-start gap-3 lg:justify-center">
          {DEFAULTS.families.map((item, index) => {
            const isActive = activeFamily === index;
            return (
              <h3 key={item.name}>
                <button
                  type="button"
                  onClick={() => setActiveFamily(index)}
                  className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-colors sm:px-5 ${isActive ? "border-[#D09947] bg-[#D09947]/15 text-[#EEC569]" : "border-[#D09947]/30 bg-transparent text-[#AAA7A3] hover:border-[#D09947]/60 hover:text-[#F4F1EC]"}`}
                >
                  <EditableText path={`materialsOptions.families.${index}.name`} defaultValue={item.name} />
                </button>
              </h3>
            );
          })}
        </div>

        <motion.div key={family.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24 }} className="mt-10 overflow-hidden rounded-xl border border-[#D09947]/20 bg-[#1A1918]">
          <div className="grid md:grid-cols-2">
            <div className="p-7 sm:p-9 lg:p-10">
              <p className="text-2xl font-semibold text-white sm:text-3xl">
                <EditableText path={`materialsOptions.families.${activeFamily}.name`} defaultValue={family.name} />
              </p>
              <div className="mt-7 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EEC569]">Materials for project review</p>
                  <p className="mt-2 text-base leading-relaxed text-[#F4F1EC]">
                    <EditableText path={`materialsOptions.families.${activeFamily}.materials`} defaultValue={family.materials} multiline />
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EEC569]">Use when you need</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#C5C1BD]">
                    <EditableText path={`materialsOptions.families.${activeFamily}.use`} defaultValue={family.use} multiline />
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EEC569]">Color or grade directions</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#C5C1BD]">
                    <EditableText path={`materialsOptions.families.${activeFamily}.directions`} defaultValue={family.directions} multiline />
                  </p>
                </div>
                {activeFamily === 4 ? (
                  <p className="text-[15px] leading-relaxed text-[#C5C1BD]">
                    <EditableText path="materialsOptions.flexibleMaterials.overmoldingPrefix" defaultValue="For a soft material molded onto a rigid substrate, see our " />
                    <Link href="/overmolding" className="body-text-link body-text-link--dark">
                      <EditableText path="materialsOptions.flexibleMaterials.overmoldingLink" defaultValue="Overmolding" />
                    </Link>{" "}
                    <EditableText path="materialsOptions.flexibleMaterials.overmoldingSuffix" defaultValue="service." />
                  </p>
                ) : null}
              </div>
            </div>
            <div className="relative min-h-[280px] border-t border-white/10 md:min-h-full md:border-l md:border-t-0">
              <StaticImage path={`materialsOptions.families.${activeFamily}.image`} defaultSrc={family.image} alt={family.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </motion.div>

        <div className="section-note mx-auto mt-8 max-w-[1050px]">
          <p><EditableText path="materialsOptions.note" defaultValue={DEFAULTS.note} multiline /></p>
        </div>
        <div className="mt-7 flex justify-center">
          <Link href="/materials" className="body-text-link body-text-link--dark inline-flex items-center gap-2 text-sm">
            <EditableText path="materialsOptions.cta" defaultValue={DEFAULTS.cta} />
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
