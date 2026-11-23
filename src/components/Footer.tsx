import Image from "next/image";
import { assets } from "@/lib/assets";
import { footer } from "@/lib/content";
import Bee from "./Bee";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden px-6 pt-28">
      <Bee direction="right" className="right-[30%] top-6 h-10 w-10 md:h-12 md:w-12" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <h2 className="text-4xl tracking-tight md:text-6xl">{footer.title}</h2>
        <p className="mt-4 max-w-lg text-sm md:text-lg">{footer.text}</p>

        <div className="relative mt-10 h-24 w-56 md:h-32 md:w-72">
          <Image src={assets.logo} alt="Maffer" fill sizes="300px" className="object-contain" />
          <Bee direction="left" className="-left-14 -top-6 h-10 w-10" delay={0.8} />
        </div>
      </div>

      <div className="relative mx-auto mt-6 flex max-w-7xl items-end justify-between">
        <div className="relative h-56 w-56 md:h-80 md:w-80">
          <Image src={assets.footer.avatar} alt="Ilustración de Maffer sonriendo" fill sizes="320px" className="object-contain object-bottom" />
        </div>

        <Socials className="mb-16 md:mb-24" />
      </div>
    </footer>
  );
}
