import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { FUTHARK_RING } from "@/components/brand/runes";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { notFound } from "@/content/global";

export const metadata: Metadata = pageMetadata(notFound.meta, "/404", { noindex: true });

export default function NotFound() {
  return (
    <section data-section="not-found" className="relative isolate flex min-h-svh items-center pt-32 pb-32 md:pb-36">
      <Container className="flex flex-col gap-8">
        <Eyebrow>{notFound.eyebrow}</Eyebrow>
        <h1 data-reveal="words" className="t-display max-w-[10ch] text-balance">
          {notFound.titulo}
        </h1>
        <p aria-hidden className="flex max-w-3xl flex-wrap gap-x-3 gap-y-2 text-[clamp(2rem,1rem+4vw,4rem)] [&>span]:basis-[calc((100%-2.25rem)/4)] sm:[&>span]:basis-auto">
          {FUTHARK_RING.slice(0, 12).map((c, i) => (
            <span key={i} className="rune-faded">
              <RuneGlyph char={c} strokeWidth={1.2} />
            </span>
          ))}
        </p>
        <p className="t-lead max-w-xl">{notFound.texto}</p>
        <Button href={notFound.cta.href} className="self-start">
          {notFound.cta.label}
        </Button>
      </Container>
    </section>
  );
}
