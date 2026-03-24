"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  defaultVisitorTrackingConfig,
  getVisitData as getVisitDataFromLib,
  trackVisitorVisit,
  type VisitData,
} from "@/lib/visitorTracking";

const TRACKING_CONFIG = {
  ...defaultVisitorTrackingConfig,
  cookieDomain:
    process.env.NEXT_PUBLIC_TRACKING_COOKIE_DOMAIN ||
    defaultVisitorTrackingConfig.cookieDomain,
};

export function useVisitTracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    trackVisitorVisit(pathname || "/", window.location.search, TRACKING_CONFIG);
  }, [pathname]);
}

export function getVisitData(): VisitData | null {
  return getVisitDataFromLib(TRACKING_CONFIG);
}
