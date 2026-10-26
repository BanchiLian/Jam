import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { Vegvisir } from "@/components/brand/Vegvisir";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { a11y } from "@/content/global";
import { metodo } from "@/content/home";

export function Metodo() {
  return (
    <section data-section="metodo" aria-labelledby="metodo-titulo" className="relative py-[var(--spacing-section)]">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-start lg:gap-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Eyebrow>{metodo.eyebrow}</Eyebrow>
            <h2 id="metodo-titulo" data-reveal="words" className="t-h2 max-w-[16ch] text-balance">
              {metodo.titulo}
            </h2>
            <p className="t-lead max-w-xl text-pretty">{metodo.subtitulo}</p>
          </div>
          <Vegvisir label={a11y.vegvisir} className="mx-auto w-[min(80vw,24rem)] text-azul-runa/60 lg:mx-0 lg:w-full lg:max-w-md" />
        </div>
        <div className="flex flex-col gap-6">
          <ol className="flex flex-col">
            {metodo.etapas.map((e) => (
              <li key={e.numero} data-reveal="fade" className="grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-t border-linha py-5 last:border-b">
                <span className="hud-text pt-1.5 text-azul-principal-claro">{e.numero}</span>
                <div>
                  <h3 className="text-[1.125rem] font-semibold">{e.titulo}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-snug text-off-white-70">{e.descricao}</p>
                </div>
                <RuneGlyph char={e.runa} className="text-[1.75rem] text-azul-brilho" />
              </li>
            ))}
          </ol>
          <p className="text-[0.75rem] text-off-white-50">{metodo.nota}</p>
        </div>
      </Container>
    </section>
  );
}
