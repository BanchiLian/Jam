import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { Footer } from "@/components/layout/Footer";
import { HUD } from "@/components/layout/HUD";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/content/global";
import { SiteJsonLd } from "@/lib/seo/JsonLd";
import { SITE_URL } from "@/lib/seo/url";
import "@/styles/globals.css";

// Fallback da GC Nordix (arquivos não fornecidos) — ver docs/PLANO.md
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${site.nome} — ${site.assinatura}`, template: `%s · ${site.nome}` },
  description: `${site.assinatura}.`,
};

export const viewport: Viewport = {
  themeColor: "#161a21",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        <SkipLink />
        <div aria-hidden className="bg-section-glow pointer-events-none fixed inset-0 -z-10" />
        <Header />
        <HUD />
        <main id="conteudo" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <MotionRoot />
      </body>
    </html>
  );
}
