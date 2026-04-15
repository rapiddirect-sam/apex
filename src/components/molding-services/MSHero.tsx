"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Molding Services",
  description:
    "ApexBatch's molding services deliver the consistency, reliability, and quality you expect, with comprehensive material and finishing options to support your applications. Get an instant online quote for prototype or batch production today.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
};

export function MSHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
