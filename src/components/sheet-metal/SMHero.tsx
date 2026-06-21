"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Sheet Metal Fabrication Services",
  description:
    "ApexBatch's sheet metal solutions deliver the consistency, reliability, and quality you expect, with comprehensive material and finishing options to support your applications. Get an instant online quote for prototype or batch production today.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  ctaSecondaryHref: "/contact",
};

export function SMHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
