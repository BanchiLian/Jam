import { useId } from "react";
import { VB } from "./logo-data";

export type SymbolTone = "claro" | "azul" | "profundo" | "grafite" | "runa";

const TONE: Record<SymbolTone, string> = {
  claro: "text-off-white",
  azul: "text-azul-principal",
  profundo: "text-azul-profundo",
  grafite: "text-noite",
  runa: "text-azul-runa",
};

/** Estrelas oficiais como arquivo estático (traço já engrossado; versão fina para marca d'água). */
export const STARS_SRC = "/brand/huldra-estrelas.svg";
export const STARS_SRC_FINO = "/brand/huldra-estrelas-fino.svg";

/**
 * Estrelas oficiais para uso dentro de outro <svg>: um retângulo preenchido com
 * `currentColor` e recortado pela máscara do arquivo estático (nada de paths inline).
 */
export function StarsMask() {
  const id = `st${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const v = VB.stars;
  return (
    <>
      <mask id={id} maskUnits="userSpaceOnUse" x={v.x} y={v.y} width={v.w} height={v.h} style={{ maskType: "alpha" }}>
        <image href={STARS_SRC} x={v.x} y={v.y} width={v.w} height={v.h} />
      </mask>
      <rect x={v.x} y={v.y} width={v.w} height={v.h} fill="currentColor" mask={`url(#${id})`} />
    </>
  );
}

interface Props {
  tone?: SymbolTone;
  className?: string;
  label?: string;
  /** Só linhas finas (marca d'água). */
  outline?: boolean;
}

/** Símbolo oficial: duas estrelas, desenhadas por máscara CSS sobre o SVG estático. */
export function Symbol({ tone = "claro", className, label, outline = false }: Props) {
  const a11y = label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };
  const v = VB.stars;
  const url = `url(${outline ? STARS_SRC_FINO : STARS_SRC})`;
  return (
    <span
      className={`block bg-current ${TONE[tone]} ${className ?? ""}`}
      style={{
        aspectRatio: `${v.w} / ${v.h}`,
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
      {...a11y}
    />
  );
}
