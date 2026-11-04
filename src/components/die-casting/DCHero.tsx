"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Die Casting Services",
  description:
    "As a leading die casting manufacturer based in China, we deliver high-quality die casting parts with short lead times. From high pressure die casting to gravity die casting, we turn your concepts into near-net-shape components.",
  heroImage: "/die-casting/custom-die-cast-threaded-housings.avif",
  ctaSecondaryHref: "/contact",
  metrics: [
    { value: "Free DFM Feedback", label: "Optimize your design before production" },
    { value: "\u00B10.005 mm", label: "Applicable Precision Features" },
    { value: "100+ Materials Available", label: "Metals & plastics supported" },
    { value: "98% On-Time Delivery", label: "Reliable global fulfillment" },
  ],
};

export function DCHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
