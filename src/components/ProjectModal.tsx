"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Modal de detalle de un proyecto: galería de fotos + texto.
 * Uso:  <ProjectModal project={seleccionado} onClose={() => setSeleccionado(null)} />
 * Con `project={null}` permanece cerrado. Funciona con cualquier proyecto de lib/projects.ts.
 */
export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && <ModalContent key={project.id} project={project} onClose={onClose} />}
    </AnimatePresence>
  );
}

const slide = {
  enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
};

function ModalContent({ project, onClose }: { project: Project; onClose: () => void }) {
  const { gallery } = project;
  const [[index, dir], setPage] = useState<[number, number]>([0, 0]);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback(
    (next: number) => {
      const n = (next + gallery.length) % gallery.length;
      setPage(([cur]) => [n, n > cur ? 1 : -1]);
    },
    [gallery.length]
  );

  // Bloquea el scroll de la página, enfoca el modal y devuelve el foco al cerrar
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.({ preventScroll: true });
    };
  }, []);

  // Teclado: Esc cierra, flechas navegan, Tab se queda dentro del modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>("button, [href]");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go, onClose]);

  const titleId = `modal-title-${project.id}`;
  const many = gallery.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-3 backdrop-blur-sm md:p-8"
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="relative grid max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-cream shadow-2xl md:grid-cols-[1.5fr_1fr]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-20 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <X size={20} aria-hidden />
        </button>

        {/* Galería */}
        <div className="p-4 md:p-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={gallery[index].src}
                  alt={gallery[index].alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {many && (
              <>
                <NavButton side="left" onClick={() => go(index - 1)} />
                <NavButton side="right" onClick={() => go(index + 1)} />
              </>
            )}
          </div>

          {many && (
            <ul className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {gallery.map((img, i) => (
                <li key={img.src} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Ver imagen ${i + 1} de ${gallery.length}`}
                    aria-current={i === index}
                    className={cn(
                      "relative block aspect-[4/3] w-20 overflow-hidden rounded-xl bg-white ring-2 transition md:w-24",
                      i === index ? "ring-brand" : "opacity-60 ring-transparent hover:opacity-100"
                    )}
                  >
                    <Image src={img.src} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center gap-4 p-6 pt-2 md:p-10 md:pl-4">
          <p className="text-lg italic text-brand">{project.category}</p>
          <h2 id={titleId} className="text-3xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h2>
          <div className="space-y-3 text-base font-light leading-relaxed md:text-lg">
            {project.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {many && (
            <p className="mt-2 text-sm text-ink/60" aria-live="polite">
              {index + 1} / {gallery.length}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Imagen anterior" : "Imagen siguiente"}
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-brand",
        side === "left" ? "left-3" : "right-3"
      )}
    >
      <Icon size={22} aria-hidden />
    </button>
  );
}
