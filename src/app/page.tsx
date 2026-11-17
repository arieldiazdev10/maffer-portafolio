import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PortfolioTitle from "@/components/PortfolioTitle";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioTitle />
      <Projects />
      <Cta />
    </main>
  );
}
