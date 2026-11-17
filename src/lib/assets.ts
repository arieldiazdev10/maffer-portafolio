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
    photos: [
      "/images/hero-foto-1.jpg", // arriba
      "/images/hero-foto-2.jpg", // medio izquierda
      "/images/hero-foto-3.jpg", // medio derecha
      "/images/hero-foto-4.jpg", // abajo
    ],
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

  // Página Editorial: 3 carruseles de 4 imágenes cada uno (de izquierda a derecha en cada fila)
  editorial: {
    rows: [
      [
        { src: "/images/editorial/bestiario.png", alt: "Editorial fila 1, imagen 1" },
        { src: "/images/editorial/cartas.png", alt: "Editorial fila 1, imagen 2" },
        { src: "/images/editorial/revista.png", alt: "Editorial fila 1, imagen 3" },
        { src: "/images/editorial/tomas.png", alt: "Editorial fila 1, imagen 4" },
      ],
      [
        { src: "/images/editorial/bestiario.png", alt: "Editorial fila 1, imagen 1" },
        { src: "/images/editorial/cartas.png", alt: "Editorial fila 1, imagen 2" },
        { src: "/images/editorial/revista.png", alt: "Editorial fila 1, imagen 3" },
        { src: "/images/editorial/tomas.png", alt: "Editorial fila 1, imagen 4" },
      ],
      [
        { src: "/images/editorial/bestiario.png", alt: "Editorial fila 1, imagen 1" },
        { src: "/images/editorial/cartas.png", alt: "Editorial fila 1, imagen 2" },
        { src: "/images/editorial/revista.png", alt: "Editorial fila 1, imagen 3" },
        { src: "/images/editorial/tomas.png", alt: "Editorial fila 1, imagen 4" },
      ],
    ],
  },
  branding: {
    rows: [
      [
        { src: "/images/branding/epicura.png", alt: "Branding fila 1, imagen 1" },
        { src: "/images/branding/glossy.png", alt: "Branding fila 1, imagen 2" },
        { src: "/images/branding/marca.png", alt: "Branding fila 1, imagen 3" },
        { src: "/images/branding/metztil.png", alt: "Branding fila 1, imagen 4" },
      ],
      [
        { src: "/images/branding/epicura.png", alt: "Branding fila 1, imagen 1" },
        { src: "/images/branding/glossy.png", alt: "Branding fila 1, imagen 2" },
        { src: "/images/branding/marca.png", alt: "Branding fila 1, imagen 3" },
        { src: "/images/branding/metztil.png", alt: "Branding fila 1, imagen 4" },
      ],
      [
        { src: "/images/branding/epicura.png", alt: "Branding fila 1, imagen 1" },
        { src: "/images/branding/glossy.png", alt: "Branding fila 1, imagen 2" },
        { src: "/images/branding/marca.png", alt: "Branding fila 1, imagen 3" },
        { src: "/images/branding/metztil.png", alt: "Branding fila 1, imagen 4" },
      ],
    ],
  },
  applied: {
    rows: [
      [
        { src: "/images/diseno-aplicado/arroba.png", alt: "Diseño aplicado fila 1, imagen 1" },
        { src: "/images/diseno-aplicado/ecolideres.png", alt: "Diseño aplicado fila 1, imagen 2" },
        { src: "/images/diseno-aplicado/olimpiadas.png", alt: "Diseño aplicado fila 1, imagen 3" },
        { src: "/images/diseno-aplicado/swarovski.png", alt: "Diseño aplicado fila 1, imagen 4" },
        { src: "/images/diseno-aplicado/vino.png", alt: "Diseño aplicado fila 1, imagen 5" },
      ],
      [
        { src: "/images/diseno-aplicado/arroba.png", alt: "Diseño aplicado fila 2, imagen 1" },
        { src: "/images/diseno-aplicado/ecolideres.png", alt: "Diseño aplicado fila 2, imagen 2" },
        { src: "/images/diseno-aplicado/olimpiadas.png", alt: "Diseño aplicado fila21, imagen 3" },
        { src: "/images/diseno-aplicado/swarovski.png", alt: "Diseño aplicado fila 2, imagen 4" },
        { src: "/images/diseno-aplicado/vino.png", alt: "Diseño aplicado fila 2, imagen 5" },
      ],
      [
        { src: "/images/diseno-aplicado/arroba.png", alt: "Diseño aplicado fila 3, imagen 1" },
        { src: "/images/diseno-aplicado/ecolideres.png", alt: "Diseño aplicado fila 3, imagen 2" },
        { src: "/images/diseno-aplicado/olimpiadas.png", alt: "Diseño aplicado fila31, imagen 3" },
        { src: "/images/diseno-aplicado/swarovski.png", alt: "Diseño aplicado fila 3, imagen 4" },
        { src: "/images/diseno-aplicado/vino.png", alt: "Diseño aplicado fila 3, imagen 5" },
      ],
    ],
  },

  footer: {
    avatar: "/images/avatar-footer.png", // ilustración sonriendo con ojos cerrados
  },
};
