import type { Project } from "@/lib/projects";
import Marquee from "./Marquee";

export type ProjectGroup = {
  id: string;
  title: string;
  projects: Project[];
};

// Dirección, velocidad (segundos por vuelta) y desfase inicial de las 2 filas de cada categoría
const rowSettings = [
  { reverse: false, duration: 96, offset: 13 },
  { reverse: true, duration: 116, offset: 38 },
];

/** Mueve el inicio de la lista: [A,B,C,D] con n=1 -> [B,C,D,A] */
function rotate<T>(list: T[], n: number): T[] {
  const k = n % list.length;
  return [...list.slice(k), ...list.slice(0, k)];
}

/** A partir de UNA lista crea 2 filas con orden distinto, para que no se repitan alineadas. */
function buildRows(projects: Project[]): Project[][] {
  return [projects, rotate([...projects].reverse(), 1)];
}

/**
 * Todas las categorías en una sola página. Cada bloque tiene el id que usa el menú
 * (branding, editorial, diseno-aplicado). Al hacer clic en un proyecto se abre su página de detalle.
 */
export default function ProjectsGallery({ groups }: { groups: ProjectGroup[] }) {
  return (
    <main className="relative overflow-x-clip pt-14 md:pt-20">
      <h1 className="sr-only">Proyectos de Maffer: branding, editorial y diseño aplicado</h1>

      {groups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-title`}
          className="mb-14 md:mb-24"
        >
          <h2 id={`${group.id}-title`} className="sr-only">
            {group.title}
          </h2>
          <div className="flex flex-col gap-3 md:gap-4">
            {buildRows(group.projects).map((items, i) => (
              <Marquee key={i} items={items} {...rowSettings[i]} />
            ))}
          </div>
        </section>
      ))}

    </main>
  );
}
