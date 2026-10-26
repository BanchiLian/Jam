import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { ContatoPage } from "@/components/sections/contato/ContatoPage";
import { contato } from "@/content/contato";

export const metadata: Metadata = pageMetadata(contato.meta, "/contato");

export default function Page() {
  return <ContatoPage />;
}
