"use client";

export interface VisitData {
  landingPage: string;
  landingTime: string;
  referrer: string;
  visitPath: { page: string; timestamp: string }[];
  lastVisitPage: string;
  trafficChannel?: string;
  adKeyword?: string;
  extraInfo?: string;
}

export interface VisitorTrackingConfig {
  cookieDomain: string;
  channelExpireDays: number;
  landingExpireDays: number;
  maxPathDepth: number;
  channelKeys: readonly string[];
}

export const defaultVisitorTrackingConfig: VisitorTrackingConfig = {
  cookieDomain: ".apexbatch.com",
  channelExpireDays: 7,
  landingExpireDays: 30,
  maxPathDepth: 10,
  channelKeys: ["traffic_channel", "ad_keyword", "extra_info"],
};

export function trackVisitorVisit(
  pathname: string,
  search: string,
  config: VisitorTrackingConfig = defaultVisitorTrackingConfig
) {
  if (typeof window === "undefined") return;

  const currentPath = pathname || "/";
  const now = new Date().toISOString();
  const urlParams = new URLSearchParams(search);

  config.channelKeys.forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      setPersistentCookie(key, value, config.channelExpireDays, config.cookieDomain);
    }
  });

  if (!getCookie("landing_page")) {
    setPersistentCookie("landing_page", currentPath, config.landingExpireDays, config.cookieDomain);
    setPersistentCookie("landing_time", now, config.landingExpireDays, config.cookieDomain);
    setPersistentCookie("referrer", document.referrer || "Direct", config.landingExpireDays, config.cookieDomain);
  }

  setSessionCookie("last_visit_page", currentPath, config.cookieDomain);
  updateVisitPathCookie(currentPath, config.maxPathDepth, config.cookieDomain);
}

export function getVisitData(
  config: VisitorTrackingConfig = defaultVisitorTrackingConfig
): VisitData | null {
  if (typeof window === "undefined") return null;

  const landingPage = getCookie("landing_page") || "/";
  const landingTime = getCookie("landing_time") || new Date().toISOString();
  const referrer = getCookie("referrer") || "Direct";
  const lastVisitPage = getCookie("last_visit_page") || landingPage;
  const pathRaw = getCookie("visit_path");
  const pathTimeRaw = getCookie("visit_path_times");

  const pages = pathRaw ? pathRaw.split(" > ") : [landingPage];
  const times = pathTimeRaw ? pathTimeRaw.split(",") : [landingTime];
  const visitPath = pages.map((page, idx) => ({
    page,
    timestamp: times[idx] || landingTime,
  }));

  return {
    landingPage,
    landingTime,
    referrer,
    visitPath,
    lastVisitPage,
    trafficChannel: getCookie("traffic_channel") || undefined,
    adKeyword: getCookie("ad_keyword") || undefined,
    extraInfo: getCookie("extra_info") || undefined,
  };
}

function setPersistentCookie(name: string, value: string, days: number, cookieDomain: string) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/${getCookieDomainAttribute(cookieDomain)};SameSite=Lax`;
}

function setSessionCookie(name: string, value: string, cookieDomain: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/${getCookieDomainAttribute(cookieDomain)};SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    const c = ca[i]?.trim() || "";
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length));
    }
  }
  return null;
}

function updateVisitPathCookie(currentPath: string, maxPathDepth: number, cookieDomain: string) {
  const existingPath = getCookie("visit_path");
  const existingTimes = getCookie("visit_path_times");
  const pathArray = existingPath ? existingPath.split(" > ") : [];
  const timeArray = existingTimes ? existingTimes.split(",") : [];

  if (pathArray[pathArray.length - 1] !== currentPath) {
    pathArray.push(currentPath);
    timeArray.push(new Date().toISOString());

    while (pathArray.length > maxPathDepth) {
      pathArray.shift();
      timeArray.shift();
    }

    setSessionCookie("visit_path", pathArray.join(" > "), cookieDomain);
    setSessionCookie("visit_path_times", timeArray.join(","), cookieDomain);
  }
}

function getCookieDomainAttribute(cookieDomain: string): string {
  if (typeof window === "undefined") return "";
  const host = window.location.hostname;
  const normalizedDomain = cookieDomain.replace(/^\./, "");
  if (host === normalizedDomain || host.endsWith(`.${normalizedDomain}`)) {
    return `;domain=${cookieDomain}`;
  }
  return "";
}
