"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import { getVisitData } from "@/hooks/useVisitTracking";
import { EditableText } from "@/components/cms";
import {
  Phone,
  Mail,
  Upload,
  ChevronDown,
  User,
  Building2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

declare global {
  interface Window {
    grecaptcha?: {
      getResponse: () => string;
      reset: () => void;
    };
  }
}

const DEFAULTS = {
  // Left column - Form header
  formPillLabel: "CONTACT FORM",
  formHeadingPrefix: "Send Us a ",
  formHeadingHighlight: "Message",
  formSubheading: "Fill out the form below and our team will get back to you within 24 hours.",
  // File upload zone
  uploadTitle: "Drag & Drop Your Files Here",
  uploadOr: "or",
  uploadBrowse: "Browse Files",
  uploadFormats: "Available: stp, step, stl, igs, iges, sldprt, x_t, jpg, png, pdf, zip, rar",
  // Success/error messages
  successMessage: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
  errorMessage: "Please fill in all required fields. Project description must be at least 10 characters.",
  // Right column - Direct Contact
  directContactPill: "DIRECT CONTACT",
  directContactHeadingPrefix: "Reach Us ",
  directContactHeadingHighlight: "Directly",
  callUsTitle: "Call Us",
  callUsDetail: "Phone / WhatsApp: +86 13302480516",
  emailUsTitle: "Email Us",
  emailGeneral: "General Inquiries: info@apexbatch.com",
  emailQuote: "Quick Quote: quotes@apexbatch.com",
  emailSupport: "Support: support@apexbatch.com",
  // Right column - Location
  locationPill: "LOCATION",
  // Hong Kong office
  headOfficeTitle: "HongKong Office",
  headOfficeCompany: "APEX BATCH LIMITED",
  headOfficeAddress:
    "Unit 1111, 11/F, Hollywood Plaza\n610 Nathan Rd, Mong Kok, Hong Kong",
  headOfficeDirectionsLabel: "Directions — Hong Kong",
  // Section title above Shenzhen map/address card
  facilityCaption: "Head Office",
  addressLabel: "Head Office",
  addressValue: "2nd Floor, Building F, 52 Huangpu Road, Shangliao Community, Xinqiao Street, Baoan District, Shenzhen, China",
};

/** Google Maps URL (stable; not CMS-editable to avoid broken links) */
const MAPS_URL_HEAD_OFFICE_HK =
  "https://www.google.com/maps/search/?api=1&query=Hollywood+Plaza%20610+Nathan+Road+Mong+Kok+Hong+Kong";
const MAPS_URL_SHENZHEN =
  "https://www.google.com/maps/search/?api=1&query=52+Huangpu+Road+Shangliao+Community+Xinqiao+Street+Baoan+District+Shenzhen+Guangdong+China";

const businessNeedsOptions = [
  "CNC Machining",
  "Sheet Metal Fabrication",
  "Injection Molding",
  "Die Casting",
  "Surface Finishing",
  "Assembly Services",
  "Multiple Services",
];

export function ContactForm() {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    email: "",
    phone: "",
    businessNeeds: "",
    projectDescription: "",
    website: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState<string>(DEFAULTS.errorMessage);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formStartAtRef = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.firstName.trim() ||
        !formData.email.trim() || !formData.businessNeeds ||
        formData.projectDescription.trim().length < 10) {
      setErrorText(DEFAULTS.errorMessage);
      setSubmitStatus("error");
      return;
    }

    const recaptchaToken = typeof window !== "undefined" ? window.grecaptcha?.getResponse() : "";
    if (!recaptchaSiteKey || !recaptchaToken) {
      setErrorText("Please complete the reCAPTCHA verification before submitting.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorText(DEFAULTS.errorMessage);

    try {
      // Upload files to S3 first
      const uploadedAttachments: { url: string; filename: string }[] = [];

      if (files.length > 0) {
        setIsUploading(true);
        for (const file of files) {
          const uploadFormData = new FormData();
          uploadFormData.append("file", file);

          const uploadRes = await fetch("/api/contact/upload", {
            method: "POST",
            body: uploadFormData,
          });

          if (uploadRes.ok) {
            const { url, filename } = await uploadRes.json();
            uploadedAttachments.push({ url, filename });
          }
        }
        setIsUploading(false);
      }

      // Get visit tracking data
      const visitData = getVisitData();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          attachments: uploadedAttachments,
          tracking: visitData ? {
            landingPage: visitData.landingPage,
            landingTime: visitData.landingTime,
            referrer: visitData.referrer,
            visitPath: visitData.visitPath,
            lastVisitPage: visitData.lastVisitPage,
            trafficChannel: visitData.trafficChannel,
            adKeyword: visitData.adKeyword,
            extraInfo: visitData.extraInfo,
          } : null,
          recaptchaToken,
          website: formData.website,
          formStartedAt: formStartAtRef.current,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          companyName: "",
          email: "",
          phone: "",
          businessNeeds: "",
          projectDescription: "",
          website: "",
        });
        setFiles([]);
        formStartAtRef.current = Date.now();
        window.grecaptcha?.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorText(data?.error || DEFAULTS.errorMessage);
        setSubmitStatus("error");
      }
    } catch {
      setErrorText(DEFAULTS.errorMessage);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const allowedExtensions = [
    ".stp", ".step", ".stl", ".igs", ".iges", ".sldprt", ".x_t",
    ".jpg", ".jpeg", ".png", ".pdf", ".zip", ".rar"
  ];

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;
    const newFiles = Array.from(selectedFiles).filter((file) => {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      return allowedExtensions.includes(ext);
    });
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const labelStyles: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "#EEC569",
    marginBottom: "8px",
  };

  const inputWrapperStyles: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
  };

  const inputStyles: React.CSSProperties = {
    width: "100%",
    background: "#1A1A1A",
    border: "1px solid #D09947",
    borderRadius: "8px",
    padding: "14px 16px 14px 48px",
    fontSize: "14px",
    color: "#FFFFFF",
    outline: "none",
    height: "50px",
  };

  const iconStyles: React.CSSProperties = {
    position: "absolute",
    left: "16px",
    width: "18px",
    height: "18px",
    color: "#D09947",
    pointerEvents: "none",
  };

  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 80px) 0 clamp(40px, 6vw, 60px)",
        background: "#000000",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_400px]"
          style={{
            gap: "48px",
          }}
        >
          {/* Left Column - Form (NO card wrapper) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Form Header */}
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 24px",
                  border: "1px solid #7F4D0F",
                  backgroundColor: "transparent",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#D09947",
                  }}
                />
                <span
                  style={{
                    color: "#EEC569",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                  }}
                >
                  <EditableText
                    path="form.pillLabel"
                    defaultValue={DEFAULTS.formPillLabel}
                  />
                </span>
              </div>

              <h2
                className="text-white"
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 700,
                  marginBottom: "12px",
                  letterSpacing: "-0.015em",
                }}
              >
                <EditableText
                  path="form.headingPrefix"
                  defaultValue={DEFAULTS.formHeadingPrefix}
                />
                <span style={{ color: "#EEC569" }}>
                  <EditableText
                    path="form.headingHighlight"
                    defaultValue={DEFAULTS.formHeadingHighlight}
                  />
                </span>
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#EEC569",
                  lineHeight: 1.6,
                }}
              >
                <EditableText
                  path="form.subheading"
                  defaultValue={DEFAULTS.formSubheading}
                  multiline
                />
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Honeypot field: hidden for users, visible for bots */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                autoComplete="off"
                tabIndex={-1}
                style={{ display: "none" }}
                aria-hidden="true"
              />

              {/* First Name & Company Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
                <div>
                  <label style={labelStyles}>First Name *</label>
                  <div style={inputWrapperStyles}>
                    <User style={iconStyles as React.CSSProperties} />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      style={inputStyles}
                      className="placeholder-gold"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyles}>Company Name</label>
                  <div style={inputWrapperStyles}>
                    <Building2 style={iconStyles as React.CSSProperties} />
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Your Company (optional)"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      style={inputStyles}
                      className="placeholder-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
                <div>
                  <label style={labelStyles}>Email Address *</label>
                  <div style={inputWrapperStyles}>
                    <Mail style={iconStyles as React.CSSProperties} />
                    <input
                      type="email"
                      name="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={inputStyles}
                      className="placeholder-gold"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyles}>Phone / WhatsApp</label>
                  <div style={inputWrapperStyles}>
                    <Phone style={iconStyles as React.CSSProperties} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={inputStyles}
                      className="placeholder-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Business Needs Dropdown */}
              <div>
                <label style={labelStyles}>Business Needs*</label>
                <div style={{ position: "relative" }}>
                  <select
                    name="businessNeeds"
                    value={formData.businessNeeds}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      background: "#1A1A1A",
                      border: "1px solid #D09947",
                      borderRadius: "8px",
                      padding: "14px 48px 14px 16px",
                      fontSize: "14px",
                      color: formData.businessNeeds ? "#FFFFFF" : "#666666",
                      outline: "none",
                      height: "50px",
                      appearance: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" style={{ background: "#1A1A1A" }}>
                      Select your manufacturing needs
                    </option>
                    {businessNeedsOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        style={{ background: "#1A1A1A" }}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  {/* Dropdown icon with circular background */}
                  <div
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(208,153,71,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <ChevronDown
                      style={{ width: "16px", height: "16px", color: "#D09947" }}
                    />
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label style={labelStyles}>
                  Project Description (Include Material, Quantity & Finishing)*
                </label>
                <div style={{ position: "relative" }}>
                  <MessageSquare
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "16px",
                      width: "18px",
                      height: "18px",
                      color: "#D09947",
                      pointerEvents: "none",
                    }}
                  />
                  <textarea
                    name="projectDescription"
                    placeholder="Tell us about your project requirements..."
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    minLength={10}
                    style={{
                      width: "100%",
                      background: "#1A1A1A",
                      border: "1px solid #D09947",
                      borderRadius: "8px",
                      padding: "14px 16px 14px 48px",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      outline: "none",
                      resize: "none",
                      minHeight: "110px",
                    }}
                    className="placeholder-gold"
                  />
                </div>
              </div>

              {/* File Upload Zone */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{
                  background: isDragOver ? "#2A2520" : "#1A1715",
                  border: isDragOver ? "2px dashed #D09947" : "2px dashed rgba(208,153,71,0.4)",
                  borderRadius: "12px",
                  padding: "40px 20px",
                  textAlign: "center",
                  transition: "all 0.2s ease",
                }}
              >
                {/* Hidden file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => handleFileSelect(e.target.files)}
                  multiple
                  accept=".stp,.step,.stl,.igs,.iges,.sldprt,.x_t,.jpg,.jpeg,.png,.pdf,.zip,.rar"
                  style={{ display: "none" }}
                />
                {/* Upload icon in container */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "rgba(208,153,71,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Upload
                    style={{
                      width: "28px",
                      height: "28px",
                      color: "#D09947",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  <EditableText
                    path="form.uploadTitle"
                    defaultValue={DEFAULTS.uploadTitle}
                  />
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666666",
                    marginBottom: "16px",
                  }}
                >
                  <EditableText
                    path="form.uploadOr"
                    defaultValue={DEFAULTS.uploadOr}
                  />
                </p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    background: "transparent",
                    border: "1px solid #D09947",
                    color: "#D09947",
                    fontSize: "13px",
                    fontWeight: 500,
                    padding: "8px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginBottom: "16px",
                  }}
                >
                  <EditableText
                    path="form.uploadBrowse"
                    defaultValue={DEFAULTS.uploadBrowse}
                  />
                </button>
                <p style={{ fontSize: "11px", color: "rgba(208,153,71,0.7)" }}>
                  <EditableText
                    path="form.uploadFormats"
                    defaultValue={DEFAULTS.uploadFormats}
                  />
                </p>

                {/* Display selected files */}
                {files.length > 0 && (
                  <div style={{ marginTop: "20px", textAlign: "left" }}>
                    <p style={{ fontSize: "13px", color: "#EEC569", marginBottom: "10px" }}>
                      Selected Files ({files.length}):
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {files.map((file, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: "rgba(208,153,71,0.1)",
                            border: "1px solid rgba(208,153,71,0.3)",
                            borderRadius: "6px",
                            padding: "8px 12px",
                          }}
                        >
                          <span style={{ fontSize: "13px", color: "#C5C6C9" }}>
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#D09947",
                              cursor: "pointer",
                              fontSize: "18px",
                              lineHeight: 1,
                              padding: "0 4px",
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* reCAPTCHA */}
              <div>
                <div
                  className="g-recaptcha"
                  data-sitekey={recaptchaSiteKey}
                  style={{ transformOrigin: "left top" }}
                />
                {!recaptchaSiteKey && (
                  <p style={{ marginTop: "8px", fontSize: "12px", color: "#ef4444" }}>
                    reCAPTCHA is not configured. Please add NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
                  </p>
                )}
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <div
                  style={{
                    background: "rgba(34, 197, 94, 0.1)",
                    border: "1px solid #22c55e",
                    borderRadius: "8px",
                    padding: "16px",
                    color: "#22c55e",
                    fontSize: "14px",
                  }}
                >
                  <EditableText
                    path="form.successMessage"
                    defaultValue={DEFAULTS.successMessage}
                    multiline
                  />
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid #ef4444",
                    borderRadius: "8px",
                    padding: "16px",
                    color: "#ef4444",
                    fontSize: "14px",
                  }}
                >
                  {errorText}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isUploading}
                className={`w-full font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center justify-center gap-2 group ${
                  isSubmitting || isUploading
                    ? "bg-[#666] text-[#999] cursor-not-allowed"
                    : "bg-[#D09947] hover:bg-[#EEC569] text-[#000000]"
                }`}
              >
                {isUploading ? "Uploading files..." : isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && !isUploading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Cards - WITH container background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              borderRadius: "18px",
              border: "1px solid rgba(208,153,71,0.25)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignSelf: "start",
            }}
          >
            {/* Reach Us Directly Section */}
            <div>
              {/* Header */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 24px",
                  border: "1px solid #7F4D0F",
                  backgroundColor: "transparent",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#D09947",
                  }}
                />
                <span
                  style={{
                    color: "#EEC569",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                  }}
                >
                  <EditableText
                    path="sidebar.directContactPill"
                    defaultValue={DEFAULTS.directContactPill}
                  />
                </span>
              </div>

              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                <EditableText
                  path="sidebar.directContactHeadingPrefix"
                  defaultValue={DEFAULTS.directContactHeadingPrefix}
                />
                <span style={{ color: "#EEC569" }}>
                  <EditableText
                    path="sidebar.directContactHeadingHighlight"
                    defaultValue={DEFAULTS.directContactHeadingHighlight}
                  />
                </span>
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Call Us Box */}
                <div
                  style={{
                    background: "#34312F",
                    borderRadius: "10px",
                    border: "1px solid rgba(208,153,71,0.15)",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: "rgba(208,153,71,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#D09947",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "4px",
                      }}
                    >
                      <EditableText
                        path="sidebar.callUsTitle"
                        defaultValue={DEFAULTS.callUsTitle}
                      />
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      <EditableText
                        path="sidebar.callUsDetail"
                        defaultValue={DEFAULTS.callUsDetail}
                      />
                    </p>
                  </div>
                </div>

                {/* Email Us Box */}
                <div
                  style={{
                    background: "#34312F",
                    borderRadius: "10px",
                    border: "1px solid rgba(208,153,71,0.15)",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: "rgba(208,153,71,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#D09947",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "4px",
                      }}
                    >
                      <EditableText
                        path="sidebar.emailUsTitle"
                        defaultValue={DEFAULTS.emailUsTitle}
                      />
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      <EditableText
                        path="sidebar.emailGeneral"
                        defaultValue={DEFAULTS.emailGeneral}
                      />
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      <EditableText
                        path="sidebar.emailQuote"
                        defaultValue={DEFAULTS.emailQuote}
                      />
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      <EditableText
                        path="sidebar.emailSupport"
                        defaultValue={DEFAULTS.emailSupport}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diamond Divider */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "24px 0",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#D09947",
                  transform: "rotate(45deg)",
                }}
              />
            </div>

            {/* Our Headquarters Section */}
            <div>
              {/* Header */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 24px",
                  border: "1px solid #7F4D0F",
                  backgroundColor: "transparent",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#D09947",
                  }}
                />
                <span
                  style={{
                    color: "#EEC569",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                  }}
                >
                  <EditableText
                    path="sidebar.locationPill"
                    defaultValue={DEFAULTS.locationPill}
                  />
                </span>
              </div>

              {/* Address Container */}
              <div
                style={{
                  background: "#34312F",
                  borderRadius: "10px",
                  border: "1px solid rgba(208,153,71,0.15)",
                  padding: "16px 20px",
                  marginBottom: "20px",
                }}
              >
                {/* Address Row */}
                <div className="grid grid-cols-1" style={{ gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "4px",
                      }}
                    >
                      <EditableText
                        path="sidebar.addressLabel"
                        defaultValue={DEFAULTS.addressLabel}
                      />
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      <EditableText
                        path="sidebar.addressValue"
                        defaultValue={DEFAULTS.addressValue}
                        multiline
                      />
                    </p>
                  </div>
                </div>
                <a
                  href={MAPS_URL_SHENZHEN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded bg-[#D09947] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#000000] transition-all hover:bg-[#EEC569]"
                >
                  Directions — Shen Zhen
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* HongKong Office */}
              <div
                style={{
                  background: "#2A2624",
                  borderRadius: "10px",
                  border: "1px solid rgba(208, 153, 71, 0.35)",
                  padding: "16px 20px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "4px",
                  }}
                >
                  <EditableText
                    path="sidebar.headOfficeTitle"
                    defaultValue={DEFAULTS.headOfficeTitle}
                  />
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#EEC569",
                    lineHeight: 1.65,
                    marginBottom: "14px",
                    whiteSpace: "pre-line",
                  }}
                >
                  <EditableText
                    path="sidebar.headOfficeCompany"
                    defaultValue={DEFAULTS.headOfficeCompany}
                  />
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#EEC569",
                    lineHeight: 1.65,
                    marginBottom: "14px",
                    whiteSpace: "pre-line",
                  }}
                >
                  <EditableText
                    path="sidebar.headOfficeAddress"
                    defaultValue={DEFAULTS.headOfficeAddress}
                    multiline
                  />
                </p>
                <a
                  href={MAPS_URL_HEAD_OFFICE_HK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded bg-[#D09947] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#000000] transition-all hover:bg-[#EEC569]"
                >
                  <EditableText
                    path="sidebar.headOfficeDirectionsLabel"
                    defaultValue={DEFAULTS.headOfficeDirectionsLabel}
                  />
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for gold placeholder */}
      <style jsx global>{`
        .placeholder-gold::placeholder {
          color: rgba(208, 153, 71, 0.6);
        }
      `}</style>
      {recaptchaSiteKey && (
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
      )}
    </section>
  );
}
