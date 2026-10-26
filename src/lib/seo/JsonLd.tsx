import { site } from "@/content/global";
import { absoluteUrl, SITE_URL } from "./url";

/** Serializa JSON-LD escapando `<` para não fechar a tag <script>. */
function serialize(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLdScript({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />;
}

/** Organization + WebSite. Montar uma única vez no layout. */
export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: site.nome,
        url: SITE_URL,
        logo: absoluteUrl("/brand/huldra-logo.svg"),
        slogan: site.assinatura,
        sameAs: [`${site.instagramUrl}/`],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: site.nome,
        url: SITE_URL,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
  return <JsonLdScript data={data} />;
}

/** Service para a página de detalhe de serviço. */
export function ServiceJsonLd({ nome, descricao, slug }: { nome: string; descricao: string; slug: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nome,
    description: descricao,
    url: absoluteUrl(`/servicos/${slug}`),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "BR",
  };
  return <JsonLdScript data={data} />;
}
