import type { Metadata } from "next";
import { ServiceJsonLd } from "@/lib/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";
import { ServicoDetalhe } from "@/components/sections/servicos/ServicoDetalhe";
import { servicos } from "@/content/servicos";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = servicos.find((x) => x.slug === slug);
  return s ? pageMetadata({ title: s.nome, description: s.resumo }, `/servicos/${s.slug}`) : {};
}

export default async function Page({ params }: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const servico = servicos.find((x) => x.slug === slug);
  if (!servico) notFound();
  return (
    <>
      <ServiceJsonLd nome={servico.nome} descricao={servico.resumo} slug={servico.slug} />
      <ServicoDetalhe servico={servico} />
    </>
  );
}
