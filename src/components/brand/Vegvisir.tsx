import { FUTHARK_RING, RUNE_PATHS } from "./runes";

// Terminais de braço (braço aponta para cima, de (0,-10) a (0,-64)).
const TERMINAIS = [
  "M0 -10V-64M-8 -54L0 -64L8 -54M-6 -44H6",
  "M0 -10V-64M-7 -64H7M-5 -56H5M-3 -48H3",
  "M0 -10V-60M-8 -52V-64M8 -52V-64M-8 -52Q0 -44 8 -52",
  "M0 -10V-64M-7 -58L0 -64L7 -58M-7 -50L0 -56L7 -50",
  "M0 -10V-62M-6 -56L6 -68M-6 -68L6 -56",
  "M0 -10V-60M0 -60Q-9 -66 -6 -72M0 -60Q9 -66 6 -72",
  "M0 -10V-64M-9 -48H9M-5 -64L0 -58L5 -64",
  "M0 -10V-64M-6 -54L0 -64L6 -54M0 -64V-72",
];

interface Props {
  className?: string;
  label?: string;
}

/** Vegvísir: compasso rúnico de 8 braços dentro de anel de runas Futhark. Só linhas finas, currentColor. */
export function Vegvisir({ className, label }: Props) {
  const a11y = label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };
  const n = FUTHARK_RING.length;
  return (
    <svg
      viewBox="-120 -120 240 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...a11y}
    >
      <circle r="118" />
      <circle r="92" />
      <circle r="86" strokeOpacity={0.6} />
      {FUTHARK_RING.map((c, i) => {
        const d = RUNE_PATHS[c];
        if (!d) return null;
        return (
          <g key={`${c}${i}`} transform={`rotate(${(360 / n) * i}) translate(0 -112) scale(0.34) translate(-5 0)`}>
            <path d={d} strokeWidth={2.6} />
          </g>
        );
      })}
      <g>
        {TERMINAIS.map((t, i) => (
          <path key={i} d={t} transform={`rotate(${i * 45}) scale(1.08)`} />
        ))}
      </g>
      <circle r="9" />
      <circle r="3.5" />
      <path d="M0 -26a26 26 0 0 1 26 26M0 26a26 26 0 0 1 -26 -26" strokeOpacity={0.6} />
    </svg>
  );
}
