"use client";

import { useState, useRef, CSSProperties } from "react";
import Image from "next/image";
import { Upload, Loader2 } from "lucide-react";
import { useCMS } from "@/contexts/CMSContext";
import { setAuthSessionCookie } from "@/lib/authSessionCookie";
import {
  defaultImageDescriptionFromFilename,
  slugifyImageDescription,
} from "@/lib/cmsImageUpload";

interface EditableImageProps {
  path: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  /** Skip Next.js optimizer (larger payloads; use only when you need pixel-identical CMS assets). */
  unoptimized?: boolean;
  /** Hint LCP image loading (pass `"high"` on above-the-fold hero). */
  fetchPriority?: "high" | "low" | "auto";
}

function defaultDescriptionFromCmsPath(path: string): string {
  const stem = path.replace(/\.(src|image)$/i, "").replace(/\./g, " ");
  return slugifyImageDescription(stem);
}

export function EditableImage({
  path,
  defaultSrc,
  alt,
  className,
  containerClassName,
  style,
  width,
  height,
  fill,
  priority,
  sizes,
  quality,
  unoptimized = false,
  fetchPriority,
}: EditableImageProps) {
  const { isEditMode, getContentValue, updateContent, pageSlug } = useCMS();
  const [isUploading, setIsUploading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [imageDescription, setImageDescription] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [modalError, setModalError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  const MAX_UPLOAD_SIZE = 10 * 1024 * 1024;

  const uploadSlug = pageSlug.replace(/^\/+|\/+$/g, "");

  const rawSrc = getContentValue(path, defaultSrc);
  const currentSrc =
    typeof rawSrc === "string" && rawSrc.trim() === "" ? defaultSrc : rawSrc;
  // Use <img> for GIFs and data URLs (Next/Image does not reliably render inline SVG/data URIs).
  const isGif = currentSrc.toLowerCase().includes(".gif");
  const isDataUrl = currentSrc.startsWith("data:");
  const useNativeImg = isGif || isDataUrl;

  // Default 90 balances sharpness vs LCP; override with quality={100} where needed.
  const imageQuality = quality ?? 90;
  const imageSizes = sizes ?? (fill ? "100vw" : undefined);

  const closeModal = () => {
    setShowModal(false);
    setPendingFile(null);
    setImageDescription("");
    setImageAlt("");
    setModalError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const openFilePicker = () => {
    if (!uploadSlug) {
      alert("Page slug is missing; cannot upload images.");
      return;
    }
    inputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!pendingFile) return;

    const description = imageDescription.trim();
    if (!description || !/[a-z0-9]/i.test(description)) {
      setModalError("Please enter a description (letters or numbers) for the filename.");
      return;
    }

    setModalError("");
    setIsUploading(true);
    try {
      // Stale auth-session cookie causes "Unauthorized - invalid session" after ~1h; refresh before upload.
      const { auth } = await import("@/lib/firebaseClient");
      if (auth?.currentUser) {
        try {
          const fresh = await auth.currentUser.getIdToken(true);
          setAuthSessionCookie(fresh);
        } catch {
          // ignore; server will 401 if still invalid
        }
      }

      const formData = new FormData();
      formData.append("file", pendingFile);
      formData.append("slug", uploadSlug);
      formData.append("description", description);
      formData.append("alt", imageAlt.trim() || description);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = "Upload failed";
        try {
          const data = await response.json();
          errorMessage = data.error || errorMessage;
        } catch {
          // ignore JSON parse errors and keep fallback message
        }
        throw new Error(errorMessage);
      }

      const { url } = await response.json();
      updateContent(path, url);
      closeModal();
    } catch (error) {
      console.error("Upload error:", error);
      setModalError(error instanceof Error ? error.message : "Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelected = (file: File) => {
    if (!uploadSlug) {
      alert("Page slug is missing; cannot upload images.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    const fromName = defaultImageDescriptionFromFilename(file.name);
    const fromPath = defaultDescriptionFromCmsPath(path);
    setPendingFile(file);
    setImageDescription(fromName !== "image" ? fromName : fromPath);
    setImageAlt(alt);
    setModalError("");
    setShowModal(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        alert("Unsupported format. Please upload JPG, PNG, GIF, or WebP.");
        e.target.value = "";
        return;
      }
      if (file.size > MAX_UPLOAD_SIZE) {
        alert("Image is too large. Maximum upload size is 10MB.");
        e.target.value = "";
        return;
      }
      handleFileSelected(file);
    }
    // Reset input so same file can be selected again
    e.target.value = "";
  };

  // Image props for Next/Image
  const imageProps = fill
    ? { fill: true as const, style: { objectFit: "cover" as const, ...style } }
    : { width: width || 400, height: height || 300, style };

  // Non-edit mode - render image normally (no wrapper div)
  if (!isEditMode) {
    if (useNativeImg) {
      const imgStyle: CSSProperties = fill
        ? { position: "absolute" as const, width: "100%", height: "100%", objectFit: "cover", ...style }
        : style || {};
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          className={className}
          style={imgStyle}
        />
      );
    }

    return (
      <Image
        src={currentSrc}
        alt={alt}
        className={className}
        priority={priority}
        fetchPriority={fetchPriority}
        sizes={imageSizes}
        quality={imageQuality}
        unoptimized={unoptimized}
        {...imageProps}
      />
    );
  }

  // Edit mode - wrap in a container for the upload overlay
  return (
    <>
      <div
        className={`cms-editable-image ${containerClassName || ""}`.trim()}
        style={{
          position: "relative",
          display: fill ? "block" : "inline-block",
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        {useNativeImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentSrc}
            alt={alt}
            className={className}
            style={{ width: "100%", height: "100%", objectFit: "cover", ...style }}
          />
        ) : (
          <Image
            src={currentSrc}
            alt={alt}
            className={className}
            priority={priority}
            fetchPriority={fetchPriority}
            sizes={imageSizes}
            quality={imageQuality}
            unoptimized={unoptimized}
            {...imageProps}
          />
        )}

        {/* Edit overlay */}
        {(isHovered || isUploading) && (
          <div
            onClick={() => !isUploading && openFilePicker()}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: isUploading ? "wait" : "pointer",
              transition: "opacity 0.2s",
              zIndex: 10,
              borderRadius: "inherit",
            }}
          >
            {isUploading ? (
              <>
                <Loader2 size={32} color="#D09947" className="animate-spin" />
                <span style={{ color: "#D09947", fontSize: "12px", marginTop: "8px" }}>
                  Uploading...
                </span>
              </>
            ) : (
              <>
                <Upload size={32} color="#D09947" />
                <span style={{ color: "#D09947", fontSize: "12px", marginTop: "8px" }}>
                  Click to replace
                </span>
              </>
            )}
          </div>
        )}

        {/* Always visible quick upload trigger in edit mode */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (!isUploading) openFilePicker();
          }}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            zIndex: 12,
            border: "1px solid rgba(208, 153, 71, 0.7)",
            background: "rgba(0, 0, 0, 0.65)",
            color: "#D09947",
            fontSize: "11px",
            fontWeight: 600,
            padding: "6px 10px",
            borderRadius: "999px",
            cursor: isUploading ? "wait" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
          aria-label="Upload image"
        >
          {isUploading ? (
            <>
              <Loader2 size={12} className="animate-spin" />
              Uploading
            </>
          ) : (
            <>
              <Upload size={12} />
              Upload
            </>
          )}
        </button>

        {/* Hidden file input */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      {showModal && pendingFile && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10001,
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
              Upload image
            </h3>
            <p style={{ margin: "0 0 20px", color: "#999", fontSize: "13px" }}>
              Path:{" "}
              <code style={{ color: "#D09947" }}>
                cms/{uploadSlug}/{"{description}"}.jpg
              </code>
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

            {modalError && (
              <p style={{ color: "#ef4444", fontSize: "13px", margin: "0 0 16px" }}>{modalError}</p>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                type="button"
                onClick={closeModal}
                disabled={isUploading}
                style={{
                  padding: "10px 16px",
                  background: "#333",
                  color: "#C5C6C9",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpload}
                disabled={isUploading}
                style={{
                  padding: "10px 20px",
                  background: isUploading ? "#666" : "#D09947",
                  color: "#000",
                  border: "none",
                  borderRadius: "8px",
                  cursor: isUploading ? "not-allowed" : "pointer",
                  fontWeight: 600,
                }}
              >
                {isUploading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
