"use client";

import { motion } from "framer-motion";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "Built on Experience. ",
  headingHighlight: "Focused on Production.",
  description:
    "ApexBatch builds on manufacturing capabilities developed in Shenzhen since 2009. Based in Shenzhen, China, our engineering, production, quality and supply-chain teams bring together the resources and experience to support industrial customers at scale.",
  images: {
    production: "/about/apexbatch-cnc-machining-production-floor-with-operator.avif",
    office: "/about/apexbatch-staff-working-in-office.avif",
    experienceCenter: "/about/apexbatch-cnc-machining-experience-center-precision-components.webp",
  },
};

const imageFrame =
  "relative overflow-hidden rounded-2xl border border-[#D09947]/20 bg-[#171717]";

export function AboutCapabilities() {
  return (
    <section className="bg-[#0D0D0D] px-4 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <EditableText
              path="experience.headingPrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />
            <span className="text-[#EEC569]">
              <EditableText
                path="experience.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>

          <div className="body-copy mt-7">
            <p>
              <EditableText
                path="experience.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4"
        >
          <div className={`${imageFrame} aspect-[16/9] sm:col-span-2`}>
            <EditableImage
              path="experience.images.production"
              defaultSrc={DEFAULTS.images.production}
              alt="ApexBatch CNC machining production floor with an operator monitoring equipment"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={`${imageFrame} aspect-[5/3]`}>
            <EditableImage
              path="experience.images.office"
              defaultSrc={DEFAULTS.images.office}
              alt="ApexBatch staff working in the Shenzhen office"
              fill
              sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={`${imageFrame} aspect-[5/3]`}>
            <EditableImage
              path="experience.images.experienceCenter"
              defaultSrc={DEFAULTS.images.experienceCenter}
              alt="ApexBatch machining experience center displaying CNC components"
              fill
              sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
