import { whenReady } from "./ready";

type Counter = HTMLElement & { _run?: () => void };

/** Contadores [data-counter="<valor>"]: contam de 0 ao valor em ~0,9 s, uma vez; largura fixa (sem CLS). */
export function setupCounters(root: ParentNode): () => void {
  const cleanups: Array<() => void> = [];
  const items: Counter[] = [];

  root.querySelectorAll<Counter>("[data-counter]").forEach((el) => {
    const raw = el.dataset.counter ?? el.textContent ?? "";
    const target = parseFloat(raw.replace(",", "."));
    if (!Number.isFinite(target)) return;
    const finalText = el.textContent ?? raw;
    const decimals = (raw.match(/[.,](\d+)$/)?.[1] ?? "").length;
    const comma = raw.includes(",");
    const format = (n: number) => {
      const t = n.toFixed(decimals);
      return comma ? t.replace(".", ",") : t;
    };

    const prev = { display: el.style.display, minWidth: el.style.minWidth, textAlign: el.style.textAlign, fvn: el.style.fontVariantNumeric };
    el.style.display = "inline-block";
    el.style.minWidth = `${finalText.length}ch`;
    el.style.fontVariantNumeric = "tabular-nums";
    el.style.textAlign = "left";
    el.setAttribute("aria-hidden", "true");
    const sr = document.createElement("span");
    sr.textContent = finalText;
    Object.assign(sr.style, { position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" });
    el.after(sr);
    el.textContent = format(0);
    items.push(el);

    el._run = () => {
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / 900);
        el.textContent = p >= 1 ? finalText : format(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    cleanups.push(() => {
      sr.remove();
      el.removeAttribute("aria-hidden");
      el.textContent = finalText;
      el.style.display = prev.display;
      el.style.minWidth = prev.minWidth;
      el.style.textAlign = prev.textAlign;
      el.style.fontVariantNumeric = prev.fvn;
    });
  });

  if (items.length) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          cleanups.push(whenReady(() => (e.target as Counter)._run?.()));
        }),
      { threshold: 0.3 },
    );
    items.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
  }
  return () => cleanups.splice(0).reverse().forEach((fn) => fn());
}
