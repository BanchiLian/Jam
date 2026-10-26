import { STARS_SRC_FINO } from "@/components/brand/Symbol";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section data-section="hero" aria-labelledby="hero-titulo" className="relative isolate flex min-h-svh items-center overflow-hidden pb-24 pt-32">
      {/* Marca d'água decorativa: <img> simples, sem máscara de tela inteira; sem prioridade de rede. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={STARS_SRC_FINO}
        alt=""
        aria-hidden
        width={1000}
        height={749}
        decoding="async"
        fetchPriority="low"
        className="pointer-events-none absolute -right-[12%] top-1/2 -z-10 h-auto w-[min(120vw,64rem)] -translate-y-1/2 opacity-[0.1]"
      />
      {/* Primeira dobra (LCP): sem data-reveal, visível desde o primeiro frame. */}
      <Container className="flex flex-col gap-8">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 id="hero-titulo" className="t-display max-w-[11ch] text-balance">
          {hero.titulo}
        </h1>
        <p className="t-lead max-w-xl text-pretty">{hero.subtitulo}</p>
        <div className="flex flex-wrap gap-3">
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
          <Button href={hero.ctaSecundario.href} variant="secundario">
            {hero.ctaSecundario.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
