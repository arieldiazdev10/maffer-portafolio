import type { Project } from "@/lib/projects";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";

const DEFAULT_ACCENT = "#e84545";

/**
 * Página de detalle de un proyecto: título, categoría y texto arriba, y las imágenes apiladas debajo.
 * La primera imagen va sola y grande; las demás van sobre tarjetas color crema.
 */
export default function ProjectDetail({ project }: { project: Project }) {
  const accent = project.accent ?? DEFAULT_ACCENT;
  const [cover, ...rest] = project.gallery;

  return (
    <main className="relative overflow-x-clip px-4 pb-16 pt-28 md:pb-28 md:pt-40">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h1
          className="text-balance text-4xl font-semibold italic leading-tight tracking-tight md:text-6xl"
          style={{ color: accent }}
        >
          {project.title}
        </h1>
        <p className="mt-2 text-sm italic md:text-base" style={{ color: accent }}>
          {project.category}
        </p>
        <div className="mt-6 space-y-3 text-pretty text-sm font-light leading-relaxed md:mt-8 md:text-base">
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <ol className="mx-auto mt-10 flex max-w-4xl flex-col gap-4 md:mt-16 md:gap-8">
        {cover && (
          <li>
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <SafeImage
                  src={cover.src}
                  alt={cover.alt}
                  width={1600}
                  height={1200}
                  priority
                  sizes="(min-width: 896px) 896px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </li>
        )}

        {rest.map((img) => (
          <li key={img.src}>
            <Reveal>
              <div className="rounded-3xl bg-[#fdf6ec] p-4 md:p-10">
                <SafeImage
                  src={img.src}
                  alt={img.alt}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 896px) 800px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </main>
  );
}
