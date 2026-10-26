import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { Container } from "@/components/ui/Container";
import { LinkMore } from "@/components/ui/LinkMore";
import { servicos, servicosPage } from "@/content/servicos";
import type { Servico } from "@/content/types";
import { CtaBlock } from "../shared/CtaBlock";
import { PageHero } from "../shared/PageHero";

export function ServicoDetalhe({ servico }: { servico: Servico }) {
  const i = servicos.findIndex((s) => s.slug === servico.slug);
  const proximo = servicos[(i + 1) % servicos.length];

  return (
    <>
      <PageHero eyebrow={`${servicosPage.runaLabel} ${servico.runaNome}`} titulo={servico.nome} subtitulo={servico.resumo}>
        <LinkMore link={servicosPage.voltar} />
      </PageHero>

      <section aria-labelledby="descricao" className="py-[var(--spacing-section)]">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div id="descricao" className="flex flex-col gap-6">
            {servico.descricao.map((p) => (
              <p key={p} className="t-lead text-off-white">
                {p}
              </p>
            ))}
          </div>
          <aside aria-labelledby="runa-porque" className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-linha bg-noite-2/80 p-8">
            <RuneGlyph char={servico.runa} className="text-[6rem] text-azul-brilho" strokeWidth={1.1} />
            <h2 id="runa-porque" className="hud-text text-azul-principal-claro">
              {servicosPage.porqueTitulo}
            </h2>
            <p className="text-[0.9375rem] text-off-white-70">{servico.runaPorque}</p>
          </aside>
        </Container>
      </section>

      <section aria-labelledby="entregaveis" className="pb-[var(--spacing-section)]">
        <Container className="flex flex-col gap-8">
          <h2 id="entregaveis" className="t-h2">
            {servicosPage.entregaveisTitulo}
          </h2>
          <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-linha bg-linha sm:grid-cols-2">
            {servico.entregaveis.map((e, n) => (
              <li key={e} className="flex items-center gap-4 bg-noite p-6">
                <span className="hud-text text-azul-principal-claro">{String(n + 1).padStart(2, "0")}</span>
                <span className="text-[1.125rem] font-medium">{e}</span>
              </li>
            ))}
          </ul>
          <p>
            <span className="hud-text mr-3 text-off-white-50">{servicosPage.proximo}</span>
            <LinkMore link={{ label: proximo.nome, href: `/servicos/${proximo.slug}` }} />
          </p>
        </Container>
      </section>

      <CtaBlock titulo={servicosPage.ctaTitulo} botao={servicosPage.cta} />
    </>
  );
}
