"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Check, ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";
import { useCMS } from "@/contexts/CMSContext";

const AUTO_PLAY_MS = 5000;

const DEFAULTS = {
  titleWhite: "Why Engineers ",
  titleHighlight: "Choose ApexBatch",
  subheading:
    "ApexBatch helps engineering and sourcing teams move from drawing review to precision CNC turned parts with DFM support, machining capability, finishing, inspection, and repeat production support in one workflow.",
  ctaText: "Get Free Engineering Review Before Production",
  ctaButton: "Contact Our Engineers",
  slides: [
    {
      image: getImageUrl("home/4-why-choose-us-1.webp"),
      number: "01",
      title: "Engineering-Led DFM Review",
      description:
        "Before production, ApexBatch reviews CAD files, drawings, materials, tolerances, and application requirements to identify machining risks, reduce revision cycles, and prepare a reliable CNC Turning quote.",
    },
    {
      image: getImageUrl("home/4-why-choose-us-2.webp"),
      number: "02",
      title: "Flexible Production for Multiple Part Numbers",
      description:
        "For high-mix low-volume projects or repeat batch orders, ApexBatch coordinates CNC Turning, materials, surface finishes, inspection requirements, and delivery schedules under one production plan.",
    },
    {
      image: getImageUrl("home/4-why-choose-us-3.webp"),
      number: "03",
      title: "One-Stop Project Control",
      description:
        "From material selection to CNC Turning, surface finishing, inspection, packaging, and delivery, ApexBatch helps reduce supplier handoffs and communication gaps.",
    },
    {
      image: getImageUrl("home/4-why-choose-us-4.webp"),
      number: "04",
      title: "Inspection Reports Before Delivery",
      description:
        "Critical dimensions and surface requirements can be checked through CMM, optical measurement, gauges, and surface testing. Project-based inspection reports are available when required.",
    },
  ],
};

const SLIDE_COUNT = DEFAULTS.slides.length;

export function CMTWhyChoose() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { isEditMode } = useCMS();

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  useEffect(() => {
    if (isPaused || isEditMode) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, isEditMode]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="whychoose.titleWhite" defaultValue={DEFAULTS.titleWhite} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="whychoose.titleHighlight" defaultValue={DEFAULTS.titleHighlight} />
            </span>
          </h2>
          <p
            className="mx-auto w-[80%]"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "18px",
            }}
          >
            <EditableText path="whychoose.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div
          className="grid lg:grid-cols-2 gap-10 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative"
              style={{
                borderRadius: "16px",
                border: "2px solid #7F4D0F",
                boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 48px rgba(0,0,0,0.6)",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute top-3 left-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderTop: "2px solid #7F4D0F",
                  borderLeft: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute top-3 right-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderTop: "2px solid #7F4D0F",
                  borderRight: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute bottom-3 left-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderBottom: "2px solid #7F4D0F",
                  borderLeft: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute bottom-3 right-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderBottom: "2px solid #7F4D0F",
                  borderRight: "2px solid #7F4D0F",
                }}
              />

              <div className="relative aspect-[4/3]">
                {DEFAULTS.slides.map((slide, index) => (
                  <EditableImage
                    key={slide.number}
                    path={`whychoose.slides.${index}.image`}
                    defaultSrc={slide.image}
                    alt="Manufacturing facility"
                    fill
                    className="object-cover transition-opacity duration-500 ease-out"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      pointerEvents: index === currentSlide ? "auto" : "none",
                    }}
                  />
                ))}

                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "rgba(0,0,0,0.75)",
                    border: "1px solid rgba(208,153,71,0.4)",
                  }}
                >
                  <ChevronLeft className="w-5 h-5" style={{ color: "#D09947" }} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "rgba(0,0,0,0.75)",
                    border: "1px solid rgba(208,153,71,0.4)",
                  }}
                >
                  <ChevronRight className="w-5 h-5" style={{ color: "#D09947" }} />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-5">
              {DEFAULTS.slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="h-1 rounded-full transition-all"
                  style={{
                    width: index === currentSlide ? "24px" : "12px",
                    background: index === currentSlide ? "#D09947" : "#444444",
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="mb-6"
              style={{
                background: "#000000",
                borderRadius: "16px",
                border: "1px solid rgba(208,153,71,0.2)",
                padding: "32px",
                minHeight: "220px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <div
                    style={{
                      fontSize: "48px",
                      fontWeight: 700,
                      color: "rgba(208,153,71,0.35)",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    <EditableText
                      path={`whychoose.slides.${currentSlide}.number`}
                      defaultValue={DEFAULTS.slides[currentSlide].number}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#D09947",
                      marginBottom: "16px",
                    }}
                  >
                    <EditableText
                      path={`whychoose.slides.${currentSlide}.title`}
                      defaultValue={DEFAULTS.slides[currentSlide].title}
                    />
                  </h3>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        border: "2px solid #D09947",
                        background: "rgba(208,153,71,0.1)",
                      }}
                    >
                      <Check className="w-4 h-4" style={{ color: "#D09947" }} />
                    </div>
                    <p
                      style={{
                        fontSize: "15.5px",
                        lineHeight: 1.65,
                        color: "#C5C6C9",
                        maxWidth: "90%",
                      }}
                    >
                      <EditableText
                        path={`whychoose.slides.${currentSlide}.description`}
                        defaultValue={DEFAULTS.slides[currentSlide].description}
                        multiline
                      />
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {DEFAULTS.slides.map((slide, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Select slide ${index + 1}`}
                  className="relative aspect-square overflow-hidden transition-all duration-300"
                  style={{
                    borderRadius: "8px",
                    border:
                      index === currentSlide
                        ? "1px solid #D09947"
                        : "1px solid rgba(208,153,71,0.25)",
                    opacity: index === currentSlide ? 1 : 0.65,
                  }}
                >
                  <EditableImage
                    path={`whychoose.slides.${index}.image`}
                    defaultSrc={slide.image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: "48px" }}
        >
          <p
            className="mb-5 mx-auto max-w-[920px]"
            style={{
              color: "#F3F3F3",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            <EditableText path="whychoose.ctaText" defaultValue={DEFAULTS.ctaText} multiline />
          </p>
          <Link
            href="/contact"
            rel="nofollow"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
          >
            <EditableText path="whychoose.ctaButton" defaultValue={DEFAULTS.ctaButton} />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
