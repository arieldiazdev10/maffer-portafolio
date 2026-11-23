"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";
import SafeImage from "./SafeImage";

/**
 * Carrusel infinito en CSS puro.
 * - `duration`: segundos que tarda en dar una vuelta (más alto = más lento).
 * - `reverse`: mueve hacia la derecha en vez de la izquierda.
 * - `offset`: segundos de "adelanto" para que las filas no arranquen alineadas.
 * - Cada imagen es un enlace a la página de detalle del proyecto: /proyectos/<id>
 * Se detiene mientras el mouse esté sobre cualquiera de sus imágenes (ver globals.css).
 */
export default function Marquee({
  items,
  duration = 40,
  reverse = false,
  offset = 0,
}: {
  items: Project[];
  duration?: number;
  reverse?: boolean;
  offset?: number;
}) {
  const style = {
    "--dur": `${duration}s`,
    "--delay": `-${offset}s`,
  } as React.CSSProperties;

  // Se pausa mientras la fila no está en pantalla, para que el scroll sea fluido
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.dataset.offscreen = String(!entry.isIntersecting);
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Cada grupo necesita al menos 3 imágenes para cubrir la pantalla; solo se repiten si hay menos
  const repeats = Math.max(1, Math.ceil(3 / items.length));
  const base = Array.from({ length: repeats }, () => items).flat();

  // El grupo se renderiza dos veces para que el bucle sea continuo
  const group = (hidden: boolean) => (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {base.map((item, idx) => (
        <li
          key={`${item.id}-${idx}`}
          className="marquee-item mr-3 shrink-0 md:mr-5"
        >
          <Link
            href={`/proyectos/${item.id}`}
            tabIndex={hidden || idx >= items.length ? -1 : 0}
            aria-label={`Ver proyecto ${item.title}`}
            className="group relative block aspect-[3/2] w-[72vw] cursor-pointer sm:w-[48vw] lg:w-[40vw] overflow-hidden rounded-3xl text-left focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <SafeImage
              src={item.cover.src}
              alt={hidden || idx >= items.length ? "" : item.cover.alt}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 48vw, 72vw"
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#2c3b2c]/75 p-4 text-center text-xl font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-3xl">
              {item.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={ref} className="marquee overflow-clip">
      <div className="marquee-track" data-reverse={reverse} style={style}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
