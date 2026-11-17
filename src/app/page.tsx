import Hero from "@/components/Hero";
import PortfolioTitle from "@/components/PortfolioTitle";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";

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
