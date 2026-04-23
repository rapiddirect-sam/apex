/**
 * Runs work after first paint, preferring idle time to reduce Total Blocking Time.
 * Falls back to setTimeout when requestIdleCallback is unavailable.
 */
export function scheduleIdleTask(task: () => void, idleTimeoutMs = 1800): () => void {
  if (typeof window === "undefined") return () => {};

  const run = () => {
    try {
      task();
    } catch {
      // ignore — tracking / deferred UI must not break the page
    }
  };

  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(run, { timeout: idleTimeoutMs });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(run, 350);
  return () => clearTimeout(id);
}
