"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** Imagen que se muestra cuando otra no existe en /public. */
export const FALLBACK_IMAGE = "/images/coming-soon.png";

/**
 * Igual que <Image>, pero si el archivo no existe (o falla al cargar) muestra
 * /images/coming-soon.png en su lugar, en vez de una imagen rota.
 */
export default function SafeImage({ src, alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);
  return <Image {...props} src={failed ? FALLBACK_IMAGE : src} alt={alt} onError={() => setFailed(true)} />;
}
