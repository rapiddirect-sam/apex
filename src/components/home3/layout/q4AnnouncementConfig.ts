// 2026 Q4 temporary campaign configuration.
export const CAMPAIGN_END = new Date("2027-01-01T00:00:00+08:00").getTime();
export const DISMISS_DURATION_MS = 14 * 24 * 60 * 60 * 1000;
export const STORAGE_KEY = "apexbatch:q4-sample-validation:dismissed-until:v1";
export const EXCLUDED_PATHS = ["/contact", "/privacy-policy", "/terms-and-conditions"] as const;
export const CAMPAIGN_LINK = "/#q4-project-support";
export const DESKTOP_MESSAGE = "New Customer Offer · Get Up to US$500 in Sample Support · Apply by Dec 31 →";
export const MOBILE_MESSAGE = "New Customers: Up to US$500 Sample Support · Apply Now →";

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function isExcludedPath(pathname: string): boolean {
  return EXCLUDED_PATHS.includes(normalizePathname(pathname) as (typeof EXCLUDED_PATHS)[number]);
}

export function isCampaignActive(now = Date.now()): boolean {
  return now < CAMPAIGN_END;
}

/** Small pre-paint check keeps the fixed header and announcement in sync on first load. */
export function getQ4AnnouncementBootstrapScript(): string {
  return `!function(){try{var n=Date.now(),e=${CAMPAIGN_END},k=${JSON.stringify(STORAGE_KEY)},p=location.pathname.replace(/\\/+$/,"")||"/",x=["/contact","/privacy-policy","/terms-and-conditions"],d=0,t;try{t=localStorage.getItem(k);if(t!==null){d=Number(t)||0;if(d<=n)localStorage.removeItem(k)}}catch(a){try{t=sessionStorage.getItem(k);if(t!==null){d=Number(t)||0;if(d<=n)sessionStorage.removeItem(k)}}catch(b){}}document.documentElement.dataset.q4ProjectSupport=n<e?"visible":"hidden";document.documentElement.dataset.q4Announcement=n<e&&!x.includes(p)&&d<=n?"visible":"hidden"}catch(a){document.documentElement.dataset.q4ProjectSupport="hidden";document.documentElement.dataset.q4Announcement="hidden"}}();`;
}
