"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText } from "@/components/cms";
import { ServiceTable } from "@/components/ui/ServiceTable";
import { motion } from "@/components/ui/StaticMotion";

const DEFAULTS = {
  headingPrefix: "Bending ",
  headingHighlight: "Capacity at a Glance",
  description:
    "The manufacturing route starts with the finished requirement: material, thickness, final dimensions, cosmetic areas, quantity, and downstream operations.",
  rows: [
    { capability: "Forming method", reference: "CNC press brake bending and applicable forming tooling" },
    { capability: "Minimum sheet thickness", prefix: "From ", emphasis: "0.2 mm" },
    { capability: "Steel and stainless thickness", prefix: "Up to ", emphasis: "3.0 mm" },
    { capability: "Aluminum and copper thickness", prefix: "Up to ", emphasis: "6.0 mm" },
    { capability: "Maximum bend length", prefix: "Up to ", emphasis: "3000 mm" },
    { capability: "Minimum flange length", prefix: "From ", emphasis: "10 mm", suffix: " on suitable geometry" },
    { capability: "Supported bend angle", emphasis: "30°–180°", suffix: ", where applicable" },
    { capability: "Part complexity", reference: "Single bends, multi-bend components, return flanges, channels, panels, and formed assemblies" },
    { capability: "Order stage", reference: "Prototype, low-volume, and repeat production" },
  ],
  noteLead:
    "Need large metal bending services for a long panel, enclosure, or formed section?",
  noteDetail:
    "ApexBatch supports bend lengths up to 3000 mm. Send your drawing and requirements to confirm the right bending route for your part.",
};

export function BendingCapacity() {
  const rows = DEFAULTS.rows.map((row, index) => [
    <EditableText
      key={`capability-${index}`}
      path={`bendingCapacity.rows.${index}.capability`}
      defaultValue={row.capability}
    />,
    <>
      {row.reference ? (
        <EditableText
          path={`bendingCapacity.rows.${index}.reference`}
          defaultValue={row.reference}
          multiline
        />
      ) : (
        <>
          {row.prefix ? (
            <EditableText
              path={`bendingCapacity.rows.${index}.prefix`}
              defaultValue={row.prefix}
            />
          ) : null}
          {row.emphasis ? (
            <strong className="font-semibold text-white">
              <EditableText
                path={`bendingCapacity.rows.${index}.emphasis`}
                defaultValue={row.emphasis}
              />
            </strong>
          ) : null}
          {row.suffix ? (
            <EditableText
              path={`bendingCapacity.rows.${index}.suffix`}
              defaultValue={row.suffix}
            />
          ) : null}
        </>
      )}
    </>,
  ]);

  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-left lg:text-center"
        >
          <h2 className="service-section-title text-white">
            <EditableText path="bendingCapacity.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent">
              <EditableText path="bendingCapacity.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p className="service-section-copy section-reading-copy mt-6 text-left lg:text-center">
            <EditableText
              path="bendingCapacity.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-[900px]">
          <ServiceTable
            columns={[
              { header: "Capability", width: "38%", tone: "primary" },
              { header: "ApexBatch Reference", width: "62%" },
            ]}
            rows={rows}
            caption="ApexBatch sheet metal bending capacity reference"
            minTableWidth="680px"
            headerCase="uppercase"
            bodyDensity="dense"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="service-section-copy section-reading-copy">
            <EditableText
              path="bendingCapacity.noteLead"
              defaultValue={DEFAULTS.noteLead}
              multiline
            />
          </p>
          <p className="service-section-copy section-reading-copy mt-4">
            <EditableText
              path="bendingCapacity.noteDetail"
              defaultValue={DEFAULTS.noteDetail}
              multiline
            />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="cta-primary group mt-6"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
