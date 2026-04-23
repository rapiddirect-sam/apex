"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  defaultVisitorTrackingConfig,
  getVisitData as getVisitDataFromLib,
  trackVisitorVisit,
  type VisitData,
} from "@/lib/visitorTracking";
import { scheduleIdleTask } from "@/lib/scheduleIdleTask";

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
    // Defer cookie work to idle time so it does not extend the main-thread busy window (TBT).
    const cancel = scheduleIdleTask(() => {
      trackVisitorVisit(pathname || "/", window.location.search, TRACKING_CONFIG);
    }, 2500);
    return cancel;
  }, [pathname]);
}

export function getVisitData(): VisitData | null {
  return getVisitDataFromLib(TRACKING_CONFIG);
}
