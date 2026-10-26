import type { ComponentProps } from "react";
import { cx } from "./cx";

export function Card({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[var(--radius-card)] border border-linha bg-noite-2/80 p-6 sm:p-8",
        className,
      )}
      {...rest}
    />
  );
}
