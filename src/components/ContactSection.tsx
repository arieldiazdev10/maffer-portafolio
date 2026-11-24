import Image from "next/image";
import { assets } from "@/lib/assets";
import { footer } from "@/lib/content";
import Bee from "./Bee";
import { Rings, Scallops } from "./Decor";
import Reveal from "./Reveal";
import Socials from "./Socials";

export default function ContactSection({ topRing = false }: { topRing?: boolean }) {
  return (
    <section id="contacto" className="relative px-6 pb-48 pt-24 text-center md:pt-32">
      {topRing && (
        <Rings className="-right-16 -top-[2.4rem] w-[8rem] md:-right-[10.4rem] md:-top-[6.4rem] md:w-[24rem]" />
      )}
      <Rings className="-left-16 bottom-32 w-[7.2rem] md:-left-[10.4rem] md:bottom-24 md:w-[20.8rem]" />
      <Bee direction="right" className="left-[8%] top-24 h-10 w-10 md:left-[18%] md:top-28 md:h-14 md:w-14" />
      <Bee direction="left" delay={1} className="right-[10%] top-[16rem] h-10 w-10 md:right-[26%] md:top-[18rem] md:h-14 md:w-14" />

      <Reveal className="relative z-20 mx-auto max-w-2xl">
        <h2 className="text-4xl font-semibold italic tracking-tight text-pinky md:text-6xl">{footer.title}</h2>
        <p className="mx-auto mt-5 max-w-md text-pretty text-base font-light text-pinky md:text-xl">{footer.text}</p>
      </Reveal>

      <Reveal delay={0.1} className="relative z-20">
        <div className="relative mx-auto mt-16 h-44 w-[min(88vw,560px)] md:h-64">
          <Image src={assets.logo} alt="Maffer" fill sizes="560px" className="object-contain" />
        </div>
      </Reveal>

      <Socials className="absolute bottom-28 right-6 z-20 md:bottom-32 md:right-16" />
      <Scallops id="clouds-contact" className="absolute inset-x-0 bottom-0 z-10 text-pinky" />
    </section>
  );
}
