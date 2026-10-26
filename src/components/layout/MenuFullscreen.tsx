"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { Vegvisir } from "@/components/brand/Vegvisir";
import { header, menu, menuRunas, site } from "@/content/global";

interface Props {
  id: string;
  open: boolean;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MenuFullscreen({ id, open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !ref.current) return;
      const items = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label={header.menu}
      data-menu-fullscreen
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-noite"
    >
      <Vegvisir className="pointer-events-none absolute -right-[20%] top-1/2 w-[110vmin] -translate-y-1/2 text-azul-principal/15" />
      <div className="relative mx-auto flex w-full max-w-[var(--container-wide)] items-center justify-between px-[var(--spacing-gutter)] py-5">
        <span className="hud-text text-off-white-50">{site.nome}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
         
          className="hud-text inline-flex min-h-11 items-center gap-3 rounded-full border border-linha-forte px-5 text-off-white hover:border-azul-brilho"
        >
          <span>{header.fecharMenu}</span>
          <span aria-hidden>✕</span>
        </button>
      </div>
      <nav aria-label={header.menu} className="relative mx-auto flex w-full max-w-[var(--container-wide)] flex-1 items-center px-[var(--spacing-gutter)] pb-16">
        <ul className="flex w-full flex-col gap-1">
          {menu.map((item) => {
            const atual = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={atual ? "page" : undefined}
                 
                  className="group flex items-center gap-5 py-2 text-[clamp(2.5rem,1rem+7vw,6.5rem)] font-bold leading-none tracking-tight text-off-white-70 hover:text-off-white aria-[current=page]:text-off-white sm:gap-8"
                >
                  <RuneGlyph
                    char={menuRunas[item.href] ?? "ᚼ"}
                    className="shrink-0 text-[0.6em] text-azul-principal-claro/60 group-hover:text-azul-brilho"
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
