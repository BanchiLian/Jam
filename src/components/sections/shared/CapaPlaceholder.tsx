import Image from "next/image";
import { Symbol } from "@/components/brand/Symbol";
import { Vegvisir } from "@/components/brand/Vegvisir";
import type { ImageRef } from "@/content/types";

interface Props {
  capa: ImageRef;
  className?: string;
}

/** Capa de case/retrato. `src === ""` => placeholder de marca (gradiente + símbolo), sem imagem externa. */
export function CapaPlaceholder({ capa, className = "" }: Props) {
  if (capa.src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={capa.src} alt={capa.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={capa.alt}
      className={`relative isolate grid place-items-center overflow-hidden bg-gradient-to-br from-azul-profundo via-noite-3 to-noite ${className}`}
    >
      <Vegvisir className="absolute -right-[10%] -top-[30%] -z-10 w-[80%] text-azul-runa/10" />
      <Symbol tone="runa" outline className="w-1/3 min-w-16 max-w-48 opacity-70" />
    </div>
  );
}
