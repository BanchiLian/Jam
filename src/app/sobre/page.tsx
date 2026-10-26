import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { SobrePage } from "@/components/sections/sobre/SobrePage";
import { sobre } from "@/content/sobre";

export const metadata: Metadata = pageMetadata(sobre.meta, "/sobre");

export default function Page() {
  return <SobrePage />;
}
