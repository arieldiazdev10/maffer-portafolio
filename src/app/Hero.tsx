"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { hero } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Burst, Wave } from "./Decor";

// Posición y rotación de cada foto dentro del collage (porcentajes del contenedor)
const frames = [
  "left-[22%] top-[6%] h-[36%] w-[56%] rotate-[-4deg]",
  "left-[8%] top-[40%] h-[28%] w-[36%] rotate-[1deg]",
  "left-[44%] top-[38%] h-[28%] w-[44%] rotate-[-3deg]",
  "left-[22%] top-[64%] h-[30%] w-[48%] rotate-[3deg]",
];

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <p className="text-xl italic text-brand md:text-2xl">{hero.greeting}</p>
        <h1 className="mt-4 text-2xl leading-tight tracking-tight italic md:text-2xl">
          <span className="font-semibold">{hero.titleBold}</span>{" "}
          <span className="font-light">{hero.titleLight}</span>
        </h1>
        <Wave waves={6} stroke={10} className="mt-2 h-6 w-72 md:w-[28rem]" />
        <p className="mt-10 max-w-md text-base font-light leading-relaxed md:text-lg">
          {hero.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mx-auto aspect-square w-full max-w-[560px]"
      >
        <Image
          src={assets.hero.blob}
          alt=""
          fill
          priority
          sizes="560px"
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
