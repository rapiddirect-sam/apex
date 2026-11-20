"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "CNC Press Brake Bending for ",
  headingHighlight: "Custom Parts",
  paragraphOne:
    "Sheet metal bending forms a flat blank into a three-dimensional part through a planned sequence of press brake operations. The bending of sheet metal can create return flanges, channels, trays, covers, brackets, and complex formed assemblies without dedicated stamping dies.",
  paragraphTwoBefore:
    "A flat pattern is the unfolded sheet-metal shape used before bending. Its bend allowances, bend radii, grain direction, holes, slots, and flange lengths must all support the finished geometry.",
  paragraphThreeBefore:
    "Our CNC sheet metal bending services use programmed press brake operations and suitable tooling to form single-bend and multi-bend parts with repeatable positioning. For projects that require cutting, forming, joining, and finishing under one production plan, explore our ",
  paragraphThreeLink: "sheet metal fabrication services",
  image: "/about/apexbatch-amada-cnc-press-brake-sheet-metal-bending.avif",
};

export function BendingIntro() {
  return (
    <section className="overflow-hidden bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-stretch md:gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="service-section-title text-white">
            <EditableText
              path="bendingIntro.headingPrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />
            <span className="service-title-accent">
              <EditableText
                path="bendingIntro.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <p className="service-section-copy section-reading-copy mt-6 max-w-none lg:max-w-[540px]">
            <EditableText
              path="bendingIntro.paragraphOne"
              defaultValue={DEFAULTS.paragraphOne}
              multiline
              linkText="sheet metal"
              linkHref="/blog/what-is-sheet-metal"
              linkClassName="body-text-link body-text-link--dark"
            />
          </p>
          <p className="service-section-copy section-reading-copy mt-5 max-w-none lg:max-w-[540px]">
            <EditableText
              path="bendingIntro.paragraphTwoBefore"
              defaultValue={DEFAULTS.paragraphTwoBefore}
              multiline
            />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] md:min-h-0"
        >
          <Image
            src={DEFAULTS.image}
            alt="AMADA CNC press brake forming sheet metal components"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="mx-auto mt-12 max-w-[1050px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-note"
        >
          <p>
            <EditableText
              path="bendingIntro.paragraphThreeBefore"
              defaultValue={DEFAULTS.paragraphThreeBefore}
              multiline
            />
            <Link
              href="/sheet-metal-fabrication"
              className="body-text-link body-text-link--dark"
            >
              <EditableText
                path="bendingIntro.paragraphThreeLink"
                defaultValue={DEFAULTS.paragraphThreeLink}
              />
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
