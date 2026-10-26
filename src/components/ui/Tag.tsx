import type { ComponentProps } from "react";
import { cx } from "./cx";

export function Tag({ className, ...rest }: ComponentProps<"span">) {
  return (
    <span
      className={cx("hud-text inline-flex items-center rounded-full border border-linha-forte px-3 py-1 text-azul-runa", className)}
      {...rest}
    />
  );
}
