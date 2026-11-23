"use client";

import { usePathname } from "next/navigation";

/** Oculta su contenido en la página principal (que tiene su propia sección de contacto). */
export default function HideOnHome({ children }: { children: React.ReactNode }) {
  return usePathname() === "/" ? null : <>{children}</>;
}
