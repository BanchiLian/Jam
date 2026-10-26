import type { ComponentProps } from "react";
import { cx } from "./cx";

interface Props extends ComponentProps<"div"> {
  /** "prose" limita a largura para leitura. */
  size?: "wide" | "prose";
}

export function Container({ className, size = "wide", ...rest }: Props) {
  return (
    <div
      className={cx(
        "mx-auto w-full px-[var(--spacing-gutter)]",
        size === "wide" ? "max-w-[var(--container-wide)]" : "max-w-[var(--container-prose)]",
        className,
      )}
      {...rest}
    />
  );
}
