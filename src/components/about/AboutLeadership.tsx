"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: {
    prefix: "Our ",
    highlight: "Leadership",
  },
  subheading: "Visionary leadership driving manufacturing innovation",
  leader: {
    name: "Luke Deng",
    title: "Founder & CEO",
    bio: "With more than 15 years of experience in precision and digital manufacturing, Luke Deng helped develop RapidDirect’s manufacturing capabilities before taking leadership of ApexBatch in 2025. He now leads ApexBatch with a focus on production engineering, automation and long-term customer partnerships.",
    quote:
      "Our mission is to bridge the gap between prototype and production, providing our clients with manufacturing confidence and technical excellence at every stage of their product journey.",
    image: "/about/apexbatch-ceo-luke-deng-profile.avif",
  },
};

export function AboutLeadership() {

  return (
    <section
      className="px-4 sm:px-6 md:px-10"
      style={{
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
        paddingTop: "clamp(40px, 8vw, 80px)",
        paddingBottom: "clamp(40px, 6vw, 60px)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2
            className="section-title"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              margin: "0 0 16px 0",
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="leadership.heading.prefix" defaultValue={DEFAULTS.heading.prefix} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="leadership.heading.highlight" defaultValue={DEFAULTS.heading.highlight} />
            </span>
          </h2>
          <p
            className="body-copy"
            style={{
              color: "#7A7A7C",
              fontSize: "18px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <EditableText path="leadership.subheading" defaultValue={DEFAULTS.subheading} />
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div
          className="flex flex-col md:flex-row"
          style={{
            gap: "clamp(30px, 5vw, 60px)",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column - Image with slanted left edge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-auto md:flex-shrink-0 mx-auto md:mx-0"
            style={{
              maxWidth: "340px",
              position: "relative",
            }}
          >
            {/* Image container with subtle slant clip */}
            <div
              style={{
                clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <EditableImage
                path="leadership.leader.profileImage"
                defaultSrc={DEFAULTS.leader.image}
                alt="Luke Deng - Founder & CEO"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
            style={{
              flex: 1,
              paddingTop: "20px",
            }}
          >
            {/* Name */}
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 600,
                margin: "0 0 8px 0",
                letterSpacing: "-0.01em",
              }}
            >
              <EditableText path="leadership.leader.name" defaultValue={DEFAULTS.leader.name} />
            </h3>

            {/* Title */}
            <p
              style={{
                color: "#D09947",
                fontSize: "15px",
                fontWeight: 500,
                margin: "0 0 24px 0",
              }}
            >
              <EditableText path="leadership.leader.title" defaultValue={DEFAULTS.leader.title} />
            </p>

            {/* Biography */}
            <p
              className="body-copy"
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 28px 0",
              }}
            >
              <EditableText path="leadership.leader.bio" defaultValue={DEFAULTS.leader.bio} multiline />
            </p>

            {/* Quote Box */}
            <div
              style={{
                position: "relative",
                background: `
                  radial-gradient(
                    60% 50% at 50% 0%,
                    rgba(249,235,188,0.08),
                    rgba(0,0,0,0) 65%
                  ),
                  #0D0D0D
                `,
                border: "1px solid rgba(208,153,71,0.25)",
                borderLeft: "3px solid #D09947",
                borderRadius: "0 18px 18px 0",
                padding: "20px 24px",
              }}
            >
              {/* Large quote mark in top-right */}
              <span
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "16px",
                  color: "#D09947",
                  fontSize: "56px",
                  fontWeight: 700,
                  lineHeight: 1,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                "
              </span>

              {/* Quote text */}
              <p
                style={{
                  color: "#D09947",
                  fontSize: "15.5px",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  margin: 0,
                  paddingRight: "40px",
                }}
              >
                "<EditableText path="leadership.leader.quote" defaultValue={DEFAULTS.leader.quote} multiline />"
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
