"use client";

import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: {
    prefix: "A Journey of ",
    highlight: "Continuous Excellence",
  },
  timelineItems: [
    {
      year: "2009",
      description:
        "Manufacturing operations began in Shenzhen, marking the start of the organization’s manufacturing heritage.",
      side: "right" as const,
    },
    {
      year: "2014",
      description:
        "Self-owned manufacturing facilities were established in Shenzhen, expanding production capacity and international customer support.",
      side: "left" as const,
    },
    {
      year: "2019",
      description:
        "RapidDirect, ApexBatch’s parent company, launched its online manufacturing platform to provide digital quoting and manufacturing support for customers worldwide.",
      side: "right" as const,
    },
    {
      year: "2022",
      description:
        "Medical-device manufacturing and quality-management capabilities continued to expand within the organization.",
      side: "left" as const,
    },
  ],
  finalEntry: {
    year: "2025",
    description:
      "ApexBatch was established as a dedicated manufacturing business focused on batch manufacturing, repeat production and long-term industrial supply.",
  },
};

function TimelineMarker({ final = false }: { final?: boolean }) {
  return (
    <span
      className={
        final
          ? "left-4 top-[5px] md:left-1/2"
          : "left-4 top-[8px] md:left-1/2 md:top-[10px]"
      }
      style={{
        position: "absolute",
        width: final ? "11px" : "9px",
        height: final ? "11px" : "9px",
        backgroundColor: "#EEC569",
        borderRadius: "50%",
        transform: "translateX(-50%)",
        boxShadow: final
          ? "0 0 15px rgba(238,197,105,0.8), 0 0 30px rgba(238,197,105,0.4)"
          : "0 0 12px rgba(238,197,105,0.8), 0 0 24px rgba(238,197,105,0.4)",
      }}
    />
  );
}

function TimelineEntry({
  index,
  item,
}: {
  index: number;
  item: (typeof DEFAULTS.timelineItems)[number];
}) {
  return (
    <>
      <div className="pl-10 md:hidden">
        <time
          className="block text-[22px] font-semibold leading-none tracking-[-0.02em] text-[#EEC569] md:text-[28px]"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          <EditableText
            path={`journey.entries.${index}.year`}
            defaultValue={item.year}
          />
        </time>
        <p className="body-copy mt-3">
          <EditableText
            path={`journey.entries.${index}.description`}
            defaultValue={item.description}
            multiline
          />
        </p>
      </div>

      <div
        className="hidden md:flex"
        style={{
          justifyContent: item.side === "left" ? "flex-start" : "flex-end",
        }}
      >
        <div
          style={{
            width: "50%",
            paddingLeft: item.side === "right" ? "30px" : "0",
            paddingRight: item.side === "left" ? "30px" : "0",
            textAlign: item.side === "left" ? "right" : "left",
          }}
        >
          <time
            style={{
              display: "block",
              color: "#EEC569",
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            <EditableText
              path={`journey.entries.${index}.year`}
              defaultValue={item.year}
            />
          </time>
          <p
            className="body-copy"
            style={{
              color: "#C5C6C9",
              fontSize: "15.5px",
              lineHeight: 1.7,
              margin: "12px 0 0",
            }}
          >
            <EditableText
              path={`journey.entries.${index}.description`}
              defaultValue={item.description}
              multiline
            />
          </p>
        </div>
      </div>
    </>
  );
}

export function AboutJourney() {
  return (
    <section
      className="px-4 sm:px-6 md:px-[10%] lg:px-[20%]"
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url('${getImageUrl("about/journey-bg.png")}')`,
        backgroundSize: "100% auto",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        paddingTop: "clamp(40px, 8vw, 80px)",
        paddingBottom: "clamp(40px, 8vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            margin: "0 0 clamp(30px, 5vw, 50px) 0",
            letterSpacing: "-0.015em",
          }}
        >
          <EditableText
            path="journey.heading.prefix"
            defaultValue={DEFAULTS.heading.prefix}
          />
          <span style={{ color: "#EEC569" }}>
            <EditableText
              path="journey.heading.highlight"
              defaultValue={DEFAULTS.heading.highlight}
            />
          </span>
        </motion.h2>

        <div style={{ position: "relative" }}>
          {DEFAULTS.timelineItems.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, x: item.side === "right" ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-10"
            >
              <span
                aria-hidden="true"
                className="absolute left-4 top-[12px] -bottom-[50px] w-px bg-[#5A5A5A] md:left-1/2"
              />
              <TimelineMarker />
              <TimelineEntry index={index} item={item} />
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
            style={{ paddingTop: "clamp(42px, 5vw, 58px)" }}
          >
            <TimelineMarker final />
            <div className="pl-10 md:pl-0 md:text-center">
              <time
                className="block text-[clamp(36px,6vw,52px)] font-bold leading-none tracking-[-0.02em] text-[#EEC569]"
                style={{
                  fontVariantNumeric: "tabular-nums",
                  marginTop: 0,
                }}
              >
                <EditableText
                  path="journey.finalEntry.year"
                  defaultValue={DEFAULTS.finalEntry.year}
                />
              </time>
            </div>
            <div
              style={{
                position: "relative",
                background:
                  "radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.05), rgba(0,0,0,0) 65%), rgba(13, 13, 13, 0.3)",
                border: "2px solid #D09947",
                borderRadius: "18px",
                padding: "clamp(16px, 3vw, 26px) clamp(16px, 4vw, 32px)",
                textAlign: "center",
                marginTop: "25px",
                boxShadow:
                  "0 0 50px rgba(208,153,71,0.6), 0 0 100px rgba(208,153,71,0.3)",
              }}
            >
              <p
                style={{
                  color: "#F9EBBC",
                  fontSize: "clamp(16px, 3vw, 22px)",
                  lineHeight: 1.5,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                <EditableText
                  path="journey.finalEntry.description"
                  defaultValue={DEFAULTS.finalEntry.description}
                  multiline
                />
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
