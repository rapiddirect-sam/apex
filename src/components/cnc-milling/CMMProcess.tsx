"use client";



import { motion } from "framer-motion";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { EditableText, EditableImage } from "@/components/cms";



const DEFAULTS = {

  heading: "From CAD File to",

  headingHighlight: " Part",

  subheading: "ApexBatch provides custom CNC milling services from engineering review and production planning to machining, finishing, inspection, and repeat batch delivery.",

  ctaText: "Start Your Project",

  steps: [

    {

      number: "01",

      title: "Upload CAD file",

      description: "Send your CAD files, drawings, material, quantity, and finish requirements.",

      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-machine-overview-1.webp",

    },

    {

      number: "02",

      title: "Engineering Review",

      description: "We review manufacturability, tolerance risks, materials, and provide a detailed quote.",

      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-production-workshop-2.webp",

    },

    {

      number: "03",

      title: "CNC Milling & Finishing",

      description: "Parts are CNC milled and finished based on geometry, material, and application needs.",

      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/3-cnc-milling-machining-service.webp",

    },

    {

      number: "04",

      title: "Inspection & Delivery",

      description: "Critical dimensions and finish quality are checked before packaging and delivery.",

      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-factory-3.webp",

    },

  ],

};



export function CMMProcess() {

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

          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>

            <EditableText path="process.heading" defaultValue={DEFAULTS.heading} />

            <span style={{ color: "#EEC569" }}>

              <EditableText path="process.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />

            </span>

          </h2>

          <p className="mx-auto w-[80%]" style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "18px" }}>

            <EditableText path="process.subheading" defaultValue={DEFAULTS.subheading} />

          </p>

        </motion.div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>

          {DEFAULTS.steps.map((step, index) => (

            <motion.div

              key={step.number}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * 0.1 }}

              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"

              style={{

                background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",

                borderRadius: "16px",

                border: "1px solid rgba(208,153,71,0.2)",

              }}

            >

              <div className="relative overflow-hidden" style={{ height: "180px" }}>

                <EditableImage

                  path={`process.steps.${index}.image`}

                  defaultSrc={step.image}

                  alt={step.title}

                  fill

                  className="object-cover transition-transform duration-500 group-hover:scale-105"

                />

                <div

                  className="absolute inset-0 pointer-events-none"

                  style={{

                    background:

                      "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.35) 100%)",

                  }}

                />

                <div

                  className="absolute top-4 left-4 pointer-events-auto"

                  style={{

                    fontSize: "44px",

                    fontWeight: 700,

                    lineHeight: 1,

                    color: "#EEC569",

                    textShadow: "0 2px 16px rgba(0,0,0,0.65)",

                  }}

                >

                  <EditableText path={`process.steps.${index}.number`} defaultValue={step.number} />

                </div>

              </div>



              <div style={{ padding: "24px 24px 28px" }}>

                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#D09947", marginBottom: "12px" }}>

                  <EditableText path={`process.steps.${index}.title`} defaultValue={step.title} />

                </h3>

                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#C5C6C9" }}>

                  <EditableText path={`process.steps.${index}.description`} defaultValue={step.description} multiline />

                </p>

              </div>



              {index < DEFAULTS.steps.length - 1 && (

                <div

                  className="hidden lg:block absolute top-[90px] -right-3 w-6 h-[2px]"

                  style={{ background: "linear-gradient(to right, #D09947, transparent)" }}

                />

              )}

            </motion.div>

          ))}

        </div>



        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          className="flex justify-center"

          style={{ marginTop: "48px" }}

        >

          <Link

            href="https://app.apexbatch.com/"

            className="inline-flex items-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group"

          >

            <EditableText path="process.ctaText" defaultValue={DEFAULTS.ctaText} />

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

          </Link>

        </motion.div>

      </div>

    </section>

  );

}


