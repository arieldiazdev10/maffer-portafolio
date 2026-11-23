import Image from "next/image";
import { assets } from "@/lib/assets";
import { hero } from "@/lib/content";
import Bee from "./Bee";
import { Rings, Scallops, Wave } from "./Decor";
import Reveal from "./Reveal";

export default function Hero() {
  const { avatar, width, height } = assets.hero;

  return (
    <section id="inicio" className="relative bg-pinky pt-32 text-center text-white md:pt-40">
      <Rings className="-left-44 top-[22%] w-[20rem] md:-left-52 md:w-[28rem]" />
      <Rings className="-right-48 -bottom-24 w-[22rem] md:-right-56 md:-bottom-32 md:w-[34rem]" />

      <Bee direction="right" className="left-[8%] top-44 h-9 w-9 md:left-[10%] md:top-52 md:h-14 md:w-14" />
      <Bee direction="left" delay={1} className="right-[14%] bottom-40 h-9 w-9 md:right-[24%] md:bottom-52 md:h-14 md:w-14" />

      <div className="relative z-20 mx-auto max-w-5xl px-6">
        {/* h1 solo para buscadores y lectores de pantalla */}
        <h1 className="sr-only">Maffer, diseñadora gráfica: diseño editorial, branding y diseño aplicado</h1>

        <Reveal>
          <p className="text-lg font-light italic md:text-xl">{hero.greeting}</p>
          <p className="mt-3 text-balance text-3xl font-light italic leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {hero.titleLight}{" "}
            <span className="relative inline-block font-semibold">
              {hero.titleBold}
              <Wave waves={6} stroke={5} className="absolute inset-x-0 -bottom-3 h-3 md:-bottom-4" />
            </span>
          </p>
          <p className="mx-auto mt-8 max-w-xs text-pretty text-sm font-light md:max-w-sm md:text-base">
            {hero.subtitle}
          </p>
        </Reveal>
      </div>

      {/* Avatar: sube desde abajo al aparecer, como asomándose sobre la nube */}
      <div className="relative z-20 mx-auto mb-10 mt-10 w-[64vw] max-w-[380px] overflow-hidden md:mb-14 md:mt-14">
        <Reveal variant="peek" delay={0.2}>
          <Image
            src={avatar}
            alt="Ilustración de Maffer asomándose"
            width={width}
            height={height}
            priority
            sizes="(min-width: 768px) 380px, 64vw"
            className="h-auto w-full"
          />
        </Reveal>
      </div>

      <Scallops id="clouds-hero" className="absolute inset-x-0 bottom-0 z-10 text-cream" />
    </section>
  );
}
