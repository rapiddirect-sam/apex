const LEGAL_ENTITY_PATTERN = /Shenzhen\s+Apex\s*Batch\s+Co\.,\s*Ltd/gi;
const LEGACY_LEGAL_ENTITY_PATTERNS = [
  /Shenzhen\s+RapidDirect\s+Co\.,?\s*Ltd\.?/gi,
  /Shenzhen\s+Rapid\s+Direct\s+Co\.,?\s*Ltd\.?/gi,
];

function normalizeLegalString(value: string): string {
  const withCurrentLegalEntity = LEGACY_LEGAL_ENTITY_PATTERNS.reduce(
    (normalized, pattern) =>
      normalized.replace(pattern, "Shenzhen ApexBatch Co., Ltd"),
    value
  );

  return withCurrentLegalEntity
    .replace(LEGAL_ENTITY_PATTERN, "Shenzhen ApexBatch Co., Ltd")
    .replace(/\bApexbatch\b/g, "ApexBatch");
}

/**
 * Normalize legacy company-name spellings stored in editable CMS legal content.
 * Domain names and email addresses remain lowercase.
 */
export function normalizeLegalContent<T>(value: T): T {
  if (typeof value === "string") {
    return normalizeLegalString(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeLegalContent(item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        normalizeLegalContent(item),
      ])
    ) as T;
  }

  return value;
}
