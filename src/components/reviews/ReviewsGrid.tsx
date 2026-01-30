"use client";

import { useState } from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReviewCard } from "./ReviewCard";

const reviews = [
  {
    name: "Michael Jorgensen",
    initials: "MJ",
    location: "Stuttgart, Germany",
    countryCode: "DE",
    rating: 5,
    projectType: "CNC Machining Project",
    date: "Feb 2024",
    quote:
      "Apexbatch delivered 500+ titanium aerospace components with tolerances within ±0.01mm. Their engineering team provided DFM suggestions that reduced our part cost by 23%. Communication was excellent throughout the 8-week production run.",
    tags: ["Aerospace", "5-Axis CNC", "Titanium", "High Precision"],
  },
  {
    name: "Sarah Reynolds",
    initials: "SR",
    location: "Detroit, USA",
    countryCode: "US",
    rating: 5,
    projectType: "Injection Molding",
    date: "Dec 2023",
    quote:
      "Our automotive sensor housing required a complex multi cavity mold with tight tolerances. Apexbatch not only delivered the mold ahead of schedule but also provided material recommendations that improved chemical resistance. Their post-production support has been exceptional. The mold has now run over 500,000 cycles with minimal maintenance. We appreciated their transparent quoting process with clear breakdowns of mold costs versus part costs. The quality consistency across batches has been outstanding, with less than 0.1% defect rate.",
    tags: ["Automotive", "Injection Molding", "PEEK Material", "High Volume"],
  },
  {
    name: "Kenji Tanaka",
    initials: "KT",
    location: "Tokyo, Japan",
    countryCode: "JP",
    rating: 5,
    projectType: "Sheet Metal Fabrication",
    date: "Jan 2024",
    quote:
      "We needed custom enclosures for our medical monitoring equipment with strict biocompatibility requirements. Apexbatch handled the complex forming operations and surface finishing flawlessly. ISO 13485 compliance was verified.",
    tags: ["Medical", "Sheet Metal", "ISO 13485", "Biocompatible"],
  },
  {
    name: "Elena Martinez",
    initials: "EM",
    location: "Barcelona, Spain",
    countryCode: "FR",
    rating: 5,
    projectType: "Rapid Prototyping",
    date: "Nov 2023",
    quote:
      "From concept to functional prototype in just 5 days. The SLA parts were perfect for our client presentation, and the subsequent aluminum prototypes helped us validate our design before committing to tooling investment.",
    tags: ["Rapid Prototyping", "SLA", "Aluminum", "Consumer Electronics"],
  },
  {
    name: "Thomas Weber",
    initials: "TW",
    location: "Zurich, Switzerland",
    countryCode: "CH",
    rating: 5,
    projectType: "Precision Machining",
    date: "Oct 2023",
    quote:
      "Our watch components require mirror finishes and micron-level precision. Apexbatch exceeded our expectations with their Swiss-style machining capabilities. The surface finish quality rivals traditional Swiss manufacturers.",
    tags: ["Luxury Goods", "Swiss Machining", "Mirror Finish", "Micro Parts"],
  },
  {
    name: "David Chen",
    initials: "DC",
    location: "Vancouver, Canada",
    countryCode: "CA",
    rating: 5,
    projectType: "Die Casting",
    date: "Sep 2023",
    quote:
      "We transitioned from CNC to die casting for our drone frame components. Apexbatch managed the tooling design and helped us achieve 40% cost reduction while maintaining structural integrity. Production volumes of 10,000+ units per month.",
    tags: ["Aerospace", "Die Casting", "Aluminum Alloy", "High Volume"],
  },
  {
    name: "Anna Kowalski",
    initials: "AK",
    location: "Warsaw, Poland",
    countryCode: "NL",
    rating: 5,
    projectType: "CNC Machining",
    date: "Aug 2023",
    quote:
      "Complex 5-axis machined parts for our robotics applications. The dimensional accuracy and repeatability across 200+ parts was impressive. Their quality reports are thorough and professional.",
    tags: ["Robotics", "5-Axis CNC", "Stainless Steel", "Complex Geometry"],
  },
  {
    name: "James Mitchell",
    initials: "JM",
    location: "Melbourne, Australia",
    countryCode: "AU",
    rating: 5,
    projectType: "Injection Molding",
    date: "Jul 2023",
    quote:
      "Medical-grade silicone components for our diagnostic devices. Apexbatch understood our regulatory requirements from day one. Clean room production and full traceability documentation provided.",
    tags: ["Medical", "Silicone Molding", "Clean Room", "FDA Compliant"],
  },
];

export function ReviewsGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, reviews.length));
  };

  const hasMore = visibleCount < reviews.length;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "64px 0 80px",
        background: "#3E3E3E",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{
            fontSize: "46px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.015em",
            marginBottom: "48px",
          }}
        >
          Client <span style={{ color: "#EEC569" }}>Feedback</span> & Project Reviews
        </motion.h2>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={showMore}
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: "14px 28px",
                background: "#4A4A48",
                color: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid rgba(208,153,71,0.25)",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              <Image
                src={getImageUrl("reviews/lsicon_move-down-filled.png")}
                alt=""
                width={24}
                height={24}
              />
              Show all comments
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
