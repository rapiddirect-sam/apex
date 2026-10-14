"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { EditableText } from "@/components/cms";

const STAGES = [
  {
    number: "01",
    title: "Incoming Material Inspection",
    intro: "Materials and purchased components are checked before entering production.",
    image: "/quality/incoming-aluminum-round-bar-stock.avif",
    alt: "Incoming aluminum round bar stock prepared for material inspection",
    items: ["Purchase order, drawing and material specification verification", "Material grade and condition verification", "Incoming quantity, dimensions, packaging and surface condition", "Accepted material identification and release to production", "Identification, isolation and disposition of nonconforming materials"],
  },
  {
    number: "02",
    title: "First Article and In-Process Quality Control",
    intro: "Critical requirements are monitored throughout production to identify variation before it affects the complete batch.",
    image: "/quality/first-article-dimensional-inspection-digital-caliper.avif",
    alt: "First article dimensional inspection using a digital caliper",
    groups: [
      {
        title: "Inspection Controls",
        items: [
          "Formal First Article Inspection where required",
          "First-piece inspection after relevant setup, tooling, fixture, mold or program changes",
          "Operator self-inspection and scheduled quality patrols",
          "Critical dimension monitoring",
          "Scheduled In-Process Quality Control (IPQC), typically at two-hour intervals where defined by the control plan",
        ],
      },
      {
        title: "Process Stability",
        items: [
          "Tool wear and fixture verification",
          "Process parameter checks",
          "Statistical Process Control (SPC) and process capability monitoring for applicable repeat-production programs",
          "Identification and isolation of suspected nonconforming parts",
        ],
      },
    ],
    note: "Formal FAI may be required for a new part, significant drawing revision or customer-defined approval program. First-piece inspection is used to confirm production conditions after relevant setup or process changes.",
  },
  {
    number: "03",
    title: "Final Inspection and Release",
    intro: "Finished parts are verified against the agreed drawing and inspection requirements before packing and shipment.",
    image: "/quality/finished-part-packaging-shipment-identification.avif",
    alt: "Finished part packaging and shipment identification inspection",
    items: ["Final dimensions and critical characteristics verification", "Surface finish, appearance and cleanliness review", "Functional or fit verification where specified", "Packaging protection, quantity and labeling checks", "Final acceptance and authorized release for shipment"],
  },
];

function CheckItem({ path, value }: { path: string; value: string }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-6 text-[#E5E5E7]">
      <Check className="mt-1 h-4 w-4 shrink-0 text-[#D09947]" aria-hidden="true" />
      <EditableText path={path} defaultValue={value} multiline />
    </li>
  );
}

export function QualityProductionControl() {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.015em] text-white">
            <EditableText path="productionControl.title" defaultValue="Quality Control " />
            <span className="text-[#EEC569]"><EditableText path="productionControl.titleHighlight" defaultValue="Across Production" /></span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#D8D8DA] sm:text-lg">
            <EditableText path="productionControl.intro" defaultValue="Our quality process covers incoming materials, production control and final release." multiline />
          </p>
        </motion.div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {STAGES.map((stage, index) => (
            <motion.article key={stage.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} className="py-10 lg:py-14">
              <header className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex min-w-11 items-center justify-center rounded-full border border-[#D09947]/60 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-[#EEC569]">{stage.number}</span>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl"><EditableText path={`productionControl.stages.${index}.title`} defaultValue={stage.title} /></h3>
                  <p className="mt-3 max-w-4xl text-base leading-7 text-[#D8D8DA]"><EditableText path={`productionControl.stages.${index}.intro`} defaultValue={stage.intro} multiline /></p>
                </div>
              </header>

              <div className={`mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-12 ${stage.groups ? "items-start" : "items-center"}`}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10 bg-[#171717]">
                  <Image src={stage.image} alt={stage.alt} fill unoptimized className="object-cover" sizes="(max-width: 1023px) 100vw, 38vw" />
                </div>

                {stage.groups ? (
                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                    {stage.groups.map((group, groupIndex) => (
                      <div key={group.title}>
                        <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-[#EEC569]">
                          <EditableText path={`productionControl.stages.${index}.groups.${groupIndex}.title`} defaultValue={group.title} />
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {group.items.map((item, itemIndex) => <CheckItem key={item} path={`productionControl.stages.${index}.groups.${groupIndex}.items.${itemIndex}`} value={item} />)}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {stage.items?.map((item, itemIndex) => <CheckItem key={item} path={`productionControl.stages.${index}.items.${itemIndex}`} value={item} />)}
                  </ul>
                )}
              </div>

              {stage.note && (
                <p className="mt-8 border-l-2 border-[#D09947] bg-[#171717] px-5 py-4 text-sm leading-6 text-[#CFCFD2] sm:px-6 sm:text-[15px]">
                  <EditableText path={`productionControl.stages.${index}.note`} defaultValue={stage.note} multiline />
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-[#D09947] bg-[#171717] px-5 py-4 sm:px-6">
          <p className="text-sm leading-6 text-[#CFCFD2] sm:text-[15px] sm:leading-7">
            <EditableText path="productionControl.scopeNote" defaultValue="Inspection scope is defined by the approved drawing and project quality plan. Agreed critical characteristics can receive 100% inspection, while other characteristics may be verified using the approved sampling plan or applicable Acceptance Quality Limit (AQL) requirements." multiline />
          </p>
        </div>
      </div>
    </section>
  );
}
