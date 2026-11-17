import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Une las dos últimas palabras con un espacio indivisible, para que la última nunca quede sola en una línea. */
export function noOrphan(text: string) {
  const i = text.lastIndexOf(" ");
  return i === -1 ? text : `${text.slice(0, i)}\u00A0${text.slice(i + 1)}`;
}
