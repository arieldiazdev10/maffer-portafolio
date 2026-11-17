"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

/** Abejita flotando suavemente. Controla tamaño/posición con className. */
export default function Bee({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={cn("pointer-events-none absolute", className)}
      animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Image src={assets.bee} alt="" fill sizes="80px" className="object-contain" />
    </motion.div>
  );
}
