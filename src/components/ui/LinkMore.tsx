import Link from "next/link";
import type { LinkItem } from "@/content/types";
import { cx } from "./cx";

interface Props {
  link: LinkItem;
  className?: string;
}

/** Link no estilo "Saiba mais ›". */
export function LinkMore({ link, className }: Props) {
  return (
    <Link
      href={link.href}
      aria-label={link.ariaLabel}
     
      className={cx(
        "group inline-flex items-center gap-1.5 text-[1.0625rem] font-medium text-azul-principal-claro hover:text-off-white",
        className,
      )}
    >
      {link.label}
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
        ›
      </span>
    </Link>
  );
}
