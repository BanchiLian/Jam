import type { Metadata } from "next";
import { site } from "@/content/global";
import type { PageMeta } from "@/content/types";

interface Opts {
  /** Título exato (sem o template `%s · Huldra`). */
  absoluteTitle?: boolean;
  noindex?: boolean;
}

/** Metadata completa de uma página: canonical, Open Graph pt_BR e Twitter card. */
export function pageMetadata(meta: PageMeta, path: string, opts: Opts = {}): Metadata {
  const ogTitle = opts.absoluteTitle ? meta.title : `${meta.title} · ${site.nome}`;
  return {
    title: opts.absoluteTitle ? { absolute: meta.title } : meta.title,
    description: meta.description,
    ...(opts.noindex ? { robots: { index: false, follow: false } } : { alternates: { canonical: path } }),
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.nome,
      title: ogTitle,
      description: meta.description,
      ...(opts.noindex ? {} : { url: path }),
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: meta.description },
  };
}
