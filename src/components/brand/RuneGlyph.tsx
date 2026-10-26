import { RUNE_PATHS } from "./runes";

interface Props {
  /** Caractere do Futhark (ex.: "ᚱ"). */
  char: string;
  className?: string;
  /** Se informado, vira role="img" com este rótulo; senão é decorativo. */
  label?: string;
  strokeWidth?: number;
}

/** Renderiza uma runa como traço SVG (independe de fonte). Caracteres sem desenho caem para texto. */
export function RuneGlyph({ char, className, label, strokeWidth = 1.4 }: Props) {
  const d = RUNE_PATHS[char];
  const a11y = label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };
  if (!d) {
    return (
      <span className={className} {...a11y}>
        {char}
      </span>
    );
  }
  return (
    <svg
      viewBox="-2 -2 14 24"
      style={{ width: "0.58em", height: "1em" }}
      className={`inline-block align-[-0.12em] ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...a11y}
    >
      <path d={d} />
    </svg>
  );
}
