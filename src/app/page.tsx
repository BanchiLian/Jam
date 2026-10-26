import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { Cases } from "@/components/sections/home/Cases";
import { Cta } from "@/components/sections/home/Cta";
import { Hero } from "@/components/sections/home/Hero";
import { Manifesto } from "@/components/sections/home/Manifesto";
import { Metodo } from "@/components/sections/home/Metodo";
import { Numeros } from "@/components/sections/home/Numeros";
import { Servicos } from "@/components/sections/home/Servicos";
import { Simbolo } from "@/components/sections/home/Simbolo";
import { meta } from "@/content/home";

export const metadata: Metadata = pageMetadata(meta, "/", { absoluteTitle: true });

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Simbolo />
      <Servicos />
      <Metodo />
      <Cases />
      <Numeros />
      <Cta />
    </>
  );
}
