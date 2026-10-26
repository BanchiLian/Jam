import type { ReactNode } from "react";
import { Vegvisir } from "@/components/brand/Vegvisir";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface Props {
  eyebrow: string;
  titulo: string;
  subtitulo?: string;
  children?: ReactNode;
}

/** Topo das páginas internas. */
export function PageHero({ eyebrow, titulo, subtitulo, children }: Props) {
  return (
    <section data-section="page-hero" className="relative isolate overflow-hidden pb-16 pt-36 sm:pt-44 lg:pb-24">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[min(70svh,40rem)]">
        <Vegvisir className="absolute -right-[12%] -top-[20%] w-[min(80vw,46rem)] text-azul-runa/10" />
      </div>
      <Container className="flex flex-col gap-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 data-reveal="words" className="t-h1 max-w-[16ch] text-balance">
          {titulo}
        </h1>
        {subtitulo && <p className="t-lead max-w-2xl text-pretty">{subtitulo}</p>}
        {children}
      </Container>
    </section>
  );
}
