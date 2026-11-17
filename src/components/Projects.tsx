"use client";

import Image from "next/image";
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
      className="relative -ml-8 first:ml-0 hover:!z-50 md:-ml-14"
    >
      {p.label && (
        <motion.span
          style={{ opacity: labelOpacity }}
          className={cn(
            "absolute -top-10 z-50 whitespace-nowrap rounded-full px-4 py-1 text-sm text-white md:text-lg",
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
        <div className="relative aspect-square w-36 overflow-hidden rounded-[1.75rem] md:w-56">
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="224px"
            className="object-cover"
          />
        </div>
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
    <section className="px-6 pb-28">
      <h2 className="mx-auto max-w-4xl text-center text-3xl leading-tight tracking-tight md:text-6xl">
        {projectsSection.title}
      </h2>

      <div
        ref={wrapRef}
        className="mx-auto mt-16 max-w-6xl overflow-x-auto px-6 pb-12 pt-12 md:overflow-visible"
      >
        <ul
          ref={listRef}
          className={cn(
            "relative mx-auto flex w-max items-center md:w-full md:justify-center",
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

      <p className="text-center text-sm md:text-base">
        {projectsSection.caption}
      </p>
    </section>
  );
}
