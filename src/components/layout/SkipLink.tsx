import { header } from "@/content/global";

export function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-off-white px-5 py-3 text-sm font-semibold text-grafite focus:translate-y-0"
    >
      {header.pularParaConteudo}
    </a>
  );
}
