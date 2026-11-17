import Image from "next/image";
import { assets } from "@/lib/assets";

export default function PortfolioTitle() {
  const { banner, width, height } = assets.portfolio;
  return (
    <section
      aria-labelledby="portafolio"
      className="relative mt-4 overflow-hidden pb-10 md:pb-14"
    >
      <h2 id="portafolio" className="sr-only">
        Portafolio edición 2026
      </h2>
      <div className="mx-auto max-w-7xl px-6">
        <Image
          src={banner}
          alt="Portafolio, edición 2026, con la ilustración de Maffer"
          width={width}
          height={height}
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
