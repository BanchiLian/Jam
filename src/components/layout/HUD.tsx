"use client";

import { usePathname } from "next/navigation";
import { hud } from "@/content/global";

/**
 * HUD fixo, minimalista. Decorativo (aria-hidden), exceto o slot do botão de som,
 * onde huldra-motion monta o toggle (`data-hud-slot="sound"`).
 * A dica de rolagem (`data-hud-scroll`) só existe na Home; huldra-motion a esmaece ao rolar.
 */
export function HUD() {
  const home = usePathname() === "/";
  return (
    <div data-hud className="pointer-events-none fixed inset-0 z-30 text-off-white-70">
      {home && (
        <div aria-hidden className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex" data-hud-scroll>
          <span className="hud-text">{hud.scroll}</span>
          <span className="block h-8 w-px bg-gradient-to-b from-azul-runa/60 to-transparent" />
        </div>
      )}
      <div className="absolute bottom-3 right-3 flex items-center gap-4 md:bottom-5 md:right-[var(--spacing-gutter)]">
        <div
          data-hud-slot="sound"
          className="pointer-events-auto max-md:rounded-full max-md:border max-md:border-linha-forte max-md:bg-noite/90 max-md:[&_button]:min-w-11 max-md:[&_button]:justify-center max-md:[&_button>span]:hidden"
        />
      </div>
    </div>
  );
}
