"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

interface ReviewCardProps {
  name: string;
  initials: string;
  location: string;
  countryCode: string;
  rating: number;
  projectType: string;
  date: string;
  quote: string;
  tags: string[];
  productImage?: string;
}

const countryFlags: Record<string, string> = {
  DE: "🇩🇪",
  US: "🇺🇸",
  UK: "🇬🇧",
  FR: "🇫🇷",
  JP: "🇯🇵",
  CN: "🇨🇳",
  CA: "🇨🇦",
  AU: "🇦🇺",
  IT: "🇮🇹",
  NL: "🇳🇱",
  KR: "🇰🇷",
  CH: "🇨🇭",
};

export function ReviewCard({
  name,
  initials,
  location,
  countryCode,
  rating,
  projectType,
  date,
  quote,
  tags,
  productImage,
}: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = quote.length > 200;
  const displayText = shouldTruncate && !isExpanded
    ? quote.slice(0, 200) + "..."
    : quote;

  return (
    <div
      className="flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#1D1D1D",
        borderRadius: "0",
        padding: "24px",
        border: "1px solid rgba(208,153,71,0.18)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
      }}
    >
      {/* Header - Avatar and Name */}
      <div className="flex items-center gap-4 mb-5">
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #D09947, #7F4D0F)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "18px" }}>{initials}</span>
        </div>
        <div>
          <h3 style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "16px" }}>{name}</h3>
          <p style={{ color: "#C5C6C9", fontSize: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
            <span>{countryFlags[countryCode] || "🌍"}</span>
            <span>{location}</span>
          </p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            style={{
              width: "18px",
              height: "18px",
              color: i < rating ? "#D09947" : "#3A3A3A",
              fill: i < rating ? "#D09947" : "transparent",
            }}
          />
        ))}
      </div>

      {/* Project Type and Date */}
      <div className="flex items-center justify-between mb-4">
        <span style={{ color: "#C5C6C9", fontSize: "14px" }}>{projectType}</span>
        <span style={{ color: "#7A7A7C", fontSize: "13px" }}>{date}</span>
      </div>

      {/* Quote */}
      <div className="flex-grow">
        <p style={{ color: "#FFFFFF", fontStyle: "italic", fontSize: "14px", lineHeight: 1.6 }}>
          &quot;{displayText}&quot;
        </p>

        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 transition-colors mt-3"
            style={{ color: "#D09947", fontSize: "14px", fontWeight: 500 }}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp style={{ width: "16px", height: "16px" }} />
              </>
            ) : (
              <>
                Read More <ChevronDown style={{ width: "16px", height: "16px" }} />
              </>
            )}
          </button>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "6px 12px",
              background: "rgba(238,197,105,0.1)",
              color: "#EEC569",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 500,
              border: "1px solid rgba(238,197,105,0.25)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Product Image */}
      {productImage && (
        <div
          className="mt-5 overflow-hidden aspect-video relative"
          style={{ borderRadius: "12px", background: "#3A3A3A" }}
        >
          <Image
            src={productImage}
            alt="Product"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Placeholder if no image */}
      {!productImage && (
        <div
          className="mt-5 aspect-video flex items-center justify-center"
          style={{ borderRadius: "12px", background: "#3A3A3A" }}
        >
          <svg
            style={{ width: "48px", height: "48px", color: "#5A5A5A" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
          </svg>
        </div>
      )}
    </div>
  );
}
