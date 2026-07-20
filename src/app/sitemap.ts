import { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";
import fs from "fs";
import path from "path";

// Directories to exclude from the sitemap
const EXCLUDED_DIRS = new Set(["admin", "api", "blog"]);

// Routes to exclude until ready for indexing (remove when page is live)
const EXCLUDED_ROUTES = new Set(["/cnc-turning"]);

// Published blog posts to always include (fallback when Supabase is unavailable at build time)
const PINNED_BLOG_SLUGS = [
  "injection-molding-defects",
  "injection-mold-components",
  "cnc-machining-tolerances",
] as const;

// Per-route overrides for changeFrequency and priority
const ROUTE_CONFIG: Record<
  string,
  { changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number }
> = {
  "/": { changeFrequency: "weekly", priority: 1.0 },
  "/blog": { changeFrequency: "daily", priority: 0.9 },
  "/reviews": { changeFrequency: "weekly", priority: 0.7 },
  "/privacy-policy": { changeFrequency: "yearly", priority: 0.3 },
  "/terms-and-conditions": { changeFrequency: "yearly", priority: 0.3 },
};

function discoverRoutes(appDir: string): string[] {
  const routes: string[] = [];

  function scan(dir: string, routePath: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // Check if this directory has a page.tsx (i.e., it's a route)
    const hasPage = entries.some(
      (e) => e.isFile() && (e.name === "page.tsx" || e.name === "page.ts")
    );

    if (hasPage) {
      routes.push(routePath || "/");
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      // Skip excluded, dynamic, and private directories
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      if (entry.name.startsWith("[")) continue;
      if (entry.name.startsWith("_")) continue;

      scan(path.join(dir, entry.name), `${routePath}/${entry.name}`);
    }
  }

  scan(appDir, "");
  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apexbatch.com";
  const appDir = path.join(process.cwd(), "src", "app");

  // Auto-discover static pages from filesystem
  const routes = discoverRoutes(appDir).filter((route) => !EXCLUDED_ROUTES.has(route));
  const staticPages: MetadataRoute.Sitemap = routes.map((route) => {
    const config = ROUTE_CONFIG[route] || {};
    return {
      url: `${baseUrl}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency || "monthly",
      priority: config.priority ?? 0.8,
    };
  });

  // Dynamic blog posts (published from CMS + pinned fallbacks)
  const blogPostsBySlug = new Map<string, MetadataRoute.Sitemap[number]>();

  try {
    const posts = await getPublishedPosts();
    for (const post of posts) {
      blogPostsBySlug.set(post.slug, {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt || new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  for (const slug of PINNED_BLOG_SLUGS) {
    if (!blogPostsBySlug.has(slug)) {
      blogPostsBySlug.set(slug, {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  const blogPosts = Array.from(blogPostsBySlug.values());

  // Blog index is excluded from auto-discovery, add it manually
  staticPages.push({
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  });

  return [...staticPages, ...blogPosts];
}
