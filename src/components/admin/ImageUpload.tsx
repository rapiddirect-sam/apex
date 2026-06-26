"use client";

import { useState, useRef } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { auth } from "@/lib/firebaseClient";
import { setAuthSessionCookie } from "@/lib/authSessionCookie";
import { defaultImageDescriptionFromFilename } from "@/lib/cmsImageUpload";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  /** Blog slug or cms path prefix, e.g. injection-molding-defects or authors/jane-doe */
  postSlug?: string;
  /** Default S3 filename stem when the user does not customize description */
  defaultDescription?: string;
  slugRequiredMessage?: string;
}

export function ImageUpload({
  value,
  onChange,
  label = "Featured Image",
  postSlug = "",
  defaultDescription = "featured",
  slugRequiredMessage = "Please set the URL slug before uploading (fill in the slug field above).",
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [imageDescription, setImageDescription] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const closeModal = () => {
    setShowModal(false);
    setPendingFile(null);
    setImageDescription("");
    setImageAlt("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const openFilePicker = () => {
    if (!postSlug.trim()) {
      setError(slugRequiredMessage);
      return;
    }
    setError("");
    inputRef.current?.click();
  };

  const handleFileSelected = (file: File) => {
    if (!postSlug.trim()) {
      setError(slugRequiredMessage);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    const fromName = defaultImageDescriptionFromFilename(file.name);
    setPendingFile(file);
    setImageDescription(fromName === "image" ? defaultDescription : fromName);
    setImageAlt("");
    setShowModal(true);
  };

  const handleUpload = async () => {
    if (!pendingFile) return;

    const description = imageDescription.trim();
    if (!description || !/[a-z0-9]/i.test(description)) {
      setError("Please enter a description (letters or numbers) for the filename.");
      return;
    }

    setError("");
    setUploading(true);

    try {
      if (auth?.currentUser) {
        try {
          setAuthSessionCookie(await auth.currentUser.getIdToken(true));
        } catch {
          // ignore
        }
      }

      const formData = new FormData();
      formData.append("file", pendingFile);
      formData.append("slug", postSlug.trim());
      formData.append("description", description);
      formData.append("alt", imageAlt.trim() || description);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      onChange(data.url);
      closeModal();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelected(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleFileSelected(file);
    }
  };

  const handleRemove = () => {
    onChange("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <label
        style={{
          display: "block",
          color: "#C5C6C9",
          fontSize: "14px",
          marginBottom: "8px",
          fontWeight: 500,
        }}
      >
        {label}
      </label>

      {!postSlug.trim() && (
        <p style={{ color: "#eab308", fontSize: "12px", marginBottom: "8px", lineHeight: 1.4 }}>
          Set the URL slug first, then upload.
        </p>
      )}

      {value ? (
        <div
          style={{
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#1a1a1a",
          }}
        >
          <Image
            src={value}
            alt="Uploaded preview"
            width={800}
            height={400}
            quality={90}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
          <button
            type="button"
            onClick={handleRemove}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "32px",
              height: "32px",
              background: "rgba(0,0,0,0.7)",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <div
          onClick={openFilePicker}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${dragActive ? "#D09947" : "#444"}`,
            borderRadius: "8px",
            padding: "40px",
            textAlign: "center",
            cursor: postSlug.trim() ? "pointer" : "not-allowed",
            opacity: postSlug.trim() ? 1 : 0.65,
            background: dragActive ? "rgba(208,153,71,0.05)" : "#1a1a1a",
            transition: "all 0.2s",
          }}
        >
          {uploading ? (
            <div style={{ color: "#D09947" }}>
              <Loader2 size={40} style={{ animation: "spin 1s linear infinite", margin: "0 auto" }} />
              <p style={{ marginTop: "12px", fontSize: "14px" }}>Uploading...</p>
              <style jsx>{`
                @keyframes spin {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </div>
          ) : (
            <>
              <Upload size={40} style={{ color: "#666", margin: "0 auto" }} />
              <p style={{ color: "#C5C6C9", marginTop: "12px", fontSize: "14px" }}>
                Click to upload or drag and drop
              </p>
              <p style={{ color: "#666", marginTop: "4px", fontSize: "12px" }}>
                PNG, JPG, GIF or WebP (max 10MB)
              </p>
            </>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {error && (
        <p style={{ color: "#ef4444", fontSize: "14px", marginTop: "8px" }}>
          {error}
        </p>
      )}

      {showModal && pendingFile && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.65)",
            padding: "24px",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "440px",
              background: "#1a1a1a",
              border: "1px solid #444",
              borderRadius: "12px",
              padding: "24px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ margin: "0 0 8px", color: "#fff", fontSize: "18px", fontWeight: 700 }}>
              Upload {label.toLowerCase()}
            </h3>
            <p style={{ margin: "0 0 20px", color: "#999", fontSize: "13px" }}>
              Path: <code style={{ color: "#D09947" }}>cms/{postSlug}/{"{description}"}.jpg</code>
            </p>

            <label style={{ display: "block", color: "#C5C6C9", fontSize: "13px", marginBottom: "6px" }}>
              Description (filename)
            </label>
            <input
              type="text"
              value={imageDescription}
              onChange={(e) => setImageDescription(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                marginBottom: "16px",
                background: "#2a2a2a",
                border: "1px solid #444",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
              }}
            />

            <label style={{ display: "block", color: "#C5C6C9", fontSize: "13px", marginBottom: "6px" }}>
              Alt text (optional)
            </label>
            <input
              type="text"
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              placeholder="Defaults to description if empty"
              style={{
                width: "100%",
                padding: "10px 12px",
                marginBottom: "20px",
                background: "#2a2a2a",
                border: "1px solid #444",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
              }}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button type="button" onClick={closeModal} disabled={uploading} style={{ padding: "10px 16px", background: "#333", color: "#C5C6C9", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpload}
                disabled={uploading}
                style={{
                  padding: "10px 20px",
                  background: uploading ? "#666" : "#D09947",
                  color: "#000",
                  border: "none",
                  borderRadius: "8px",
                  cursor: uploading ? "not-allowed" : "pointer",
                  fontWeight: 600,
                }}
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
