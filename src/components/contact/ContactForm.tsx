"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Upload,
  ChevronDown,
  Navigation,
  User,
  Building2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

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
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    email: "",
    phone: "",
    businessNeeds: "",
    projectDescription: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
        });
        setFiles([]);
      } else {
        setSubmitStatus("error");
      }
    } catch {
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
        padding: "80px 0 60px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 400px",
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
                  CONTACT FORM
                </span>
              </div>

              <h2
                className="text-white"
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  letterSpacing: "-0.015em",
                }}
              >
                Send Us a <span style={{ color: "#EEC569" }}>Message</span>
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#EEC569",
                  lineHeight: 1.6,
                }}
              >
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* First Name & Company Name Row */}
              <div className="grid grid-cols-2" style={{ gap: "20px" }}>
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
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyles}>Company Name *</label>
                  <div style={inputWrapperStyles}>
                    <Building2 style={iconStyles as React.CSSProperties} />
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Your Company"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      style={inputStyles}
                      className="placeholder-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-2" style={{ gap: "20px" }}>
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
                  Drag & Drop Your Files Here
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666666",
                    marginBottom: "16px",
                  }}
                >
                  or
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
                  Browse Files
                </button>
                <p style={{ fontSize: "11px", color: "rgba(208,153,71,0.7)" }}>
                  Available: stp, step, stl, igs, iges, sldprt, x_t, jpg, png, pdf, zip, rar
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
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
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
                  Something went wrong. Please try again or contact us directly at info@apexbatch.com
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center justify-center gap-2 group ${
                  isSubmitting
                    ? "bg-[#666] text-[#999] cursor-not-allowed"
                    : "bg-[#D09947] hover:bg-[#EEC569] text-[#000000]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
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
                  DIRECT CONTACT
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
                Reach Us <span style={{ color: "#EEC569" }}>Directly</span>
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
                      Call Us
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      Phone / WhatsApp: <span style={{ color: "#EEC569" }}>+86 13302480516</span>
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
                      Email Us
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      General Inquiries: <span style={{ color: "#EEC569" }}>info@apexbatch.com</span>
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      Quick Quote: <span style={{ color: "#EEC569" }}>quotes@apexbatch.com</span>
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      Support: <span style={{ color: "#EEC569" }}>support@apexbatch.com</span>
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
                  LOCATION
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
                Our <span style={{ color: "#EEC569" }}>Headquarters</span>
              </h3>

              {/* Map Placeholder with gold border */}
              <div
                style={{
                  borderRadius: "8px",
                  height: "180px",
                  marginBottom: "16px",
                  background: "#0A0A0A",
                  border: "1px solid #D09947",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d113.82!3d22.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzAwLjAiTiAxMTPCsDQ5JzEyLjAiRQ!5e0!3m2!1sen!2scn!4v1234567890&q=52+Huangpu+Road,+Xinqiao+Street,+Baoan+District,+Shenzhen,+China"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "grayscale(100%) sepia(25%) brightness(0.4) contrast(1.1)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address Container */}
              <div
                style={{
                  background: "#34312F",
                  borderRadius: "10px",
                  border: "1px solid rgba(208,153,71,0.15)",
                  padding: "16px 20px",
                }}
              >
                {/* Address Row */}
                <div className="grid grid-cols-2" style={{ gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "4px",
                      }}
                    >
                      Address
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      2nd Floor, Building F, 52 Huangpu Road, Shangliao Community, Xinqiao Street
                    </p>
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
                      City, State
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>

                {/* Get Directions Button */}
                <button
                  className="w-full bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center justify-center gap-2 group"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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
    </section>
  );
}
