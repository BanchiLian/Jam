import { Fragment } from "react";
import { LetterH } from "@/components/brand/LetterH";
import { RuneHagall } from "@/components/brand/RuneHagall";
import { Sparkle } from "@/components/brand/Sparkle";
import { Symbol } from "@/components/brand/Symbol";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkMore } from "@/components/ui/LinkMore";
import { a11y } from "@/content/global";
import { simbolo } from "@/content/home";

const GLIFOS = [RuneHagall, Sparkle, LetterH];

export function Simbolo() {
  return (
    <section data-section="simbolo" aria-labelledby="simbolo-titulo" className="relative py-[var(--spacing-section)]">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-5">
          <Eyebrow>{simbolo.eyebrow}</Eyebrow>
          <h2 id="simbolo-titulo" data-reveal="words" className="t-h2 max-w-[16ch] text-balance">
            {simbolo.titulo}
          </h2>
          <p className="t-lead max-w-xl text-pretty">{simbolo.subtitulo}</p>
        </div>

        <ol className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          {simbolo.passos.map((p, i) => {
            const Glifo = GLIFOS[i];
            return (
              <Fragment key={p.titulo}>
                <li data-reveal="fade" className="flex flex-1 flex-col gap-3">
                  <Glifo className="h-16 w-fit text-azul-brilho sm:h-24" />
                  <h3 className="text-[1.25rem] font-semibold leading-tight">{p.titulo}</h3>
                  <p className="max-w-xs text-[0.9375rem] leading-snug text-off-white-70">{p.texto}</p>
                </li>
                <li aria-hidden className="hidden text-[2.5rem] font-light text-azul-principal-claro lg:block">
                  {i < 2 ? "+" : "="}
                </li>
              </Fragment>
            );
          })}
          <li className="flex flex-1 items-center justify-start lg:justify-end">
            <Symbol tone="claro" label={a11y.simbolo} className="w-40 sm:w-52" />
          </li>
        </ol>

        <div className="flex flex-col gap-6 border-t border-linha pt-8">
          <p data-reveal="lines" className="max-w-2xl text-[1.0625rem] leading-snug text-off-white sm:text-[1.25rem]">
            {simbolo.fusao}
          </p>
          <LinkMore link={simbolo.saibaMais} />
        </div>
      </Container>
    </section>
  );
}
