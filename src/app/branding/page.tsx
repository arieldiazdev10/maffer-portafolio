import { permanentRedirect } from "next/navigation";

// La página ahora vive dentro de /proyectos; esto conserva los enlaces antiguos.
export default function Page() {
  permanentRedirect("/proyectos#branding");
}
