import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contato } from "@/content/contato";
import { site } from "@/content/global";
import { PageHero } from "../shared/PageHero";
import { ContatoForm } from "./ContatoForm";

export function ContatoPage() {
  const c = contato.canais;
  return (
    <>
      <PageHero eyebrow={contato.eyebrow} titulo={contato.titulo} subtitulo={contato.intro} />
      <section aria-label={contato.eyebrow} className="pb-[var(--spacing-section)]">
        <Container className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <ContatoForm />
          <aside aria-labelledby="canais" className="flex flex-col gap-8">
            <h2 id="canais" className="t-h3">
              {c.titulo}
            </h2>
            <ul className="flex flex-col gap-6">
              {site.whatsappDisponivel && site.whatsappUrl && (
                <li className="flex flex-col gap-2 border-t border-linha pt-6">
                  <h3 className="hud-text text-azul-principal-claro">{c.whatsapp.titulo}</h3>
                  <p className="text-[0.9375rem] text-off-white-70">{c.whatsapp.texto}</p>
                  {site.whatsapp && <p className="tabular">{site.whatsapp}</p>}
                  <Button href={site.whatsappUrl} variant="secundario" className="self-start">
                    {c.whatsapp.cta}
                  </Button>
                </li>
              )}
              <li className="flex flex-col gap-2 border-t border-linha pt-6">
                <h3 className="hud-text text-azul-principal-claro">{c.instagram.titulo}</h3>
                <p className="text-[0.9375rem] text-off-white-70">{c.instagram.texto}</p>
                <Button href={site.instagramUrl} variant="secundario" className="self-start">
                  {c.instagram.cta}
                </Button>
              </li>
              {site.emailDisponivel && site.email && (
                <li className="flex flex-col gap-2 border-t border-linha pt-6">
                  <h3 className="hud-text text-azul-principal-claro">{c.email.titulo}</h3>
                  <p>{site.email}</p>
                  <Button href={`mailto:${site.email}`} variant="secundario" className="self-start">
                    {c.email.cta}
                  </Button>
                </li>
              )}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
