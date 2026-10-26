import type { BlocoVazio, Case, LinkItem, PageMeta } from "./types";

// Empresa nova: ainda não há cases publicáveis. Mantido vazio (tipo e template preservados).
// Quando houver cases reais, basta adicionar itens aqui; as telas passam a listá-los.
export const cases: Case[] = [];

const vazio: BlocoVazio = {
  eyebrow: "Cases",
  titulo: "Os primeiros projetos estão na forja",
  texto:
    "A Huldra é nova e ainda não tem cases para mostrar. Se você quer ser um dos primeiros a ter a marca forjada aqui, vamos conversar.",
  cta: { label: "Seja um dos primeiros", href: "/contato" },
};

export const casesPage = {
  meta: {
    title: "Cases",
    description:
      "Os primeiros projetos da Huldra estão sendo forjados. Fale com a gente e seja um dos primeiros a ter tráfego, mídias e site com clareza.",
  } as PageMeta,
  eyebrow: "Cases",
  titulo: "Os primeiros projetos estão na forja.",
  subtitulo: "Desafio, caminho e resultado: quando houver, estará aqui.",
  vazio,
  saibaMais: "Ver case",
  setor: "Setor",
  ano: "Ano",
  desafioTitulo: "O desafio",
  solucaoTitulo: "A solução",
  resultadosTitulo: "Os resultados",
  servicosTitulo: "Serviços envolvidos",
  voltar: { label: "Todos os cases", href: "/cases" } as LinkItem,
  proximo: "Próximo case",
  ctaTitulo: "Sua empresa pode ser o primeiro case.",
  cta: { label: "Fale com a Huldra", href: "/contato" } as LinkItem,
} as const;
