import type { Metadata } from "next";
import MarqueeGallery from "@/components/MarqueeGallery";
import { editorial } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Editorial | Maffer",
  description: "Proyectos de diseño editorial de Maffer.",
};

export default function Page() {
  return <MarqueeGallery title="Editorial" projects={editorial} />;
}
