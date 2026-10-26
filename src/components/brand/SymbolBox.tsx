import { BOX_D, VB } from "./logo-data";
import { StarsMask } from "./Symbol";

/** Versões do manual: 1 azul · 2 profundo · 3 grafite · 4 livre-azul · 5 livre-profundo · 6 negativo. */
export type BoxTone = "azul" | "profundo" | "grafite" | "livre-azul" | "livre-profundo" | "negativo";

export const BOX_COLORS: Record<BoxTone, { box?: string; stars: string; word: string }> = {
  azul: { box: "fill-azul-principal", stars: "text-off-white", word: "fill-noite" },
  profundo: { box: "fill-azul-profundo", stars: "text-azul-principal", word: "fill-azul-principal" },
  grafite: { box: "fill-grafite", stars: "text-off-white", word: "fill-off-white" },
  "livre-azul": { stars: "text-azul-principal", word: "fill-azul-principal" },
  "livre-profundo": { stars: "text-azul-profundo", word: "fill-noite" },
  negativo: { box: "fill-off-white", stars: "text-noite", word: "fill-off-white" },
};

interface Props {
  tone?: BoxTone;
  className?: string;
  label?: string;
}

/** Símbolo dentro da caixa oficial. Dimensione pela altura (ex.: h-10 w-auto). */
export function SymbolBox({ tone = "azul", className = "h-10 w-auto", label }: Props) {
  const c = BOX_COLORS[tone];
  const a11y = label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };
  const b = VB.box;
  return (
    <svg viewBox={`${b.x} ${b.y} ${b.w} ${b.h}`} className={`shrink-0 ${className}`} {...a11y}>
      {c.box && <path d={BOX_D} className={c.box} />}
      <g className={c.stars}>
        <StarsMask />
      </g>
    </svg>
  );
}
