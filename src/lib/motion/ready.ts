import { useExperience } from "@/store/useExperience";

/** Executa `fn` quando o preloader terminar (ou já). Retorna função de cancelamento. */
export function whenReady(fn: () => void): () => void {
  if (useExperience.getState().preloaderDone) {
    fn();
    return () => {};
  }
  const unsub = useExperience.subscribe((s) => {
    if (s.preloaderDone) {
      unsub();
      fn();
    }
  });
  return unsub;
}
