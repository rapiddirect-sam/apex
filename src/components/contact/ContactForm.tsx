"use client";

import { useState } from "react";
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
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                style={{
                  background: "#1A1715",
                  border: "2px dashed rgba(208,153,71,0.4)",
                  borderRadius: "12px",
                  padding: "40px 20px",
                  textAlign: "center",
                }}
              >
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
              </div>

              {/* Submit Button - SOLID GOLD with gradient */}
              <button
                type="submit"
                className="w-full transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #D09947 0%, #EEC569 100%)",
                  border: "2px solid transparent",
                  color: "#000000",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "14px 24px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  cursor: "pointer",
                  boxShadow: "0 0 50px rgba(208,153,71,0.7)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 60px rgba(238,197,105,0.8)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.border = "2px solid #F9EBBC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7)";
                  e.currentTarget.style.color = "#000000";
                  e.currentTarget.style.border = "2px solid transparent";
                }}
              >
                Send Message
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
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
                      Phone: <span style={{ color: "#EEC569" }}>+1 (555) 123-4567</span>
                    </p>
                    <p style={{ fontSize: "12px", color: "#EEC569", lineHeight: 1.6 }}>
                      WhatsApp: <span style={{ color: "#EEC569" }}>+1 (555) 987-6543</span>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
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
                      123 Business Street
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
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Get Directions Button - SOLID GOLD with gradient */}
                <button
                  className="w-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #D09947 0%, #EEC569 100%)",
                    border: "2px solid transparent",
                    color: "#000000",
                    fontWeight: 600,
                    fontSize: "16px",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  boxShadow: "0 0 50px rgba(208,153,71,0.7)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 60px rgba(238,197,105,0.8)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.border = "2px solid #F9EBBC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7)";
                  e.currentTarget.style.color = "#000000";
                  e.currentTarget.style.border = "2px solid transparent";
                }}
              >
                <Navigation style={{ width: "16px", height: "16px" }} />
                Get Directions
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
