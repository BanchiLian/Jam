import { hud } from "@/content/global";

/** Contador do HUD (seção atual). Barato: um IntersectionObserver. */
export function setupHud(): () => void {
  const counterEl = document.querySelector<HTMLElement>("[data-hud-counter]");
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]")).filter(
    (s) => s.dataset.section !== "footer",
  );
  const total = Math.max(1, sections.length);
  if (!counterEl || !sections.length) return () => {};
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) counterEl.textContent = hud.contador(sections.indexOf(e.target as HTMLElement) + 1, total);
      }),
    { rootMargin: "-50% 0px -50% 0px" },
  );
  sections.forEach((s) => io.observe(s));
  return () => io.disconnect();
}

/** Header some ao descer e volta ao subir (listener passivo + rAF). Também esmaece a dica de scroll do HUD. */
export function setupHeader(): () => void {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const hint = document.querySelector<HTMLElement>("[data-hud-scroll]");
  let last = window.scrollY;
  let hidden = false;
  let ticking = false;
  if (hint) hint.style.transition = "opacity .3s";
  const set = (hide: boolean) => {
    if (hide === hidden || !header) return;
    hidden = hide;
    header.style.transition = "transform .4s cubic-bezier(.22,1,.36,1)";
    header.style.transform = hide ? "translateY(-110%)" : "";
  };
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    if (hint) hint.style.opacity = y > 80 ? "0" : "";
    if (y < 140) set(false);
    else if (Math.abs(y - last) > 4) set(y > last);
    last = y;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  const onFocus = () => set(false);
  window.addEventListener("scroll", onScroll, { passive: true });
  header?.addEventListener("focusin", onFocus);
  return () => {
    window.removeEventListener("scroll", onScroll);
    header?.removeEventListener("focusin", onFocus);
    if (header) {
      header.style.transform = "";
      header.style.transition = "";
    }
    if (hint) {
      hint.style.opacity = "";
      hint.style.transition = "";
    }
  };
}
