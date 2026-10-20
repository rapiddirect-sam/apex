"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "/contact/apexbatch-contact-office-reception-hero.avif",
  pillLabel: "GET IN TOUCH",
  eyebrow: "ApexBatch is the answer to your challenge",
  headingPrefix: "Get in Touch with ",
  headingHighlight: "ApexBatch",
  subheadline:
    "Let's bring your project to life. Whether you're moving from prototype to batch production or need a high-precision manufacturing partner, our engineering team is ready.",
};

export function ContactHero() {
  return (
    <section
      className="relative pt-20"
      style={{
        minHeight: "380px",
        background: "#000000",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{ overflow: "hidden" }}
      >
        <EditableImage
          className="contact-hero-background"
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="ApexBatch office reception and brand wall"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .contact-hero-background {
            object-position: 78% 42% !important;
          }
        }
      `}</style>

      {/* Multi-layer cinematic overlay - matching home3 */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-52 pb-16 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "900px" }}
        >
          {/* Pill Label */}
          <div className="mb-6">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                border: "1px solid #7F4D0F",
                backgroundColor: "transparent",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#D09947",
                }}
              />
              <span
                style={{
                  color: "#EEC569",
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                <EditableText
                  path="hero.pillLabel"
                  defaultValue={DEFAULTS.pillLabel}
                />
              </span>
            </div>
          </div>

          {/* Eyebrow - GOLD COLOR */}
          <p
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#EEC569",
              marginBottom: "16px",
            }}
          >
            <EditableText
              path="hero.eyebrow"
              defaultValue={DEFAULTS.eyebrow}
            />
          </p>

          {/* Main Heading - LARGER, ApexBatch ITALIC */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            <EditableText
              path="hero.headingPrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />{" "}
            <span style={{ color: "#EEC569" }}>
              <EditableText
                path="hero.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="body-copy max-w-full">
            <EditableText
              path="hero.subheadline"
              defaultValue={DEFAULTS.subheadline}
              multiline
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
