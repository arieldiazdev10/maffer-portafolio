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
