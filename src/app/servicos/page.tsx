import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { ServicosLista } from "@/components/sections/servicos/ServicosLista";
import { servicosPage } from "@/content/servicos";

export const metadata: Metadata = pageMetadata(servicosPage.meta, "/servicos");

export default function Page() {
  return <ServicosLista />;
}
