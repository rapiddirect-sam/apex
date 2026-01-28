"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function QualityCertifications() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0",
        background: `
          radial-gradient(
            70% 50% at 50% 50%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #4A4A48
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontSize: "46px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            Quality <span style={{ color: "#EEC569" }}>Certifications</span>
          </h2>
          <p
            style={{
              color: "#C5C6C9",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "720px",
              margin: "16px auto 0",
            }}
          >
            Our Certified systems ensure consistent quality, compliance, and traceability throughout production.
          </p>
        </motion.div>

        {/* Certifications Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-3xl">
            <Image
              src="/quality/qc-certifications.png"
              alt="Quality Certifications - ISO 9001, ISO 13485, ISO 14001"
              width={772}
              height={351}
              className="w-full h-auto"
              style={{ borderRadius: "18px" }}
            />
          </div>
        </motion.div>

        {/* Certification badges text */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "ISO 9001:2015",
              description: "Quality Management System certified for consistent product quality and customer satisfaction",
            },
            {
              title: "ISO 13485:2016",
              description: "Medical Device Quality Management System for healthcare industry compliance",
            },
            {
              title: "ISO 14001:2015",
              description: "Environmental Management System demonstrating our commitment to sustainability",
            },
          ].map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#D09947",
                  marginBottom: "8px",
                }}
              >
                {cert.title}
              </h3>
              <p style={{ color: "#C5C6C9", fontSize: "14px", lineHeight: 1.6 }}>
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
