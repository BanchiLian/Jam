import { Symbol } from "@/components/brand/Symbol";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/global";
import { cta } from "@/content/home";

export function Cta() {
  return (
    <section data-section="cta" aria-labelledby="cta-titulo" className="relative isolate flex min-h-svh items-center overflow-hidden py-[var(--spacing-section)]">
      <Symbol
        tone="runa"
        outline
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[min(130vw,70rem)] -translate-x-1/2 -translate-y-1/2 opacity-[0.1]"
      />
      <Container className="flex flex-col items-center gap-8 text-center">
        <Eyebrow>{cta.eyebrow}</Eyebrow>
        <h2 id="cta-titulo" data-reveal="words" className="t-display text-balance">
          {cta.titulo}
        </h2>
        <p className="t-lead max-w-xl text-pretty">{cta.subtitulo}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={cta.botaoContato.href}>{cta.botaoContato.label}</Button>
          {site.whatsappDisponivel && site.whatsappUrl && (
            <Button href={cta.botaoWhatsapp.href} variant="secundario">
              {cta.botaoWhatsapp.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
