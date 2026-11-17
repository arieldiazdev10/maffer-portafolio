"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import Bee from "./Bee";

export default function Header() {
  const [active, setActive] = useState(nav[0].label);

  return (
    <header id="inicio" className="relative px-4 pt-8">
      <div className="relative mx-auto h-14 w-40 md:h-16 md:w-48">
        <Image
          src={assets.logo}
          alt="Maffer"
          fill
          priority
          sizes="200px"
          className="object-contain"
        />
        <Bee className="-left-16 top-8 h-10 w-10 md:-left-24 md:top-10 md:h-12 md:w-12" />
        <Bee
          className="-right-14 -top-2 h-10 w-10 md:-right-20 md:h-12 md:w-12"
          delay={1}
        />
      </div>

      <nav
        aria-label="Principal"
        className="mx-auto mt-8 max-w-5xl overflow-x-auto rounded-full bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:p-3"
      >
        <ul className="flex min-w-max items-center justify-between gap-1 md:gap-2">
          {nav.map((item) => {
            const isActive = active === item.label;
            return (
              <li key={item.label} className="relative">
                <Link
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className={cn(
                    "relative z-10 block rounded-full px-5 py-3 text-sm transition-colors md:px-8 md:text-base",
                    isActive ? "text-white" : "text-ink hover:text-brand",
                  )}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
