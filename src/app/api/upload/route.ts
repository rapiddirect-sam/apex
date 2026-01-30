import { NextRequest, NextResponse } from "next/server";
import { uploadToS3 } from "@/lib/s3";

// Magic numbers for file type verification
const FILE_SIGNATURES: Record<string, number[][]> = {
  "image/jpeg": [[0xff, 0xd8, 0xff]],
  "image/png": [[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]],
  "image/gif": [
    [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], // GIF87a
    [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], // GIF89a
  ],
  "image/webp": [[0x52, 0x49, 0x46, 0x46]], // RIFF (WebP starts with RIFF)
};

// Verify file type by checking magic numbers
function verifyFileSignature(buffer: Buffer, mimeType: string): boolean {
  const signatures = FILE_SIGNATURES[mimeType];
  if (!signatures) return false;

  return signatures.some((signature) =>
    signature.every((byte, index) => buffer[index] === byte)
  );
}

// Sanitize filename to prevent path traversal
function sanitizeFilename(filename: string): string {
  // Remove path components and special characters
  const basename = filename.split(/[/\\]/).pop() || "file";
  // Only allow alphanumeric, dash, underscore, and dot
  const sanitized = basename.replace(/[^a-zA-Z0-9._-]/g, "_");
  // Prevent double extensions like .jpg.exe
  const parts = sanitized.split(".");
  if (parts.length > 2) {
    return `${parts[0]}.${parts[parts.length - 1]}`;
  }
  return sanitized;
}

// Generate safe filename with UUID
function generateSafeFilename(originalName: string, mimeType: string): string {
  const ext = mimeType.split("/")[1] || "bin";
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 10);
  return `${timestamp}-${random}.${ext}`;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate MIME type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed." },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Verify actual file type by checking magic numbers
    if (!verifyFileSignature(buffer, file.type)) {
      return NextResponse.json(
        { error: "File content does not match declared type." },
        { status: 400 }
      );
    }

    // Generate safe filename (don't use original filename)
    const safeFilename = generateSafeFilename(file.name, file.type);
    const url = await uploadToS3(buffer, safeFilename, file.type);

    return NextResponse.json({ url });
  } catch (error) {
    // Log error in development only
    if (process.env.NODE_ENV === "development") {
      console.error("Upload error:", error);
    }
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
