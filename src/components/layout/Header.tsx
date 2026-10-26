"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { a11y, header, site } from "@/content/global";
import { MenuFullscreen } from "./MenuFullscreen";

/**
 * Header fixo. Estrutura pronta para esconder ao rolar (huldra-motion): `data-header`
 * é o alvo da animação (translateY) — aqui não há comportamento de scroll.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <header data-header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex h-20 w-full max-w-[var(--container-wide)] items-center justify-between px-[var(--spacing-gutter)]">
          <Link href="/" aria-label={a11y.logo} className="rounded-lg">
            <Logo nome={site.nome} />
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href={header.cta.href} variant="secundario" className="min-h-11 whitespace-nowrap">
                {header.cta.label}
              </Button>
            </div>
            <button
              ref={triggerRef}
              type="button"
              aria-expanded={open}
              aria-controls="menu-fullscreen"
              aria-haspopup="dialog"
             
              onClick={() => setOpen(true)}
              className="hud-text inline-flex min-h-11 items-center gap-3 rounded-full border border-linha-forte bg-noite/85 px-5 text-off-white hover:border-azul-brilho"
            >
              <span>{header.menu}</span>
              <span aria-hidden className="grid gap-1">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-3 bg-current" />
              </span>
              <span className="sr-only">{header.abrirMenu}</span>
            </button>
          </div>
        </div>
      </header>
      <MenuFullscreen
        id="menu-fullscreen"
        open={open}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
      />
    </>
  );
}
