"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { assets } from "@/lib/assets";
import { projectsSection } from "@/lib/content";
import { cn } from "@/lib/utils";
import { getProjectEntry } from "@/lib/projects";
import { Rings } from "./Decor";
import SafeImage from "./SafeImage";

type Project = (typeof assets.projects)[number];

// Posición final (abanico)
const rotations = [-8, -4, -1, 1, 4, 8];
const lifts = [24, 0, -6, -6, 0, 24];
// Rotación mientras están agrupados (mazo de cartas)
const stackRotations = [-6, 4, -3, 5, -4, 3];

/**
 * Cuánto debe avanzar el scroll para que cada tarjeta termine de abrirse.
 * Menos retraso entre tarjetas = se abren más juntas.
 */
const STAGGER = 0.05;
const SPAN = 0.7;

function Wrapper({ slug, label, children }: { slug?: string; label: string; children: React.ReactNode }) {
  if (!slug || !getProjectEntry(slug)) return <>{children}</>;
  return (
    <Link
      href={`/proyectos/${slug}`}
      aria-label={`Ver proyecto: ${label}`}
      className="block rounded-xl focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand md:rounded-[1.75rem]"
    >
      {children}
    </Link>
  );
}

function Card({
  p,
  i,
  offset,
  progress,
}: {
  p: Project;
  i: number;
  offset: number;
  progress: MotionValue<number>;
}) {
  // Progreso individual (0 → 1) con escalonado y suavizado de salida
  const t = useTransform(progress, (v) => {
    const k = Math.min(1, Math.max(0, (v - i * STAGGER) / SPAN));
    return 1 - Math.pow(1 - k, 3);
  });
  const x = useTransform(t, (k) => offset * (1 - k));
  const y = useTransform(t, (k) => lifts[i % 6] * k);
  const rotate = useTransform(
    t,
    (k) =>
      stackRotations[i % 6] + (rotations[i % 6] - stackRotations[i % 6]) * k,
  );
  const labelOpacity = useTransform(t, [0.85, 1], [0, 1]);

  return (
    <motion.li
      style={{ x, y, rotate, zIndex: i }}
      className="relative -ml-[3vw] first:ml-0 hover:!z-50 md:-ml-14"
    >
      {p.label && (
        <motion.span
          style={{ opacity: labelOpacity }}
          className={cn(
            "absolute -top-8 z-50 whitespace-nowrap rounded-full px-3 py-0.5 text-xs text-white md:-top-10 md:px-4 md:py-1 md:text-lg",
            i % 2 === 1 ? "left-6 bg-[#3d5a47]" : "right-2 bg-[#f4a6d7]",
          )}
        >
          {p.label}
        </motion.span>
      )}

      {/* El hover va en un contenedor interno para no chocar con la animación por scroll */}
      <motion.div
        whileHover={{ y: -16, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="drop-shadow-[0_12px_10px_rgba(0,0,0,0.10)]"
      >
        {/* Si el proyecto existe en lib/projects.ts, la tarjeta lleva a su página; si no, es solo imagen */}
        <Wrapper slug={p.slug} label={p.alt}>
          <div className="relative aspect-square w-[17.5vw] overflow-hidden rounded-xl md:w-56 md:rounded-[1.75rem]">
            <SafeImage
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 768px) 224px, 18vw"
              className="object-cover"
            />
          </div>
        </Wrapper>
      </motion.div>
    </motion.li>
  );
}

export default function Projects() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const [offsets, setOffsets] = useState<number[] | null>(null);

  // Progreso del scroll: 0 cuando la sección apenas asoma abajo, 1 cuando llega al centro de la pantalla.
  // Ajusta estos dos valores para que empiece/termine antes o después.
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 85%", "center 45%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });
  const done = useMotionValue(1);
  const progress = reduce ? done : smooth;

  // Mide cuánto debe moverse cada tarjeta para quedar apilada en el centro VISIBLE
  useLayoutEffect(() => {
    const measure = () => {
      const ul = listRef.current;
      const wrap = wrapRef.current;
      if (!ul || !wrap) return;
      const w = wrap.getBoundingClientRect();
      const u = ul.getBoundingClientRect();
      const center = w.left + wrap.clientWidth / 2 - u.left;
      const items = Array.from(ul.children) as HTMLElement[];
      setOffsets(
        items.map((el) => center - (el.offsetLeft + el.offsetWidth / 2)),
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
<<<<<<< HEAD
    <section className="relative px-2 pb-16 pt-14 md:px-6 md:pb-28 md:pt-24">
      <Rings className="-left-16 bottom-0 w-[7.2rem] md:-left-[10.4rem] md:w-[20.8rem]" />
      {/* En escritorio cada frase ocupa una línea; en celular se parten para que quepan */}
      <h2 className="mx-auto max-w-6xl px-4 text-center text-[1.75rem] font-medium leading-tight tracking-tight text-pinky md:text-[min(3.2vw,2.9rem)]">
        <span className="block text-balance">{projectsSection.titleLine1}</span>
        <span className="block text-balance">{projectsSection.titleLine2}</span>
=======
    <section className="relative px-2 pb-24 pt-14 md:px-6 md:pb-28 md:pt-24">
      <Rings className="-left-20 bottom-0 w-[9rem] md:-left-52 md:w-[26rem]" />
      <h2 className="mx-auto max-w-4xl text-balance px-4 text-center text-3xl font-medium leading-tight tracking-tight text-pinky md:text-6xl">
        {projectsSection.title}
>>>>>>> 17e0d71d25b121b9ec266ee8db2bd86a9ff39dcf
      </h2>

      {/* CELULAR: carrusel con deslizamiento (tarjetas grandes que se centran al soltar) */}
      <ul className="no-scrollbar -mx-2 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[16vw] pb-10 pt-10 md:hidden">
        {assets.projects.map((p, i) => (
          <li key={p.src} className="relative w-[68vw] max-w-[22rem] shrink-0 snap-center">
            {p.label && (
              <span
                className={cn(
                  "absolute -top-4 z-10 whitespace-nowrap rounded-full px-3 py-0.5 text-sm text-white",
                  i % 2 === 1 ? "left-4 bg-[#3d5a47]" : "right-4 bg-[#f4a6d7]",
                )}
              >
                {p.label}
              </span>
            )}
            <div
              className="drop-shadow-[0_12px_10px_rgba(0,0,0,0.12)]"
              style={{ rotate: `${i % 2 === 0 ? -2 : 2}deg` }}
            >
              <Wrapper slug={p.slug} label={p.alt}>
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
                  <SafeImage src={p.src} alt={p.alt} fill sizes="68vw" className="object-cover" />
                </div>
              </Wrapper>
            </div>
          </li>
        ))}
      </ul>

      {/* ESCRITORIO: abanico animado con el scroll */}
      <div
        ref={wrapRef}
<<<<<<< HEAD
        className="mx-auto mt-14 hidden max-w-6xl px-2 pb-12 pt-12 md:mt-16 md:block md:px-6"
=======
        className="mx-auto mt-14 max-w-6xl px-2 pb-12 pt-12 md:mt-16 md:px-6"
>>>>>>> 17e0d71d25b121b9ec266ee8db2bd86a9ff39dcf
      >
        <ul
          ref={listRef}
          className={cn(
            "relative mx-auto flex w-full items-center justify-center",
            offsets === null && "invisible",
          )}
        >
          {assets.projects.map((p, i) => (
            <Card
              key={p.src}
              p={p}
              i={i}
              offset={offsets?.[i] ?? 0}
              progress={progress}
            />
          ))}
        </ul>
      </div>

      <p className="px-4 text-center text-xs uppercase tracking-wide text-pinky sm:text-sm md:text-base">
        {projectsSection.caption}
      </p>
    </section>
  );
}
