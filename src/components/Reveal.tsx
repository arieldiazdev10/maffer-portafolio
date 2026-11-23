"use client";

import { motion, useReducedMotion } from "motion/react";

const variants = {
  // Sube desde abajo, como asomándose (el contenedor debe tener overflow-hidden)
  peek: { hidden: { y: "100%" }, show: { y: 0 } },
  // Aparece con un pequeño rebote
  pop: { hidden: { opacity: 0, scale: 0.8, y: 40, rotate: -4 }, show: { opacity: 1, scale: 1, y: 0, rotate: 0 } },
  // Aparece subiendo suavemente
  fade: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
};

/**
 * Anima su contenido cuando entra en pantalla al hacer scroll (una sola vez).
 * variant: "peek" | "pop" | "fade". Con "reducir movimiento" activado, no anima.
 */
export default function Reveal({
  children,
  variant = "fade",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 80, damping: 16, delay }}
    >
      {children}
    </motion.div>
  );
}
