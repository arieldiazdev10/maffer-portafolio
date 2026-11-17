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

  hero: {
    blob: "/images/hero-blob.png", // forma roja de nubecitas
  },

  // Imagen única: texto PORTAFOLIO + avatar + sello "edición 2026"
  portfolio: {
    banner: "/images/portafolio-banner.png",
    width: 1600, // ancho real de tu imagen (px)
    height: 1000, // alto real de tu imagen (px)
  },

  projects: [
    { src: "/images/proyectos/metzin.png", alt: "Proyecto Metzin" },
    { src: "/images/proyectos/epicuria.png", alt: "Proyecto Epicuria", label: "Epicuria" },
    { src: "/images/proyectos/aventureros.png", alt: "Proyecto Pequeños aventureros" },
    { src: "/images/proyectos/mono-rosa.png", alt: "Proyecto del moño rosa" },
    { src: "/images/proyectos/lideres.png", alt: "Proyecto Líderes" },
    { src: "/images/proyectos/arroba.png", alt: "Proyecto arroba", label: "arroba" },
  ] as { src: string; alt: string; label?: string }[],

  // Imagen única de "Cada obra es un mundo" (mancha rosa + ojos + sonrisa)
  cta: {
    image: "/images/cta-imagen.png",
    width: 1100, // ancho real de tu imagen (px)
    height: 1000, // alto real de tu imagen (px)
  },

  footer: {
    avatar: "/images/avatar-footer.png", // ilustración sonriendo con ojos cerrados
  },
};
