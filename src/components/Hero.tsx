"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { hero } from "@/lib/content";
import { noOrphan } from "@/lib/utils";
import { Wave } from "./Decor";

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
        {/* h1 solo para buscadores y lectores de pantalla */}
        <h1 className="sr-only">
          Maffer, diseñadora gráfica: diseño editorial, branding y diseño aplicado
        </h1>
        <p className="mt-4 text-balance text-3xl leading-tight tracking-tight italic md:text-5xl">
          <span className="font-semibold">{hero.titleBold}</span>{" "}
          <span className="font-light">{noOrphan(hero.titleLight)}</span>
        </p>
        <Wave waves={6} stroke={10} className="mt-2 h-6 w-72 md:w-[28rem]" />
        <p className="mt-10 max-w-md text-pretty text-base font-light leading-relaxed md:text-lg">
          {noOrphan(hero.description)}
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
