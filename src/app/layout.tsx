import type { Metadata } from "next";
import { Poppins, Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Maffer | Portafolio 2026",
  description:
    "Portafolio de Maffer, diseñadora gráfica enfocada en Diseño Editorial, Branding y Diseño Aplicado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${lexend.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
