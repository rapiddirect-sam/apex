"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";
import { QUALITY_CERTIFICATE_IMAGES } from "@/lib/qualityCertificates";

const DEFAULTS = {
  sectionTitle: "Certified Quality ",
  sectionTitleHighlight: "Management Systems",
  sectionDescription:
    "Defined procedures connect engineering review, material control, production inspection, final release and corrective action.",
  certifications: [
    {
      title: "ISO 9001:2015",
      description: "Quality management for controlled and consistent manufacturing processes.",
      src: QUALITY_CERTIFICATE_IMAGES.iso9001,
      alt: "ApexBatch ISO 9001:2015 quality management system certificate",
    },
    {
      title: "ISO 13485:2016",
      description:
        "Quality management requirements supporting applicable medical-device manufacturing programs.",
      src: QUALITY_CERTIFICATE_IMAGES.iso13485,
      alt: "ApexBatch ISO 13485:2016 quality management system certificate",
    },
    {
      title: "ISO 14001:2015",
      description:
        "Environmental management controls supporting responsible manufacturing operations.",
      src: QUALITY_CERTIFICATE_IMAGES.iso14001,
      alt: "ApexBatch ISO 14001:2015 environmental management system certificate",
    },
  ],
};

export function QualityCertifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden"
      style={{
        padding: "72px 0",

      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 46px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="certifications.sectionTitle" defaultValue={DEFAULTS.sectionTitle} />
            <span style={{ color: "#EEC569" }}>
              <EditableText
                path="certifications.sectionTitleHighlight"
                defaultValue={DEFAULTS.sectionTitleHighlight}
              />
            </span>
          </h2>
          <p
            style={{
              color: "#E2E2E2",
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "780px",
              margin: "18px auto 0",
            }}
          >
            <EditableText
              path="certifications.sectionDescription"
              defaultValue={DEFAULTS.sectionDescription}
              multiline
            />
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {DEFAULTS.certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden bg-[#171717] border border-[#EEC569]/30"
              style={{ borderRadius: "16px" }}
            >
              <div className="flex items-center justify-center bg-[#101010] px-6 py-5">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={160}
                  height={214}
                  className="h-auto w-full max-w-[145px]"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-white text-xl font-bold mb-3">
                  <EditableText
                    path={`certifications.items.${index}.title`}
                    defaultValue={cert.title}
                  />
                </h3>
                <p className="text-[#C5C6C9] text-base leading-7">
                  <EditableText
                    path={`certifications.items.${index}.description`}
                    defaultValue={cert.description}
                    multiline
                  />
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
