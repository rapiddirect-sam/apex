"use client";

import { motion } from "framer-motion";

export function AboutCapabilities() {
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
        padding: "80px 40px 80px 40px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
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
            margin: "0 0 24px 0",
            letterSpacing: "-0.015em",
          }}
        >
          Professional <span style={{ color: "#EEC569" }}>Capabilities</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "28px",
            lineHeight: 1.5,
            margin: "0 auto 50px auto",
            maxWidth: "800px",
            fontWeight: 500,
          }}
        >
          ApexBatch is a specialized manufacturing subsidiary of Rapid Direct,
          focusing on medium-to-large batch production for global clients
          requiring high-precision components and assemblies.
        </motion.p>

        {/* Two image cards */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              height: "320px",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.25)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
              alt="Precision Technology"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                padding: "40px 20px 20px",
              }}
            >
              <span
                style={{
                  color: "#EEC569",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                PRECISION TECHNOLOGY
              </span>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              flex: 1,
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              height: "320px",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.25)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Advanced Manufacturing"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                padding: "40px 20px 20px",
              }}
            >
              <span
                style={{
                  color: "#EEC569",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                ADVANCED MANUFACTURING
              </span>
            </div>
          </motion.div>
        </div>

        {/* Two content cards */}
        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          {/* Left card - Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              flex: 1,
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
              padding: "32px",
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
            <h3
              style={{
                color: "#EEC569",
                fontSize: "28px",
                fontWeight: 700,
                margin: "0 0 20px 0",
              }}
            >
              Who We Are
            </h3>

            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 16px 0",
              }}
            >
              Building upon Rapid Direct&apos;s 11-year foundation in rapid
              prototyping, ApexBatch specializes in batch production and
              high-precision manufacturing solutions, ensuring reliable
              transition from prototype to volume production.
            </p>

            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 24px 0",
              }}
            >
              Our advanced facilities in Shenzhen combine localized
              manufacturing excellence with international standards to serve
              demanding industries worldwide.
            </p>

            {/* List items */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    SPECIALIZED INDUSTRIES
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    Aerospace, Medical Devices, Automotive, Premium Consumer
                    Electronics
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    BATCH RANGE
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    100-10,000 units medium-to-large batch production
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    PRECISION STANDARDS
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    Tolerance control up to +/-0.005mm
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    MATERIAL PORTFOLIO
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    300+ material options including metals, engineering plastics,
                    and special alloys
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right card - Core Manufacturing Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              flex: 1,
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
              padding: "32px",
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
            <h3
              style={{
                color: "#EEC569",
                fontSize: "28px",
                fontWeight: 700,
                margin: "0 0 20px 0",
              }}
            >
              Core Manufacturing Capabilities
            </h3>

            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 24px 0",
              }}
            >
              As a dedicated division, we elevate manufacturing partnerships
              through enhanced engineering support, dedicated project
              management, and tailored solutions.
            </p>

            {/* List items */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    5-AXIS CNC MACHINING
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    Complex geometry with high precision
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    PRECISION INJECTION MOLDING
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    Medium-to-large batch solutions
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    SHEET METAL FABRICATION
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    Prototype to production
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    SURFACE TREATMENT
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    Anodizing, powder coating, plating, etc.
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "3px",
                    backgroundColor: "#D09947",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    QUALITY ASSURANCE
                  </div>
                  <div
                    style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    Comprehensive quality control systems
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
