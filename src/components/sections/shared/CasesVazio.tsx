import { Symbol } from "@/components/brand/Symbol";
import { Vegvisir } from "@/components/brand/Vegvisir";
import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { Button } from "@/components/ui/Button";
import type { BlocoVazio } from "@/content/types";

/** Estado "primeiros projetos em forja": card de marca com símbolo, runas e CTA. */
export function CasesVazio({ bloco }: { bloco: BlocoVazio }) {
  return (
    <div
      role="group"
      aria-label={bloco.titulo}
      className="relative isolate grid items-center gap-10 overflow-hidden rounded-[var(--radius-card)] border border-linha bg-gradient-to-br from-azul-profundo via-noite-3 to-noite p-8 sm:p-12 lg:min-h-[28rem] lg:grid-cols-[1.2fr_1fr] lg:p-16"
    >
      <Vegvisir className="pointer-events-none absolute -right-[12%] -top-[35%] -z-10 w-[min(70rem,90%)] text-azul-runa/10" />
      <div className="flex flex-col items-start gap-6">
        <p className="hud-text flex items-center gap-3 text-azul-principal-claro">
          <span aria-hidden className="inline-flex gap-1 text-azul-brilho">
            <RuneGlyph char="ᚲ" className="text-lg" />
            <RuneGlyph char="ᚨ" className="text-lg" />
          </span>
          {bloco.eyebrow}
        </p>
        <p className="t-lead max-w-xl text-pretty text-off-white">{bloco.texto}</p>
        <Button href={bloco.cta.href} aria-label={bloco.cta.ariaLabel}>
          {bloco.cta.label}
        </Button>
      </div>
      <div aria-hidden className="hidden justify-center lg:flex">
        <Symbol tone="runa" outline className="w-3/4 max-w-xs opacity-70" />
      </div>
    </div>
  );
}
