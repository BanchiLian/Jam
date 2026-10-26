import { Container } from "@/components/ui/Container";
import { LinkMore } from "@/components/ui/LinkMore";
import { Tag } from "@/components/ui/Tag";
import { cases, casesPage } from "@/content/cases";
import { servicos } from "@/content/servicos";
import type { Case } from "@/content/types";
import { CapaPlaceholder } from "../shared/CapaPlaceholder";
import { CtaBlock } from "../shared/CtaBlock";
import { PageHero } from "../shared/PageHero";

function Bloco({ id, titulo, itens }: { id: string; titulo: string; itens: string[] }) {
  return (
    <section aria-labelledby={id} className="grid gap-6 border-t border-linha py-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
      <h2 id={id} className="t-h3">
        {titulo}
      </h2>
      <div className="flex flex-col gap-5">
        {itens.map((p) => (
          <p key={p} className="t-lead text-off-white">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

export function CaseDetalhe({ caso }: { caso: Case }) {
  const i = cases.findIndex((c) => c.slug === caso.slug);
  const proximo = cases[(i + 1) % cases.length];
  const envolvidos = servicos.filter((s) => caso.servicos.includes(s.slug));

  return (
    <>
      <PageHero eyebrow={caso.cliente} titulo={caso.titulo} subtitulo={caso.resumo}>
        <div className="flex flex-wrap items-center gap-2">
          <Tag>
            {casesPage.setor}: {caso.setor}
          </Tag>
          <Tag>
            {casesPage.ano}: {caso.ano}
          </Tag>
        </div>
        <LinkMore link={casesPage.voltar} />
      </PageHero>

      <Container className="flex flex-col gap-12 pb-[var(--spacing-section)]">
        <CapaPlaceholder capa={caso.capa} className="aspect-[16/9] w-full rounded-[var(--radius-card)]" />
        <div className="flex flex-col gap-2">
          <p className="text-[clamp(4rem,2rem+10vw,10rem)] font-extrabold leading-none tracking-tight tabular">{caso.resultado.valor}</p>
          <p className="t-lead">{caso.resultado.legenda}</p>
        </div>
        <div>
          <Bloco id="desafio" titulo={casesPage.desafioTitulo} itens={caso.desafio} />
          <Bloco id="solucao" titulo={casesPage.solucaoTitulo} itens={caso.solucao} />
          <Bloco id="resultados" titulo={casesPage.resultadosTitulo} itens={caso.resultados} />
          <section aria-labelledby="servicos-envolvidos" className="grid gap-6 border-t border-linha py-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <h2 id="servicos-envolvidos" className="t-h3">
              {casesPage.servicosTitulo}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {envolvidos.map((s) => (
                <li key={s.slug}>
                  <LinkMore link={{ label: s.nome, href: `/servicos/${s.slug}` }} />
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p>
          <span className="hud-text mr-3 text-off-white-50">{casesPage.proximo}</span>
          <LinkMore link={{ label: proximo.titulo, href: `/cases/${proximo.slug}` }} />
        </p>
      </Container>

      <CtaBlock titulo={casesPage.ctaTitulo} botao={casesPage.cta} />
    </>
  );
}
