"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "Common Applications for ",
  headingHighlight: "Sheet Metal Bending",
  description:
    "Custom sheet metal bending is widely used when a part needs stiffness, enclosure volume, mounting features, or a practical assembly interface.",
  applications: [
    "Equipment brackets, mounting plates, and supports",
    "Electrical enclosures, control boxes, and cabinets",
    "Chassis, trays, covers, and machine guards",
    "U-channels, Z-profiles, and return-flange panels",
    "Server, communications, and industrial equipment housings",
    "Retail fixtures, display components, and fabricated frames",
    "Parts that require PEM hardware, welding, finishing, or final assembly",
  ],
};

export function BendingApplications() {
  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-left lg:text-center"
        >
          <h2 className="service-section-title text-white">
            <EditableText path="bendingApplications.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent">
              <EditableText path="bendingApplications.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p className="service-section-copy section-reading-copy mt-6 text-left lg:text-center">
            <EditableText
              path="bendingApplications.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DEFAULTS.applications.map((application, index) => {
            const isIntegratedSupport = index === DEFAULTS.applications.length - 1;

            return (
              <motion.article
                key={application}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex min-h-[132px] items-center gap-5 border border-white/10 bg-[#34312F] px-6 py-6 md:px-7 ${
                  isIntegratedSupport ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <span className="shrink-0 text-xs font-semibold tracking-[0.14em] text-[#EEC569]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="service-section-copy font-medium">
                  <EditableText
                    path={`bendingApplications.applications.${index}`}
                    defaultValue={application}
                    multiline
                  />
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
