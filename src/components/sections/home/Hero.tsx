import { Symbol } from "@/components/brand/Symbol";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section data-section="hero" aria-labelledby="hero-titulo" className="relative isolate flex min-h-svh items-center overflow-hidden pb-24 pt-32">
      <Symbol
        tone="runa"
        outline
        className="pointer-events-none absolute -right-[12%] top-1/2 -z-10 w-[min(120vw,64rem)] -translate-y-1/2 opacity-[0.12]"
      />
      <Container className="flex flex-col gap-8">
        <Eyebrow data-reveal="lines">{hero.eyebrow}</Eyebrow>
        <h1 id="hero-titulo" data-reveal="words" className="t-display max-w-[11ch] text-balance">
          {hero.titulo}
        </h1>
        <p data-reveal="lines" className="t-lead max-w-xl text-pretty">
          {hero.subtitulo}
        </p>
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
