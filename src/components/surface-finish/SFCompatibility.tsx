"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

export function SFCompatibility() {
  return (
    <section className="bg-[#0D0D0D] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:flex lg:items-center lg:justify-center"
          >
            <h2 className="service-section-title mx-auto max-w-[460px] text-left">
              <EditableText
                path="surfaceFinishingCompatibility.headingPrefix"
                defaultValue="Material Compatibility for "
              />
              <span className="service-title-accent">
                <EditableText
                  path="surfaceFinishingCompatibility.headingHighlight"
                  defaultValue="Surface Finishing"
                />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-[16px] leading-[1.75] text-[#C5C6C9]"
          >
            <p>
              We review surface-finishing requirements for custom metal parts, including aluminum, steel, stainless steel, brass, copper, titanium, magnesium alloys and zinc-alloy parts where the selected process is compatible. <Link href="/cnc-machining" className="body-text-link body-text-link--dark">CNC-machined parts</Link>, <Link href="/sheet-metal-fabrication" className="body-text-link body-text-link--dark">sheet metal fabrications</Link>, <Link href="/die-casting" className="body-text-link body-text-link--dark">die-cast parts</Link> and <Link href="/aluminum-extrusion" className="body-text-link body-text-link--dark">extrusions</Link> may each require a different finishing approach.
            </p>
            <p>
              Material grade, heat treatment, prior machining, casting condition and the existing surface all influence which surface finishing processes are suitable. Please identify mixed materials, inserts, bonded components, existing coatings and surfaces that must remain untreated.
            </p>
            <Link
              href="/materials"
              className="body-text-link body-text-link--dark inline-flex items-center gap-2 text-sm"
            >
              Explore Compatible Materials
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
