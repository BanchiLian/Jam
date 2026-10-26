import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Vegvisir } from "@/components/brand/Vegvisir";
import { Container } from "@/components/ui/Container";
import { a11y, footer, site } from "@/content/global";
import { RunasNome } from "./RunasNome";

const LINK = "text-off-white-70 hover:text-off-white";

export function Footer() {
  return (
    <footer data-section="footer" className="relative isolate overflow-hidden border-t border-linha bg-grafite/70">
      <Vegvisir className="pointer-events-none absolute -bottom-[40%] -right-[15%] -z-10 w-[min(90vw,70rem)] text-azul-runa/10" />
      <Container className="grid gap-14 py-20 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <Link href="/" aria-label={a11y.logo} className="w-fit">
            <Logo nome={site.nome} />
          </Link>
          <p className="t-h3 max-w-xs">{footer.chamada}</p>
          <p className="text-[0.9375rem] text-off-white-50">{site.assinatura}</p>
        </div>
        {footer.colunas.map((col) => (
          <nav key={col.titulo} aria-label={col.titulo}>
            <h2 className="hud-text mb-5 text-azul-principal-claro">{col.titulo}</h2>
            <ul className="flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={LINK}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="hud-text mb-5 text-azul-principal-claro">{footer.redesTitulo}</h2>
            <ul className="flex flex-col gap-3">
              {footer.redes
                .filter((l) => l.href && (!/wa\.me/.test(l.href) || (site.whatsappDisponivel && site.whatsappUrl)))
                .map((l) => (
                <li key={l.href}>
                  <a href={l.href} aria-label={l.ariaLabel} target="_blank" rel="noopener noreferrer" className={LINK}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <RunasNome />
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-linha pt-8 pb-24 text-[0.8125rem] text-off-white-70 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {footer.copyright.replace("{ano}", String(new Date().getFullYear()))}{(footer.avisoLegal as string) && <> <span>{footer.avisoLegal}</span></>}
        </p>
        <a href="#conteudo" className="hover:text-off-white">
          {footer.voltarAoTopo} ↑
        </a>
      </Container>
    </footer>
  );
}
