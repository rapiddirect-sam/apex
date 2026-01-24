"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Leon Huang",
    title: "Founder & CEO",
    bio1: "With over 15 years of experience in precision manufacturing and digital fabrication, Leon Huang founded Rapid Direct in 2015 with a vision to revolutionize the prototyping industry.",
    bio2: "Recognizing the growing need for specialized batch production services, he established ApexBatch in 2025 to focus exclusively on high-precision, medium-to-large batch manufacturing for discerning global clients.",
    quote:
      "Our mission is to bridge the gap between prototype and production, providing our clients with manufacturing confidence and technical excellence at every stage of their product journey.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Sarah Chen",
    title: "Chief Operations Officer",
    bio1: "Sarah brings 12 years of operations excellence from leading global manufacturing firms, specializing in lean manufacturing and supply chain optimization.",
    bio2: "Her expertise in process engineering has been instrumental in achieving our ISO certifications and maintaining 99.8% on-time delivery rates.",
    quote:
      "Excellence in manufacturing comes from relentless attention to detail and a commitment to continuous improvement at every level of the organization.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    name: "Michael Zhang",
    title: "Chief Technology Officer",
    bio1: "With a PhD in Materials Science and 10 years in precision engineering, Michael leads our technical innovation and quality control systems.",
    bio2: "He oversees the development of our proprietary inspection protocols and ensures our manufacturing processes meet the highest industry standards.",
    quote:
      "Technology is the enabler, but precision is the result of disciplined engineering and uncompromising quality standards.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
  {
    name: "Emily Wang",
    title: "VP of Client Success",
    bio1: "Emily has spent 8 years building relationships with enterprise clients across aerospace, medical, and automotive industries.",
    bio2: "Her deep understanding of client needs drives our customer-centric approach and ensures seamless project delivery from quote to shipment.",
    quote:
      "Every client relationship is built on trust, transparency, and delivering results that exceed expectations.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  },
];

export function AboutLeadership() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentLeader = leaders[currentSlide];

  return (
    <section
      style={{
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
        padding: "80px 40px 60px 40px",
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
            className="text-white"
            style={{
              fontSize: "48px",
              fontWeight: 700,
              margin: "0 0 16px 0",
              letterSpacing: "-0.015em",
            }}
          >
            Our <span style={{ color: "#EEC569" }}>Leadership</span>
          </h2>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "28px",
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Visionary leadership driving manufacturing innovation
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column - Image with slanted left edge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              flex: "0 0 340px",
              position: "relative",
            }}
          >
            {/* Gold border on left edge */}
            <div
              style={{
                position: "absolute",
                left: "-3px",
                top: "20px",
                bottom: "20px",
                width: "3px",
                backgroundColor: "#D09947",
              }}
            />
            {/* Image container with subtle slant clip */}
            <div
              style={{
                clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <img
                src={currentLeader.image}
                alt={`${currentLeader.name} - ${currentLeader.title}`}
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
            style={{
              flex: 1,
              paddingTop: "20px",
            }}
          >
            {/* Name */}
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "36px",
                fontWeight: 600,
                margin: "0 0 8px 0",
                letterSpacing: "-0.01em",
              }}
            >
              {currentLeader.name}
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
              {currentLeader.title}
            </p>

            {/* Bio Paragraph 1 */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 16px 0",
              }}
            >
              {currentLeader.bio1}
            </p>

            {/* Bio Paragraph 2 */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 28px 0",
              }}
            >
              {currentLeader.bio2}
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
                  fontFamily: "Georgia, serif",
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
                "{currentLeader.quote}"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "50px",
          }}
        >
          {leaders.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: index === currentSlide ? "#D09947" : "#333333",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
