"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "/quality/apexbatch-cnc-machining-workshop-with-operators.webp",
  heading: "Ready to Review Your Sheet Metal Design?",
  description:
    "Upload your CAD files and drawings for a review of material, forming, joining, finishing, inspection and production requirements.",
  primaryCta: "Request a Production Quote",
  secondaryCta: "Discuss Your Project",
};

export function SMCTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      <div className="absolute inset-0">
        <Image
          src={DEFAULTS.backgroundImage}
          alt="ApexBatch operators working in the CNC machining workshop"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-[1100px] text-center">
          <h2 className="mx-auto max-w-2xl text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.1, marginBottom: "18px" }}>
            <EditableText path="cta.heading" defaultValue={DEFAULTS.heading} />
          </h2>
          <p className="mx-auto max-w-2xl" style={{ fontSize: "18px", lineHeight: 1.6, color: "#C5C6C9", marginBottom: "36px" }}>
            <EditableText path="cta.description" defaultValue={DEFAULTS.description} multiline />
          </p>
          <div className="flex flex-col justify-center gap-4 lg:flex-row">
            <Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group whitespace-nowrap">
              {DEFAULTS.primaryCta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" rel="nofollow" className="cta-secondary whitespace-nowrap">
              <EditableText path="cta.secondaryCta" defaultValue={DEFAULTS.secondaryCta} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
