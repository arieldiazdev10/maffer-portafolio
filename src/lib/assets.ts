/**
 * RUTAS DE IMÁGENES
 * Todas las rutas apuntan a /public. Ej: "/images/logo.png" -> public/images/logo.png
 * Cambia solo los strings por tus archivos reales.
 */
export const assets = {
  logo: "/images/logo-maffer.png",

  // Abejitas decorativas: una mirando a cada dirección
  bee: {
    left: "/images/bee-left.png",
    right: "/images/bee-right.png",
  },

  // Avatar que se asoma sobre la nube (sección superior). Solo cabeza y manos, fondo transparente.
  hero: {
    avatar: "/images/hero-avatar.png",
    width: 720, // ancho real de tu imagen (px)
    height: 460, // alto real de tu imagen (px)
  },

  // Sección "Sobre mí": avatar con su forma de nubes rosa, en una sola imagen
  about: {
    image: "/images/about-avatar.png",
    width: 600, // ancho real de tu imagen (px)
    height: 760, // alto real de tu imagen (px)
  },

  // Abanico de la página principal. `slug` es el id del proyecto en lib/projects.ts: al hacer clic lleva a su página.
  projects: [
    { src: "/images/proyectos/metzin.png", alt: "Proyecto Metzin", slug: "metztil" },
    { src: "/images/proyectos/epicuria.png", alt: "Proyecto Epicuria", label: "Epicuria", slug: "epicura" },
    { src: "/images/proyectos/aventureros.png", alt: "Proyecto Pequeños aventureros", slug: "bestiario" },
    { src: "/images/proyectos/mono-rosa.png", alt: "Proyecto del moño rosa", slug: "cartas" },
    { src: "/images/proyectos/lideres.png", alt: "Proyecto Líderes", slug: "ecolideres" },
    { src: "/images/proyectos/arroba.png", alt: "Proyecto arroba", label: "arroba", slug: "arroba" },
  ] as { src: string; alt: string; label?: string; slug?: string }[],
};
