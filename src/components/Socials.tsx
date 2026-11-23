import { footer } from "@/lib/content";
import { cn } from "@/lib/utils";

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

/** Botones de redes sociales (Instagram, LinkedIn y Behance). Los enlaces están en lib/content.ts. */
export default function Socials({ className }: { className?: string }) {
  const { instagram, linkedin, behance } = footer.socials;
  return (
    <ul className={cn("flex items-center gap-5", className)}>
      <li><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a></li>
      <li><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></li>
      <li>
        <a href={behance} target="_blank" rel="noreferrer" aria-label="Behance" className="inline-block text-3xl font-semibold text-brand transition-transform hover:scale-110 md:text-4xl">
          Bē
        </a>
      </li>
    </ul>
  );
}
