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
        padding: "35px 20% 80px 20%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Starfield particles effect - concentrated top-left */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "50%",
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(238,197,105,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative particles */}
      {particles.map((particle, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: particle.width + "px",
            height: particle.height + "px",
            backgroundColor: particle.color,
            borderRadius: "50%",
            top: particle.top + "%",
            left: particle.left + "%",
            opacity: particle.opacity,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Bottom orbital rings decoration */}
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "250%",
          height: "300px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(208,153,71,0.25)",
            borderRadius: "50%",
            transform: "rotateX(85deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "80%",
            height: "80%",
            left: "10%",
            top: "10%",
            border: "1px solid rgba(208,153,71,0.15)",
            borderRadius: "50%",
            transform: "rotateX(85deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "60%",
            height: "60%",
            left: "20%",
            top: "20%",
            border: "1px solid rgba(208,153,71,0.1)",
            borderRadius: "50%",
            transform: "rotateX(85deg)",
          }}
        />
      </div>

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
              left: "57%",
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
            <div style={{ width: "57%" }} />

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "57%",
                top: "5px",
                width: "9px",
                height: "9px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
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
                width: "57%",
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
                    color: "#E8E8E8",
                    fontSize: "18px",
                    lineHeight: 1.5,
                  }}
                >
                  Global expansion. Officially launched international trade
                  business,supporting engineers worldwide.
                </div>
              </div>
            </div>

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "57%",
                top: "5px",
                width: "9px",
                height: "9px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
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
            <div style={{ width: "57%" }} />

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "57%",
                top: "5px",
                width: "9px",
                height: "9px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
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
                width: "57%",
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
                    color: "#E8E8E8",
                    fontSize: "18px",
                    lineHeight: 1.5,
                  }}
                >
                  Achieved ISO 9001:2015 and ISO 13485:2016 certifications.The
                  manufacturing network expanded to include exclusive surface
                  treatment lines and medical-grade inspection labs.
                </div>
              </div>
            </div>

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "57%",
                top: "5px",
                width: "9px",
                height: "9px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
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
                left: "57%",
                top: "0",
                width: "11px",
                height: "11px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
              }}
            />

            <div
              style={{
                color: "#EEC569",
                fontSize: "52px",
                fontWeight: 700,
                marginTop: "25px",
                marginLeft: "57%",
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
          className="transition-all duration-300 hover:-translate-y-1"
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
            borderRadius: "18px",
            padding: "26px 32px",
            textAlign: "center",
            marginTop: "25px",
            marginLeft: "10%",
            marginRight: "10%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "2px solid #D09947";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "1px solid rgba(208,153,71,0.25)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "28px",
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
