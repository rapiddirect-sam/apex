"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Die Casting Services",
  description:
    "As a leading die casting manufacturer based in China, we deliver high-quality die casting parts with short lead times. From high pressure die casting to gravity die casting, we turn your concepts into near-net-shape components.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
};

export function DCHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
