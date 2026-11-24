import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

/**
 * Layout compartido por todas las páginas del sitio: menú arriba y contacto (footer) abajo.
 * Las páginas solo se ocupan de su propio contenido.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <SiteFooter />
    </>
  );
}
