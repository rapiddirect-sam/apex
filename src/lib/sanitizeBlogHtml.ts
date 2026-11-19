import "server-only";
import DOMPurify from "isomorphic-dompurify";

const SANITIZE_OPTIONS = {
  ALLOWED_TAGS: [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "br", "hr",
    "ul", "ol", "li",
    "strong", "em", "b", "i", "u", "s",
    "a", "img",
    "blockquote", "pre", "code",
    "table", "caption", "thead", "tbody", "tr", "th", "td",
    "div", "span",
    "details", "summary",
  ],
  ALLOWED_ATTR: [
    "href", "src", "alt", "title", "class", "id",
    "target", "rel", "width", "height",
    "open", "colspan", "rowspan",
  ],
  ALLOW_DATA_ATTR: false,
  ADD_ATTR: ["target"],
  FORBID_TAGS: ["script", "style", "iframe", "form", "input", "button"],
  FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover"],
};

function isContactHref(href: string): boolean {
  const normalized = href.replace(/\/+$/, "");
  return (
    normalized === "/contact" ||
    /^https?:\/\/(?:www\.)?apexbatch\.com\/contact$/i.test(normalized)
  );
}

/**
 * Sanitizes rich-text article markup on the server so the initial response
 * contains safe, crawlable article content instead of waiting for hydration.
 */
export function sanitizeBlogHtml(html: string): string {
  const clean = DOMPurify.sanitize(html, SANITIZE_OPTIONS);

  // Preserve the existing editorial policy: contact CTAs remain nofollow even
  // when they use an internal /contact URL.
  return clean.replace(/<a\b([^>]*)>/gi, (fullMatch, attrs: string) => {
    const href = attrs.match(/\bhref=(["'])(.*?)\1/i)?.[2];
    if (!href || !isContactHref(href)) return fullMatch;

    const existingRel = attrs.match(/\brel=(["'])(.*?)\1/i)?.[2] || "";
    const relTokens = new Set(existingRel.split(/\s+/).filter(Boolean));
    relTokens.add("nofollow");
    const withoutRel = attrs.replace(/\srel=(["']).*?\1/i, "");

    return `<a${withoutRel} rel="${Array.from(relTokens).join(" ")}">`;
  });
}
