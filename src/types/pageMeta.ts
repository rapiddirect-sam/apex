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
  "/reviews": {
    title: "Customer Reviews - ApexBatch Client Testimonials",
    description: "Read what our clients say about ApexBatch's precision manufacturing services. Real testimonials from satisfied customers worldwide.",
  },
  "/blog": {
    title: "ApexBatch Blog - Manufacturing Insights & Updates",
    description: "Stay updated with the latest manufacturing insights, industry news, and technical articles from ApexBatch.",
  },
};
