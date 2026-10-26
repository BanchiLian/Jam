import { whenReady } from "./ready";

/**
 * Reveals leves [data-reveal]: fade + slide curto (CSS), uma única vez, só com IntersectionObserver
 * + troca de classe (nenhuma leitura de layout). No 1º callback do observer, o que já está visível
 * fica intocado (o hero pinta de imediato); o que está fora da tela recebe rv-hide e é revelado
 * (rv-in) ao entrar. Sem JS o conteúdo aparece normal. Estilos em REVEAL_CSS (injetado pelo MotionRoot).
 */
export const REVEAL_CSS = `[data-reveal].rv-hide{opacity:0;transform:translate3d(0,14px,0)}[data-reveal].rv-hide.rv-in{opacity:1;transform:none;transition:opacity .6s ease-out,transform .6s ease-out}`;

export function setupReveals(root: ParentNode): () => void {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (els.length === 0) return () => {};

  const hidden = new Set<HTMLElement>();
  const seen = new Set<HTMLElement>();
  const cancels: Array<() => void> = [];
  let n = 0;
  const io = new IntersectionObserver(
    (entries) => {
      n = 0;
      entries.forEach((e) => {
        const el = e.target as HTMLElement;
        if (!seen.has(el)) {
          seen.add(el);
          if (e.isIntersecting) {
            io.unobserve(el); // já visível no carregamento: nada a fazer
            return;
          }
          hidden.add(el);
          el.classList.add("rv-hide");
          return;
        }
        if (!e.isIntersecting) return;
        io.unobserve(el);
        el.style.transitionDelay = `${Math.min(n++, 4) * 70}ms`;
        cancels.push(whenReady(() => requestAnimationFrame(() => el.classList.add("rv-in"))));
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));

  return () => {
    io.disconnect();
    cancels.forEach((c) => c());
    hidden.forEach((el) => {
      el.classList.remove("rv-hide", "rv-in");
      el.style.transitionDelay = "";
    });
  };
}
