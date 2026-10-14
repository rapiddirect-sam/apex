const LEGAL_ENTITY_PATTERN = /Shenzhen\s+Apex\s*Batch\s+Co\.,\s*Ltd/gi;

function normalizeLegalString(value: string): string {
  return value
    .replace(LEGAL_ENTITY_PATTERN, "Shenzhen ApexBatch Co., Ltd")
    .replace(/\bApexbatch\b/g, "ApexBatch");
}

/**
 * Normalize legacy company-name spellings stored in editable CMS content.
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
