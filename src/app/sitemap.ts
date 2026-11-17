import type { MetadataRoute } from "next";
import { lastUpdated, routes, siteUrl } from "@/lib/site";

// Next.js genera este sitemap de forma estática por defecto, no hace falta configurar nada más.
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: lastUpdated,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
