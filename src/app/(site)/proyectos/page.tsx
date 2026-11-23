import type { Metadata } from "next";
import ProjectsGallery from "@/components/ProjectsGallery";
import { projectCategories } from "@/lib/content";
import { projectsByCategory, type CategoryId } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de Maffer: branding, diseño editorial y diseño aplicado. Entra al detalle de cada trabajo.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    url: "/proyectos",
    title: "Proyectos | Maffer",
    description: "Branding, diseño editorial y diseño aplicado.",
  },
};

export default function Page() {
  const groups = projectCategories.map((category) => ({
    ...category,
    projects: projectsByCategory[category.id as CategoryId],
  }));

  return <ProjectsGallery groups={groups} />;
}
