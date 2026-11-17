"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import Marquee from "./Marquee";
import ProjectModal from "./ProjectModal";

// Dirección, velocidad (segundos por vuelta) y desfase inicial de cada carrusel
const rowSettings = [
  { reverse: false, duration: 60, offset: 8 },
  { reverse: true, duration: 73, offset: 24 },
  { reverse: false, duration: 67, offset: 40 },
];

/** Mueve el inicio de la lista: [A,B,C,D] con n=1 -> [B,C,D,A] */
function rotate<T>(list: T[], n: number): T[] {
  const k = n % list.length;
  return [...list.slice(k), ...list.slice(0, k)];
}

/**
 * A partir de UNA lista de proyectos crea las filas, cada una con un orden distinto,
 * para que los mismos proyectos no queden uno debajo de otro.
 */
function buildRows(projects: Project[]): Project[][] {
  const step = Math.max(1, Math.floor(projects.length / 3)) + 1;
  return [projects, rotate([...projects].reverse(), 1), rotate(projects, step)];
}

/** Página con 3 carruseles + modal de detalle. Se reutiliza en Editorial, Branding y Diseño aplicado. */
export default function MarqueeGallery({ title, projects }: { title: string; projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const rows = buildRows(projects);

  return (
    <main className="py-14 md:py-20">
      <h1 className="sr-only">{title}</h1>
      <div className="flex flex-col gap-6 md:gap-10">
        {rows.map((items, i) => (
          <Marquee key={i} items={items} onSelect={setSelected} {...rowSettings[i]} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
