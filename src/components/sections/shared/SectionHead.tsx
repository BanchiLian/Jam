import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkMore } from "@/components/ui/LinkMore";
import type { Secao } from "@/content/types";

interface Props {
  secao: Secao;
  /** Mostra o link "saibaMais" da seção. */
  mostrarLink?: boolean;
  id: string;
}

/** Cabeçalho padrão de seção da Home (usa h2). */
export function SectionHead({ secao, mostrarLink = true, id }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <Eyebrow>{secao.eyebrow}</Eyebrow>
      <h2 id={id} data-reveal="words" className="t-h2 max-w-[18ch] text-balance">
        {secao.titulo}
      </h2>
      {secao.subtitulo && <p className="t-lead max-w-xl text-pretty">{secao.subtitulo}</p>}
      {mostrarLink && secao.saibaMais && <LinkMore link={secao.saibaMais} />}
    </div>
  );
}
