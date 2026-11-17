/**
 * PROYECTOS (carruseles + modal de detalle)
 *
 * Cada proyecto tiene:
 *  - cover: la imagen que aparece en el carrusel
 *  - gallery: las fotos que se ven al abrirlo (normalmente 3 o 4, puede variar)
 *  - title / category / description: los textos del modal (description = un párrafo por elemento)
 *
 * Para agregar un proyecto nuevo, copia un bloque, cambia el `id` (único) y los textos/rutas.
 */

export type ProjectImage = { src: string; alt: string };

export type Project = {
  id: string;
  title: string;
  category: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  description: string[];
};

/** Atajo: gallery("/images/editorial/bestiario", ["1.png", "2.png", "3.png"], "Bestiario") */
function gallery(folder: string, files: string[], name: string): ProjectImage[] {
  return files.map((file, i) => ({
    src: `${folder}/${file}`,
    alt: `${name}, imagen ${i + 1} de ${files.length}`,
  }));
}

/* ------------------------------ EDITORIAL ------------------------------ */
export const editorial: Project[] = [
  {
    id: "bestiario",
    title: "Pequeños aventureros",
    category: "Diseño editorial",
    cover: { src: "/images/editorial/bestiario.png", alt: "Portada del proyecto Pequeños aventureros" },
    gallery: gallery("/images", ["coming-soon.png"], "Bestiario"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
  {
    id: "cartas",
    title: "Lovy Dovy",
    category: "Diseño editorial",
    cover: { src: "/images/editorial/cartas.png", alt: "Portada del proyecto Lovy Dovy" },
    gallery: gallery("/images", ["coming-soon.png"], "Lovy Dovy"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
  {
    id: "tomas",
    title: "Las aventuras de Tomás",
    category: "Diseño editorial",
    cover: { src: "/images/editorial/tomas.png", alt: "Portada del proyecto Tomás" },
    gallery: gallery("/images", ["coming-soon.png"], "Las aventuras de Tomás"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
  {
    id: "revista",
    title: "Gusto a Gusto",
    category: "Diseño editorial",
    cover: { src: "/images/editorial/revista.png", alt: "Portada del proyecto Gusto a Gusto" },
    gallery: gallery("/images", ["coming-soon.png"], "Gusto a Gusto"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
];

/* ------------------------------- BRANDING ------------------------------ */
export const branding: Project[] = [
  {
    id: "epicura",
    title: "Épicuria",
    category: "Branding",
    cover: { src: "/images/branding/epicura.png", alt: "Portada del proyecto Epicura" },
    gallery: gallery("/images/branding/epicuria", ["epicuria1.png", "epicuria2.png", "epicuria3.png"], "Épicuria"),
    description: ["Este proyecto parte de la idea de convertir la gastronomía en una forma de descubrir el mundo. Esto a través de una propuesta más gourmet, diferentes culturas se encuentran en un mismo espacio para ofrecer una nueva experiencia que va más allá de la comida. La identidad se adapta a diferentes puntos de contacto para construir una experiencia coherente en cada interacción con el público."],
  },
  {
    id: "glossy",
    title: "Glossy Beat",
    category: "Branding",
    cover: { src: "/images/branding/glossy.png", alt: "Portada del proyecto Glossy" },
    gallery: gallery("/images/branding/glossy", ["glossy1.png", "glossy2.png", "glossy3.png", "glossy4.png"], "Glossy Beat"),
    description: ["Glossy Beat es una academia de baile urbano. Una marca dirigida a jóvenes que encuentran en la música y la cultura urbana una manera de expresar su identidad, autenticidad y libertad. Un sistema gráfico versátil que se adapta a distintas aplicaciones, desde publicidad y papelería hasta redes sociales y prendas de vestir."],
  },
  {
    id: "marca",
    title: "Crea tu marca",
    category: "Branding",
    cover: { src: "/images/branding/marca.png", alt: "Portada del proyecto Crea tu marca" },
    gallery: gallery("/images", ["coming-soon.png"], "Crea tu marca"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
  {
    id: "metztil",
    title: "Metztil",
    category: "Branding",
    cover: { src: "/images/branding/metztil.png", alt: "Portada del proyecto Metztil" },
    gallery: gallery("/images", ["coming-soon.png"], "Metztil"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
];

/* ---------------------------- DISEÑO APLICADO --------------------------- */
export const applied: Project[] = [
  {
    id: "arroba",
    title: "Arroba",
    category: "Diseño aplicado",
    cover: { src: "/images/diseno-aplicado/arroba.png", alt: "Portada del proyecto Arroba" },
    gallery: gallery("/images", ["coming-soon.png"], "Bestiario"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
  {
    id: "ecolideres",
    title: "Ecolíderes",
    category: "Diseño aplicado",
    cover: { src: "/images/diseno-aplicado/ecolideres.png", alt: "Portada del proyecto Ecolíderes" },
    gallery: gallery("/images", ["coming-soon.png"], "Bestiario"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
  {
    id: "olimpiadas",
    title: "Olimpiadas",
    category: "Diseño aplicado",
    cover: { src: "/images/diseno-aplicado/olimpiadas.png", alt: "Portada del proyecto Olimpiadas" },
    gallery: gallery("/images", ["coming-soon.png"], "Bestiario"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
  {
    id: "swarovski",
    title: "Swarovski",
    category: "Diseño aplicado",
    cover: { src: "/images/diseno-aplicado/swarovski.png", alt: "Portada del proyecto Swarovski" },
    gallery: gallery("/images", ["coming-soon.png"], "Bestiario"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
  {
    id: "vino",
    title: "Vino",
    category: "Diseño aplicado",
    cover: { src: "/images/diseno-aplicado/vino.png", alt: "Portada del proyecto Vino" },
    gallery: gallery("/images", ["coming-soon.png"], "Bestiario"),
    description: [
      "¡Algo extraordinario está por venir!",
    ],
  },
];
