import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { assets } from "@/lib/assets";
import { about, cta } from "@/lib/content";
import { noOrphan } from "@/lib/utils";
import Bee from "./Bee";
import { Rings } from "./Decor";
import Reveal from "./Reveal";

export default function About() {
  const { image, width, height } = assets.about;

  return (
    <section id="sobre-mi" className="relative bg-petal py-24 md:py-32">
      <Rings className="-right-44 -bottom-32 w-[22rem] md:-right-52 md:w-[32rem]" />
      <Bee direction="left" className="right-[8%] top-10 h-10 w-10 md:right-[22%] md:top-16 md:h-14 md:w-14" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[0.9fr_1fr] md:gap-16">
        {/* Avatar: aparece con un pequeño rebote al hacer scroll */}
        <Reveal variant="pop">
          <Image
            src={image}
            alt="Ilustración de Maffer sonriendo"
            width={width}
            height={height}
            sizes="(min-width: 768px) 420px, 70vw"
            className="mx-auto h-auto w-[70vw] max-w-[360px] md:w-full md:max-w-none"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-sm uppercase tracking-wide text-pinky">{about.label}</p>
          <h2 className="mt-4 text-balance text-3xl italic leading-tight tracking-tight text-pinky md:text-4xl">
            <span className="font-semibold">{about.titleBold}</span>{" "}
            <span className="font-light">{noOrphan(about.titleLight)}</span>
          </h2>
          <div className="mt-8 max-w-md space-y-4 text-pretty text-sm font-light leading-relaxed text-pinky-deep md:text-base">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href={cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 italic transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            {cta.button}
            <ArrowUpRight size={18} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
