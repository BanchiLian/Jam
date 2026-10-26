import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { numeros } from "@/content/home";

export function Numeros() {
  return (
    <section data-section="numeros" aria-labelledby="numeros-titulo" className="relative py-[var(--spacing-section)]">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Eyebrow>{numeros.eyebrow}</Eyebrow>
          <h2 id="numeros-titulo" data-reveal="words" className="t-h2 max-w-[18ch] text-balance">
            {numeros.titulo}
          </h2>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-linha bg-linha sm:grid-cols-3">
          {numeros.itens.map((n) => (
            <li key={n.legenda} className="flex flex-col gap-3 bg-noite p-8 sm:p-10">
              <p className="flex items-baseline text-[clamp(3.25rem,2rem+5vw,6.5rem)] font-extrabold leading-none tracking-tight tabular">
                {n.prefixo && <span>{n.prefixo}</span>}
                <span data-counter={n.valor}>{n.valor}</span>
                {n.sufixo && <span className="text-azul-principal-claro">{n.sufixo}</span>}
              </p>
              <p className="text-[0.9375rem] text-off-white-70">{n.legenda}</p>
            </li>
          ))}
        </ul>
        <p className="text-[0.75rem] text-off-white-50">{numeros.nota}</p>
      </Container>
    </section>
  );
}
