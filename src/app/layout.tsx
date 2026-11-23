import type { Metadata, Viewport } from "next";
import { Poppins, Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HideOnHome from "@/components/HideOnHome";
import { footer } from "@/lib/content";
import { ogImage, siteDescription, siteName, siteTitle, siteUrl } from "@/lib/site";

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

export const viewport: Viewport = {
  themeColor: "#f5f2ed",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "diseñadora gráfica",
    "diseño editorial",
    "branding",
    "diseño aplicado",
    "portafolio de diseño",
    "Maffer",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: "website",
    siteName,
    locale: "es_LA",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Portafolio de Maffer, diseñadora gráfica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// Datos estructurados (JSON-LD): ayudan a Google a entender quién eres y a asociar tus perfiles.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "es",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#persona`,
      name: siteName, // si quieres, agrega aquí tu nombre completo
      jobTitle: "Diseñadora gráfica",
      url: siteUrl,
      knowsAbout: ["Diseño editorial", "Branding", "Diseño aplicado"],
      sameAs: Object.values(footer.socials),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${lexend.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        {children}
        <HideOnHome>
          <Footer />
        </HideOnHome>
      </body>
    </html>
  );
}
