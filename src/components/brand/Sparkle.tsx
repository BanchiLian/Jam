interface Props {
  className?: string;
  label?: string;
}

/** Brilho de 4 pontas (estrela côncava, pontas finas). */
export function Sparkle({ className, label }: Props) {
  const a11y = label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" {...a11y}>
      <path d="M50 2Q54 46 98 50Q54 54 50 98Q46 54 2 50Q46 46 50 2Z" />
    </svg>
  );
}
