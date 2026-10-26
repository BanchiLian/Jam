import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";
import { servicos } from "@/content/servicos";
import { absoluteUrl } from "@/lib/seo/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = ["/", "/sobre", "/servicos", "/cases", "/contato", "/privacidade"];
  return [
    ...estaticas.map((p) => ({ url: absoluteUrl(p), priority: p === "/" ? 1 : 0.7 })),
    ...servicos.map((s) => ({ url: absoluteUrl(`/servicos/${s.slug}`), priority: 0.8 })),
    ...cases.map((c) => ({ url: absoluteUrl(`/cases/${c.slug}`), priority: 0.6 })),
  ];
}
