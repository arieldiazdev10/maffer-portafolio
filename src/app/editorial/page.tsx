import type { Metadata } from "next";
import MarqueeGallery from "@/components/MarqueeGallery";
import { editorial } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Diseño editorial",
  description: "Proyectos de diseño editorial de Maffer: libros, revistas y piezas gráficas.",
  alternates: { canonical: "/editorial" },
  openGraph: { url: "/editorial", title: "Diseño editorial | Maffer", description: "Proyectos de diseño editorial de Maffer: libros, revistas y piezas gráficas." },
};

export default function Page() {
  return <MarqueeGallery title="Editorial" projects={editorial} />;
}
