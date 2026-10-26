import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { manifesto } from "@/content/home";

export function Manifesto() {
  return (
    <section data-section="manifesto" aria-labelledby="manifesto-titulo" className="relative py-[calc(var(--spacing-section)*1.2)]">
      <Container className="flex flex-col gap-6">
        <Eyebrow>{manifesto.eyebrow}</Eyebrow>
        <h2
          id="manifesto-titulo"
          data-reveal
          className="max-w-[18ch] text-balance text-[clamp(2.25rem,1.2rem+4.4vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
        >
          {manifesto.titulo}
        </h2>
        <p data-reveal className="max-w-[44ch] text-pretty text-[clamp(1.125rem,1.05rem+0.35vw,1.375rem)] leading-relaxed text-off-white-70">
          {manifesto.texto}
        </p>
      </Container>
    </section>
  );
}
