import { whenReady } from "./ready";

/**
 * Reveals leves [data-reveal]: fade + slide curto (CSS), uma única vez, via IntersectionObserver.
 * Só esconde (classe rv-hide) o que ainda não está visível, então sem JS o conteúdo aparece normal.
 * Estilos em REVEAL_CSS (injetado pelo MotionRoot).
 */
export const REVEAL_CSS = `[data-reveal].rv-hide{opacity:0;transform:translate3d(0,14px,0)}[data-reveal].rv-hide.rv-in{opacity:1;transform:none;transition:opacity .6s ease-out,transform .6s ease-out}`;

export function setupReveals(root: ParentNode, waitReady: boolean): () => void {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  const targets = els.filter((el) => {
    const r = el.getBoundingClientRect();
    return waitReady || r.top > window.innerHeight * 0.92;
  });
  if (targets.length === 0) return () => {};
  targets.forEach((el) => el.classList.add("rv-hide"));

  const cancels: Array<() => void> = [];
  const io = new IntersectionObserver(
    (entries) => {
      let n = 0;
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        el.style.transitionDelay = `${Math.min(n++, 4) * 70}ms`;
        cancels.push(whenReady(() => requestAnimationFrame(() => el.classList.add("rv-in"))));
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  targets.forEach((el) => io.observe(el));

  return () => {
    io.disconnect();
    cancels.forEach((c) => c());
    targets.forEach((el) => {
      el.classList.remove("rv-hide", "rv-in");
      el.style.transitionDelay = "";
    });
  };
}
