import type { ComponentProps } from "react";
import { cx } from "./cx";

/** Rótulo HUD acima de títulos. */
export function Eyebrow({ className, ...rest }: ComponentProps<"p">) {
  return <p className={cx("hud-text text-azul-principal-claro", className)} {...rest} />;
}
