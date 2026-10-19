"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/** Keeps the 404 understandable to keyboard users and sends a useful GTM event. */
export function NotFoundExperience() {
  useEffect(() => {
    document.getElementById("not-found-heading")?.focus({ preventScroll: true });

    const params = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(
      [...params.entries()].filter(([key]) => key.toLowerCase().startsWith("utm_"))
    );

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_not_found",
      requested_url: window.location.href,
      requested_path: window.location.pathname,
      referrer: document.referrer || "direct",
      utm,
      device_type: window.matchMedia("(max-width: 767px)").matches
        ? "mobile"
        : window.matchMedia("(max-width: 1023px)").matches
          ? "tablet"
          : "desktop",
    });
  }, []);

  return null;
}
