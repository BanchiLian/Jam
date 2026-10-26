import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "./cx";

type Variant = "primario" | "secundario" | "ghost";

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[0.9375rem] font-semibold tracking-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const VARIANT: Record<Variant, string> = {
  primario: "bg-azul-principal text-off-white hover:bg-azul-hover active:bg-azul-profundo",
  secundario: "border border-linha-forte text-off-white hover:border-azul-brilho hover:bg-azul-profundo/50",
  ghost: "text-off-white-70 hover:text-off-white",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type AsLink = CommonProps & { href: string } & Omit<ComponentProps<"a">, "href" | "className" | "children">;
type AsButton = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: AsLink | AsButton) {
  const { variant = "primario", className, children, ...rest } = props;
  const cls = cx(BASE, VARIANT[variant], className);
  if (typeof rest.href === "string") {
    const { href, ...anchor } = rest as Omit<AsLink, "variant" | "className" | "children">;
    if (/^(https?:|mailto:|tel:)/.test(href)) {
      const externo = /^https?:/.test(href);
      return (
        <a
          href={href}
          className={cls}
         
          {...anchor}
          {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...anchor}>
        {children}
      </Link>
    );
  }
  const btn = rest as Omit<AsButton, "variant" | "className" | "children">;
  return (
    <button type="button" className={cls} {...btn}>
      {children}
    </button>
  );
}
