/**
 * Menú principal. `section` es el id de la sección que resalta ese botón al hacer scroll.
 * Branding, Editorial y Diseño aplicado llevan a la página /proyectos, a su sección.
 */
export const nav: { label: string; href: string; section?: string }[] = [
  { label: "Maffer", href: "/" },
  { label: "Branding", href: "/proyectos#branding", section: "branding" },
  { label: "Editorial", href: "/proyectos#editorial", section: "editorial" },
  { label: "Diseño aplicado", href: "/proyectos#diseno-aplicado", section: "diseno-aplicado" },
  { label: "Trabajemos juntos", href: "#contacto", section: "contacto" },
];

/** Secciones de la página /proyectos, en el mismo orden que el menú. */
export const projectCategories = [
  { id: "branding", title: "Branding" },
  { id: "editorial", title: "Editorial" },
  { id: "diseno-aplicado", title: "Diseño aplicado" },
];

export const hero = {
  greeting: "Hola, soy Maffer",
  titleLight: "No se trata de encajar en el diseño, sino de",
  titleBold: "diseñar nuevas formas de encajar",
  subtitle: "Diseñadora gráfica enfocada en Diseño Editorial y Branding",
};

export const about = {
  label: "Sobre mí",
  titleBold: "El único límite es tu mente, Dios me enseñó que su",
  titleLight: "creación no tiene límite.",
  paragraphs: [
    "Soy Maffer, una diseñadora gráfica curiosa, siempre dispuesta a aprender nuevas formas de crear, con enfoque en Diseño Editorial, Branding y Diseño Aplicado.",
    "Hagamos realidad aquello que hoy ocupa un espacio en tu mente. Creemos juntos lo que mañana será posible!",
  ],
};

export const projectsSection = {
  title: "Trabajos que empezaron como un espacio en tu mente, y hoy cobran vida propia",
  caption: "Estos son algunos de mis proyectos favoritos",
};

export const cta = {
  button: "Contáctame",
  href: "#contacto",
};

export const footer = {
  title: "¿Tienes una idea?",
  text: "El diseño y la creatividad no solo son lo que se ve o se siente, sino es como funcionan",
  socials: {
    instagram: "https://www.instagram.com/mafferalvarado._/",
    linkedin: "https://www.linkedin.com/in/maria-fernanda-alvarado-gonz%C3%A1lez-8082a13b5",
    behance: "https://www.behance.net/maraalvarado11",
  },
};
