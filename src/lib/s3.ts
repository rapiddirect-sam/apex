import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export const BUCKET_NAME = process.env.AWS_S3_BUCKET || "apex-batch-images";

export async function s3ObjectExists(key: string): Promise<boolean> {
  try {
    await s3Client.send(
      new HeadObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
      })
    );
    return true;
  } catch (error: unknown) {
    const status =
      error &&
      typeof error === "object" &&
      "$metadata" in error &&
      typeof (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode ===
        "number"
        ? (error as { $metadata: { httpStatusCode: number } }).$metadata.httpStatusCode
        : undefined;

    if (status === 404) return false;
    if (error instanceof Error && error.name === "NotFound") return false;
    throw error;
  }
}

export async function resolveUniqueS3Key(baseKey: string): Promise<string> {
  if (!(await s3ObjectExists(baseKey))) return baseKey;

  const dotIndex = baseKey.lastIndexOf(".");
  if (dotIndex === -1) return `${baseKey}-${Date.now()}`;

  const stem = baseKey.slice(0, dotIndex);
  const ext = baseKey.slice(dotIndex);

  for (let suffix = 2; suffix <= 99; suffix++) {
    const candidate = `${stem}-${suffix}${ext}`;
    if (!(await s3ObjectExists(candidate))) return candidate;
  }

  return `${stem}-${Date.now()}${ext}`;
}

export async function uploadToS3AtKey(
  file: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: contentType,
  });

  await s3Client.send(command);

  return `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION || "us-east-1"}.amazonaws.com/${key}`;
}

/** Legacy upload: {folder}/{timestamp}-{fileName} */
export async function uploadToS3(
  file: Buffer,
  fileName: string,
  contentType: string,
  folder: string = "blog"
): Promise<string> {
  const key = `${folder}/${Date.now()}-${fileName}`;
  return uploadToS3AtKey(file, key, contentType);
}

export { s3Client };
