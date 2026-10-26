import { Symbol } from "@/components/brand/Symbol";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { LinkItem } from "@/content/types";

interface Props {
  titulo: string;
  botao: LinkItem;
}

/** CTA de fim de página interna. */
export function CtaBlock({ titulo, botao }: Props) {
  return (
    <section data-section="page-cta" className="relative isolate overflow-hidden py-[var(--spacing-section)]">
      <Symbol tone="runa" outline className="pointer-events-none absolute -right-[10%] top-1/2 -z-10 w-[min(90vw,40rem)] -translate-y-1/2 opacity-[0.1]" />
      <Container className="flex flex-col items-start gap-8">
        <h2 data-reveal="words" className="t-h2 max-w-[18ch] text-balance">
          {titulo}
        </h2>
        <Button href={botao.href}>{botao.label}</Button>
      </Container>
    </section>
  );
}
