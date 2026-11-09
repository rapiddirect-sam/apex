/**
 * Framework- and data-provider-independent helpers for CMS content paths.
 * Keep these separate from pageContent so public client components do not
 * pull the Supabase client into their JavaScript bundle.
 */
export function getNestedValue(
  obj: Record<string, unknown> | null | undefined,
  path: string
): unknown {
  if (!obj) return undefined;

  const keys = path.split(".");
  let current: unknown = obj;

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }

  return current;
}

export function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): void {
  const keys = path.split(".");
  let current: Record<string, unknown> = obj;

  for (let index = 0; index < keys.length - 1; index++) {
    const key = keys[index];
    if (!(key in current) || typeof current[key] !== "object" || current[key] === null) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }

  current[keys[keys.length - 1]] = value;
}
