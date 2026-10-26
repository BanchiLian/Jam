import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { cases, casesPage } from "@/content/cases";
import { CapaPlaceholder } from "../shared/CapaPlaceholder";
import { CasesVazio } from "../shared/CasesVazio";
import { PageHero } from "../shared/PageHero";

export function CasesLista() {
  return (
    <>
      <PageHero eyebrow={casesPage.eyebrow} titulo={casesPage.titulo} subtitulo={casesPage.subtitulo} />
      <section aria-label={casesPage.titulo} className="pb-[var(--spacing-section)]">
        <Container>
          {cases.length === 0 ? (
            <CasesVazio bloco={casesPage.vazio} />
          ) : (
          <ul className="grid gap-6 lg:grid-cols-2">
            {cases.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/cases/${c.slug}`}
                 
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-linha bg-noite-2 hover:border-azul-principal"
                >
                  <CapaPlaceholder capa={c.capa} className="aspect-[16/10]" />
                  <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2">
                      <Tag>{c.setor}</Tag>
                      <Tag>{c.ano}</Tag>
                    </div>
                    <h2 className="t-h3 text-balance">{c.titulo}</h2>
                    <p className="text-[0.9375rem] text-off-white-70">{c.resumo}</p>
                    <p className="mt-auto text-[2.5rem] font-extrabold leading-none tabular">{c.resultado.valor}</p>
                    <span className="font-medium text-azul-principal-claro group-hover:text-off-white">
                      {casesPage.saibaMais} <span aria-hidden>›</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          )}
        </Container>
      </section>
    </>
  );
}
