"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Plastic Injection Molding Services",
  description:
    "Your end-to-end injection molding partner. We deliver precision plastic parts with 100+ material options, fast turnaround, and competitive pricing.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
};

export function IMHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
