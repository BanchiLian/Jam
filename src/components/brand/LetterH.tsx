interface Props {
  className?: string;
  label?: string;
}

/** Letra H bold de cantos arredondados. */
export function LetterH({ className, label }: Props) {
  const a11y = label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };
  return (
    <svg viewBox="0 0 80 100" className={className} fill="currentColor" {...a11y}>
      <rect x="6" y="6" width="22" height="88" rx="8" />
      <rect x="52" y="6" width="22" height="88" rx="8" />
      <rect x="14" y="40" width="52" height="20" rx="8" />
    </svg>
  );
}
