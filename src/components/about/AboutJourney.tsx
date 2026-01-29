"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function AboutJourney() {
  // Generate particles once on mount
  const particles = useMemo(() => {
    return [...Array(60)].map((_, i) => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "#EEC569" : "#FFFFFF",
      top: Math.random() * 50,
      left: Math.random() * 40,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#000000",
        backgroundImage: "url('/about/journey-bg.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        padding: "80px 20% 80px 20%",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white"
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: 700,
            margin: "0 0 50px 0",
            letterSpacing: "-0.015em",
          }}
        >
          A Journey of <span style={{ color: "#EEC569" }}>Continuous Excellence</span>
        </motion.h2>

        {/* Timeline container */}
        <div
          style={{
            position: "relative",
          }}
        >
          {/* Vertical timeline line - offset to 57% from left */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "5px",
              bottom: "80px",
              width: "1px",
              backgroundColor: "#5A5A5A",
            }}
          />

          {/* 2009 - Right side of line, left-aligned text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "40px",
              display: "flex",
            }}
          >
            {/* Left spacer */}
            <div style={{ width: "50%" }} />

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "5px",
                width: "9px",
                height: "9px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 12px rgba(238,197,105,0.8), 0 0 24px rgba(238,197,105,0.4)",
              }}
            />

            {/* Content - right side */}
            <div style={{ paddingLeft: "30px", maxWidth: "336px" }}>
              <div
                style={{
                  color: "#EEC569",
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "5px",
                }}
              >
                2009
              </div>
              <div
                style={{
                  color: "#C5C6C9",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                }}
              >
                Established the first self-owned factory in Shenzhen, building
                the bedrock of our manufacturing capabilities
              </div>
            </div>
          </motion.div>

          {/* 2014 - Left side of line, right-aligned text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "40px",
              display: "flex",
            }}
          >
            {/* Content - left side */}
            <div
              style={{
                width: "50%",
                paddingRight: "30px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ maxWidth: "336px", textAlign: "right" }}>
                <div
                  style={{
                    color: "#EEC569",
                    fontSize: "28px",
                    fontWeight: 600,
                    marginBottom: "5px",
                  }}
                >
                  2014
                </div>
                <div
                  style={{
                    color: "#C5C6C9",
                    fontSize: "15.5px",
                    lineHeight: 1.7,
                  }}
                >
                  Global expansion. Officially launched international trade
                  business, supporting engineers worldwide.
                </div>
              </div>
            </div>

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "5px",
                width: "9px",
                height: "9px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 12px rgba(238,197,105,0.8), 0 0 24px rgba(238,197,105,0.4)",
              }}
            />
          </motion.div>

          {/* 2019 - Right side of line, left-aligned text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "40px",
              display: "flex",
            }}
          >
            {/* Left spacer */}
            <div style={{ width: "50%" }} />

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "5px",
                width: "9px",
                height: "9px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 12px rgba(238,197,105,0.8), 0 0 24px rgba(238,197,105,0.4)",
              }}
            />

            {/* Content - right side */}
            <div style={{ paddingLeft: "30px", maxWidth: "336px" }}>
              <div
                style={{
                  color: "#EEC569",
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "5px",
                }}
              >
                2019
              </div>
              <div
                style={{
                  color: "#C5C6C9",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                }}
              >
                Launched the RapidDirect online quoting platform, integrating AI
                into the manufacturing workflow.
              </div>
            </div>
          </motion.div>

          {/* 2020-2022 - Left side of line, right-aligned text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "40px",
              display: "flex",
            }}
          >
            {/* Content - left side */}
            <div
              style={{
                width: "50%",
                paddingRight: "30px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ maxWidth: "336px", textAlign: "right" }}>
                <div
                  style={{
                    color: "#EEC569",
                    fontSize: "28px",
                    fontWeight: 600,
                    marginBottom: "5px",
                  }}
                >
                  2020-2022
                </div>
                <div
                  style={{
                    color: "#C5C6C9",
                    fontSize: "15.5px",
                    lineHeight: 1.7,
                  }}
                >
                  Achieved ISO 9001:2015 and ISO 13485:2016 certifications. The
                  manufacturing network expanded to include exclusive surface
                  treatment lines and medical-grade inspection labs.
                </div>
              </div>
            </div>

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "5px",
                width: "9px",
                height: "9px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 12px rgba(238,197,105,0.8), 0 0 24px rgba(238,197,105,0.4)",
              }}
            />
          </motion.div>

          {/* 2025 - Centered below the last dot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "25px",
            }}
          >
            {/* Dot - at end of line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                width: "11px",
                height: "11px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 15px rgba(238,197,105,0.8), 0 0 30px rgba(238,197,105,0.4)",
              }}
            />

            <div
              style={{
                color: "#EEC569",
                fontSize: "52px",
                fontWeight: 700,
                marginTop: "25px",
                marginLeft: "50%",
                transform: "translateX(-50%)",
                display: "inline-block",
              }}
            >
              2025
            </div>
          </motion.div>
        </div>

        {/* Bottom card - glass effect with warm tint and glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            background: `
              radial-gradient(
                60% 50% at 50% 0%,
                rgba(249,235,188,0.05),
                rgba(0,0,0,0) 65%
              ),
              rgba(13, 13, 13, 0.3)
            `,
            border: "2px solid #D09947",
            borderRadius: "18px",
            padding: "26px 32px",
            textAlign: "center",
            marginTop: "25px",
            marginLeft: "20%",
            marginRight: "20%",
            boxShadow: "0 0 50px rgba(208,153,71,0.6), 0 0 100px rgba(208,153,71,0.3)",
          }}
        >
          <p
            style={{
              color: "#F9EBBC",
              fontSize: "22px",
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 500,
            }}
          >
            ApexBatch Brand Established A dedicated division is born. ApexBatch
            focuses on high-precision parts and turnkey solutions for
            mid-to-large volume production, offering a higher level of
            specialization for elite global industries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
