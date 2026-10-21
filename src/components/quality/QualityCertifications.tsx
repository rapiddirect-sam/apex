"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";
import { QUALITY_CERTIFICATE_IMAGES } from "@/lib/qualityCertificates";

const DEFAULTS = {
  sectionTitle: "Certified Quality ",
  sectionTitleHighlight: "Management Systems",
  sectionDescription:
    "Defined procedures connect engineering review, material control, production inspection, final release and corrective action.",
  aboutLinkText: "Learn About ApexBatch and Our Manufacturing Network",
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
            className="section-title"
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
            className="section-intro-copy body-copy"
            style={{
              color: "#E2E2E2",
              fontSize: "17px",
              lineHeight: 1.7,
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
              className="flex h-full flex-col overflow-hidden border border-[#EEC569]/30 bg-[#171717]"
              style={{ borderRadius: "16px" }}
            >
              <div className="flex min-h-[236px] items-center justify-center bg-[#101010] px-6 py-5">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={160}
                  height={214}
                  className="h-auto max-h-[196px] w-full max-w-[145px] object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col items-center p-6 text-center">
                <h3 className="quality-certification-title mb-2">
                  <EditableText
                    path={`certifications.items.${index}.title`}
                    defaultValue={cert.title}
                  />
                </h3>
                <p className="body-copy max-w-[260px]">
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            href="/about"
            className="body-text-link body-text-link--dark text-sm"
          >
            <EditableText
              path="certifications.aboutLinkText"
              defaultValue={DEFAULTS.aboutLinkText}
            /> →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
