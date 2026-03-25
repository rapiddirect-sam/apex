"use client";

import { useState, useRef, CSSProperties } from "react";
import Image from "next/image";
import { Upload, Loader2 } from "lucide-react";
import { useCMS } from "@/contexts/CMSContext";
import { auth } from "@/lib/firebase";
import { setAuthSessionCookie } from "@/lib/authSessionCookie";

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
  const { isEditMode, getContentValue, updateContent } = useCMS();
  const [isUploading, setIsUploading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  const MAX_UPLOAD_SIZE = 10 * 1024 * 1024;

  const currentSrc = getContentValue(path, defaultSrc);
  // Default 90 balances sharpness vs LCP; override with quality={100} where needed.
  const imageQuality = quality ?? 90;
  // Smart default: use provided sizes, or a responsive default that limits generated variants
  const imageSizes = sizes ?? (fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    try {
      // Stale auth-session cookie causes "Unauthorized - invalid session" after ~1h; refresh before upload.
      if (auth?.currentUser) {
        try {
          const fresh = await auth.currentUser.getIdToken(true);
          setAuthSessionCookie(fresh);
        } catch {
          // ignore; server will 401 if still invalid
        }
      }

      const formData = new FormData();
      formData.append("file", file);

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
    } catch (error) {
      console.error("Upload error:", error);
      alert(error instanceof Error ? error.message : "Failed to upload image");
    } finally {
      setIsUploading(false);
    }
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
      handleUpload(file);
    }
    // Reset input so same file can be selected again
    e.target.value = "";
  };

  // Use <img> only for GIFs (Next/Image doesn't optimize animated GIFs well)
  const isGif = currentSrc.toLowerCase().includes(".gif");

  // Image props for Next/Image
  const imageProps = fill
    ? { fill: true as const, style: { objectFit: "cover" as const, ...style } }
    : { width: width || 400, height: height || 300, style };

  // Non-edit mode - render image normally (no wrapper div)
  if (!isEditMode) {
    if (isGif) {
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
    <div
      className={containerClassName}
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
      {isGif ? (
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
          onClick={() => !isUploading && inputRef.current?.click()}
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
              <Loader2
                size={32}
                color="#D09947"
                className="animate-spin"
              />
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
          if (!isUploading) inputRef.current?.click();
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
  );
}
