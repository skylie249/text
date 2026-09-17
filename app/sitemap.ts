import type { MetadataRoute } from "next";
import { SITE_URL, TOOLS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/privacy", "/terms", "/contact"];

  const now = new Date();

  return [
    ...staticPages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.5,
    })),
    ...TOOLS.map((tool) => ({
      url: `${SITE_URL}/${tool.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
