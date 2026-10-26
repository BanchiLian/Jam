import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { CasesLista } from "@/components/sections/cases/CasesLista";
import { casesPage } from "@/content/cases";

export const metadata: Metadata = pageMetadata(casesPage.meta, "/cases");

export default function Page() {
  return <CasesLista />;
}
