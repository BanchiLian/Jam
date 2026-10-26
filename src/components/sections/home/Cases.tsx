import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { cases, casesPage } from "@/content/cases";
import { casesSecao } from "@/content/home";
import { CasesVazio } from "../shared/CasesVazio";
import { CapaPlaceholder } from "../shared/CapaPlaceholder";
import { SectionHead } from "../shared/SectionHead";

export function Cases() {
  return (
    <section data-section="cases" aria-labelledby="cases-titulo" className="relative py-[var(--spacing-section)]">
      <Container className="flex flex-col gap-12 lg:gap-20">
        <SectionHead secao={casesSecao} id="cases-titulo" />
        {cases.length === 0 ? (
          <CasesVazio bloco={casesSecao.vazio} />
        ) : (
        <ul className="flex flex-col gap-6">
          {cases.map((c, i) => (
            <li
              key={c.slug}
              data-case={i}
            >
              <Link
                href={`/cases/${c.slug}`}
               
                className="group grid overflow-hidden rounded-[var(--radius-card)] border border-linha bg-noite-2 lg:min-h-[32rem] lg:grid-cols-[1.3fr_1fr]"
              >
                <CapaPlaceholder capa={c.capa} className="min-h-56 lg:min-h-full" />
                <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      <Tag>{c.setor}</Tag>
                      <Tag>{c.ano}</Tag>
                    </div>
                    <p className="hud-text text-azul-principal-claro">{c.cliente}</p>
                    <h3 className="t-h3 text-balance">{c.titulo}</h3>
                    <p className="text-[0.9375rem] text-off-white-70">{c.resumo}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[clamp(3rem,2rem+5vw,6rem)] font-extrabold leading-none tracking-tight text-off-white tabular">
                        {c.resultado.valor}
                      </p>
                      <p className="mt-2 text-[0.9375rem] text-off-white-70">{c.resultado.legenda}</p>
                    </div>
                    <span className="text-[1.0625rem] font-medium text-azul-principal-claro group-hover:text-off-white">
                      {casesPage.saibaMais} <span aria-hidden>›</span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        )}
      </Container>
    </section>
  );
}
