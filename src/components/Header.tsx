"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";
import { getProjectEntry } from "@/lib/projects";
import { cn } from "@/lib/utils";

// Secciones que se observan en cada página (en el orden en que aparecen)
const sectionsByPath: Record<string, string[]> = {
  "/": ["contacto"],
  "/proyectos": ["branding", "editorial", "diseno-aplicado", "contacto"],
};

// En la página de detalle de un proyecto solo se observa el contacto (el footer)
const contactOnly = ["contacto"];

/**
 * Devuelve el id de la sección visible (la última cuya parte superior ya pasó el 40% de la pantalla).
 * `goTo(id)` fija el botón mientras dura el scroll automático de un clic, para que no se
 * vaya iluminando cada botón intermedio; se libera al terminar o cuando el usuario toma el control.
 */
function useActiveSection(ids: string[] | undefined) {
  const [active, setActive] = useState<string | null>(null);
  const lock = useRef<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!ids) {
      setActive(null);
      return;
    }
    const update = () => {
      if (lock.current) {
        setActive(lock.current);
        return;
      }
      const line = window.innerHeight * 0.4;
      const present = ids.filter((id) => document.getElementById(id));
      let current: string | null = null;
      for (const id of present) {
        if (document.getElementById(id)!.getBoundingClientRect().top <= line) current = id;
      }
      // Al llegar al final de la página se marca la última sección
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && present.length) current = present[present.length - 1];
      setActive(current);
    };

    // El cálculo se hace como máximo una vez por fotograma, para no frenar el scroll
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };
    const release = () => {
      lock.current = null;
      clearTimeout(timer.current);
      onScroll();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchstart", release, { passive: true });
    window.addEventListener("keydown", release);
    window.addEventListener("scrollend", release);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchstart", release);
      window.removeEventListener("keydown", release);
      window.removeEventListener("scrollend", release);
      clearTimeout(timer.current);
    };
  }, [ids]);

  const goTo = useCallback((id: string) => {
    lock.current = id;
    setActive(id);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      lock.current = null;
    }, 1500);
  }, []);

  return { active, goTo };
}

/** Menú principal, fijo arriba al hacer scroll. Es hijo directo del <body> para que `sticky` funcione siempre. */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // En /proyectos/<id> el botón de la categoría del proyecto queda resaltado (Branding, Editorial...)
  const detailSlug = pathname.startsWith("/proyectos/") ? pathname.split("/")[2] : undefined;
  const detailCategory = detailSlug ? getProjectEntry(detailSlug)?.categoryId : undefined;

  const sectionIds = sectionsByPath[pathname] ?? (detailSlug ? contactOnly : undefined);
  const { active: section, goTo } = useActiveSection(sectionIds);

  // Botón resaltado: el de la sección visible; si no hay, el que corresponde a la página
  const fallback = isHome
    ? nav[0].label
    : pathname === "/proyectos"
      ? "Branding"
      : nav.find((i) => i.section === detailCategory)?.label;
  const activeLabel = (sectionIds && nav.find((i) => i.section === section)?.label) || fallback;

  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  // La píldora roja se posiciona midiendo el botón activo y se mueve con una transición CSS.
  // (Sin animaciones de layout: esas se descuadran con un menú sticky mientras se hace scroll.)
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const item = list.querySelector<HTMLElement>('[data-active="true"]');
      setPill(item ? { left: item.offsetLeft, width: item.offsetWidth } : null);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [activeLabel]);

  // En pantallas pequeñas el menú se desplaza: centra el botón activo sin tocar el scroll de la página
  useEffect(() => {
    const navEl = navRef.current;
    const item = listRef.current?.querySelector<HTMLElement>('[data-active="true"]');
    if (!navEl || !item || navEl.scrollWidth <= navEl.clientWidth) return;
    const n = navEl.getBoundingClientRect();
    const i = item.getBoundingClientRect();
    navEl.scrollTo({ left: navEl.scrollLeft + (i.left - n.left) - (n.width - i.width) / 2, behavior: "smooth" });
  }, [activeLabel]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
    const [path, hash] = href.split("#");

    // Mismo destino que la página actual (ej. "Maffer" estando en la página principal)
    if (!hash && path === pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Sección de otra página: navegación normal de Next.js
    if (!hash || (path && path !== pathname)) return;

    const target = document.getElementById(hash);
    if (!target) return;
    e.preventDefault();
    if (sectionId) goTo(sectionId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    // En la home mide 0 de alto para que el fondo rosa llegue hasta arriba
    <div className={cn("sticky z-50 px-3 sm:px-4", isHome ? "top-0 h-0" : "top-3 mt-3 sm:top-4 sm:mt-4")}>
      <nav
        ref={navRef}
        aria-label="Principal"
        className={cn(
          "mx-auto max-w-5xl overflow-x-auto rounded-full bg-white p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] [scrollbar-width:none] sm:p-2 md:p-3 [&::-webkit-scrollbar]:hidden",
          isHome && "relative top-3 sm:top-4"
        )}
      >
        <ul ref={listRef} className="relative flex min-w-max items-center justify-between gap-0.5 sm:gap-1 md:gap-2">
          {pill && (
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 rounded-full bg-brand transition-[transform,width] duration-300 ease-out"
              style={{ width: pill.width, transform: `translateX(${pill.left}px)` }}
            />
          )}
          {nav.map((item) => {
            const isActive = item.label === activeLabel;
            return (
              <li key={item.label} data-active={isActive} className="relative">
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, item.section)}
                  className={cn(
                    "relative z-10 block whitespace-nowrap rounded-full px-3.5 py-2.5 text-[13px] transition-colors duration-300 sm:px-5 sm:py-3 sm:text-sm md:px-8 md:text-base",
                    isActive ? "text-white" : "text-ink hover:text-brand"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
