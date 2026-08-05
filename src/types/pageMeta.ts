export interface PageMeta {
  id: string;
  pageSlug: string;
  metaTitle: string;
  metaDescription: string;
  updatedAt: Date;
}

export interface PageMetaInput {
  pageSlug: string;
  metaTitle: string;
  metaDescription: string;
}

// Default meta values for each page
export const DEFAULT_PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ApexBatch - Precision CNC Machining & Manufacturing",
    description: "ApexBatch delivers high-precision CNC machining and manufacturing services for medium-to-large batch production. ISO certified quality management with ±0.01-0.05mm tolerance control.",
  },
  "/about": {
    title: "About ApexBatch - Our Story & Manufacturing Expertise",
    description: "Learn about ApexBatch's journey, our expert team, and our commitment to precision manufacturing. Inherited expertise from the world's pioneer in digital manufacturing.",
  },
  "/contact": {
    title: "Contact ApexBatch - Get a Quote for Your Project",
    description: "Contact ApexBatch for precision CNC machining quotes. Our team responds within 24 hours. Located in Shenzhen, China.",
  },
  "/quality": {
    title: "Quality Assurance - ApexBatch's Precision Standards",
    description: "Discover ApexBatch's comprehensive three-phase quality assurance system. ISO certified with 100% traceability and ±0.01-0.05mm tolerance control.",
  },
  "/cnc-machining": {
    title: "CNC Machining Services - ApexBatch Precision Manufacturing",
    description: "Professional CNC machining services including milling, turning, and multi-axis machining. High-precision parts for aerospace, automotive, medical, and more.",
  },
  "/cnc-milling": {
    title: "CNC Milling Services - ApexBatch Precision Manufacturing",
    description: "Professional CNC milling services for precision metal and plastic parts. 3-axis and 5-axis milling with tight tolerances for aerospace, automotive, medical, and more.",
  },
  "/cnc-turning": {
    title: "CNC Turning Services - ApexBatch Precision Manufacturing",
    description: "Professional CNC turning and lathe services for cylindrical precision parts. 2-axis, live-tool, and Swiss-type turning with tight tolerances for aerospace, automotive, medical, and more.",
  },
  "/laser-cutting": {
    title: "Laser Cutting Services - ApexBatch Precision Manufacturing",
    description: "Professional fiber and CO2 laser cutting services for sheet metal parts. High-precision cutting for aluminum, stainless steel, and carbon steel with tight tolerances and fast turnaround.",
  },
  "/reviews": {
    title: "Customer Reviews - ApexBatch Client Testimonials",
    description: "Read what our clients say about ApexBatch's precision manufacturing services. Real testimonials from satisfied customers worldwide.",
  },
  "/blog": {
    title: "ApexBatch Blog - Manufacturing Insights & Updates",
    description: "Stay updated with the latest manufacturing insights, industry news, and technical articles from ApexBatch.",
  },
  "/injection-molding": {
    title: "Injection Molding Services - ApexBatch Manufacturing",
    description: "Professional injection molding services for medium-to-large batch production. General, engineering, and high-performance plastics with tight tolerances.",
  },
  "/overmolding": {
    title: "Overmolding Services - ApexBatch Manufacturing",
    description: "Professional overmolding services for multi-material parts. Two-shot, insert, and elastomer overmolding with material compatibility review and bond strength control.",
  },
  "/die-casting": {
    title: "Die Casting Services - ApexBatch Manufacturing",
    description: "High pressure and gravity die casting services for aluminum and zinc parts. Tight tolerances, complex geometries, and integrated post-machining & finishing.",
  },
  "/extrusion-services": {
    title: "Extrusion Services - ApexBatch Manufacturing",
    description: "Custom aluminum and plastic extrusion services. Standard and complex profiles with tight tolerances and secondary operations.",
  },
  "/sheet-metal-fabrication": {
    title: "Sheet Metal Fabrication Services - ApexBatch Manufacturing",
    description: "Precision sheet metal fabrication services including laser cutting, bending, stamping, and welding. Aluminum, stainless steel, and carbon steel.",
  },
  "/surface-finish": {
    title: "Surface Finishing Services - ApexBatch Manufacturing",
    description: "Comprehensive surface finishing services including anodizing, powder coating, plating, painting, and polishing for all materials.",
  },
  "/materials": {
    title: "Manufacturing Materials - ApexBatch",
    description: "Explore our wide range of manufacturing materials including metals, plastics, and composites for CNC machining, injection molding, and more.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - ApexBatch",
    description: "ApexBatch privacy policy. Learn how we collect, use, and protect your personal information.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions - ApexBatch",
    description: "ApexBatch terms and conditions for using our website and manufacturing services.",
  },
};
