import Image from "next/image";
import { assets } from "@/lib/assets";
import { footer } from "@/lib/content";
import Bee from "./Bee";

const iconClass = "h-9 w-9 text-brand transition-transform hover:scale-110 md:h-11 md:w-11";

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Linkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2.5 7v8h2.5v-8H6.5Zm1.25-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM11 10v8h2.5v-4.2c0-1.1.6-1.8 1.5-1.8s1.3.6 1.3 1.8V18h2.5v-4.9c0-2.1-1.1-3.3-2.9-3.3-1.1 0-1.9.5-2.4 1.2V10H11Z" />
    </svg>
  );
}

export default function Footer() {
  const { instagram, linkedin, behance } = footer.socials;
  return (
    <footer id="contacto" className="relative overflow-hidden px-6 pt-28">
      <Bee className="right-[30%] top-6 h-10 w-10 md:h-12 md:w-12" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <h2 className="text-4xl tracking-tight md:text-6xl">{footer.title}</h2>
        <p className="mt-4 max-w-lg text-sm md:text-lg">{footer.text}</p>

        <div className="relative mt-10 h-24 w-56 md:h-32 md:w-72">
          <Image src={assets.logo} alt="Maffer" fill sizes="300px" className="object-contain" />
          <Bee className="-left-14 -top-6 h-10 w-10" delay={0.8} />
        </div>
      </div>

      <div className="relative mx-auto mt-6 flex max-w-7xl items-end justify-between">
        <div className="relative h-56 w-56 md:h-80 md:w-80">
          <Image src={assets.footer.avatar} alt="Ilustración de Maffer sonriendo" fill sizes="320px" className="object-contain object-bottom" />
        </div>

        <ul className="mb-8 flex items-center gap-5">
          <li><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a></li>
          <li><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></li>
          <li>
            <a href={behance} target="_blank" rel="noreferrer" aria-label="Behance" className="inline-block text-3xl font-semibold text-brand transition-transform hover:scale-110 md:text-4xl">
              Bē
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
