"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpFromLine, Box, ChevronDown, GitFork, Snowflake, Wind } from "lucide-react";
import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";
import { ServiceTable } from "@/components/ui/ServiceTable";
import { StaticImage } from "@/components/ui/StaticImage";

const DEFAULTS = {
  capabilityHeading: "Injection Mold Tooling Capabilities at ",
  capabilityHighlight: "ApexBatch",
  capabilityIntro: "Our injection molding tooling plans combine mold design, component manufacturing, sampling, inspection, and repeat-production preparation within one defined project scope.",
  capabilityHeaders: ["Tooling capability", "Planning scope"],
  capabilityRows: [
    ["Design software", "UG, Pro/E, AutoCAD"],
    ["Mold-flow analysis", "Moldflow review for suitable projects"],
    ["Mold standards", "GB, DME, HASCO, MISUMI"],
    ["Runner systems", "Cold-runner and hot-runner configurations"],
    ["Gate directions", "Direct gates, pin gates, sub gates, and valve-gate systems where suitable"],
    ["Mold-weight planning", "20–50 T mold weight, selected around project, handling, and equipment requirements"],
    ["CNC machining and EDM machining reference", "±0.005–0.01 mm for applicable mold components"],
    ["Injection press planning", "50–2,000 ton machines"],
    ["Build visibility", "Weekly mold-build photos and videos"],
  ],
  capabilityWeightValue: "20–50 T mold weight",
  capabilityWeightSuffix: ", selected around project, handling, and equipment requirements",
  capabilityPrecisionValue: "±0.005–0.01 mm",
  capabilityPrecisionSuffix: " for applicable mold components",
  definitionHeading: "What Is Injection Mold ",
  definitionHighlight: "Tooling?",
  definitionPrimary: "Injection mold tooling is the engineered, removable mold system installed in an injection molding press to form molten plastic into repeatable parts. A plastic injection mold includes the core and cavity, runner and gate system, cooling channels, vents, ejection system, and any slides, lifters, inserts, or moving components needed to form and release the part.",
  definitionSecondary: "The tool controls more than geometry. It affects material flow, cooling behavior, surface appearance, parting lines, gate witness marks, cycle time, repeatability, and long-term piece-part cost.",
  definitionTertiary: "Before injection mold manufacturing begins, we define the requirements that shape the tool: critical dimensions, mating features, sealing surfaces, visible faces, texture, resin, expected demand, inspection needs, and planned production life.",
  definitionLinkPrefix: "Once the tool is complete, ",
  definitionLink: "Injection Molding Services",
  definitionLinkSuffix: " covers the molding process, sample validation, and repeat production.",
  definitionDetailsLabel: "Read more about mold construction and production planning",
  toolingTypesHeading: "Types of Injection Molding ",
  toolingTypesHighlight: "Tools",
  toolingTypes: [
    {
      title: "Single-Cavity Molds",
      lead: "A single-cavity mold produces ",
      emphasis: "one part per molding cycle",
      leadEnd: ". It is commonly used for prototype tooling, early validation, lower-volume programs, or parts that may change after testing.",
      detail: "Its simpler construction can reduce initial tooling complexity and make early adjustments easier. However, one part per cycle does not always mean the lowest total cost once quantity, cycle time, resin use, and labor are considered.",
    },
    {
      title: "Multi-Cavity Molds",
      lead: "A multi-cavity mold produces ",
      emphasis: "multiple identical parts in each cycle",
      leadEnd: ". It is usually considered after the design is stable and the planned volume can justify a higher tooling investment.",
      detail: "More cavities can improve output per cycle, but they also require consistent filling, cooling, ejection, runner balance, and part quality across every cavity. The production gain must justify the added tooling cost, validation work, and maintenance needs.",
    },
    {
      title: "Family Molds",
      lead: "A family mold produces ",
      emphasis: "different but related parts in the same cycle",
      leadEnd: ", such as matched enclosure halves or components used together in one assembly. It can be practical when those parts use compatible materials and are required in similar quantities.",
      detail: "Because each part may fill, cool, shrink, and eject differently, family molds need careful engineering review. They are less suitable when demand levels, wall thicknesses, or molding behavior vary significantly between the parts.",
    },
  ],
  toolingRoutesHeading: "Prototype, Pilot, and Production Tooling ",
  toolingRoutesHighlight: "Routes",
  toolingRoutesIntro: "Tool configuration and tooling route are different decisions. Single-, multi-, and family-cavity molds describe how parts are produced per cycle. Prototype, pilot, and production routes describe the planned tool life, material direction, validation strategy, and expected production program.",
  toolingRoutesColumns: ["Tooling route", "Core/cavity material direction", "Planning life range*", "Best suited to"],
  toolingRoutesRows: [
    ["Rapid prototype tooling", "S50C, aluminum 7075, or aluminum 6061 where suitable", "100–1,000 cycles", "Design validation, urgent samples, and very low-volume programs"],
    ["Pilot or soft-steel tooling", "P20 or 718H where suitable", "10,000–50,000 cycles", "Lower-volume production and products with a shorter expected life cycle"],
    ["Hardened production tooling", "S136 or other project-approved hardened steel", "300,000–1,000,000+ cycles", "Stable designs, repeat production, high-volume programs, or demanding precision requirements"],
  ],
  toolingRoutesNote: "Planning life ranges are not universal guarantees. Resin, glass-fiber content, cavity count, cooling, injection pressure, geometry, maintenance, and actual operating conditions affect mold life.",
  toolingRoutesRapid: "For projects that need molded samples quickly, this route can support rapid injection molding and rapid prototype injection molding when the part definition, specified resin, and approval requirements are sufficiently clear.",
  toolingRoutesAssessment: "For each planned plastic injection tooling program, we assess whether prototype tooling, soft-steel tooling, or an initial production tool offers the better balance of flexibility, tool life, and total program cost.",
  toolingRoutesLinkPrefix: "For parts that have moved beyond early validation, see our ",
  toolingRoutesLink: "Custom Plastic Injection Molding",
  steelMaterialsHeading: "Tool Steel and Insert ",
  steelMaterialsHighlight: "Materials",
  steelMaterialsImageAlt: "Precision mold steel blocks, machined mold components, and a copper cooling insert on an inspection bench",
  steelMaterials: [
    {
      title: "Aluminum and Rapid Tooling Materials",
      bestFit: "Aluminum injection molds can be suitable for early validation, rapid prototype injection molding, and limited-volume programs. They are not automatically suitable for abrasive, glass-filled, high-temperature, or long-life production requirements.",
      consideration: "Aluminum molds for injection molding can be evaluated where the planned quantity, resin, geometry, surface requirement, and expected number of cycles suit an aluminum tooling route.",
    },
    {
      title: "P20 and 718H Tool Steel",
      bestFit: "P20 and 718H are pre-hardened tool steels, commonly supplied around 28–34 HRC. They offer practical machinability, polishability, and texture capability for suitable plastic injection molds.",
      consideration: "We may evaluate P20 or 718H for housings, appliance components, general industrial plastic parts, pilot tools, and lower-volume repeat production. Their uniform material properties and machining performance can reduce the need for additional hardening steps in suitable tooling programs.",
    },
    {
      title: "S136 Tool Steel",
      bestFit: "S136 can be evaluated for hardened production tooling where corrosion resistance, high polish, transparent-part appearance, or longer planned mold life is important. Hardened S136 is commonly specified around 48–52 HRC for suitable applications.",
      consideration: "Its polishability can make it a useful option for high-gloss cosmetic parts, transparent plastic components, optical-style surfaces, and selected corrosive-resin applications.",
      note: "The final choice still requires review of the resin, filler content, cavity layout, cooling, polishing requirement, and production conditions.",
    },
    {
      title: "Beryllium-Copper Inserts",
      bestFit: "Beryllium-copper inserts can be evaluated for local hot spots, difficult-to-cool features, and selected core or cavity inserts. Their higher thermal conductivity can help improve local cooling uniformity and reduce the risk of distortion in suitable designs.",
      consideration: "They are not a standard replacement for tool steel. We assess geometry, cooling access, resin, wear, polishing requirements, safety controls, and maintenance needs before selecting a specialty insert material.",
    },
  ],
  steelCompatibilityHeading: "Steel and Resin Compatibility",
  steelCompatibility: "Resin selection affects the mold as well as the part. Glass-fiber reinforcement, abrasive fillers, corrosive additives, and higher processing temperatures can increase mold wear, change polishing needs, and influence the appropriate core and cavity steel.",
  steelTestingPrefix: "Where tensile performance is part of the requirement, ",
  steelTestingMiddle: " is a common reference for tensile testing of plastics. Where impact performance matters, ",
  steelTestingSuffix: " may be relevant. Test methods, sample preparation, conditioning, and acceptance limits should be agreed for the actual material and application.",
  moldStructureHeading: "Mold Structure: Core, Cavity, Runners, Cooling, and ",
  moldStructureHighlight: "Ejection",
  coreCavity: {
    title: "Core and Cavity",
    paragraphs: [
      "The core and cavity form the internal and external geometry of the part. Their design affects the parting line (the line where the two mold halves meet), draft direction, wall transitions, dimensional control, shrinkage allowance, texture, polish level, and part release.",
      "Core and cavity design must account for the resin’s flow and shrinkage behavior. A design that works with an unfilled resin may require different allowances when glass fiber, flame retardants, or other fillers are introduced.",
    ],
  },
  cooling: {
    title: "Cooling System",
    paragraphs: [
      "Cooling channels remove heat from the tool after injection. Cooling design affects cycle time, warpage, shrinkage, dimensional stability, and surface consistency.",
      "Parts with thick-to-thin wall transitions, long flow paths, high cosmetic requirements, or tight dimensional features require early cooling review. Uneven cooling can increase distortion, sink risk, and variation between cycles.",
    ],
  },
  runners: {
    title: "Cold Runners, Hot Runners, and Gates",
    description: "A cold runner is machined into the mold and solidifies with each cycle. It is separated from the finished part after molding. A hot-runner mold uses a heated manifold system to keep resin molten until it enters the cavity.",
    coldRunner: "Cold runners are often practical for prototype, pilot, and lower-volume programs.",
    hotRunner: "Hot runners can reduce runner waste and support higher-output programs, but introduce additional tool cost, design complexity, maintenance requirements, and component considerations.",
    gates: [
      ["Direct gates", "Resin enters directly into the part; useful where a larger gate witness is acceptable."],
      ["Pin gates", "A small gate often used where a reduced gate witness is required."],
      ["Sub gates", "Positioned below the parting line to support automatic degating (automatic removal of the runner from the part) in suitable designs."],
      ["Valve gates", "Used in suitable hot-runner systems where gate timing, cosmetic control, or fill management requires additional control."],
    ],
    note: "Gate selection affects filling behavior, pressure demand, weld lines, cosmetic witness marks, automatic degating, cycle planning, and runner waste. We review the gate location against resin, part geometry, visible surfaces, cavity layout, and target production quantity.",
  },
  venting: {
    title: "Venting",
    description: "Vents allow trapped air to escape as resin fills the cavity. Insufficient venting can contribute to short shots, burn marks, poor surface appearance, or inconsistent filling.",
  },
  ejection: {
    title: "Ejection",
    description: "The ejection system releases the cooled part from the mold. Ejector-pin location, draft, contact area, texture, and part geometry are planned so the part can be released from the mold safely.",
  },
  designReviewHeading: "Tooling Design Review Before ",
  designReviewHighlight: "Manufacturing",
  designReviewIntro: "Before machining begins, we review the part, resin, tooling route, and acceptance requirements together.",
  designReviewItems: [
    ["Part geometry", "Parting direction, draft, wall thickness, ribs, bosses, threads, undercuts, critical dimensions, mating features, sealing faces, and assembly interfaces."],
    ["Material and appearance", "Specified resin grade, shrinkage, reinforcement, color, material availability, visible surfaces, texture, gloss, gate witness location, and ejector-mark acceptance."],
    ["Mold design", "Cavity count, runner and gate strategy, cooling, venting, ejection, and the feasibility of critical features."],
    ["Production and release scope", "Expected quantity, inspection requirements, documentation, packaging, delivery, and approval requirements."],
  ],
  moldflowHeading: "Moldflow Review",
  moldflowPrimary: "For suitable projects, Moldflow simulation helps predict resin flow before the tool is built. It can assess flow paths, pressure demand, gate direction, potential weld lines, and other molding risks.",
  moldflowSecondary: "Simulation informs mold design, while T1 samples validate the finished tool with the specified resin and agreed process conditions.",
  precisionHeading: "Mold Component Precision vs. Molded-Part ",
  precisionHighlight: "Tolerances",
  precisionColumns: ["Requirement", "What it applies to", "How it is evaluated"],
  precisionRows: [
    ["Mold component machining reference", "Applicable mold plates, cores, cavities, and precision tool details", "CNC and EDM machining may use a reference range of ±0.005–0.01 mm, depending on the feature and manufacturing method."],
    ["Molded-part critical features", "Fits, sealing surfaces, mounting interfaces, moving features, threads, and assembly datums", "Applicable features can be evaluated for tolerances down to ±0.05 mm, subject to resin shrinkage, geometry, mold layout, process conditions, and measurement method."],
  ],
  precisionNote: "We focus tight-tolerance planning on the features that affect fit, sealing, movement, or assembly.",
  precisionLink: "ISO 20457",
  precisionLinkSuffix: " provides a reference for molded-part tolerances and acceptance conditions.",
  quoteComparisonHeading: "How to Compare Injection Mold Tooling ",
  quoteComparisonHighlight: "Quotes",
  quoteComparisonIntro: "A quote for custom injection molds should define more than a mold price. Compare suppliers using the same part revision, target resin, cavity count, steel, runner system, surface requirement, sampling scope, inspection documents, ownership terms, and delivery conditions.",
  quoteComparisonItems: [
    ["Part revision and resin", "Changes shrinkage, tool wear, cooling, gates, and mold design"],
    ["Cavity count", "Changes tooling investment, output, cycle planning, and piece-part economics"],
    ["Core and cavity steel", "Affects durability, polishability, corrosion resistance, and maintenance"],
    ["Runner system", "Affects material waste, gate appearance, tooling cost, and cycle planning"],
    ["Sampling plan", "Clarifies T1 samples, inspection records, and included modification rounds"],
    ["Documentation", "Defines FAI, dimensional reports, material records, and agreed documents"],
    ["Ownership and transfer terms", "Defines the status of the tooling asset after approval"],
    ["Tooling lead time", "Separates mold build, sampling, changes, approval, and production timing"],
  ],
  quoteComparisonNote: "A lower quotation may use a different steel grade, fewer cavities, a cold runner instead of a hot-runner mold, fewer sample rounds, or a different inspection scope. Compare the complete program, not only the initial tool price.",
  quoteComparisonCta: "Request a Like-for-Like Tooling Quote",
  leadTimeHeading: "How Tooling Lead Time Is ",
  leadTimeHighlight: "Planned",
  leadTimeIntro: "Tooling lead time is planned after the part definition, tooling route, specified resin, and approval requirements are sufficiently confirmed. The final schedule is driven by the scope of work required to reach a validated T1 sample—not by a fixed number of calendar days.",
  leadTimeItems: [
    ["DFM and tooling review", "CAD maturity, resin selection, critical features, and the proposed tool route"],
    ["Mold design and material preparation", "Mold complexity, steel availability, cavity count, slides, hot-runner components, and cooling requirements"],
    ["Mold build and fitting", "CNC and EDM work, polishing, fitting, purchased components, and internal mold-function checks"],
    ["T1 trial and review", "Mold assembly, press scheduling, resin availability, inspection scope, and customer review requirements"],
    ["Tooling modifications, if required", "T1 findings, change scope, dimensional closure, and cosmetic approval"],
  ],
  leadTimeNote: "A simple open-and-shut tool does not follow the same schedule as a multi-cavity mold with slides, texture, hot-runner components, or complex cooling.",
  moldBuildHeading: "From CAD to Finished Injection ",
  moldBuildHighlight: "Mold",
  moldBuildSteps: [
    {
      title: "Part Definition and DFM Review",
      paragraphs: ["We confirm the part, material, appearance, assembly, quantity, and quality requirements needed to mold, inspect, and release the part against an agreed production plan."],
    },
    {
      title: "Tooling Route and Mold Design",
      paragraphs: ["We define the prototype, pilot, or production tooling route, then develop the mold design around core and cavity structure, parting line, cavity count, runner and gate direction, cooling, venting, ejection, slides, lifters, and inspection requirements."],
    },
    {
      title: "Mold Manufacturing, Fitting, and Internal Checks",
      paragraphs: [
        "Applicable mold plates, cores, cavities, and structural features are manufactured through CNC and EDM processes. CNC machining supports standard tool details and accessible geometry; EDM, or electrical discharge machining, supports detailed geometry, narrow ribs, deep features, sharp internal corners, and other areas that are not practical to machine conventionally.",
        "Before trial, components are fitted and assembled. Internal checks can cover parting-surface fit, slide and lifter movement, ejection, cooling circuits, venting, polishing, texture preparation, and basic mold function. High-gloss or textured areas, visible faces, gate witness locations, and ejector-mark acceptance should be agreed before polishing and texture preparation begin.",
      ],
    },
    {
      title: "Weekly Mold-Build Updates",
      paragraphs: ["During mold manufacturing, we provide weekly progress photos and videos for review before T1 sampling."],
    },
    {
      title: "T1 Trial and Tooling Changes",
      paragraphs: ["The completed mold is tested using the agreed resin and planned process conditions. T1 establishes the first sample-review point and identifies any dimensional, functional, cosmetic, or process-related changes needed before approval."],
    },
    {
      title: "Production Release",
      paragraphs: ["Once T1 review and any required tooling modifications are complete, the mold moves to the agreed production program. The detailed T1, FAI, acceptance, and release framework is outlined below."],
    },
  ],
  moldBuildCta: "Request a Free Tooling DFM Review",
  t1Heading: "T1 Sample Review, Tooling Updates, and ",
  t1Highlight: "Approval",
  t1Intro: "T1 is the first trial using the completed mold. Initial samples are a decision point, not an automatic production release. They confirm whether the approved tool, specified resin, planned process conditions, and part requirements are aligned before repeat production begins.",
  t1Stages: [["Internal mold-function check", "Confirm filling, ejection, tool movement, cooling, and basic mold function"], ["T1", "Review the first customer-facing samples against agreed requirements"], ["Follow-up trial", "Verify approved tooling modifications"], ["Production release", "Confirm approved samples, inspection records, packaging, and repeat-production requirements"]],
  t1ReviewLabel: "T1 review scope",
  t1ReviewRows: [["Material", "Specified resin, grade, color, reinforcement, or approved equivalent material"], ["Dimensions", "Critical features, fits, threads, interfaces, and agreed tolerances"], ["Appearance", "Texture, gloss, gate witness, weld lines, and ejector-mark acceptance"], ["Function", "Sealing, movement, retention, insert interface, or other agreed checks"], ["Inspection", "FAI, dimensional report, material records, and project-specific documentation"]],
  t1ReportNote: "T1 samples can be sent for customer review with a dimensional inspection report or first-article inspection record. The report identifies measured features against the approved drawing revision and agreed inspection scope.",
  t1ChangeNote: "A part may meet its key dimensions but still require a tooling update if a gate mark, texture transition, ejector position, or cosmetic surface does not meet the approved appearance requirement.",
  t1ReleaseNote: "After approval, we prepare the tool for the agreed production program. Corrosion protection, storage, maintenance, documentation, packaging, and repeat-order requirements are confirmed as part of the approved program.",
  moldLifeHeading: "Plan Mold Life Around Your Production ", moldLifeHighlight: "Needs",
  moldLife: "Mold life is affected by tool steel, resin type, glass-fiber content, injection pressure, cavity count, cooling, cycle conditions, wear areas, preventive maintenance, and actual production use.",
  moldLifeDetail: "A glass-filled resin can create more wear than an unfilled resin. A high-polish cosmetic surface can require different maintenance attention from a standard functional surface. Tool-life planning should match the real production program.",
  maintenance: "Preventive maintenance can include cleaning, lubrication where applicable, corrosion protection, wear inspection, and review of moving components, gates, ejectors, and critical inserts. Storage requirements are planned around mold condition, anticipated inactivity, and future production demand.",
  ownership: "Tool ownership, storage period, preventive maintenance, repair responsibility, and transfer arrangements are defined in the quotation and project agreement before tooling begins.",
  transfer: "Already own a plastic injection mold? We can review whether it is suitable for production at ApexBatch before transfer.",
  transferNote: "The review covers the mold’s condition, dimensions, runner and cooling systems, press compatibility, specified resin, maintenance history, and the latest approved part sample. Where needed, a trial run confirms the current mold condition and establishes the inspection baseline before repeat production.",
  transferCta: "Review an Existing Mold",
  piecePartCostHeading: "Tooling Choices That Affect Piece-Part ",
  piecePartCostHighlight: "Cost",
  piecePartCostRows: [
    ["Cavities", "Single cavity", "Multi-cavity"],
    ["Tool material", "Prototype or aluminum route", "Hardened production steel"],
    ["Geometry", "Open-and-shut geometry", "Slides, lifters, threads, and complex undercuts"],
    ["Runner system", "Cold runner", "Hot runner"],
    ["Surface requirement", "Standard functional surface", "High-gloss or controlled cosmetic texture"],
    ["Documentation", "Standard agreed inspection", "Expanded FAI, traceability, or capability requirements"],
  ],
  piecePartCostNote: "A single-cavity, cold-runner tool may be appropriate for validation or limited demand. A multi-cavity or hot-runner approach may be more suitable when the design is stable and volume supports the additional investment.",
  specializedHeading: "Specialized Tooling ", specializedHighlight: "Considerations",
  specializedItems: [
    ["Insert Molding Tooling", "Insert molding tools hold threaded inserts, terminals, bushings, pins, magnets, or other components during injection. Tool design must protect insert position and functional interfaces during filling, cooling, and ejection.", "Explore Insert Molding", "/insert-molding"],
    ["Overmolding Tooling", "Overmolding tools support rigid substrates with a second material for grip, sealing, protection, or localized functionality. Tooling review covers substrate location, material compatibility, bonding requirements, and the interface between shots.", "Explore Overmolding", "/overmolding"],
    ["Slides, Lifters, Threads, and Undercuts", "Features that cannot release in a straight mold-opening direction may require slides, lifters, collapsible elements, or other mechanisms. These features add tool complexity, maintenance needs, cycle-time considerations, and cost.", "Discuss a Complex Tooling Feature", "/contact"],
  ],
  risksHeading: "Common Tooling Risks to Address ", risksHighlight: "Early",
  risksRows: [["Sink marks", "Wall transitions, ribs, packing, cooling, and gate strategy"], ["Warpage", "Shrinkage, cooling balance, gate location, and geometry"], ["Short shots", "Flow length, wall thickness, venting, gate size, and runner design"], ["Flash", "Parting line, shutoffs, alignment, and process conditions"], ["Weld lines", "Gate location, flow paths, venting, and cosmetic requirements"], ["Ejector marks", "Ejection direction, contact area, draft, and visible-surface planning"], ["Dimensional variation", "Shrinkage, cooling, critical features, and measurement method"]],
  risksNote: "Early review cannot remove every adjustment, but it can identify risks before they become expensive tool modifications or repeated sampling cycles.",
  qualityHeading: "Tooling Validation and ",
  qualityHighlight: "Project Control",
  qualityCopy: "A useful mold is more than a finished tool. It needs an agreed approval record and a clear route for maintenance, modification, storage, and repeat production.",
  qualityItems: [
    "Drawing revision, resin, and approved sample record",
    "Critical-dimension and appearance inspection scope",
    "T1 changes and approved tooling modifications",
    "Mold ownership, storage, maintenance, and transfer terms",
    "Production documentation, packaging, and delivery requirements",
  ],
  qualityLink: "Explore Quality Assurance",
  cta: "Submit CAD for Tooling Review",
};

export function IMTContent() {
  const [openToolingType, setOpenToolingType] = useState(0);

  return (
    <>
      <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl text-left lg:text-center">
            <h2 className="service-section-title text-white"><EditableText path="tooling.capabilityHeading" defaultValue={DEFAULTS.capabilityHeading} /><span className="service-title-accent"><EditableText path="tooling.capabilityHighlight" defaultValue={DEFAULTS.capabilityHighlight} /></span></h2>
            <p className="service-section-copy mt-6 lg:mx-auto"><EditableText path="tooling.capabilityIntro" defaultValue={DEFAULTS.capabilityIntro} multiline /></p>
          </div>
          <div className="mx-auto mt-10 max-w-[920px]"><ServiceTable columns={DEFAULTS.capabilityHeaders.map((header, index) => ({ header: <EditableText key={header} path={`tooling.capabilityHeaders.${index}`} defaultValue={header} />, width: index === 0 ? "36%" : "64%" }))} rows={DEFAULTS.capabilityRows.map((row, rowIndex) => row.map((cell, cellIndex) => {
            if (rowIndex === 5 && cellIndex === 1) return <><strong className="font-semibold text-white"><EditableText path="tooling.capabilityWeightValue" defaultValue={DEFAULTS.capabilityWeightValue} /></strong><EditableText path="tooling.capabilityWeightSuffix" defaultValue={DEFAULTS.capabilityWeightSuffix} /></>;
            if (rowIndex === 6 && cellIndex === 1) return <><strong className="font-semibold text-white"><EditableText path="tooling.capabilityPrecisionValue" defaultValue={DEFAULTS.capabilityPrecisionValue} /></strong><EditableText path="tooling.capabilityPrecisionSuffix" defaultValue={DEFAULTS.capabilityPrecisionSuffix} /></>;
            return <EditableText key={`${rowIndex}-${cellIndex}`} path={`tooling.capabilityRows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />;
          }))} variant="standard" headerCase="uppercase" bodyDensity="dense" minTableWidth="700px" /></div>
          <div className="mt-8 flex justify-center"><Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group whitespace-nowrap"><EditableText path="tooling.cta" defaultValue={DEFAULTS.cta} /><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
            <div className="service-section-copy max-w-[980px] space-y-4 text-left">
              <h2 className="service-section-title text-white"><EditableText path="tooling.definitionHeading" defaultValue={DEFAULTS.definitionHeading} /><span className="service-title-accent"><EditableText path="tooling.definitionHighlight" defaultValue={DEFAULTS.definitionHighlight} /></span></h2>
              <p><EditableText path="tooling.definitionPrimary" defaultValue={DEFAULTS.definitionPrimary} multiline /></p>
              <details className="group border-t border-white/15 pt-4">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-[#EEC569] marker:hidden [&::-webkit-details-marker]:hidden"><EditableText path="tooling.definitionDetailsLabel" defaultValue={DEFAULTS.definitionDetailsLabel} /><span className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true">↓</span></summary>
                <div className="mt-4 space-y-4">
                  <p><EditableText path="tooling.definitionSecondary" defaultValue={DEFAULTS.definitionSecondary} multiline /></p>
                  <p><EditableText path="tooling.definitionTertiary" defaultValue={DEFAULTS.definitionTertiary} multiline /></p>
                  <p><EditableText path="tooling.definitionLinkPrefix" defaultValue={DEFAULTS.definitionLinkPrefix} /><Link href="/injection-molding" className="body-text-link body-text-link--dark"><EditableText path="tooling.definitionLink" defaultValue={DEFAULTS.definitionLink} /></Link><EditableText path="tooling.definitionLinkSuffix" defaultValue={DEFAULTS.definitionLinkSuffix} /></p>
                </div>
              </details>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <StaticImage path="tooling.definitionImage" defaultSrc="/injection-molding/apexbatch-open-injection-mold-tooling.webp" alt="Open injection mold tooling showing the cavity and core assembly" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tooling-options" className="scroll-mt-[calc(var(--q4-announcement-height)+7rem)] bg-[#34312F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl text-left lg:text-center">
            <h2 className="service-section-title text-white"><EditableText path="tooling.toolingRoutesHeading" defaultValue={DEFAULTS.toolingRoutesHeading} /><span className="service-title-accent"><EditableText path="tooling.toolingRoutesHighlight" defaultValue={DEFAULTS.toolingRoutesHighlight} /></span></h2>
            <p className="service-section-copy mt-6 lg:mx-auto"><EditableText path="tooling.toolingRoutesIntro" defaultValue={DEFAULTS.toolingRoutesIntro} multiline /></p>
          </div>
          <div className="mt-10"><ServiceTable columns={DEFAULTS.toolingRoutesColumns.map((column, index) => ({ header: <EditableText key={column} path={`tooling.toolingRoutesColumns.${index}`} defaultValue={column} />, width: ["22%", "31%", "18%", "29%"][index], tone: index === 2 ? "accent" as const : index === 0 ? "primary" as const : "default" as const }))} rows={DEFAULTS.toolingRoutesRows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`tooling.toolingRoutesRows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />))} variant="standard" headerCase="uppercase" bodyDensity="dense" minTableWidth="680px" /></div>
          <div className="section-note mt-7"><p><EditableText path="tooling.toolingRoutesNote" defaultValue={DEFAULTS.toolingRoutesNote} multiline /></p></div>
          <div className="mx-auto mt-8 max-w-4xl space-y-4 text-left lg:text-center"><p className="service-section-copy text-[15px]"><EditableText path="tooling.toolingRoutesRapid" defaultValue={DEFAULTS.toolingRoutesRapid} multiline /></p><p className="service-section-copy text-[15px]"><EditableText path="tooling.toolingRoutesAssessment" defaultValue={DEFAULTS.toolingRoutesAssessment} multiline /></p><p className="service-section-copy text-[15px]"><EditableText path="tooling.toolingRoutesLinkPrefix" defaultValue={DEFAULTS.toolingRoutesLinkPrefix} /><Link href="/plastic-injection-molding" className="body-text-link body-text-link--dark"><EditableText path="tooling.toolingRoutesLink" defaultValue={DEFAULTS.toolingRoutesLink} /></Link>.</p></div>
        </div>
      </section>

      <section className="bg-black pb-20 sm:pb-24 lg:pb-28">
        <div className="relative overflow-hidden border-y border-white/10">
          <StaticImage path="tooling.steelMaterialsImage" defaultSrc="/injection-molding/apexbatch-injection-mold-tool-steel-and-inserts-materials.avif" alt={DEFAULTS.steelMaterialsImageAlt} fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex min-h-[250px] max-w-[1200px] flex-col justify-center px-6 py-10 sm:min-h-[290px] lg:min-h-[320px]">
            <h2 className="service-section-title text-white">{DEFAULTS.steelMaterialsHeading}<span className="service-title-accent">{DEFAULTS.steelMaterialsHighlight}</span></h2>
          </div>
        </div>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mt-12 grid gap-5 md:grid-cols-2">{DEFAULTS.steelMaterials.map((material) => <article key={material.title} className="border border-white/10 bg-[#1A1918] p-6 sm:p-7"><h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">{material.title}</h3><div className="mt-6"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]">Best suited to</p><p className="mt-3 text-[15px] leading-relaxed text-[#E5E1DC]">{material.bestFit}</p></div><div className="mt-6 border-t border-white/10 pt-6"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]">Planning consideration</p><p className="mt-3 text-[15px] leading-relaxed text-[#C5C1BD]">{material.consideration}</p>{material.note ? <p className="mt-4 text-sm leading-relaxed text-[#C5C1BD]">{material.note}</p> : null}</div></article>)}</div>
          <div className="section-note mx-auto mt-8 max-w-[1000px]"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]">{DEFAULTS.steelCompatibilityHeading}</p><p className="mt-3">{DEFAULTS.steelCompatibility}</p><p className="mt-4">{DEFAULTS.steelTestingPrefix}<a href="https://store.astm.org/d0638-00.html" target="_blank" rel="noopener noreferrer" className="body-text-link body-text-link--dark">ASTM D638</a>{DEFAULTS.steelTestingMiddle}<a href="https://store.astm.org/standards/d256" target="_blank" rel="noopener noreferrer" className="body-text-link body-text-link--dark">ASTM D256</a>{DEFAULTS.steelTestingSuffix}</p></div>
        </div>
      </section>

      <section id="design-build" className="scroll-mt-[calc(var(--q4-announcement-height)+7rem)] bg-[#34312F] pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="max-w-3xl text-left lg:mx-auto lg:text-center service-section-title text-white"><EditableText path="tooling.moldBuildHeading" defaultValue={DEFAULTS.moldBuildHeading} /><span className="service-title-accent"><EditableText path="tooling.moldBuildHighlight" defaultValue={DEFAULTS.moldBuildHighlight} /></span></h2>
          <div className="mt-14 space-y-12 lg:space-y-16">
            <div className="grid items-center gap-8 border-y border-white/10 py-8 md:grid-cols-2 md:gap-12 lg:gap-16 lg:py-10">
              <div className="space-y-8">{DEFAULTS.moldBuildSteps.slice(0, 2).map((step, index) => <article key={step.title} className={index === 1 ? "border-t border-white/10 pt-8" : ""}><span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl"><EditableText path={`tooling.moldBuildSteps.${index}.title`} defaultValue={step.title} /></h3><p className="mt-4 text-[15px] leading-relaxed text-[#CFCFD2]"><EditableText path={`tooling.moldBuildSteps.${index}.paragraphs.0`} defaultValue={step.paragraphs[0]} multiline /></p></article>)}</div>
              <figure className="relative aspect-[3/2] overflow-hidden border border-[#D09947]/30"><StaticImage path="tooling.moldBuildImages.cadReview" defaultSrc="/injection-molding/cad-review-open-injection-mold-design.avif" alt="CAD review with an open injection mold design" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /></figure>
            </div>
            <div className="grid items-center gap-8 border-b border-white/10 pb-8 md:grid-cols-2 md:gap-12 lg:gap-16 lg:pb-10">
              <figure className="order-2 relative aspect-[3/2] overflow-hidden border border-white/10 md:order-1"><StaticImage path="tooling.moldBuildImages.installed" defaultSrc="/injection-molding/apexbatch-injection-mold-installed-for-t1-trial.webp" alt="Injection mold installed for a T1 trial" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /></figure>
              <article className="order-1 md:order-2"><span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">03</span><h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl"><EditableText path="tooling.moldBuildSteps.2.title" defaultValue={DEFAULTS.moldBuildSteps[2].title} /></h3><div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#CFCFD2]">{DEFAULTS.moldBuildSteps[2].paragraphs.map((paragraph, paragraphIndex) => <p key={paragraph} className={paragraphIndex > 0 ? "border-t border-white/10 pt-4" : undefined}><EditableText path={`tooling.moldBuildSteps.2.paragraphs.${paragraphIndex}`} defaultValue={paragraph} multiline /></p>)}</div></article>
            </div>
            <div className="grid items-center gap-8 border-b border-white/10 pb-8 md:grid-cols-2 md:gap-12 lg:gap-16 lg:pb-10">
              <div className="space-y-8">{DEFAULTS.moldBuildSteps.slice(3, 5).map((step, localIndex) => { const index = localIndex + 3; return <article key={step.title} className={localIndex === 1 ? "border-t border-white/10 pt-8" : ""}><span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl"><EditableText path={`tooling.moldBuildSteps.${index}.title`} defaultValue={step.title} /></h3><p className="mt-4 text-[15px] leading-relaxed text-[#CFCFD2]"><EditableText path={`tooling.moldBuildSteps.${index}.paragraphs.0`} defaultValue={step.paragraphs[0]} multiline /></p></article>; })}</div>
              <figure className="relative aspect-[3/2] overflow-hidden border border-white/10"><StaticImage path="tooling.moldBuildImages.operator" defaultSrc="/injection-molding/apexbatch-t1-trial-operator-checking-injection-mold.webp" alt="Operator checking an injection mold during a T1 trial" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /></figure>
            </div>
            <article className="grid gap-x-6 gap-y-3 border-b border-white/10 py-7 sm:grid-cols-[56px_minmax(0,0.42fr)_minmax(0,0.58fr)] sm:py-8"><span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">06</span><h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl"><EditableText path="tooling.moldBuildSteps.5.title" defaultValue={DEFAULTS.moldBuildSteps[5].title} /></h3><p className="text-[15px] leading-relaxed text-[#CFCFD2]"><EditableText path="tooling.moldBuildSteps.5.paragraphs.0" defaultValue={DEFAULTS.moldBuildSteps[5].paragraphs[0]} multiline /></p></article>
          </div>
          <div className="mt-10 flex justify-center"><Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group"><EditableText path="tooling.moldBuildCta" defaultValue={DEFAULTS.moldBuildCta} /><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="bg-black pt-12 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"><div className="mx-auto max-w-[1200px] px-6"><div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16"><div><h2 className="service-section-title text-white"><EditableText path="tooling.t1Heading" defaultValue={DEFAULTS.t1Heading} /><span className="service-title-accent"><EditableText path="tooling.t1Highlight" defaultValue={DEFAULTS.t1Highlight} /></span></h2><p className="service-section-copy mt-6"><EditableText path="tooling.t1Intro" defaultValue={DEFAULTS.t1Intro} multiline /></p></div><div className="relative aspect-[3/2] overflow-hidden border border-[#D09947]/30"><StaticImage path="tooling.t1Image" defaultSrc="/injection-molding/apexbatch-tooling-setup-and-validation.webp" alt="Technician preparing an injection mold for tooling setup and validation" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /></div></div><ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{DEFAULTS.t1Stages.map(([stage, purpose], index) => <li key={stage} className="border border-white/10 bg-black/20 p-5"><span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-lg font-semibold text-white"><EditableText path={`tooling.t1Stages.${index}.stage`} defaultValue={stage} /></h3><p className="mt-3 text-sm leading-relaxed text-[#C5C1BD]"><EditableText path={`tooling.t1Stages.${index}.purpose`} defaultValue={purpose} multiline /></p></li>)}</ol><p className="mx-auto mt-14 max-w-[1000px] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]"><EditableText path="tooling.t1ReviewLabel" defaultValue={DEFAULTS.t1ReviewLabel} /></p><div className="mx-auto mt-4 max-w-[1000px]"><ServiceTable columns={[{ header: "Review area", width: "32%", tone: "primary" }, { header: "Approval focus", width: "68%" }]} rows={DEFAULTS.t1ReviewRows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`tooling.t1ReviewRows.${rowIndex}.${cellIndex === 0 ? "area" : "focus"}`} defaultValue={cell} multiline />))} variant="standard" headerCase="uppercase" bodyDensity="dense" minTableWidth="680px" /></div><div className="mx-auto mt-8 max-w-4xl space-y-5 text-[15px] leading-relaxed text-[#D8D4CF]"><p className="border-t border-white/10 pt-5"><EditableText path="tooling.t1ReportNote" defaultValue={DEFAULTS.t1ReportNote} multiline /></p><p><EditableText path="tooling.t1ChangeNote" defaultValue={DEFAULTS.t1ChangeNote} multiline /></p><p><EditableText path="tooling.t1ReleaseNote" defaultValue={DEFAULTS.t1ReleaseNote} multiline /></p></div></div></section>

      <section id="cost-timing" className="scroll-mt-[calc(var(--q4-announcement-height)+7rem)] bg-[#34312F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl text-left lg:text-center"><h2 className="service-section-title text-white"><EditableText path="tooling.piecePartCostHeading" defaultValue={DEFAULTS.piecePartCostHeading} /><span className="service-title-accent"><EditableText path="tooling.piecePartCostHighlight" defaultValue={DEFAULTS.piecePartCostHighlight} /></span></h2></div>
          <div className="mt-12"><ServiceTable columns={[{ header: "Cost driver", width: "28%", tone: "primary" }, { header: "Lower-investment direction", width: "34%" }, { header: "Higher-investment direction", width: "38%", tone: "accent" }]} rows={DEFAULTS.piecePartCostRows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`tooling.piecePartCostRows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />))} variant="standard" headerCase="uppercase" bodyDensity="dense" minTableWidth="900px" /></div>
          <p className="mx-auto mt-8 max-w-4xl text-[15px] leading-relaxed text-[#CFCFD2]"><EditableText path="tooling.piecePartCostNote" defaultValue={DEFAULTS.piecePartCostNote} multiline /></p>
        </div>
      </section>

      <section className="bg-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(0,66fr)_minmax(280px,34fr)] lg:gap-16">
          <div className="order-2 min-w-0 lg:col-start-1 lg:row-start-1">
            <ServiceTable columns={[{ header: "Stage", width: "38%", tone: "primary" }, { header: "Main timing drivers", width: "62%" }]} rows={DEFAULTS.leadTimeItems.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`tooling.leadTimeItems.${rowIndex}.${cellIndex === 0 ? "stage" : "detail"}`} defaultValue={cell} multiline />))} variant="standard" headerCase="uppercase" bodyDensity="dense" minTableWidth="680px" />
          </div>
          <div className="order-1 min-w-0 lg:col-start-2 lg:row-start-1">
            <h2 className="service-section-title text-white"><EditableText path="tooling.leadTimeHeading" defaultValue={DEFAULTS.leadTimeHeading} /><span className="service-title-accent"><EditableText path="tooling.leadTimeHighlight" defaultValue={DEFAULTS.leadTimeHighlight} /></span></h2>
            <p className="service-section-copy mt-6"><EditableText path="tooling.leadTimeIntro" defaultValue={DEFAULTS.leadTimeIntro} multiline /></p>
            <aside className="mt-8 border-l-2 border-[#EEC569] bg-black/20 px-5 py-5 text-[15px] leading-relaxed text-[#E5E1DC] sm:px-6"><EditableText path="tooling.leadTimeNote" defaultValue={DEFAULTS.leadTimeNote} multiline /></aside>
          </div>
        </div>
      </section>

      <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
          <div className="min-w-0">
            <h2 className="service-section-title text-white"><EditableText path="tooling.quoteComparisonHeading" defaultValue={DEFAULTS.quoteComparisonHeading} /><span className="service-title-accent"><EditableText path="tooling.quoteComparisonHighlight" defaultValue={DEFAULTS.quoteComparisonHighlight} /></span></h2>
            <p className="service-section-copy mt-6"><EditableText path="tooling.quoteComparisonIntro" defaultValue={DEFAULTS.quoteComparisonIntro} multiline /></p>
            <aside className="mt-8 border-l-2 border-[#EEC569] bg-[#EEC569]/[0.08] px-5 py-5 text-[15px] leading-relaxed text-[#E5E1DC] sm:px-6"><EditableText path="tooling.quoteComparisonNote" defaultValue={DEFAULTS.quoteComparisonNote} multiline /></aside>
            <Link href="https://app.apexbatch.com/" rel="nofollow" className="body-text-link body-text-link--dark mt-6 inline-flex items-center gap-2 text-sm"><EditableText path="tooling.quoteComparisonCta" defaultValue={DEFAULTS.quoteComparisonCta} /><ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="min-w-0">
            <ServiceTable columns={[{ header: "Quote item", width: "38%", tone: "primary" }, { header: "Why it matters", width: "62%" }]} rows={DEFAULTS.quoteComparisonItems.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`tooling.quoteComparisonItems.${rowIndex}.${cellIndex === 0 ? "item" : "detail"}`} defaultValue={cell} multiline />))} variant="standard" headerCase="uppercase" bodyDensity="dense" minTableWidth="680px" />
          </div>
        </div>
      </section>


      <section className="bg-black py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1200px] px-6"><div className="mx-auto max-w-4xl text-left lg:text-center"><h2 className="service-section-title text-white"><EditableText path="tooling.moldLifeHeading" defaultValue={DEFAULTS.moldLifeHeading} /><span className="service-title-accent"><EditableText path="tooling.moldLifeHighlight" defaultValue={DEFAULTS.moldLifeHighlight} /></span></h2></div><article className="mx-auto mt-14 grid max-w-[1100px] gap-10 border border-white/10 bg-[#171717] p-6 sm:p-7 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-16"><h3 className="text-xl font-semibold text-white sm:text-2xl lg:self-center">What Affects Mold Life?</h3><div className="space-y-5 text-[15px] leading-relaxed text-[#CFCFD2]"><p><EditableText path="tooling.moldLife" defaultValue={DEFAULTS.moldLife} multiline /></p><p><EditableText path="tooling.moldLifeDetail" defaultValue={DEFAULTS.moldLifeDetail} multiline /></p><div className="flex flex-wrap gap-2 pt-2">{["Tool steel", "Resin & fillers", "Production conditions"].map((item) => <span key={item} className="border border-[#D09947]/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#EEC569]">{item}</span>)}</div></div></article><div className="mx-auto mt-5 grid max-w-[1100px] gap-5 md:grid-cols-2"><article className="border border-white/10 bg-[#171717] p-6 sm:p-7"><h3 className="text-xl font-semibold text-white sm:text-2xl">Maintenance and Storage</h3><p className="mt-4 text-[15px] leading-relaxed text-[#CFCFD2]"><EditableText path="tooling.maintenance" defaultValue={DEFAULTS.maintenance} multiline /></p></article><article className="border border-white/10 bg-[#171717] p-6 sm:p-7"><h3 className="text-xl font-semibold text-white sm:text-2xl">Ownership and Transfer Terms</h3><p className="mt-4 text-[15px] leading-relaxed text-[#CFCFD2]"><EditableText path="tooling.ownership" defaultValue={DEFAULTS.ownership} multiline /></p></article></div><article className="mx-auto mt-5 grid max-w-[1100px] gap-7 border border-[#D09947]/25 bg-[#171717] p-6 sm:p-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]"><div><h3 className="text-xl font-semibold text-white sm:text-2xl">Transferring an Existing Injection Mold</h3><p className="mt-4 text-[15px] leading-relaxed text-[#CFCFD2]"><EditableText path="tooling.transfer" defaultValue={DEFAULTS.transfer} multiline /></p><div className="mt-6 hidden lg:block"><Link href="/contact" className="cta-primary group w-fit"><EditableText path="tooling.transferCta" defaultValue={DEFAULTS.transferCta} /><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></div></div><div className="flex flex-col gap-6 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"><p className="text-[15px] leading-relaxed text-[#E5E1DC]"><EditableText path="tooling.transferNote" defaultValue={DEFAULTS.transferNote} multiline /></p><div className="mt-6 lg:hidden"><Link href="/contact" className="cta-primary group w-fit"><EditableText path="tooling.transferCta" defaultValue={DEFAULTS.transferCta} /><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></div></div></article></div></section>

      <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16">
          <div className="lg:self-center">
            <h2 className="service-section-title text-white"><EditableText path="tooling.toolingTypesHeading" defaultValue={DEFAULTS.toolingTypesHeading} /><span className="service-title-accent"><EditableText path="tooling.toolingTypesHighlight" defaultValue={DEFAULTS.toolingTypesHighlight} /></span></h2>
          </div>
          <div className="space-y-3">
            {DEFAULTS.toolingTypes.map((toolingType, index) => {
              const isOpen = openToolingType === index;
              return <article key={toolingType.title} className={isOpen ? "overflow-hidden rounded-xl bg-[#D09947]/20" : "overflow-hidden rounded-xl bg-[#2A2A2A] transition-colors hover:bg-[#D09947]/15"}>
                <h3><button type="button" onClick={() => setOpenToolingType(isOpen ? -1 : index)} aria-expanded={isOpen} className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"><span className="min-w-0 flex-1 text-[17px] font-semibold leading-snug text-white sm:text-lg"><EditableText path={`tooling.toolingTypes.${index}.title`} defaultValue={toolingType.title} /></span><ChevronDown className={isOpen ? "h-5 w-5 shrink-0 rotate-180 text-[#EEC569] transition-transform" : "h-5 w-5 shrink-0 text-[#EEC569] transition-transform"} aria-hidden="true" /></button></h3>
                <div className={isOpen ? "grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-300" : "grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300"}><div className="overflow-hidden"><div className="space-y-4 border-t border-white/10 px-5 py-5 text-[15px] leading-relaxed text-[#E5E1DC] sm:px-6"><p><EditableText path={`tooling.toolingTypes.${index}.lead`} defaultValue={toolingType.lead} /><strong className="font-semibold text-white"><EditableText path={`tooling.toolingTypes.${index}.emphasis`} defaultValue={toolingType.emphasis} /></strong><EditableText path={`tooling.toolingTypes.${index}.leadEnd`} defaultValue={toolingType.leadEnd} /></p><p><EditableText path={`tooling.toolingTypes.${index}.detail`} defaultValue={toolingType.detail} multiline /></p></div></div></div>
              </article>;
            })}
          </div>
        </div>
      </section>


      <section className="bg-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl text-left lg:text-center"><h2 className="service-section-title text-white"><EditableText path="tooling.moldStructureHeading" defaultValue={DEFAULTS.moldStructureHeading} /><span className="service-title-accent"><EditableText path="tooling.moldStructureHighlight" defaultValue={DEFAULTS.moldStructureHighlight} /></span></h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[DEFAULTS.coreCavity, DEFAULTS.cooling].map((system, index) => {
              const Icon = index === 0 ? Box : Snowflake;
              return <article key={system.title} className="border border-white/10 bg-[#1A1918] p-6 sm:p-7"><h3 className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"><Icon className="h-5 w-5 shrink-0 text-[#EEC569]" aria-hidden="true" /><EditableText path={`tooling.${index === 0 ? "coreCavity" : "cooling"}.title`} defaultValue={system.title} /></h3><div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#D8D4CF]">{system.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraph}><EditableText path={`tooling.${index === 0 ? "coreCavity" : "cooling"}.paragraphs.${paragraphIndex}`} defaultValue={paragraph} multiline /></p>)}</div></article>;
            })}
          </div>
          <article className="mt-5 border border-white/10 bg-[#1A1918] p-6 sm:p-7"><h3 className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"><GitFork className="h-5 w-5 shrink-0 text-[#EEC569]" aria-hidden="true" /><EditableText path="tooling.runners.title" defaultValue={DEFAULTS.runners.title} /></h3><p className="mt-5 max-w-4xl text-[15px] leading-relaxed text-[#D8D4CF]"><EditableText path="tooling.runners.description" defaultValue={DEFAULTS.runners.description} multiline /></p><div className="mt-6 grid gap-4 md:grid-cols-2"><div className="border border-white/10 bg-black/20 p-5"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]">Cold runner</p><p className="mt-3 text-[15px] leading-relaxed text-[#E5E1DC]"><EditableText path="tooling.runners.coldRunner" defaultValue={DEFAULTS.runners.coldRunner} multiline /></p></div><div className="border border-white/10 bg-black/20 p-5"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]">Hot runner</p><p className="mt-3 text-[15px] leading-relaxed text-[#E5E1DC]"><EditableText path="tooling.runners.hotRunner" defaultValue={DEFAULTS.runners.hotRunner} multiline /></p></div></div><p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]">Common gate directions</p><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{DEFAULTS.runners.gates.map(([title, description], index) => <div key={title} className="border border-white/10 px-4 py-4"><p className="text-sm font-semibold text-white"><EditableText path={`tooling.runners.gates.${index}.title`} defaultValue={title} /></p><p className="mt-2 text-sm leading-relaxed text-[#C5C1BD]"><EditableText path={`tooling.runners.gates.${index}.description`} defaultValue={description} multiline /></p></div>)}</div><p className="mt-6 border-t border-white/10 pt-6 text-[15px] leading-relaxed text-[#D8D4CF]"><EditableText path="tooling.runners.note" defaultValue={DEFAULTS.runners.note} multiline /></p></article>
          <article className="mt-5 border border-white/10 bg-[#1A1918] p-6 sm:p-7"><h3 className="text-xl font-semibold text-white sm:text-2xl">Venting and Ejection</h3><div className="mt-6 grid gap-6 md:grid-cols-2"><div><p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]"><Wind className="h-4 w-4" aria-hidden="true" /><EditableText path="tooling.venting.title" defaultValue={DEFAULTS.venting.title} /></p><p className="mt-3 text-[15px] leading-relaxed text-[#D8D4CF]"><EditableText path="tooling.venting.description" defaultValue={DEFAULTS.venting.description} multiline /></p></div><div className="border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0"><p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]"><ArrowUpFromLine className="h-4 w-4" aria-hidden="true" /><EditableText path="tooling.ejection.title" defaultValue={DEFAULTS.ejection.title} /></p><p className="mt-3 text-[15px] leading-relaxed text-[#D8D4CF]"><EditableText path="tooling.ejection.description" defaultValue={DEFAULTS.ejection.description} multiline /></p></div></div></article>
        </div>
      </section>

      <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl text-left lg:text-center">
            <h2 className="service-section-title text-white"><EditableText path="tooling.designReviewHeading" defaultValue={DEFAULTS.designReviewHeading} /><span className="service-title-accent"><EditableText path="tooling.designReviewHighlight" defaultValue={DEFAULTS.designReviewHighlight} /></span></h2>
            <p className="service-section-copy mt-6 lg:mx-auto"><EditableText path="tooling.designReviewIntro" defaultValue={DEFAULTS.designReviewIntro} multiline /></p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {DEFAULTS.designReviewItems.map(([title, description], index) => <article key={title} className="border border-white/10 bg-[#1A1918] p-6 sm:p-7"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]"><EditableText path={`tooling.designReviewItems.${index}.title`} defaultValue={title} /></p><p className="mt-4 text-[15px] leading-relaxed text-[#E5E1DC]"><EditableText path={`tooling.designReviewItems.${index}.description`} defaultValue={description} multiline /></p></article>)}
          </div>
          <div className="mt-5 grid gap-5 border border-white/10 p-6 sm:p-7 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-10">
            <h3 className="text-xl font-semibold text-white sm:text-2xl"><EditableText path="tooling.moldflowHeading" defaultValue={DEFAULTS.moldflowHeading} /></h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-[#E5E1DC]"><p><EditableText path="tooling.moldflowPrimary" defaultValue={DEFAULTS.moldflowPrimary} multiline /></p><p className="border-t border-white/10 pt-4 text-[#C5C1BD]"><EditableText path="tooling.moldflowSecondary" defaultValue={DEFAULTS.moldflowSecondary} multiline /></p></div>
          </div>
          <article className="mt-5 border border-white/10 p-6 sm:p-7">
            <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl"><EditableText path="tooling.precisionHeading" defaultValue={DEFAULTS.precisionHeading} /><span className="text-[#EEC569]"><EditableText path="tooling.precisionHighlight" defaultValue={DEFAULTS.precisionHighlight} /></span></h3>
            <div className="mt-6"><ServiceTable columns={DEFAULTS.precisionColumns.map((column, index) => ({ header: <EditableText key={column} path={`tooling.precisionColumns.${index}`} defaultValue={column} />, width: ["27%", "31%", "42%"][index], tone: index === 0 ? "primary" as const : "default" as const }))} rows={DEFAULTS.precisionRows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`tooling.precisionRows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />))} variant="standard" headerCase="uppercase" minTableWidth="860px" /></div>
            <p className="mt-6 text-[15px] leading-relaxed text-[#D8D4CF]"><EditableText path="tooling.precisionNote" defaultValue={DEFAULTS.precisionNote} multiline /> <a href="https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:20457:ed-2:v1:en" target="_blank" rel="noopener noreferrer" className="body-text-link body-text-link--dark"><EditableText path="tooling.precisionLink" defaultValue={DEFAULTS.precisionLink} /></a><EditableText path="tooling.precisionLinkSuffix" defaultValue={DEFAULTS.precisionLinkSuffix} /></p>
          </article>
        </div>
      </section>

      <section className="bg-black py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1200px] px-6"><div className="mx-auto max-w-4xl text-left lg:text-center"><h2 className="service-section-title text-white"><EditableText path="tooling.specializedHeading" defaultValue={DEFAULTS.specializedHeading} /><span className="service-title-accent"><EditableText path="tooling.specializedHighlight" defaultValue={DEFAULTS.specializedHighlight} /></span></h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{DEFAULTS.specializedItems.map(([title, description, linkLabel, href], index) => <article key={title} className="flex min-h-full flex-col border border-white/10 bg-[#171717] p-6 sm:p-7"><h3 className="mt-5 text-xl font-semibold leading-snug text-white sm:text-2xl"><EditableText path={`tooling.specializedItems.${index}.title`} defaultValue={title} /></h3><p className="mt-4 text-[15px] leading-relaxed text-[#CFCFD2]"><EditableText path={`tooling.specializedItems.${index}.description`} defaultValue={description} multiline /></p><div className="mt-auto pt-7">{href ? <Link href={href} className={index === 2 ? "cta-primary group w-fit" : "body-text-link body-text-link--dark mt-auto inline-flex items-center gap-2 text-sm"}><EditableText path={`tooling.specializedItems.${index}.linkLabel`} defaultValue={linkLabel} /><ArrowRight className={index === 2 ? "h-5 w-5 transition-transform group-hover:translate-x-1" : "h-4 w-4"} aria-hidden="true" /></Link> : <p className="border-t border-white/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#EEC569]"><EditableText path={`tooling.specializedItems.${index}.linkLabel`} defaultValue={linkLabel} /></p>}</div></article>)}</div></div></section>

      <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1200px] px-6"><div className="mx-auto max-w-4xl text-left md:text-center"><h2 className="service-section-title text-white"><EditableText path="tooling.risksHeading" defaultValue={DEFAULTS.risksHeading} /><span className="service-title-accent"><EditableText path="tooling.risksHighlight" defaultValue={DEFAULTS.risksHighlight} /></span></h2></div><div className="mx-auto mt-12 max-w-[1000px]"><ServiceTable columns={[{ header: "Potential issue", width: "32%", tone: "primary" }, { header: "Early review focus", width: "68%" }]} rows={DEFAULTS.risksRows.map((row, rowIndex) => row.map((cell, cellIndex) => <EditableText key={`${rowIndex}-${cellIndex}`} path={`tooling.risksRows.${rowIndex}.${cellIndex === 0 ? "issue" : "focus"}`} defaultValue={cell} multiline />))} variant="standard" headerCase="uppercase" bodyDensity="dense" minTableWidth="720px" /></div><p className="mx-auto mt-8 max-w-4xl text-left text-[15px] sm:text-center leading-relaxed text-[#CFCFD2]"><EditableText path="tooling.risksNote" defaultValue={DEFAULTS.risksNote} multiline /></p></div></section>

      </>

  );
}
