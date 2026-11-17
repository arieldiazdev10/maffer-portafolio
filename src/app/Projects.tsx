"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { projectsSection } from "@/lib/content";
import { cn } from "@/lib/utils";

const rotations = [-8, -4, -1, 1, 4, 8];
const lifts = [24, 0, -6, -6, 0, 24];

export default function Projects() {
  return (
    <section className="px-6 pb-28">
      <h2 className="mx-auto max-w-4xl text-center text-3xl leading-tight tracking-tight md:text-6xl">
        {projectsSection.title}
      </h2>

      <div className="mx-auto mt-16 max-w-6xl overflow-x-auto px-6 pb-10 pt-12 md:overflow-visible">
        <ul className="mx-auto flex w-max items-center md:w-full md:justify-center">
          {assets.projects.map((p, i) => (
            <motion.li
              key={p.src}
              style={{ rotate: rotations[i % 6], y: lifts[i % 6], zIndex: i }}
              whileHover={{ rotate: 0, y: -24, scale: 1.08, zIndex: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative -ml-8 first:ml-0 md:-ml-14"
            >
              {/* }{p.label && (
                <span
                  className={cn(
                    "absolute -top-10 z-50 whitespace-nowrap rounded-full px-4 py-1 text-sm text-white md:text-lg",
                    i % 2 === 1
                      ? "left-6 bg-[#3d5a47]"
                      : "right-2 bg-[#f4a6d7]",
                  )}
                >
                  {i} {p.label}
                </span> 
              
              )}{*/}
              <span>El indice es: </span>
              <div className="relative aspect-square w-36 overflow-hidden rounded-[1.75rem] shadow-lg md:w-56">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <p className="text-center text-sm md:text-base">
        {projectsSection.caption}
      </p>
    </section>
  );
}
