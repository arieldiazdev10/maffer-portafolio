import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Hero />
      <Projects />
      <About />
      <ContactSection />
    </main>
  );
}
