"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/hooks/useReducedMotion";
import { a11y } from "@/content/global";
import { HAGALL_PATHS, HAGALL_VIEWBOX } from "@/lib/motion/rune";
import { useExperience } from "@/store/useExperience";

const FLAG = "huldra:preloader";
const TOTAL = 800;

function visited(): boolean {
  try {
    return window.sessionStorage.getItem(FLAG) === "1";
  } catch {
    return false;
  }
}

function markVisited() {
  try {
    window.sessionStorage.setItem(FLAG, "1");
  } catch {
    /* sessionStorage indisponível: apenas repete na próxima visita */
  }
}

/**
 * Preloader (só 1ª visita da sessão, só se a página ainda não estiver pronta após 500 ms, ≤ 0,8 s):
 * runa ᚼ entalhada + contador 000→100 que vira as duas estrelas. Não é renderizado no servidor e
 * nunca cobre o primeiro paint (hero/LCP pintam de imediato). Não bloqueia rolagem nem cliques.
 */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const runeRef = useRef<SVGSVGElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  // O conteúdo nunca espera o preloader: libera a cena já e decide depois se exibe o overlay.
  useEffect(() => {
    useExperience.getState().setPreloaderDone(true);
    if (visited() || prefersReducedMotion()) return;
    const t = window.setTimeout(() => {
      if (document.readyState === "complete") markVisited();
      else setShow(true);
    }, 500);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!show || !el) return;
    let cancelled = false;
    const anims: Animation[] = [];
    let raf = 0;
    let timer = 0;

    const finish = () => {
      markVisited();
      setShow(false);
    };

    const run = async () => {
      let markup = "";
      try {
        const res = await Promise.race([
          fetch("/brand/huldra-simbolo.svg"),
          new Promise<null>((r) => setTimeout(() => r(null), 200)),
        ]);
        if (res && res.ok) markup = await res.text();
      } catch {
        /* sem estrelas: o preloader apenas se dissolve */
      }
      if (cancelled) return;

      const stars = starsRef.current;
      const starPaths: SVGPathElement[] = [];
      if (stars && markup.startsWith("<svg")) {
        stars.innerHTML = markup;
        const svg = stars.querySelector("svg");
        svg?.setAttribute("aria-hidden", "true");
        svg?.setAttribute("focusable", "false");
        svg?.setAttribute("class", "h-full w-full");
        stars.querySelectorAll("path").forEach((p) => {
          p.setAttribute("pathLength", "1");
          p.setAttribute("stroke", "#d5dceb");
          p.style.strokeDasharray = "1";
          p.style.strokeDashoffset = "1";
          starPaths.push(p);
        });
      }

      const strokes = Array.from(runeRef.current?.querySelectorAll("path") ?? []);
      const draw = [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }];
      strokes.forEach((p, i) => {
        p.style.strokeDashoffset = "1";
        anims.push(p.animate(draw, { duration: 350, delay: i * 80, easing: "ease-in-out", fill: "forwards" }));
      });

      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / 500);
        if (countRef.current) countRef.current.textContent = String(Math.round(p * 100)).padStart(3, "0");
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      // 0,42 s: runa vira as estrelas; 0,8 s: overlay some.
      const fade = (target: Element | null, delay: number, duration: number, to: number, from = 1 - to) =>
        target && anims.push(target.animate([{ opacity: from }, { opacity: to }], { duration, delay, easing: "ease-in-out", fill: "forwards" }));
      fade(countRef.current, 420, 150, 0);
      fade(runeRef.current, 450, 200, 0);
      if (stars && starPaths.length) {
        stars.style.opacity = "1";
        starPaths.forEach((p, i) =>
          anims.push(p.animate(draw, { duration: 250, delay: 420 + i * 30, easing: "ease-out", fill: "forwards" })),
        );
      }
      fade(el, TOTAL - 200, 200, 0);
      timer = window.setTimeout(() => !cancelled && finish(), TOTAL);
    };
    void run();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      anims.forEach((a) => a.cancel());
    };
  }, [show]);

  if (!show) return null;
  return (
    <div
      ref={root}
      data-preloader
      role="status"
      aria-live="polite"
      aria-label={a11y.preloader}
      className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-noite"
    >
      <div className="relative flex h-44 w-44 items-center justify-center sm:h-56 sm:w-56">
        <svg
          ref={runeRef}
          viewBox={HAGALL_VIEWBOX}
          aria-hidden
          className="h-full w-auto text-azul-brilho"
          style={{ filter: "drop-shadow(0 0 8px rgb(110 155 255 / 0.7))" }}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
        >
          {HAGALL_PATHS.map((d) => (
            <path key={d} d={d} pathLength={1} strokeDasharray={1} strokeDashoffset={0} />
          ))}
        </svg>
        <div
          ref={starsRef}
          aria-hidden
          className="absolute inset-0 flex items-center justify-center p-2 opacity-0"
          style={{ filter: "drop-shadow(0 0 10px rgb(110 155 255 / 0.55))" }}
        />
      </div>
      <span ref={countRef} aria-hidden className="hud-text tabular text-azul-runa">
        000
      </span>
    </div>
  );
}
