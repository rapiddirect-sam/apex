"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { EditableText } from "@/components/cms";

const CONTROLS = [
  {
    title: "Operator and Inspector Competency",
    subtitle: "Verified competency and authority to stop production",
    image: "/quality/apexbatch-trained-quality-inspectors.avif",
    alt: "ApexBatch trained quality inspectors reviewing inspection requirements",
    items: ["Operators and inspectors complete role-specific training and competency assessment before assignment.", "Key process personnel receive periodic retraining and additional training after relevant drawing or process changes.", "Operators and inspectors can stop production, segregate affected parts and escalate quality risks."],
  },
  {
    title: "PDCA and Corrective Action",
    subtitle: "Closed-loop control of deviations and process performance",
    image: "/quality/apexbatch-quality-engineer-reviewing-corrective-action-process.avif",
    alt: "ApexBatch quality engineers reviewing the corrective action process",
    items: ["Nonconforming parts are recorded, identified and isolated.", "Root causes and corrective actions are managed through the PDCA cycle.", "Effectiveness is verified before closure and application to repeat production.", "Key quality indicators are reviewed monthly to identify trends and improve process stability."],
  },
  {
    title: "Customer Quality Collaboration",
    subtitle: "Defined ownership from requirement review through final release",
    image: "/quality/apexbatch-quality-engineers-discussing-customer-requirements.avif",
    alt: "ApexBatch quality engineers discussing customer requirements",
    items: ["A designated quality or project contact coordinates the agreed requirements for applicable production programs.", "Specifications, inspection criteria, customer approvals and engineering changes are documented and tracked.", "Review frequency, performance reporting and issue communication are defined according to project needs."],
  },
];

export function QualityConsistency() {
  return (
    <section className="bg-[#34312F] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
          <h2 className="section-title">
            <EditableText path="consistentQuality.title" defaultValue="How We Maintain " />
            <span className="text-[#EEC569]"><EditableText path="consistentQuality.titleHighlight" defaultValue="Consistent Quality" /></span>
          </h2>
          <p className="body-copy mt-5 max-w-3xl">
            <EditableText path="consistentQuality.intro" defaultValue="Three system controls turn approved quality requirements into repeatable production practices." multiline />
          </p>
        </motion.div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {CONTROLS.map((control, index) => (
            <motion.article key={control.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className={`grid items-center gap-8 py-10 lg:gap-14 lg:py-14 ${index % 2 === 1 ? "lg:grid-cols-[minmax(0,0.60fr)_minmax(0,0.40fr)]" : "lg:grid-cols-[minmax(0,0.40fr)_minmax(0,0.60fr)]"}`}>
              <div className={`relative order-1 aspect-[3/2] overflow-hidden rounded-xl border border-white/10 bg-[#171717] ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <Image src={control.image} alt={control.alt} fill unoptimized className="object-cover" sizes="(max-width: 1023px) 100vw, 40vw" />
              </div>
              <div className={`order-2 min-w-0 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl"><EditableText path={`consistentQuality.controls.${index}.title`} defaultValue={control.title} /></h3>
                <p className="mt-3 text-base font-semibold leading-6 text-[#EEC569]"><EditableText path={`consistentQuality.controls.${index}.subtitle`} defaultValue={control.subtitle} multiline /></p>
                <ul className="mt-6 space-y-4">
                  {control.items.map((item, itemIndex) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-[#F0F0F1] sm:text-base sm:leading-7">
                      <Check className="mt-1.5 h-4 w-4 shrink-0 text-[#D09947]" aria-hidden="true" />
                      <EditableText path={`consistentQuality.controls.${index}.items.${itemIndex}`} defaultValue={item} multiline />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
