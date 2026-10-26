"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { prefersReducedMotion, useReducedMotion } from "@/hooks/useReducedMotion";
import { setupCounters } from "@/lib/motion/counters";
import { setupHeader, setupHud } from "@/lib/motion/page";
import { REVEAL_CSS, setupReveals } from "@/lib/motion/reveal";
import { useExperience } from "@/store/useExperience";
import { Preloader } from "./Preloader";
import { SoundToggle } from "./SoundToggle";

/**
 * Ponto de montagem global do huldra-motion (preloader, reveals leves, contadores, header, som).
 * Scroll e navegação são nativos. Montado em src/app/layout.tsx. Dono: huldra-motion.
 */
export function MotionRoot() {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    useExperience.getState().setReducedMotion(reduced);
  }, [reduced]);

  // Por rota (layout effect: estado inicial dos reveals antes do paint).
  useLayoutEffect(() => {
    const cleanups: Array<() => void> = [setupHud()];
    if (!prefersReducedMotion()) {
      const waitReady = !useExperience.getState().preloaderDone;
      cleanups.push(setupReveals(document.body, waitReady));
      cleanups.push(setupCounters(document.body));
      cleanups.push(setupHeader());
    }
    return () => cleanups.splice(0).reverse().forEach((fn) => fn());
  }, [pathname, reduced]);

  // Menu fullscreen: trava o scroll do body enquanto aberto e escalona a entrada dos itens.
  useEffect(() => {
    let open = false;
    const check = () => {
      const menu = document.querySelector<HTMLElement>("[data-menu-fullscreen]");
      if (menu && !open) {
        open = true;
        document.body.style.overflow = "hidden";
        if (!prefersReducedMotion()) {
          menu.querySelectorAll("li").forEach((li, i) =>
            li.animate(
              [
                { transform: "translateY(40px)", opacity: 0 },
                { transform: "none", opacity: 1 },
              ],
              { duration: 600, delay: 80 + i * 60, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" },
            ),
          );
        }
      } else if (!menu && open) {
        open = false;
        document.body.style.overflow = "";
      }
    };
    const mo = new MutationObserver(check);
    mo.observe(document.body, { childList: true });
    return () => {
      mo.disconnect();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <style>{REVEAL_CSS}</style>
      <Preloader />
      <SoundToggle />
    </>
  );
}
