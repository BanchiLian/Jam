interface Props {
  className?: string;
  label?: string;
}

/** Runa Hagall (ᚼ): haste vertical + X, pontas arredondadas. */
export function RuneHagall({ className, label }: Props) {
  const a11y = label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };
  return (
    <svg viewBox="0 0 60 100" className={className} fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" {...a11y}>
      <path d="M30 6V94M8 26L52 74M52 26L8 74" />
    </svg>
  );
}
