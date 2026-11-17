"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

/**
 * Abejita flotando suavemente.
 * direction: hacia dónde mira la abeja ("left" usa assets.bee.left, "right" usa assets.bee.right).
 * Controla tamaño/posición con className.
 */
export default function Bee({
  direction,
  className,
  delay = 0,
}: {
  direction: "left" | "right";
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn("pointer-events-none absolute", className)}
      animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Image src={assets.bee[direction]} alt="" fill sizes="80px" className="object-contain" />
    </motion.div>
  );
}
