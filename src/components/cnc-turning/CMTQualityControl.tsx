"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  headingHighlight: "Quality Control",
  headingSuffix: " for CNC Turned Parts",
  subheading:
    "ApexBatch applies structured inspection at incoming, in-process, and final stages to support dimensional accuracy, surface quality, and reliable delivery of custom turned components.",
  equipmentLabel: "Inspection Equipment：",
  equipmentList:
    "Calipers · Micrometers · Thread Gauges · Plug Gauges · Ring Gauges · Surface Roughness Testers · Optical Measuring Machines · CMM · Hardness Testers · Spectrometers",
  ctaText:
    "Need inspection reports or tighter tolerance control for your turned parts? Share your drawings and quality requirements for review before production.",
  ctaButton: "Request Quality Support",
  items: [
    {
      title: "Incoming Material & Setup Verification",
      description:
        "Material certification, dimensional checks on blanks, and first-piece setup verification before CNC turning production begins.",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-factory-3.webp",
    },
    {
      title: "In-Process Dimensional Control",
      description:
        "Critical diameters, lengths, threads, and surface requirements are monitored during turning using gauges, calipers, and in-process inspection protocols.",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/cnc-turning.webp",
    },
    {
      title: "Final Inspection & Delivery Reports",
      description:
        "Outgoing verification, surface finish checks, and project-based inspection reports including COC and dimensional records when required.",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-machine-overview-1.webp",
    },
  ],
};

function QualityCard({
  item,
  index,
}: {
  item: (typeof DEFAULTS.items)[number];
  index: number;
}) {
  const isMiddle = index === 1;
  const imageFirst = !isMiddle;
  const textFlex = 1;
  const imageFlex = 2;

  const textBlock = (
    <div
      style={{
        flex: textFlex,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#FFFFFF",
          marginBottom: "14px",
          lineHeight: 1.35,
        }}
      >
        <EditableText path={`quality.items.${index}.title`} defaultValue={item.title} />
      </h3>
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.65,
          color: "#C5C6C9",
          margin: 0,
        }}
      >
        <EditableText
          path={`quality.items.${index}.description`}
          defaultValue={item.description}
          multiline
        />
      </p>
    </div>
  );

  const imageBlock = (
    <div
      className="relative w-full"
      style={{
        flex: imageFlex,
        minHeight: "140px",
      }}
    >
      <EditableImage
        path={`quality.items.${index}.image`}
        defaultSrc={item.image}
        alt={item.title}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="flex min-h-[420px] flex-col overflow-hidden md:min-h-[520px]"
      style={{
        background: "#000000",
        border: "1px solid rgba(208,153,71,0.25)",
        borderRadius: "4px",
      }}
    >
      {imageFirst ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </motion.article>
  );
}

export function CMTQualityControl() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "52px 0 112px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "56px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              marginBottom: "18px",
            }}
          >
            <span style={{ color: "#EEC569" }}>
              <EditableText path="quality.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="quality.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p
            className="mx-auto w-[80%]"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
            }}
          >
            <EditableText path="quality.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
          <p
            className="mx-auto w-[90%]"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "20px",
            }}
          >
            <span style={{ color: "#EEC569", fontWeight: 600 }}>
              <EditableText path="quality.equipmentLabel" defaultValue={DEFAULTS.equipmentLabel} />
            </span>{" "}
            <EditableText path="quality.equipmentList" defaultValue={DEFAULTS.equipmentList} multiline />
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "12px" }}
        >
          {DEFAULTS.items.map((item, index) => (
            <QualityCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex max-w-[920px] flex-col items-center gap-5 text-center"
        >
          <p style={{ color: "#F3F3F3", fontSize: "16px", lineHeight: 1.6 }}>
            <EditableText path="quality.ctaText" defaultValue={DEFAULTS.ctaText} multiline />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#D09947] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#000000] transition-all hover:bg-[#EEC569]"
            style={{ borderRadius: "4px" }}
          >
            <EditableText path="quality.ctaButton" defaultValue={DEFAULTS.ctaButton} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
