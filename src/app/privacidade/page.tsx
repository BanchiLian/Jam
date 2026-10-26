import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { PrivacidadePage } from "@/components/sections/privacidade/PrivacidadePage";
import { privacidade } from "@/content/privacidade";

export const metadata: Metadata = pageMetadata(privacidade.meta, "/privacidade");

export default function Page() {
  return <PrivacidadePage />;
}
