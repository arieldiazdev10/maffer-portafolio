import Image from "next/image";
import { assets } from "@/lib/assets";
import { Burst } from "./Decor";

export default function PortfolioTitle() {
  return (
    <section
      aria-labelledby="portafolio"
      className="relative mt-4 overflow-hidden pb-24 md:pb-32"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <h2
          id="portafolio"
          className="relative z-10 font-display text-[22vw] leading-[0.82] tracking-tight text-brand md:text-[17rem]"
        >
          PORTA
          <br />
          FOLIO
        </h2>

        <div className="absolute bottom-0 right-0 z-20 h-[62%] w-[52%] md:right-6">
          <Image
            src={assets.portfolio.avatar}
            alt="Ilustración de Maffer"
            fill
            sizes="600px"
            className="object-contain object-bottom"
          />
        </div>

        <div className="absolute bottom-2 left-[52%] z-30 h-20 w-20 md:bottom-6 md:h-36 md:w-36">
          <Burst className="h-full w-full" points={12} />
          <span className="absolute inset-0 flex -rotate-12 flex-col items-center justify-center text-center text-[10px] font-medium leading-none text-white md:text-base">
            edición
            <b className="text-sm font-semibold md:text-2xl">2026</b>
          </span>
        </div>
      </div>
    </section>
  );
}
