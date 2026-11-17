import type { Metadata } from "next";
import MarqueeGallery from "@/components/MarqueeGallery";
import { branding } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Branding | Maffer",
  description: "Proyectos de branding de Maffer.",
};

export default function Page() {
  return <MarqueeGallery title="Branding" projects={branding} />;
}
