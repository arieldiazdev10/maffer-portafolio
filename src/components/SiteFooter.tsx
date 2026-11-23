"use client";

import { usePathname } from "next/navigation";
import ContactSection from "./ContactSection";

/** Footer del sitio. En la página principal el círculo superior ya lo aporta la sección "Sobre mí". */
export default function SiteFooter() {
  const isHome = usePathname() === "/";
  return (
    <footer className="relative overflow-x-clip">
      <ContactSection topRing={!isHome} />
    </footer>
  );
}
