import type { MetadataRoute } from "next";
import { allProjects } from "@/lib/projects";
import { lastUpdated, routes, siteUrl } from "@/lib/site";

// Next.js genera este sitemap de forma estática por defecto, no hace falta configurar nada más.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: lastUpdated,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  // Una página por proyecto (se agregan solas al añadir proyectos en lib/projects.ts)
  const projects = allProjects.map(({ project }) => ({
    url: `${siteUrl}/proyectos/${project.id}`,
    lastModified: lastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...projects];
}
