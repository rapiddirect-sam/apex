"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EditableImage, EditableText } from "@/components/cms";
import { ServiceTable } from "@/components/ui/ServiceTable";

const DEFAULTS = {
  heading: "Custom Aluminum Extrusion ",
  headingHighlight: "Profiles and Fabrication",
  profileHeading: "Custom Extrusion Profile Capabilities",
  introduction:
    "Each aluminum extrusion profile is reviewed for geometry, wall thickness, cavities, alloy, tolerances and post-processing requirements before production.",
  applications:
    "We produce solid, hollow, semi-hollow, multi-cavity and irregular custom aluminum shapes for industrial structures, enclosures, equipment components, guides, mounting systems and appearance-critical products.",
  profileImage: "/images/services/aluminum-extrusion/custom-aluminum-extrusion-profiles-production.avif",
  machiningImage: "/images/services/aluminum-extrusion/cnc-machining-aluminum-extrusion-parts.avif",
  capabilities: [
    ["Maximum profile size", "Up to 300 × 200 mm"],
    ["Maximum extrusion length", "Up to 7 m"],
    ["Minimum wall thickness", "Down to 0.8 mm"],
    ["Profile complexity", "Medium to high complexity"],
    ["Drilling and tapping", "Available"],
    ["Cut-to-length", "CNC sawing and CNC cutting"],
  ],
  fabricationLead:
    "For aluminum extrusion fabrication, profiles can be supplied as raw lengths or finished components. Our",
  fabricationTail:
    "for aluminum extrusions include drilling, tapping, end-face machining, deburring, inspection and project-specific packaging.",
  fabricationItems: [
    "Drilling",
    "Tapping",
    "End-face machining",
    "Deburring",
    "Inspection & packaging",
  ],
};

function EvidenceImage({
  path,
  src,
  alt,
}: {
  path: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
      <EditableImage
        path={path}
        defaultSrc={src}
        alt={alt}
        fill
        sizes="(max-width: 1023px) 100vw, 45vw"
        className="object-cover"
      />
    </div>
  );
}

export function EXServices() {
  return (
    <section className="relative overflow-hidden bg-[#34312F] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="service-section-title max-w-none text-left xl:whitespace-nowrap xl:text-[44px]">
            <EditableText path="profileFabrication.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText
                path="profileFabrication.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <div className="service-section-copy mt-5 max-w-[980px] space-y-4 text-left">
            <p>
              <EditableText
                path="profileFabrication.introduction"
                defaultValue={DEFAULTS.introduction}
                multiline
              />
            </p>
            <p>
              <EditableText
                path="profileFabrication.applications"
                defaultValue={DEFAULTS.applications}
                multiline
              />
            </p>
          </div>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="service-subsection-title mb-5">
              <EditableText
                path="profileFabrication.profileHeading"
                defaultValue={DEFAULTS.profileHeading}
              />
            </h3>
            <ServiceTable
              variant="compact"
              caption="Custom aluminum extrusion profile capabilities"
              columns={[
                { header: "Item", width: "46%" },
                { header: "Typical Specification" },
              ]}
              rows={DEFAULTS.capabilities.map(([capability, value], index) => [
                <EditableText
                  key="name"
                  path={`profileFabrication.capabilities.${index}.name`}
                  defaultValue={capability}
                />,
                <EditableText
                  key="value"
                  path={`profileFabrication.capabilities.${index}.value`}
                  defaultValue={value}
                />,
              ])}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <EvidenceImage
              path="profileFabrication.profileImage"
              src={DEFAULTS.profileImage}
              alt="Custom aluminum extrusion profiles during production"
            />
          </motion.div>
        </div>

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-[#D09947]/70 to-transparent lg:my-20" />

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <EvidenceImage
              path="profileFabrication.machiningImage"
              src={DEFAULTS.machiningImage}
              alt="CNC machining for custom aluminum extrusion parts"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="service-subsection-title mb-5">
              Finished Extrusion Components
            </h3>
            <p className="service-section-copy max-w-[620px]">
              <EditableText
                path="profileFabrication.fabricationLead"
                defaultValue={DEFAULTS.fabricationLead}
              />{" "}
              <Link
                href="/cnc-machining"
                className="body-text-link body-text-link--dark"
              >
                CNC machining services
              </Link>{" "}
              <EditableText
                path="profileFabrication.fabricationTail"
                defaultValue={DEFAULTS.fabricationTail}
              />
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {DEFAULTS.fabricationItems.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-[#1A1A1A] px-4 py-3 text-[14px] text-[#F0F0F0]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D09947]" />
                  <EditableText
                    path={`profileFabrication.fabricationItems.${index}`}
                    defaultValue={item}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
