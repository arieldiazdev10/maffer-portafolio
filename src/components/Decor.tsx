import { cn } from "@/lib/utils";

/** Línea ondulada amarilla. `waves` = cantidad de ondas. */
export function Wave({
  waves = 8,
  className,
  stroke = 14,
}: {
  waves?: number;
  className?: string;
  stroke?: number;
}) {
  const w = 100;
  const h = 40;
  let d = `M0 ${h / 2}`;
  for (let i = 0; i < waves; i++) {
    const x = i * w;
    d += ` Q ${x + w / 4} ${i % 2 === 0 ? 0 : h} ${x + w / 2} ${h / 2} T ${x + w} ${h / 2}`;
  }
  return (
    <svg
      viewBox={`0 0 ${w * waves} ${h}`}
      preserveAspectRatio="none"
      className={cn("block w-full text-sun", className)}
      aria-hidden
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Estrella / sol amarillo de puntas redondeadas. */
export function Burst({ className, points = 10 }: { className?: string; points?: number }) {
  const cx = 50, cy = 50, outer = 46, inner = 34;
  const pts = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / points - Math.PI / 2;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" className={cn("text-sun", className)} aria-hidden>
      <polygon
        points={pts}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Círculos concéntricos rosa con sombra (efecto papel recortado). Controla tamaño y posición con className. */
export function Rings({ className }: { className?: string }) {
  const shadow = "shadow-[0_14px_34px_rgba(150,30,100,0.28)]";
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute z-10 aspect-square rounded-full bg-[#ec7db8]", shadow, className)}
    >
      <div className={cn("absolute inset-[15%] rounded-full bg-[#ef8cc3]", shadow)} />
      <div className={cn("absolute inset-[30%] rounded-full bg-[#f29acb]", shadow)} />
    </div>
  );
}

/**
 * Borde de nubes. Se pega al borde inferior de una sección; el color se controla con text-*.
 * `id` debe ser único por cada uso.
 */
export function Scallops({ id, className }: { id: string; className?: string }) {
  return (
    <svg aria-hidden className={cn("block h-[90px] w-full", className)}>
      <defs>
        <pattern id={id} width="260" height="90" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="90" r="42" fill="currentColor" />
          <circle cx="125" cy="90" r="62" fill="currentColor" />
          <circle cx="210" cy="90" r="46" fill="currentColor" />
          <rect y="60" width="260" height="30" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
