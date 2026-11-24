import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { allProjects, getProjectEntry } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

// Se generan en el build los proyectos que existen en lib/projects.ts; cualquier otra dirección da 404 (ver notFound() abajo)
export function generateStaticParams() {
  return allProjects.map(({ project }) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getProjectEntry(slug);
  if (!entry) return {};

  const { project } = entry;
  const description = project.description[0] ?? `Proyecto de ${project.category} de Maffer.`;
  const url = `/proyectos/${project.id}`;

  return {
    title: `${project.title} · ${project.category}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${project.title} · ${project.category} | Maffer`,
      description,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const entry = getProjectEntry(slug);
  if (!entry) notFound();

  return <ProjectDetail project={entry.project} />;
}
