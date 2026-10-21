"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

interface ProcessRow {
  name: string;
  characteristics: string;
  colorOption: string;
  roughness: string;
  image: string;
  imageContentPath?: string;
}

const PROCESSES: ProcessRow[] = [
  {
    name: "As-Machined Surface Finish",
    characteristics: "Retains machining lines with deburring and edge breaking only",
    colorOption: "Base material color",
    roughness: "Standard Ra 3.2; optional Ra 1.6 or Ra 0.4",
    image: "/images/surface-finishing/base-preparation/surface-finishing-as-machined.webp",
  },
  {
    name: "Sand Blasting",
    characteristics: "Uniform matte or frosted texture; cleans the surface and can improve coating adhesion",
    colorOption: "Retains base material color",
    roughness: "Standard Ra 3.2; influenced by media grit",
    image: "/images/surface-finishing/base-preparation/surface-finishing-sand-blasting.webp",
  },
  {
    name: "Brushing",
    characteristics: "Clear, unidirectional texture with a refined matte appearance",
    colorOption: "Enhances the base material color",
    roughness: "Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/base-preparation/surface-finishing-brushing.webp",
  },
  {
    name: "Mechanical Polishing",
    characteristics: "Removes burrs, tool marks and oxide for a more uniform matte surface",
    colorOption: "Base material color",
    roughness: "Ra 0.4-Ra 3.2, depending on the process",
    image: "/images/surface-finishing/base-preparation/surface-finishing-mechanical-polishing.webp",
  },
  {
    name: "Mirror / High-Gloss Polishing",
    characteristics: "Can range from smooth matte to mirror-like; reduces visible machining marks",
    colorOption: "Enhances natural gloss and reflectivity",
    roughness: "Custom: Ra 1.6, Ra 0.8 or Ra 0.4 for mirror finishes",
    image: "/images/surface-finishing/base-preparation/surface-finishing-mirror-polishing.webp",
  },
  {
    name: "Electropolishing",
    characteristics: "Produces a smoother, brighter surface; can reduce micro-burrs and improve corrosion resistance",
    colorOption: "Enhances metallic luster",
    roughness: "Up to Ra 0.8 or finer",
    image: "/images/surface-finishing/base-preparation/surface-finishing-electropolishing.webp",
  },
  {
    name: "Vapour Polishing",
    characteristics: "Glass-like, clear, high-gloss result for suitable plastic parts",
    colorOption: "Natural",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2",
    image: "/images/surface-finishing/base-preparation/surface-finishing-vapour-polishing.webp",
  },
];

const ALUMINUM_PROTECTION_PROCESSES: ProcessRow[] = [
  {
    name: "Anodizing, Type II",
    characteristics: "Corrosion-resistant oxide film with matte, semi-gloss or gloss appearance",
    colorOption: "Natural, black, red, blue, green and other project-reviewed colors",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/aluminum-protection/surface-finishing-type-ii-anodizing.webp",
  },
  {
    name: "Hard Anodizing, Type III",
    characteristics: "Thick, hard, ceramic-like oxide layer with wear and heat resistance",
    colorOption: "Typically dark gray, black or sealed natural",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/aluminum-protection/surface-finishing-type-iii-hard-anodizing.webp",
  },
  {
    name: "Microarc Oxidation, MAO",
    characteristics: "Thick, hard, porous ceramic oxide with insulating, heat- and wear-resistant characteristics",
    colorOption: "Colorable, subject to project review",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/aluminum-protection/surface-finishing-microarc-oxidation.webp",
  },
  {
    name: "Alodine / Chromate Conversion Coating",
    characteristics: "Thin conversion film for corrosion resistance, electrical contact or paint preparation.",
    colorOption: "Clear/natural or custom colors",
    roughness: "Ra 3.2, 1.6, 0.8 or 0.4; polished; or per 2D drawing.",
    image: "/images/surface-finishing/aluminum-protection/surface-finishing-alodine-chromate-conversion.webp",
  },
  {
    name: "Passivation",
    characteristics: "Chemical treatment for suitable stainless-steel parts that supports corrosion resistance.",
    colorOption: "Natural/base material color",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/aluminum-protection/surface-finishing-stainless-steel-passivation.webp",
  },
];

const PLATING_TREATMENT_PROCESSES: ProcessRow[] = [
  {
    name: "Electroplating",
    characteristics: "Uniform metallic coating with adjustable matte or bright appearance",
    colorOption: "Selected color zinc and black zinc options; fixed gold or silver finishes where applicable",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/plating-treatments/electroplating-surface-finishing-service.webp",
  },
  {
    name: "Decorative Chrome Plating",
    characteristics: "Highly reflective mirror or semi-bright silver appearance with durable, wear-resistant characteristics",
    colorOption: "Standard silver mirror",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/plating-treatments/surface-finishing-decorative-chrome-plating.webp",
  },
  {
    name: "Electrophoresis",
    characteristics: "Uniform, corrosion-resistant organic coating in matte, semi-gloss or gloss finishes",
    colorOption: "Black, white and project-reviewed custom colors",
    roughness: "Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/plating-treatments/surface-finishing-electrophoresis.webp",
  },
  {
    name: "Blackening / Phosphating",
    characteristics: "Black or dark-gray conversion finish; can support corrosion protection and coating adhesion",
    colorOption: "Blackening: black; phosphating: natural color",
    roughness: "Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/plating-treatments/surface-finishing-blackening-phosphating.webp",
  },
  {
    name: "QPQ",
    characteristics: "Matte-black surface with high hardness, wear resistance and corrosion resistance",
    colorOption: "Standard matte black",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/plating-treatments/surface-finishing-qpq-quench-polish-quench.webp",
  },
  {
    name: "Heat Treatment",
    characteristics: "Improves hardness, strength and wear performance; oxidation may occur except with appropriate bright or vacuum routes",
    colorOption: "No decorative color; natural or oxidized appearance",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/plating-treatments/surface-finishing-heat-treatment.webp",
  },
  {
    name: "Electroless Nickel Immersion Gold (ENIG)",
    characteristics: "Smooth, solderable and oxidation-resistant finish with a thin gold layer",
    colorOption: "Gold",
    roughness: "Ultra-flat; commonly used for electronics applications",
    image: "/images/surface-finishing/plating-treatments/surface-finishing-enig-electroless-nickel-immersion-gold.webp",
  },
];

const PROTECTIVE_COATING_PROCESSES: ProcessRow[] = [
  {
    name: "Spray Painting",
    characteristics: "Broad color, gloss and texture options for decorative and protective requirements",
    colorOption: "Full custom colors and effects, subject to project review",
    roughness: "Standard Ra 3.2; gloss optional",
    image: "/images/surface-finishing/protective-coatings/surface-finishing-spray-painting.webp",
  },
  {
    name: "Powder Coating",
    characteristics: "Thick, uniform, wear-resistant coating with smooth or textured appearance",
    colorOption: "Custom colors and textures, subject to project review",
    roughness: "Standard Ra 3.2; gloss and texture optional",
    image: "/images/surface-finishing/protective-coatings/surface-finishing-powder-coating.webp",
  },
  {
    name: "PTFE Coating",
    characteristics: "Smooth, non-stick, low-friction and chemical-resistant surface",
    colorOption: "Black is common",
    roughness: "Standard Ra 3.2",
    image: "/images/surface-finishing/protective-coatings/surface-finishing-ptfe-coating.webp",
  },
  {
    name: "Vacuum Plating / PVD Coating",
    characteristics: "Ultra-thin, hard, wear-resistant metallic film",
    colorOption: "Options may include TiN gold, MoS2 black and other project-reviewed finishes",
    roughness: "Ra 0.4, Ra 0.8, Ra 1.6 or per 2D drawing",
    image: "/images/surface-finishing/protective-coatings/surface-finishing-pvd-coating.webp",
  },
  {
    name: "Special Functional Coating",
    characteristics: "Performance-led treatments such as high-hardness, low-friction or biocompatible coatings",
    colorOption: "Function-led; DLC is commonly black",
    roughness: "Per 2D drawing; base-surface requirements must be reviewed",
    image: "/images/surface-finishing/protective-coatings/surface-finishing-special-functional-coating.webp",
  },
  {
    name: "Conductive Paint Spraying",
    characteristics: "Conductive finish for EMI shielding or ESD-related requirements",
    colorOption: "Black or gray are typical",
    roughness: "Per drawing",
    image: "/images/surface-finishing/protective-coatings/surface-finishing-conductive-paint-spraying.webp",
  },
];

const DECORATION_MARKING_PROCESSES: ProcessRow[] = [
  {
    name: "Engraving / Marking",
    characteristics: "Permanent logos, patterns or text through engraving or color change",
    colorOption: "Base material color or oxidation-related contrast",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/decoration-marking/surface-finishing-engraving-marking.webp",
  },
  {
    name: "Screen Printing / Pad Printing",
    characteristics: "Clear logos, patterns and text with multi-color graphic potential",
    colorOption: "Multi-color and custom graphics, subject to artwork review",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/decoration-marking/surface-finishing-screen-pad-printing.webp",
  },
  {
    name: "Decorative Surface Processes",
    characteristics: "Decorative patterns, logos, high-gloss finishes or special textured coatings",
    colorOption: "Fixed decorative colors, including gold and silver where applicable",
    roughness: "Ra 0.8, Ra 1.6, Ra 3.2 or per 2D drawing",
    image: "/images/surface-finishing/decoration-marking/surface-finishing-decorative-patterns-textures.webp",
  },
  {
    name: "Flocking",
    characteristics: "Soft, velvet-like matte texture for decorative and tactile requirements",
    colorOption: "Fiber color options may be available",
    roughness: "Velvet surface",
    image: "/images/surface-finishing/decoration-marking/surface-finishing-flocking.webp",
  },
];

const PLACEHOLDER_IMAGE =
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp";

interface SurfaceProcessTableProps {
  processes: ProcessRow[];
  contentPath: string;
  onPreview: (preview: { path: string; defaultSrc: string; alt: string }) => void;
}

function SurfaceProcessTable({ processes, contentPath, onPreview }: SurfaceProcessTableProps) {
  const headers = ["Process", "Surface characteristics", "Color option", "Roughness"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-6 overflow-x-auto rounded-xl border border-[#EEC569]/20 bg-[#101010]"
    >
      <table className="w-full min-w-[960px]" style={{ borderCollapse: "separate", borderSpacing: "0" }}>
        <thead>
          <tr style={{ background: "rgba(238,197,105,0.06)" }}>
            {headers.map((header, index) => (
              <th
                key={header}
                style={{
                  padding: "14px 16px",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#EEC569",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(208,153,71,0.3)",
                  width: index === 0 ? "200px" : index === 3 ? "220px" : undefined,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {processes.map((process, index) => {
            const imageContentPath = process.imageContentPath ?? `${contentPath}.${index}.image`;

            return (
              <tr
                key={process.name}
                style={{
                  background: index % 2 === 0 ? "rgba(30,30,30,0.5)" : "rgba(20,20,20,0.5)",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <td style={{ padding: "16px" }}>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="relative shrink-0 overflow-hidden"
                      style={{
                        width: "60px",
                        height: "45px",
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        cursor: "zoom-in",
                      }}
                      onClick={() =>
                        onPreview({
                          path: imageContentPath,
                          defaultSrc: process.image || PLACEHOLDER_IMAGE,
                          alt: process.name,
                        })
                      }
                      aria-label={`Preview ${process.name} image`}
                    >
                      <EditableImage
                        path={imageContentPath}
                        defaultSrc={process.image || PLACEHOLDER_IMAGE}
                        alt={process.name}
                        width={60}
                        height={45}
                        className="object-cover"
                      />
                    </button>
                    <span className="text-[14px] font-bold text-white">
                      <EditableText path={`${contentPath}.${index}.name`} defaultValue={process.name} />
                    </span>
                  </div>
                </td>
                <td className="p-4 text-[13px] leading-[1.5] text-[#C5C6C9]">
                  <EditableText
                    path={`${contentPath}.${index}.characteristics`}
                    defaultValue={process.characteristics}
                  />
                </td>
                <td className="p-4 text-[13px] leading-[1.5] text-[#C5C6C9]">
                  <EditableText path={`${contentPath}.${index}.colorOption`} defaultValue={process.colorOption} />
                </td>
                <td className="p-4 text-[13px] leading-[1.5] text-[#C5C6C9]">
                  <EditableText path={`${contentPath}.${index}.roughness`} defaultValue={process.roughness} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}

export function SFTable() {
  const [previewImage, setPreviewImage] = useState<{
    path: string;
    defaultSrc: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!previewImage) return;

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewImage(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewImage]);

  return (
    <section style={{ padding: "80px 0", background: "#34312F" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "16px",
          }}
        >
          <EditableText
            path="availableProcesses.heading"
            defaultValue="Available Surface Finishing Processes"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[920px] text-[16px] leading-[1.7] text-[#C5C6C9]"
        >
          <EditableText
            path="availableProcesses.introduction"
            defaultValue="These surface finishing processes outline the types of surface finishes that may be evaluated for custom parts. Listed colors, textures and roughness values are starting points for review; the final result is determined by the material, geometry, base condition, process route and approved drawing."
            multiline
          />
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-white"
        >
          <EditableText
            path="availableProcesses.basePreparationHeading"
            defaultValue="Base Surface Preparation and Mechanical Finishing"
          />
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 overflow-x-auto rounded-xl border border-[#EEC569]/20 bg-[#101010]"
        >
          <table className="w-full min-w-[960px]" style={{ borderCollapse: "separate", borderSpacing: "0" }}>
            <thead>
              <tr
                style={{
                  background: "rgba(238,197,105,0.06)",
                }}
              >
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                    width: "200px",
                  }}
                >
                  Process
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                  }}
                >
                  Surface Characteristics
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                  }}
                >
                  Color Option
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                    width: "220px",
                  }}
                >
                  Roughness
                </th>
              </tr>
            </thead>
            <tbody>
              {PROCESSES.map((process, index) => {
                const imageContentPath =
                  process.imageContentPath ?? `availableProcesses.base.${index}.image`;

                return (
                <tr
                  key={index}
                  style={{
                    background: index % 2 === 0 ? "rgba(30,30,30,0.5)" : "rgba(20,20,20,0.5)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <td style={{ padding: "16px" }}>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="shrink-0 relative overflow-hidden"
                        style={{
                          width: "60px",
                          height: "45px",
                          borderRadius: "6px",
                          border: "1px solid rgba(255,255,255,0.1)",
                          cursor: "zoom-in",
                        }}
                        onClick={() =>
                          setPreviewImage({
                            path: imageContentPath,
                            defaultSrc: process.image || PLACEHOLDER_IMAGE,
                            alt: process.name,
                          })
                        }
                        aria-label={`Preview ${process.name} image`}
                      >
                        <EditableImage
                          path={imageContentPath}
                          defaultSrc={process.image || PLACEHOLDER_IMAGE}
                          alt={process.name}
                          width={60}
                          height={45}
                          className="object-cover"
                        />
                      </button>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                        }}
                      >
                        <EditableText
                          path={`availableProcesses.base.${index}.name`}
                          defaultValue={process.name}
                        />
                      </span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`availableProcesses.base.${index}.characteristics`}
                      defaultValue={process.characteristics}
                    />
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`availableProcesses.base.${index}.colorOption`}
                      defaultValue={process.colorOption}
                    />
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`availableProcesses.base.${index}.roughness`}
                      defaultValue={process.roughness}
                    />
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-white"
        >
          <EditableText
            path="availableProcesses.aluminumProtectionHeading"
            defaultValue="Aluminum and Light-Alloy Protection"
          />
        </motion.h3>
        <SurfaceProcessTable
          processes={ALUMINUM_PROTECTION_PROCESSES}
          contentPath="availableProcesses.aluminumProtection"
          onPreview={setPreviewImage}
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-white"
        >
          <EditableText
            path="availableProcesses.platingTreatmentsHeading"
            defaultValue="Plating, Conversion and Thermal Treatments"
          />
        </motion.h3>
        <SurfaceProcessTable
          processes={PLATING_TREATMENT_PROCESSES}
          contentPath="availableProcesses.platingTreatments"
          onPreview={setPreviewImage}
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-white"
        >
          <EditableText
            path="availableProcesses.protectiveCoatingsHeading"
            defaultValue="Protective and Functional Coatings"
          />
        </motion.h3>
        <SurfaceProcessTable
          processes={PROTECTIVE_COATING_PROCESSES}
          contentPath="availableProcesses.protectiveCoatings"
          onPreview={setPreviewImage}
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-white"
        >
          <EditableText
            path="availableProcesses.decorationMarkingHeading"
            defaultValue="Decoration, Marking and Tactile Finishes"
          />
        </motion.h3>
        <SurfaceProcessTable
          processes={DECORATION_MARKING_PROCESSES}
          contentPath="availableProcesses.decorationMarking"
          onPreview={setPreviewImage}
        />
        <p className="mt-5 max-w-[920px] text-sm leading-[1.7] text-[#C5C6C9]">
          <EditableText
            path="availableProcesses.glueDispensingNote"
            defaultValue="Glue dispensing is a related assembly and sealing operation rather than a surface finish. Where applicable, adhesive or sealant application can be reviewed separately for bonding, sealing or encapsulation requirements."
            multiline
          />
        </p>

      </div>

      {previewImage && typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${previewImage.alt} image preview`}
            onClick={() => setPreviewImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.85)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <div
              onClick={(event) => event.stopPropagation()}
              style={{
                position: "relative",
                width: "min(960px, 92vw)",
                height: "min(640px, 72dvh)",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(238,197,105,0.35)",
                background: "#111111",
              }}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                aria-label="Close image preview"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "rgba(0,0,0,0.55)",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  zIndex: 2,
                  fontSize: "20px",
                  lineHeight: 1,
                }}
              >
                ×
              </button>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <EditableImage
                  path={previewImage.path}
                  defaultSrc={previewImage.defaultSrc}
                  alt={previewImage.alt}
                  fill
                  sizes="(max-width: 960px) 92vw, 960px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
