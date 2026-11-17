import type { Metadata } from "next";
import MarqueeGallery from "@/components/MarqueeGallery";
import { applied } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Diseño aplicado | Maffer",
  description: "Proyectos de diseño aplicado de Maffer.",
};

export default function Page() {
  return <MarqueeGallery title="Diseño aplicado" projects={applied} />;
}
