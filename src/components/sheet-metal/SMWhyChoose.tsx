"use client";

import { motion } from "@/components/ui/StaticMotion";
import { Lock } from "lucide-react";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Why Engineers ",
  headingHighlight: "Choose ApexBatch",
  reasons: [
    {
      title: "Prototype and Sample Support",
      description:
        "Validate material, fit, bend geometry, finish, hardware, and assembly before moving into larger quantities.",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    },
    {
      title: "Practical DFM Feedback",
      description:
        "Receive engineering feedback on cut features, bend feasibility, materials, tolerances, welding, finishing, and assembly before production begins.",
      iconPath: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z",
    },
    {
      title: "Integrated Manufacturing",
      description:
        "Manage laser cutting, bending, punching, welding, hardware insertion, finishing, inspection, and assembly through one production plan.",
      iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
    },
    {
      title: "Reliable Production and Delivery",
      description:
        "Confirm the approved material, process route, quality requirements, packaging, lead time, and delivery arrangement for low-volume or repeat orders.",
      iconPath: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
    },
  ],
  ctaTitle: "Share Your Design Requirements",
  ctaDescription: "Upload DXF, DWG, STEP files and drawings with material, finish, quantity, and critical requirements for a practical manufacturing review.",
  ctaButton: "Request DFM Feedback",
  ipNote: "Strict IP Protection (NDA Available)",
};

export function SMWhyChoose() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "112px 0 120px", background: "#34312F" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left lg:text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2 className="service-section-title text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="whychoose.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText path="whychoose.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.4fr] gap-x-10 gap-y-8">
          {DEFAULTS.reasons.slice(0, 2).map((reason, index) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="transition-all duration-300 hover:-translate-y-1" style={{ padding: "20px 0" }}>
              <div style={{ marginBottom: "16px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFFFFF"><path d={reason.iconPath} /></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>
                <EditableText path={`whychoose.reasons.${index}.title`} defaultValue={reason.title} />
              </h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#FFFFFF" }}>
                <EditableText path={`whychoose.reasons.${index}.description`} defaultValue={reason.description} multiline />
              </p>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:row-span-2 flex flex-col items-center justify-center text-center self-center" style={{ background: "linear-gradient(180deg, #0A1628 0%, #0D1117 100%)", borderRadius: "16px", padding: "40px 36px", border: "1px solid rgba(208,153,71,0.15)" }}>
            <div style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "14px" }}>
              <EditableText path="whychoose.ctaTitle" defaultValue={DEFAULTS.ctaTitle} />
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#FFFFFF", marginBottom: "28px" }}>
              <EditableText path="whychoose.ctaDescription" defaultValue={DEFAULTS.ctaDescription} multiline />
            </p>
            <Link href="/contact" rel="nofollow" className="cta-primary w-full">
              <EditableText path="whychoose.ctaButton" defaultValue={DEFAULTS.ctaButton} />
            </Link>
            <div className="flex items-center justify-center gap-2 mt-5" style={{ fontSize: "12px", color: "#6B7280" }}>
              <Lock className="w-3 h-3" />
              <span><EditableText path="whychoose.ipNote" defaultValue={DEFAULTS.ipNote} /></span>
            </div>
          </motion.div>

          {DEFAULTS.reasons.slice(2).map((reason, i) => {
            const index = i + 2;
            return (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="transition-all duration-300 hover:-translate-y-1" style={{ padding: "20px 0" }}>
                <div style={{ marginBottom: "16px" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFFFFF"><path d={reason.iconPath} /></svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>
                  <EditableText path={`whychoose.reasons.${index}.title`} defaultValue={reason.title} />
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#FFFFFF" }}>
                  <EditableText path={`whychoose.reasons.${index}.description`} defaultValue={reason.description} multiline />
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
