import Link from "next/link";
import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { Container } from "@/components/ui/Container";
import { servicos, servicosPage } from "@/content/servicos";
import { PageHero } from "../shared/PageHero";

export function ServicosLista() {
  return (
    <>
      <PageHero eyebrow={servicosPage.eyebrow} titulo={servicosPage.titulo} subtitulo={servicosPage.subtitulo} />
      <section aria-label={servicosPage.titulo} className="pb-[var(--spacing-section)]">
        <Container>
          <ul className="grid gap-4 md:grid-cols-3">
            {servicos.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicos/${s.slug}`}
                 
                  className="group flex h-full min-h-[20rem] flex-col justify-between gap-8 rounded-[var(--radius-card)] border border-linha bg-gradient-to-b from-noite-3 to-noite-2 p-7 hover:border-azul-principal"
                >
                  <RuneGlyph char={s.runa} className="text-[5rem] text-azul-brilho/90" strokeWidth={1.1} />
                  <div className="flex flex-col gap-3">
                    <p className="hud-text text-azul-principal-claro">{s.runaNome}</p>
                    <h2 className="t-h3">{s.nome}</h2>
                    <p className="text-[0.9375rem] text-off-white-70">{s.resumo}</p>
                    <span className="font-medium text-azul-principal-claro group-hover:text-off-white">
                      {servicosPage.saibaMais} <span aria-hidden>›</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
