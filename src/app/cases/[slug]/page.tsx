import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";
import { CaseDetalhe } from "@/components/sections/cases/CaseDetalhe";
import { cases } from "@/content/cases";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  return c ? pageMetadata({ title: `${c.cliente} · ${c.titulo}`, description: c.resumo }, `/cases/${c.slug}`) : {};
}

export default async function Page({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const caso = cases.find((x) => x.slug === slug);
  if (!caso) notFound();
  return <CaseDetalhe caso={caso} />;
}
