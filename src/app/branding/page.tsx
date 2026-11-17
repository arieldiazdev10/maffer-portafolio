import type { Metadata } from "next";
import MarqueeGallery from "@/components/MarqueeGallery";
import { branding } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Branding",
  description: "Proyectos de branding de Maffer: identidad visual y marcas con personalidad.",
  alternates: { canonical: "/branding" },
  openGraph: { url: "/branding", title: "Branding | Maffer", description: "Proyectos de branding de Maffer: identidad visual y marcas con personalidad." },
};

export default function Page() {
  return <MarqueeGallery title="Branding" projects={branding} />;
}
