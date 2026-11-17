import type { Metadata } from "next";
import MarqueeGallery from "@/components/MarqueeGallery";
import { applied } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Diseño aplicado",
  description: "Proyectos de diseño aplicado de Maffer: piezas gráficas para marcas, eventos y productos.",
  alternates: { canonical: "/diseno-aplicado" },
  openGraph: { url: "/diseno-aplicado", title: "Diseño aplicado | Maffer", description: "Proyectos de diseño aplicado de Maffer: piezas gráficas para marcas, eventos y productos." },
};

export default function Page() {
  return <MarqueeGallery title="Diseño aplicado" projects={applied} />;
}
