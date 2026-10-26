import { Container } from "@/components/ui/Container";
import { privacidade } from "@/content/privacidade";
import { PageHero } from "../shared/PageHero";

export function PrivacidadePage() {
  return (
    <>
      <PageHero eyebrow={privacidade.eyebrow} titulo={privacidade.titulo} subtitulo={privacidade.intro}>
        {privacidade.atualizacao && <p className="hud-text text-off-white-50">{privacidade.atualizacao}</p>}
      </PageHero>
      <Container size="prose" className="flex flex-col gap-12 pb-[var(--spacing-section)]">
        {privacidade.secoes.map((s) => (
          <section key={s.id} aria-labelledby={s.id} className="flex flex-col gap-4">
            <h2 id={s.id} className="t-h3">
              {s.titulo}
            </h2>
            {s.paragrafos.map((p) => (
              <p key={p} className="text-off-white-70">
                {p}
              </p>
            ))}
            {s.itens && (
              <ul className="list-disc space-y-1 pl-6 text-off-white-70 marker:text-azul-principal-claro">
                {s.itens.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </Container>
    </>
  );
}
