"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import {
  CAMPAIGN_LINK,
  DESKTOP_MESSAGE,
  DISMISS_DURATION_MS,
  isCampaignActive,
  isExcludedPath,
  MOBILE_MESSAGE,
  STORAGE_KEY,
} from "./q4AnnouncementConfig";

let memoryDismissedUntil = 0;

function readDismissedUntil(now: number): number {
  const readStore = (store: Storage): number | null => {
    try {
      const rawValue = store.getItem(STORAGE_KEY);
      const dismissedUntil = Number(rawValue) || 0;
      if (dismissedUntil > now) return dismissedUntil;
      if (rawValue !== null) store.removeItem(STORAGE_KEY);
      return 0;
    } catch {
      return null;
    }
  };

  try {
    const localResult = readStore(window.localStorage);
    if (localResult !== null) return localResult;
  } catch {
    // Try session storage when local storage is unavailable.
  }

  try {
    const sessionResult = readStore(window.sessionStorage);
    if (sessionResult !== null) return sessionResult;
  } catch {
    // Memory state is the final fallback.
  }

  return memoryDismissedUntil > now ? memoryDismissedUntil : 0;
}

function setDismissedUntil(dismissedUntil: number): void {
  memoryDismissedUntil = dismissedUntil;

  try {
    window.localStorage.setItem(STORAGE_KEY, String(dismissedUntil));
    return;
  } catch {
    // Try session storage when local storage is unavailable.
  }

  try {
    window.sessionStorage.setItem(STORAGE_KEY, String(dismissedUntil));
  } catch {
    // The in-memory value keeps dismissal active for this React session.
  }
}

function updateAnnouncementVisibility(pathname: string): void {
  const now = Date.now();
  const visible = isCampaignActive(now) && !isExcludedPath(pathname) && readDismissedUntil(now) <= now;
  document.documentElement.dataset.q4Announcement = visible ? "visible" : "hidden";
}

type Q4AnnouncementBarProps = {
  forceVisible?: boolean;
};

export function Q4AnnouncementBar({ forceVisible = false }: Q4AnnouncementBarProps) {
  const pathname = usePathname() || "/";

  useLayoutEffect(() => {
    if (forceVisible) {
      document.documentElement.dataset.q4Announcement = "visible";
      return;
    }

    updateAnnouncementVisibility(pathname);
  }, [forceVisible, pathname]);

  const dismiss = () => {
    setDismissedUntil(Date.now() + DISMISS_DURATION_MS);
    document.documentElement.dataset.q4Announcement = "hidden";
  };

  return (
    <div className="q4-announcement-bar" role="region" aria-label="Q4 Sample Validation Support">
      <div className="q4-announcement-content">
        <a className="q4-announcement-link" href={CAMPAIGN_LINK}>
          <span className="q4-announcement-desktop">{DESKTOP_MESSAGE}</span>
          <span className="q4-announcement-mobile">{MOBILE_MESSAGE}</span>
        </a>
        <button type="button" className="q4-announcement-dismiss" aria-label="Dismiss Q4 announcement" onClick={dismiss}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  );
}
