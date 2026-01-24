"use client";

import { motion } from "framer-motion";

const departments = [
  {
    number: "01",
    title: "Surface Treatment Department",
    description:
      "Dedicated surface finishing team providing anodizing, bead blasting, plating, powder coating and various surface treatment processes to meet aesthetic and functional requirements.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
  },
  {
    number: "02",
    title: "Quality Inspection Department",
    description:
      "Independent QC team equipped with advanced inspection equipment, implementing full-process quality control from raw materials to finished products.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    number: "03",
    title: "Manual & Assembly Department",
    description:
      "Experienced manual team handling precision part deburring, finishing, assembly, and packaging to ensure perfect product delivery.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    number: "04",
    title: "CNC Machining Department",
    description:
      "50+ multi-axis CNC machines ranging from 3-axis to 5-axis capabilities, handling complex geometries with high precision.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
  },
  {
    number: "05",
    title: "Injection Molding Department",
    description:
      "Specializing in medium-to-large batch injection molding with machines ranging from 50 to 450 tons for various volume and material requirements.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
  {
    number: "06",
    title: "Project Management\n& Engineering",
    description:
      "Dedicated project management and engineering support team providing professional guidance from design optimization to volume production.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

export function AboutTeamStructure() {
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
        padding: "80px 40px",
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
            marginBottom: "60px",
          }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "48px",
              fontWeight: 700,
              margin: "0 0 20px 0",
              letterSpacing: "-0.015em",
            }}
          >
            Specialized Team <span style={{ color: "#EEC569" }}>Structure</span>
          </h2>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "28px",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              fontWeight: 500,
            }}
          >
            Professional departmental ensures every production phase meets the
            highest standards, with cross-department collaboration delivering one-stop manufacturing solutions
          </p>
        </motion.div>

        {/* Cards Grid - 3 columns x 2 rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px 28px",
            rowGap: "45px",
          }}
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="team-card transition-all duration-300 hover:-translate-y-1"
              style={{
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
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
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
              {/* Image with number overlay */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={dept.image}
                  alt={dept.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Large number overlay */}
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "16px",
                    fontSize: "90px",
                    fontWeight: 700,
                    color: "rgba(208,153,71,0.35)",
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {dept.number}
                </span>
              </div>

              {/* Divider line between image and text */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: "rgba(208,153,71,0.3)",
                }}
              />

              {/* Text content */}
              <div
                style={{
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    color: "#EEC569",
                    fontSize: "18px",
                    fontWeight: 700,
                    margin: "0 0 12px 0",
                    lineHeight: 1.3,
                    whiteSpace: "pre-line",
                  }}
                >
                  {dept.title}
                </h3>
                <p
                  style={{
                    color: "#C5C6C9",
                    fontSize: "15.5px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {dept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
