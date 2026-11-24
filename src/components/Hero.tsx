import Image from "next/image";
import { assets } from "@/lib/assets";
import { hero } from "@/lib/content";
import Bee from "./Bee";
import { Rings, Scallops, Wave } from "./Decor";
import Reveal from "./Reveal";

/** Qué parte de la altura del avatar tapa la nube (0.5 = la mitad de abajo). */
const AVATAR_COVERED = 0.5;
/** Altura media visible de la nube sobre el fondo de la sección (px): entre 30 en los valles y 62 en las puntas. */
const CLOUD_HEIGHT = 46;

export default function Hero() {
  const { avatar, width, height } = assets.hero;
  // Cuánto sobresale el avatar por debajo de la sección para que la nube tape AVATAR_COVERED de su altura.
  const overhang = `max(0px, calc(min(78vw, 400px) * ${(AVATAR_COVERED * height) / width} - ${CLOUD_HEIGHT}px))`;

  return (
    <section
      id="inicio"
      className="relative bg-pinky pt-32 text-center text-white md:pt-40"
    >
      <Rings className="-left-44 top-[22%] w-[20rem] md:-left-52 md:w-[28rem]" />
      <Rings className="-right-48 -bottom-24 w-[22rem] md:-right-56 md:-bottom-32 md:w-[34rem]" />

      <Bee
        direction="right"
        className="left-[8%] top-44 h-9 w-9 md:left-[10%] md:top-52 md:h-14 md:w-14"
      />
      <Bee
        direction="left"
        delay={1}
        className="right-[6%] bottom-28 h-9 w-9 md:right-[24%] md:bottom-52 md:h-14 md:w-14"
      />

      <div className="relative z-20 mx-auto max-w-6xl px-6">
        {/* h1 solo para buscadores y lectores de pantalla */}
        <h1 className="sr-only">
          Maffer, diseñadora gráfica: diseño editorial, branding y diseño
          aplicado
        </h1>

        <Reveal>
          <p className="text-lg font-light italic md:text-xl">
            {hero.greeting}
          </p>
          {/* En escritorio cada frase ocupa una línea; en celular se parte para que quepa */}
          <p className="mt-3 text-[1.6rem] font-light italic leading-tight tracking-tight md:text-[min(2.9vw,2.7rem)]">
            <span className="block text-balance">{hero.titleLine1}</span>
            <span className="relative inline-block text-balance">
              {hero.titleJoin}{" "}
              <span className="font-semibold">{hero.titleBold}</span>
              {/* Línea amarilla: 30% del ancho de la frase, centrada */}
              <Wave
                waves={3}
                stroke={5}
                className="absolute left-[35%] -bottom-3 h-3 w-[30%] md:-bottom-4"
              />
            </span>
          </p>
          <p className="mx-auto mt-8 max-w-xs text-pretty text-sm font-light md:max-w-sm md:text-base">
            {hero.subtitle}
          </p>
        </Reveal>
      </div>

      {/*
        Avatar: va DETRÁS de la nube (z-[5] frente a z-10). La nube tapa AVATAR_COVERED (50%) de su altura.
        El margen negativo lo baja y el clip-path recorta lo que sobresale de la sección (sin transform).
        Para tapar más o menos, cambia AVATAR_COVERED arriba (0.4 = 40%, 0.6 = 60%).
      */}
      <div
        className="relative z-[5] mx-auto mt-8 w-[78vw] max-w-[400px] md:mt-10"
        style={{
          marginBottom: `calc(-1 * ${overhang})`,
          clipPath: `inset(-100% -20% ${overhang} -20%)`,
        }}
      >
        <Reveal variant="fade" delay={0.2}>
          <Image
            src={avatar}
            alt="Ilustración de Maffer asomándose"
            width={width}
            height={height}
            priority
            sizes="(min-width: 768px) 400px, 78vw"
            className="h-auto w-full"
          />
        </Reveal>
      </div>

      <Scallops
        id="clouds-hero"
        className="absolute inset-x-0 -bottom-px z-10 text-cream"
      />
    </section>
  );
}
