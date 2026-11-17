"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { cta } from "@/lib/content";

export default function Cta() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
      <div>
        <h2 className="text-4xl font-semibold italic tracking-tight text-brand md:text-6xl">
          {cta.title}
        </h2>
        <p className="mt-6 max-w-md text-base font-light leading-relaxed md:text-xl">
          {cta.text}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-block"
        >
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 text-lg italic focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            {cta.button}
            <ArrowUpRight size={20} aria-hidden />
          </Link>
        </motion.div>
      </div>

      <div className="relative mx-auto aspect-[1.05] w-full max-w-[560px]">
        <Image
          src={assets.cta.blob}
          alt=""
          fill
          sizes="560px"
          className="object-contain"
        />
      </div>
    </section>
  );
}
