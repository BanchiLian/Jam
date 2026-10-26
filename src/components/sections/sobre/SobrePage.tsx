import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { sobre } from "@/content/sobre";
import { CapaPlaceholder } from "../shared/CapaPlaceholder";
import { CtaBlock } from "../shared/CtaBlock";
import { PageHero } from "../shared/PageHero";

export function SobrePage() {
  return (
    <>
      <PageHero eyebrow={sobre.eyebrow} titulo={sobre.titulo} subtitulo={sobre.subtitulo} />

      <section aria-labelledby="historia" className="py-[var(--spacing-section)]">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 id="historia" className="t-h2 text-balance">
            {sobre.historia.titulo}
          </h2>
          <div className="flex flex-col gap-6">
            {sobre.historia.paragrafos.map((p) => (
              <p key={p} className="t-lead text-off-white">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="proposito" className="py-[var(--spacing-section)]">
        <Container className="flex flex-col gap-6">
          <Eyebrow id="proposito">{sobre.proposito.titulo}</Eyebrow>
          <p data-reveal="words" className="max-w-[26ch] text-balance text-[clamp(1.75rem,0.9rem+3.6vw,4rem)] font-semibold leading-[1.12] tracking-[-0.025em]">
            {sobre.proposito.texto}
          </p>
        </Container>
      </section>

      <section aria-labelledby="origem" className="py-[var(--spacing-section)]">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 id="origem" className="t-h2 text-balance">
            {sobre.origemNome.titulo}
          </h2>
          <div className="flex flex-col gap-6">
            {sobre.origemNome.paragrafos.map((p) => (
              <p key={p} className="t-lead">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="valores" className="py-[var(--spacing-section)]">
        <Container className="flex flex-col gap-12">
          <h2 id="valores" className="t-h2">
            {sobre.valoresTitulo}
          </h2>
          <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-4">
            {sobre.valores.map((v) => (
              <li key={v.titulo} className="flex flex-col gap-4 bg-noite p-8">
                <RuneGlyph char={v.runa} className="text-[3rem] text-azul-brilho" strokeWidth={1.2} />
                <h3 className="t-h3">{v.titulo}</h3>
                <p className="text-[0.9375rem] text-off-white-70">{v.texto}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="ceo" className="py-[var(--spacing-section)]">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <CapaPlaceholder capa={sobre.ceo.foto} className="aspect-[4/5] w-full max-w-md rounded-[var(--radius-card)]" />
          <div className="flex flex-col gap-5">
            <Eyebrow>{sobre.ceo.titulo}</Eyebrow>
            <h2 id="ceo" className="t-h2 text-balance">
              {sobre.ceo.nome}
            </h2>
            <p className="hud-text text-azul-runa">{sobre.ceo.cargo}</p>
            <p className="t-lead">{sobre.ceo.bio}</p>
          </div>
        </Container>
      </section>

      <CtaBlock titulo={sobre.cta.titulo} botao={sobre.cta.botao} />
    </>
  );
}
