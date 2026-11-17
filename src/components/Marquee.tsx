import Image from "next/image";
import type { Project } from "@/lib/projects";

/**
 * Carrusel infinito en CSS puro.
 * - `duration`: segundos que tarda en dar una vuelta (más alto = más lento).
 * - `reverse`: mueve hacia la derecha en vez de la izquierda.
 * - `offset`: segundos de "adelanto" para que las filas no arranquen alineadas.
 * - `onSelect`: se llama con el proyecto al hacer clic en una imagen.
 * Se detiene mientras el mouse esté sobre cualquiera de sus imágenes (ver globals.css).
 */
export default function Marquee({
  items,
  onSelect,
  duration = 40,
  reverse = false,
  offset = 0,
}: {
  items: Project[];
  onSelect: (project: Project) => void;
  duration?: number;
  reverse?: boolean;
  offset?: number;
}) {
  const style = {
    "--dur": `${duration}s`,
    "--delay": `-${offset}s`,
  } as React.CSSProperties;

  // Con pocas imágenes se duplican dentro del grupo para que siempre cubra la pantalla
  const base = items.length < 6 ? [...items, ...items] : items;

  // El grupo se renderiza dos veces para que el bucle sea continuo
  const group = (hidden: boolean) => (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {base.map((item, idx) => (
        <li
          key={`${item.id}-${idx}`}
          className="marquee-item mr-4 shrink-0 md:mr-6"
        >
          <button
            type="button"
            onClick={() => onSelect(item)}
            tabIndex={hidden || idx >= items.length ? -1 : 0}
            aria-label={`Ver proyecto ${item.title}`}
            className="group relative block aspect-[3/2] w-[62vw] cursor-pointer overflow-hidden rounded-3xl text-left focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand md:w-[25vw]"
          >
            <Image
              src={item.cover.src}
              alt={hidden || idx >= items.length ? "" : item.cover.alt}
              fill
              sizes="(min-width: 768px) 25vw, 62vw"
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#2c3b2c]/75 p-4 text-center text-2xl font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-3xl">
              {item.title}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-clip">
      <div className="marquee-track" data-reverse={reverse} style={style}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
