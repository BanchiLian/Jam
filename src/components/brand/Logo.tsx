import { BOX_COLORS, type BoxTone } from "./SymbolBox";
import { BOX_D, TAGLINE_D, VB, WORDMARK_D } from "./logo-data";
import { StarsMask } from "./Symbol";

interface Props {
  tone?: BoxTone;
  className?: string;
  /** Texto acessível (nome da marca, vem do conteúdo). */
  nome?: string;
  /** Mostra a assinatura "Clareza que deixa marca" (do vetor oficial). */
  assinatura?: boolean;
}

/**
 * Logo oficial completo (caixa + estrelas + logotipo [+ assinatura]),
 * desenhado com os caminhos extraídos do manual. Dimensione pela altura.
 * Padrão `negativo`: versão para fundos escuros.
 */
export function Logo({ tone = "negativo", className = "h-9 w-auto sm:h-10", nome = "Huldra", assinatura = false }: Props) {
  const c = BOX_COLORS[tone];
  const x = VB.box.x;
  const y = VB.box.y;
  const w = VB.wordmark.x + VB.wordmark.w - x;
  const h = (assinatura ? VB.tagline.y + VB.tagline.h : VB.box.y + VB.box.h) - y;
  return (
    <svg viewBox={`${x} ${y} ${w} ${h}`} role="img" aria-label={nome} className={`shrink-0 ${className}`}>
      {c.box && <path d={BOX_D} className={c.box} />}
      <g className={c.stars}>
        <StarsMask />
      </g>
      <g className={c.word}>
        {WORDMARK_D.map((d, i) => (
          <path key={i} d={d} />
        ))}
        {assinatura && TAGLINE_D.map((d, i) => <path key={`t${i}`} d={d} />)}
      </g>
    </svg>
  );
}
