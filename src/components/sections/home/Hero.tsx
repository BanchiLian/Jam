import { Symbol } from "@/components/brand/Symbol";
import { Vegvisir } from "@/components/brand/Vegvisir";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section data-section="hero" aria-labelledby="hero-titulo" className="relative flex flex-col justify-center max-lg:min-h-svh pb-8 pt-24 lg:pb-10 lg:pt-28">
      <Container>
        {/* Banner: painel único; elementos decorativos são cortados pelo overflow. */}
        <div className="relative isolate flex min-h-[30rem] flex-col justify-end overflow-hidden rounded-[1.5rem] border border-linha bg-[linear-gradient(135deg,#161a21_0%,#1c2c4f_130%)] px-6 pb-8 pt-44 sm:rounded-[2rem] sm:px-10 sm:pb-10 lg:min-h-[min(42rem,calc(100svh-9rem))] lg:justify-center lg:px-16 lg:py-16">
          {/* Vegvísir: marca d'água de linhas finas à esquerda, cortada pela borda. */}
          <Vegvisir className="pointer-events-none absolute -bottom-[18%] -left-[14%] -z-10 w-[min(34rem,90%)] text-azul-runa opacity-[0.1] lg:-left-[6%] lg:bottom-auto lg:top-1/2 lg:w-[min(44rem,52%)] lg:-translate-y-1/2" />
          {/* Estrelas oficiais em off-white sólido, saindo pelas bordas (máscara CSS, sem raster). */}
          <Symbol
            tone="claro"
            className="pointer-events-none absolute -right-[22%] -top-[4%] -z-10 w-[72%] opacity-[0.28] sm:w-[60%] lg:-right-[12%] lg:top-1/2 lg:w-[58%] lg:-translate-y-1/2 lg:opacity-100"
          />
          {/* Primeira dobra (LCP): sem data-reveal, visível desde o primeiro frame. */}
          <div className="flex flex-col gap-6 lg:max-w-[50%] lg:gap-8">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 id="hero-titulo" className="t-display max-w-[11ch] text-balance !text-[clamp(2.75rem,1.2rem+6vw,7rem)]">
              {hero.titulo}
            </h1>
            <p className="t-lead max-w-xl text-pretty">{hero.subtitulo}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={hero.cta.href}>{hero.cta.label}</Button>
              <Button href={hero.ctaSecundario.href} variant="secundario">
                {hero.ctaSecundario.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
