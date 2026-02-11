"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  title: "Precision CNC Machining Services",
  description:
    "From rapid prototyping to batch production, we ensure tolerances are strictly controlled within \u00B10.005 mm and offer global shipping services with delivery as fast as 3 days.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  ctaText: "Get Instant Quote",
};

export function CNCHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left - Image */}
        <div className="relative h-[300px] lg:h-auto">
          <EditableImage
            path="hero.image"
            defaultSrc={DEFAULTS.heroImage}
            alt="Custom CNC Machining Services"
            fill
          />
        </div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center bg-[#1A1A1A] p-8 lg:p-16"
        >
          <h1
            className="text-white font-bold uppercase tracking-tight"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            <EditableText path="hero.title" defaultValue={DEFAULTS.title} />
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#C5C6C9",
              marginBottom: "32px",
            }}
          >
            <EditableText
              path="hero.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 self-start transition-all duration-300 hover:brightness-110 group"
            style={{
              background: "#D09947",
              color: "#000000",
              fontWeight: 600,
              fontSize: "14px",
              padding: "14px 32px",
              borderRadius: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 15px rgba(208,153,71,0.3)",
            }}
          >
            <EditableText path="hero.ctaText" defaultValue={DEFAULTS.ctaText} />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
