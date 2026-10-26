import Link from "next/link";
import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { Container } from "@/components/ui/Container";
import { servicos, servicosPage } from "@/content/servicos";
import { servicosSecao } from "@/content/home";
import { SectionHead } from "../shared/SectionHead";

export function Servicos() {
  return (
    <section data-section="servicos" aria-labelledby="servicos-titulo" className="relative py-[var(--spacing-section)]">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <SectionHead secao={servicosSecao} id="servicos-titulo" />
        <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
          {servicos.map((s) => (
            <li key={s.slug} data-reveal="fade">
              <Link
                href={`/servicos/${s.slug}`}
                className="group flex h-full min-h-[20rem] flex-col justify-between gap-8 rounded-[var(--radius-card)] border border-linha bg-gradient-to-b from-noite-3 to-noite-2 p-6 transition-colors hover:border-azul-principal sm:p-7"
              >
                <RuneGlyph char={s.runa} className="text-[4.5rem] text-azul-brilho/90 sm:text-[5.5rem]" strokeWidth={1.1} />
                <div className="flex flex-col gap-3">
                  <p className="hud-text text-azul-principal-claro">{s.runaNome}</p>
                  <h3 className="t-h3">{s.nome}</h3>
                  <p className="text-[0.9375rem] leading-snug text-off-white-70">{s.resumo}</p>
                  <span className="text-[1rem] font-medium text-azul-principal-claro group-hover:text-off-white">
                    {servicosPage.saibaMais} <span aria-hidden>›</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
