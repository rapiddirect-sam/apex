"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";

const DEFAULTS = {
  headingPrefix: "Surface Finish, Texture, and ",
  headingHighlight: "Cosmetic Requirements",
  introduction:
    "Define visible-surface requirements before tooling. Resin, color, mold condition, texture direction, part geometry, lighting, parting lines, and approved samples all affect the final appearance.",
  finishes: [
    { name: "SPI A (High Gloss)", appearance: "Mirror or high-gloss finish", grades: "A1, A2, A3", roughness: "Ra < 0.1 μm", description: "Mirror-like surface with exceptional reflectivity, ideal for optical and decorative applications.", image: "/injection-molding/spi-a-high-gloss.avif", imageAlt: "SPI A high-gloss injection molding surface finish" },
    { name: "SPI B (Semi-Gloss)", appearance: "Satin or softer-gloss finish", grades: "B1, B2, B3", roughness: "Ra 0.1–0.4 μm", description: "Soft satin finish that minimizes fingerprints while maintaining a professional appearance.", image: "/injection-molding/spi-b-semi-gloss.avif", imageAlt: "SPI B semi-gloss injection molding surface finish" },
    { name: "SPI C (Fine Matte)", appearance: "Uniform matte finish", grades: "C1, C2, C3", roughness: "Ra 0.4–1.6 μm", description: "Uniform non-glossy surface that helps reduce the visibility of minor imperfections and mold lines.", image: "/injection-molding/spi-c-fine-matte.avif", imageAlt: "SPI C fine-matte injection molding surface finish" },
    { name: "SPI D (Coarse Matte / Sandblast)", appearance: "Textured matte or blasted appearance", grades: "D1, D2, D3", roughness: "Ra > 1.6 μm", description: "Textured finish that can add grip and help mask surface defects on suitable parts.", image: "/injection-molding/spi-d-coarse-matte-sandblast.avif", imageAlt: "SPI D coarse-matte sandblast injection molding surface finish" },
  ],
  textureHeading: "Texture Standards",
  textureDescription:
    "VDI 3400 and Mold-Tech specify textures from fine leather-like grain through to deeper geometric patterns. Select the required reference, texture direction, and approved sample before tooling release.",
  cosmeticNote:
    "Surface finish is both a tooling and cosmetic decision. Textured surfaces generally need additional draft for clean ejection. High-gloss surfaces make gate marks, weld lines, ejector marks, scratches, and parting lines more visible.",
  visiblePartNote:
    "For visible parts, share any SPI, VDI, Mold-Tech, color, or approved-sample references you already have. If these details are still open, we can help define the gloss, texture direction, and acceptable gate or ejector-mark locations before tooling.",
};

export function PIMSurfaceFinishes() {
  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-left lg:text-center">
          <h2 className="service-section-title text-white">
            <EditableText path="plasticInjectionFinishes.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent"><EditableText path="plasticInjectionFinishes.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p className="service-section-copy mt-6 lg:mx-auto lg:max-w-4xl">
            <EditableText path="plasticInjectionFinishes.introduction" defaultValue={DEFAULTS.introduction} multiline />
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {DEFAULTS.finishes.map((finish, index) => (
            <motion.article
              key={finish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "#1A1A1A",
                borderRadius: "12px",
                border: "2px solid rgba(208,153,71,0.35)",
                boxShadow: "0 14px 36px rgba(0,0,0,0.45)",
              }}
            >
              <div className="p-6 pb-0">
                <h3 className="text-xl font-extrabold text-white"><EditableText path={`plasticInjectionFinishes.finishes.${index}.name`} defaultValue={finish.name} /></h3>
                <p className="mt-2 text-sm text-[#7A7A7C]">Typical appearance: <EditableText path={`plasticInjectionFinishes.finishes.${index}.appearance`} defaultValue={finish.appearance} /></p>
                <div className="relative mt-5 h-[180px] overflow-hidden rounded-lg">
                  <StaticImage path={`plasticInjectionFinishes.images.${index}`} defaultSrc={finish.image} alt={finish.imageAlt} fill sizes="(max-width: 639px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="mt-5 flex justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#EEC569]">SPI Grade</p>
                    <p className="mt-1 text-base font-semibold text-white"><EditableText path={`plasticInjectionFinishes.finishes.${index}.grades`} defaultValue={finish.grades} /></p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#EEC569]">Roughness Ra (μm)</p>
                    <p className="mt-1 text-base font-semibold text-white"><EditableText path={`plasticInjectionFinishes.finishes.${index}.roughness`} defaultValue={finish.roughness} /></p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-5">
                <p className="text-sm leading-relaxed text-[#C5C6C9]"><EditableText path={`plasticInjectionFinishes.finishes.${index}.description`} defaultValue={finish.description} multiline /></p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="section-note mt-10">
          <p className="text-lg font-semibold text-[#EEC569]"><EditableText path="plasticInjectionFinishes.textureHeading" defaultValue={DEFAULTS.textureHeading} /></p>
          <p className="mt-3"><EditableText path="plasticInjectionFinishes.textureDescription" defaultValue={DEFAULTS.textureDescription} multiline /></p>
        </div>
        <div className="mx-auto mt-7 max-w-4xl space-y-5">
          <p className="service-section-copy"><EditableText path="plasticInjectionFinishes.cosmeticNote" defaultValue={DEFAULTS.cosmeticNote} multiline /></p>
          <p className="service-section-copy"><EditableText path="plasticInjectionFinishes.visiblePartNote" defaultValue={DEFAULTS.visiblePartNote} multiline /></p>
        </div>
      </div>
    </section>
  );
}
