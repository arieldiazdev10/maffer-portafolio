/**
 * RUTAS DE IMÁGENES
 * Todas las rutas apuntan a /public. Ej: "/images/logo.png" -> public/images/logo.png
 * Cambia solo los strings por tus archivos reales.
 */
export const assets = {
  logo: "/images/logo-maffer.png",

  // Abejita decorativa (se reutiliza en varios lugares)
  bee1: "/images/bee1.png",
  bee2: "/images/bee2.png",


  hero: {
    blob: "/images/hero-blob.png", // forma roja de nubecitas
    photos: [
      "/images/hero-foto-1.jpg", // arriba
      "/images/hero-foto-2.jpg", // medio izquierda
      "/images/hero-foto-3.jpg", // medio derecha
      "/images/hero-foto-4.jpg", // abajo
    ],
  },

  portfolio: {
    avatar: "/images/avatar-portafolio.png", // ilustración grande con suéter rojo
  },

  projects: [
    { src: "/images/proyectos/proyecto-1.png", alt: "Proyecto Metzin" },
    { src: "/images/proyectos/proyecto-2.png", alt: "Proyecto Epicuria", label: "Epicuria" },
    { src: "/images/proyectos/proyecto-3.png", alt: "Proyecto Pequeños aventureros" },
    { src: "/images/proyectos/proyecto-4.png", alt: "Proyecto del moño rosa" },
    { src: "/images/proyectos/proyecto-5.png", alt: "Proyecto Líderes" },
    { src: "/images/proyectos/proyecto-6.png", alt: "Proyecto arroba", label: "arroba" },
  ] as { src: string; alt: string; label?: string }[],

  cta: {
    blob: "/images/cta-blob.png", // mancha rosa
    eyes: "/images/cta-ojos.png",
    smile: "/images/cta-sonrisa.png",
  },

  footer: {
    avatar: "/images/avatar-footer.png", // ilustración sonriendo con ojos cerrados
  },
};
