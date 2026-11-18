"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";
import { motion } from "@/components/ui/StaticMotion";

const DEFAULTS = {
  backgroundImage: "/sheet-metal/apexbatch-sheet-metal-secondary-operations-factory.avif",
  description:
    "Need metal bending services for a custom sheet metal part? Upload your CAD model and requirements for an online sheet metal bending quote. We will confirm the practical forming route before production begins.",
  primaryCta: "Request a Sheet Metal Bending Quote",
  secondaryCta: "Discuss Your Part With an Engineer",
};

export function BendingFinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      <div className="absolute inset-0">
        <Image
          src={DEFAULTS.backgroundImage}
          alt="ApexBatch sheet metal secondary operations factory"
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
            <EditableText path="bendingFinalCta.headingPrefix" defaultValue="Get a " />
            <span className="service-title-accent">
              <EditableText path="bendingFinalCta.headingHighlight" defaultValue="Metal Bending Quote" />
            </span>
          </h2>
          <p className="mx-auto max-w-2xl" style={{ fontSize: "18px", lineHeight: 1.6, color: "#C5C6C9", marginBottom: "36px" }}>
            <EditableText path="bendingFinalCta.description" defaultValue={DEFAULTS.description} multiline />
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-nowrap">
            <Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group whitespace-nowrap">
              <EditableText path="bendingFinalCta.primaryCta" defaultValue={DEFAULTS.primaryCta} />
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" rel="nofollow" className="cta-secondary whitespace-nowrap">
              <EditableText path="bendingFinalCta.secondaryCta" defaultValue={DEFAULTS.secondaryCta} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
