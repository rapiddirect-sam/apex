export interface BlogTocItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogFaqItem {
  question: string;
  answer: string;
}

const SITE_HOSTS = new Set(["apexbatch.com", "www.apexbatch.com"]);

/** True for same-site paths and in-page anchors; false for external URLs. */
export function isInternalSiteHref(href: string): boolean {
  const trimmed = href.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith("#")) return true;
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) return true;

  try {
    const url = new URL(trimmed, "https://apexbatch.com");
    return SITE_HOSTS.has(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

function buildLinkRelAttributes(href: string, existingRel = ""): { rel?: string; target?: string } {
  if (isInternalSiteHref(href)) {
    return {};
  }

  const relTokens = new Set(existingRel.split(/\s+/).filter(Boolean));
  relTokens.add("noopener");
  relTokens.add("noreferrer");
  relTokens.add("nofollow");
  return { rel: [...relTokens].join(" "), target: "_blank" };
}

/** Internal apexbatch.com links pass equity; external links keep nofollow. */
export function normalizeBlogContentLinks(html: string): string {
  return html.replace(/<a\b([^>]*)>/gi, (fullMatch, attrs) => {
    const hrefMatch = String(attrs).match(/\bhref="([^"]*)"/i);
    if (!hrefMatch) return fullMatch;

    const href = hrefMatch[1];
    const existingRel = String(attrs).match(/\brel="([^"]*)"/i)?.[1] || "";
    const { rel, target } = buildLinkRelAttributes(href, existingRel);

    let nextAttrs = String(attrs)
      .replace(/\srel="[^"]*"/i, "")
      .replace(/\starget="[^"]*"/i, "");

    if (isInternalSiteHref(href)) {
      return `<a${nextAttrs}>`;
    }

    if (rel) nextAttrs += ` rel="${rel}"`;
    if (target) nextAttrs += ` target="${target}"`;
    return `<a${nextAttrs}>`;
  });
}

/** Turn heading text into a URL-friendly slug (matches common CMS anchor patterns). */
export function slugifyHeadingText(text: string): string {
  return text
    .replace(/<[^>]*>/g, "")
    .trim()
    .replace(/^[\d.]+\s*/, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function uniqueHeadingId(baseId: string, usedIds: Set<string>): string {
  if (!baseId) return baseId;
  if (!usedIds.has(baseId)) {
    usedIds.add(baseId);
    return baseId;
  }

  let suffix = 2;
  while (usedIds.has(`${baseId}-${suffix}`)) suffix++;
  const uniqueId = `${baseId}-${suffix}`;
  usedIds.add(uniqueId);
  return uniqueId;
}

/** Assign stable ids to H2/H3 anchors while exposing only H2s in the TOC. */
export function injectHeadingIds(html: string): { html: string; tocItems: BlogTocItem[] } {
  const tocItems: BlogTocItem[] = [];
  const usedIds = new Set<string>();
  let counter = 0;

  const enhancedHtml = html.replace(
    /<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (fullMatch, level, attrs, inner) => {
      const text = inner.replace(/<[^>]*>/g, "").trim();
      if (!text) return fullMatch;

      counter++;
      const existingId = String(attrs).match(/\bid="([^"]*)"/)?.[1];
      const slugId = slugifyHeadingText(text);
      const id = existingId || uniqueHeadingId(slugId || `heading-${counter}`, usedIds);
      const levelNum = parseInt(String(level), 10);

      // H3s retain anchors for deep links, but the left navigation intentionally
      // stays at a single level for faster scanning.
      if (levelNum === 2) {
        tocItems.push({ id, text, level: levelNum });
      }

      if (existingId) {
        usedIds.add(existingId);
        return fullMatch;
      }

      const cleanAttrs = String(attrs).replace(/\s+id="[^"]*"/, "");
      return `<h${level} id="${id}"${cleanAttrs}>${inner}</h${level}>`;
    }
  );

  return { html: enhancedHtml, tocItems };
}

/** Wrap tables for contained scrolling (vertical + horizontal) with a top scrollbar. */
export function wrapTablesForScroll(html: string): string {
  return html.replace(/<table\b[\s\S]*?<\/table>/gi, (tableHtml) => {
    if (tableHtml.includes("blog-table-scroll-body")) return tableHtml;

    if (tableHtml.includes("blog-table-scroll")) {
      return tableHtml.replace(
        /<div class="blog-table-scroll">([\s\S]*?)<\/div>/i,
        '<div class="blog-table-scroll"><div class="blog-table-scroll-top" aria-hidden="true"></div><div class="blog-table-scroll-body">$1</div></div>'
      );
    }

    return `<div class="blog-table-scroll"><div class="blog-table-scroll-top" aria-hidden="true"></div><div class="blog-table-scroll-body">${tableHtml}</div></div>`;
  });
}

/** Use native-width tables by default and only enable horizontal scrolling for genuinely wide tables. */
export function initBlogTableScrollBars(root: ParentNode | null) {
  if (!root) return;

  root.querySelectorAll<HTMLElement>(".blog-table-scroll").forEach((wrapper) => {
    if (wrapper.dataset.scrollSynced === "true") return;

    let body = wrapper.querySelector<HTMLElement>(".blog-table-scroll-body");
    let top = wrapper.querySelector<HTMLElement>(".blog-table-scroll-top");
    const table = wrapper.querySelector("table");

    if (!table) return;

    if (!body) {
      body = document.createElement("div");
      body.className = "blog-table-scroll-body";
      body.appendChild(table);
      wrapper.appendChild(body);
    }

    if (!top) {
      top = document.createElement("div");
      top.className = "blog-table-scroll-top";
      top.setAttribute("aria-hidden", "true");
      wrapper.insertBefore(top, body);
    }

    const columnCount = table.querySelector("tr")?.children.length || 0;
    const rowCount = table.querySelectorAll("tbody tr").length;

    const updateTableLayout = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const needsHorizontalScroll = columnCount >= 4 || (isMobile && columnCount >= 3);

      wrapper.classList.toggle("blog-table-scroll--wide", needsHorizontalScroll);
      wrapper.classList.toggle("blog-table-scroll--tall", rowCount >= 10);
    };

    const updateTopTrack = () => {
      top!.innerHTML = "";
      const track = document.createElement("div");
      track.className = "blog-table-scroll-top-inner";
      track.style.width = `${table.scrollWidth}px`;
      top!.appendChild(track);
    };

    updateTableLayout();
    updateTopTrack();

    const syncFromTop = () => {
      body!.scrollLeft = top!.scrollLeft;
    };
    const syncFromBody = () => {
      top!.scrollLeft = body!.scrollLeft;
    };

    top.addEventListener("scroll", syncFromTop, { passive: true });
    body.addEventListener("scroll", syncFromBody, { passive: true });

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            updateTableLayout();
            updateTopTrack();
          })
        : null;
    resizeObserver?.observe(table);
    window.addEventListener("resize", updateTableLayout, { passive: true });

    wrapper.dataset.scrollSynced = "true";

    wrapper.addEventListener(
      "blog-table-destroy",
      () => {
        resizeObserver?.disconnect();
        window.removeEventListener("resize", updateTableLayout);
      },
      { once: true }
    );
  });
}

type BlogCalloutKind = "quick-take" | "pro-tip";

function getCalloutKind(value: string): BlogCalloutKind | null {
  const label = value.trim().replace(/[:：]+$/, "").toLowerCase();
  if (label === "quick take" || label === "quick takeaway") return "quick-take";
  if (label === "pro tip" || label === "pro-tip") return "pro-tip";
  return null;
}

/** Add presentation classes to common Quick Take / Pro Tip CMS markup without changing article copy. */
export function initBlogCallouts(root: ParentNode | null) {
  if (!root) return;

  root.querySelectorAll<HTMLElement>("blockquote, aside, div").forEach((element) => {
    if (element.classList.contains("blog-cta")) return;

    const firstLabel = element.querySelector<HTMLElement>("h2, h3, h4, p, strong, b")?.textContent || "";
    const kind = getCalloutKind(firstLabel);
    if (kind) element.classList.add(`blog-${kind}`);
  });

  root.querySelectorAll<HTMLElement>("h2, h3, h4, p").forEach((label) => {
    const kind = getCalloutKind(label.textContent || "");
    if (!kind || label.parentElement?.classList.contains(`blog-${kind}`)) return;

    const next = label.nextElementSibling as HTMLElement | null;
    if (!next || !["P", "UL", "OL"].includes(next.tagName)) return;

    const callout = document.createElement("aside");
    callout.className = `blog-${kind}`;
    label.parentNode?.insertBefore(callout, label);
    callout.append(label, next);
  });
}

/** Restore raw table/CTA HTML saved by the admin editor before sanitizing/rendering. */
export function restoreRawTables(html: string): string {
  return html.replace(/<div data-raw-table="([^"]+)"[^>]*><\/div>/gi, (_, encoded) => {
    try {
      return decodeURIComponent(encoded);
    } catch {
      return "";
    }
  });
}

export function restoreRawCtas(html: string): string {
  return html.replace(/<div data-raw-cta="([^"]+)"[^>]*><\/div>/gi, (_, encoded) => {
    try {
      return decodeURIComponent(encoded);
    } catch {
      return "";
    }
  });
}

function restoreRawBlocks(html: string): string {
  return restoreRawCtas(restoreRawTables(html));
}

function splitHtmlClasses(classAttr: string): string[] {
  return classAttr.trim().split(/\s+/).filter(Boolean);
}

function hasHtmlClass(classAttr: string, className: string): boolean {
  return splitHtmlClasses(classAttr).includes(className);
}

function applyCtaBannerClass(html: string): string {
  return html.replace(
    /<(blockquote|div)\s+class="([^"]*)"([^>]*)>/gi,
    (match, tag, classes, rest) => {
      // Avoid matching blog-cta-actions / blog-cta-banner__* helper classes
      if (hasHtmlClass(classes, "blog-cta-actions")) return match;
      if (classes.includes("blog-cta-banner__")) return match;

      const hasCta = hasHtmlClass(classes, "blog-cta");
      const hasBanner = hasHtmlClass(classes, "blog-cta-banner");

      if (hasBanner && !hasCta) {
        return `<${tag} class="blog-cta ${classes}"${rest}>`;
      }
      if (hasCta && !hasBanner) {
        return `<${tag} class="${classes} blog-cta-banner"${rest}>`;
      }
      return match;
    }
  );
}

function addCtaButtonClass(anchorTag: string, href: string): string {
  if (/class="[^"]*blog-cta-button/.test(anchorTag)) return anchorTag;

  const isOutline = /\/contact/i.test(href);
  const buttonClass = isOutline ? "blog-cta-button blog-cta-button-outline" : "blog-cta-button";

  if (/class="/.test(anchorTag)) {
    return anchorTag.replace(/class="([^"]*)"/, `class="$1 ${buttonClass}"`);
  }

  return anchorTag.replace("<a ", `<a class="${buttonClass}" `);
}

function enhanceCtaActionLinks(innerHtml: string): string {
  return innerHtml.replace(/<a\s+([^>]*?)href="([^"]*)"([^>]*)>/gi, (match, _pre, href) => {
    return addCtaButtonClass(match, href);
  });
}

/** Normalize CTA markup saved from the editor without full class names. */
export function enhanceBlogCtaHtml(html: string): string {
  let result = html;

  // Add button classes inside CTA action rows
  result = result.replace(
    /<div class="blog-cta-actions">([\s\S]*?)<\/div>/gi,
    (_, inner) => `<div class="blog-cta-actions">${enhanceCtaActionLinks(inner)}</div>`
  );

  // blockquote/div with blog-cta-actions but missing blog-cta wrapper class
  result = result.replace(
    /<blockquote(?![^>]*\bblog-cta\b)([^>]*)>([\s\S]*?<div class="blog-cta-actions">[\s\S]*?<\/div>[\s\S]*?)<\/blockquote>/gi,
    '<blockquote class="blog-cta"$1>$2</blockquote>'
  );

  result = result.replace(
    /<div(?![^>]*\bblog-cta\b)([^>]*)>([\s\S]*?<div class="blog-cta-actions">[\s\S]*?<\/div>[\s\S]*?)<\/div>/gi,
    (full, attrs, inner) => {
      if (attrs.includes("blog-cta-actions")) return full;
      return `<div class="blog-cta"${attrs}>${inner}</div>`;
    }
  );

  // Plain links separated by | inside .blog-cta (no blog-cta-actions wrapper)
  result = result.replace(
    /<div class="([^"]*)"([^>]*)>([\s\S]*?)<\/div>/gi,
    (match, classes, rest, inner) => {
      if (!hasHtmlClass(classes, "blog-cta") || hasHtmlClass(classes, "blog-cta-actions")) {
        return match;
      }
      if (inner.includes("<div")) return match;

      const attrs = ` class="${classes}"${rest}`;

      if (inner.includes("blog-cta-actions")) {
        return match;
      }

      const pipeLinkPattern =
        /<p>([\s\S]*?<a\s+[^>]*href="([^"]*)"[^>]*>[\s\S]*?<\/a>)\s*\|?\s*([\s\S]*?<a\s+[^>]*href="([^"]*)"[^>]*>[\s\S]*?<\/a>[\s\S]*?)<\/p>/i;
      const pipeMatch = inner.match(pipeLinkPattern);
      if (!pipeMatch) {
        return `<div${attrs}>${enhanceCtaLinksInBlock(inner)}</div>`;
      }

      const actionRow = `<div class="blog-cta-actions">${enhanceCtaActionLinks(
        `${pipeMatch[1]}${pipeMatch[3]}`
      )}</div>`;
      const updatedInner = inner.replace(pipeLinkPattern, actionRow);
      return `<div${attrs}>${updatedInner}</div>`;
    }
  );

  // blockquote CTA blocks without any CTA classes (common editor output)
  result = result.replace(
    /<blockquote(?![^>]*\bblog-cta\b)([^>]*)>([\s\S]*?)<\/blockquote>/gi,
    (full, attrs, inner) => {
      const linkCount = (inner.match(/<a\s/gi) || []).length;
      if (linkCount === 0) return full;
      if (!/ready to turn|instant quote|start your project|contact our engineers|get quote|get instant quote|upload your (step|cad|design)/i.test(
        inner
      )) {
        return full;
      }
      return `<blockquote class="blog-cta"${attrs}>${enhanceCtaLinksInBlock(inner)}</blockquote>`;
    }
  );

  return result;
}

function enhanceCtaLinksInBlock(inner: string): string {
  let updated = inner;

  const pipeLinkPattern =
    /<p>([\s\S]*?<a\s+[^>]*href="([^"]*)"[^>]*>[\s\S]*?<\/a>)\s*\|?\s*([\s\S]*?<a\s+[^>]*href="([^"]*)"[^>]*>[\s\S]*?<\/a>[\s\S]*?)<\/p>/i;
  const pipeMatch = updated.match(pipeLinkPattern);
  if (pipeMatch) {
    updated = updated.replace(
      pipeLinkPattern,
      `<div class="blog-cta-actions">${enhanceCtaActionLinks(`${pipeMatch[1]}${pipeMatch[3]}`)}</div>`
    );
  } else {
    updated = updated.replace(/<a\s+([^>]*?)href="([^"]*)"([^>]*)>/gi, (match, _pre, href) =>
      addCtaButtonClass(match, href)
    );
  }

  return updated;
}

export function prepareBlogContentHtml(html: string): { html: string; tocItems: BlogTocItem[] } {
  const decoded = restoreRawBlocks(html);
  const withLinks = normalizeBlogContentLinks(decoded);
  const withCta = applyCtaBannerClass(enhanceBlogCtaHtml(withLinks));
  const withTables = wrapTablesForScroll(withCta);
  const { html: withIds, tocItems } = injectHeadingIds(withTables);
  return { html: withIds, tocItems };
}

function htmlToPlainText(value: string): string {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extract FAQ items only from a clearly labelled FAQ section in CMS article HTML.
 * Requiring the section label and question-form subheadings prevents ordinary
 * blog headings from being exposed as FAQ structured data.
 */
export function extractBlogFaqItems(html: string): BlogFaqItem[] {
  const source = restoreRawBlocks(html);
  const sectionMatch = source.match(
    /<h2\b[^>]*>\s*(?:frequently\s+asked\s+questions|faqs?)\s*<\/h2>([\s\S]*?)(?=<h2\b|$)/i
  );

  if (!sectionMatch?.[1]) return [];

  const items: BlogFaqItem[] = [];
  const seenQuestions = new Set<string>();
  const entryPattern = /<h([3-4])\b[^>]*>([\s\S]*?)<\/h\1>([\s\S]*?)(?=<h[2-4]\b|$)/gi;

  for (const match of sectionMatch[1].matchAll(entryPattern)) {
    const question = htmlToPlainText(match[2]);
    const answerMatch = match[3].match(/<p\b[^>]*>([\s\S]*?)<\/p>/i);
    const answer = answerMatch ? htmlToPlainText(answerMatch[1]) : "";
    const normalizedQuestion = question.toLowerCase();

    if (!question.endsWith("?") || answer.length < 20 || seenQuestions.has(normalizedQuestion)) continue;

    seenQuestions.add(normalizedQuestion);
    items.push({ question, answer });
  }

  return items.slice(0, 10);
}

export const BLOG_HEADER_SCROLL_OFFSET = 96;

function findBlogAnchorTarget(id: string, root?: ParentNode | null): HTMLElement | null {
  const byId = document.getElementById(id);
  if (byId) return byId;

  const scope = root ?? document;
  const headings = scope.querySelectorAll<HTMLElement>(".blog-content h2, .blog-content h3");
  const normalizedId = id.toLowerCase();

  for (const heading of headings) {
    const headingId = heading.id.toLowerCase();
    if (headingId === normalizedId) return heading;

    const slug = slugifyHeadingText(heading.textContent || "");
    if (slug === normalizedId || slug.startsWith(`${normalizedId}-`)) return heading;

    // Short anchors like #matrix on long headings ("...Solutions Matrix")
    if (
      normalizedId.length >= 4 &&
      (slug.endsWith(`-${normalizedId}`) || slug.split("-").includes(normalizedId))
    ) {
      return heading;
    }
  }

  return null;
}

export function resolveBlogHashTarget(hash: string, root?: ParentNode | null): HTMLElement | null {
  if (!hash || hash === "#") return null;
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  return findBlogAnchorTarget(id, root);
}

export function scrollToBlogHash(
  hash: string,
  behavior: ScrollBehavior = "smooth",
  root?: ParentNode | null
): boolean {
  const target = resolveBlogHashTarget(hash, root);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - BLOG_HEADER_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}
