// Contrato de conteúdo entre huldra-conteudo (preenche) e huldra-ui (consome).
// huldra-conteudo pode estender estes tipos; não remover campos sem avisar no PLANO.md.

export interface LinkItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface ImageRef {
  src: string; // placeholder permitido (ex.: "/placeholder/case-01.jpg")
  alt: string;
}

export interface Servico {
  slug: string;
  nome: string;
  runa: string; // caractere do Futhark, ex.: "ᚱ"
  runaNome: string; // ex.: "Raidō"
  runaPorque: string; // por que essa runa representa o serviço
  resumo: string; // 1 frase (card na Home)
  descricao: string[]; // parágrafos (página de detalhe)
  entregaveis: string[];
}

export interface Case {
  slug: string;
  cliente: string;
  titulo: string;
  setor: string;
  ano: string;
  resumo: string;
  resultado: { valor: string; legenda: string }; // destaque grande
  capa: ImageRef;
  desafio: string[];
  solucao: string[];
  resultados: string[];
  servicos: string[]; // slugs de Servico
}

export interface EtapaMetodo {
  numero: string; // "01"
  runa: string;
  titulo: string;
  descricao: string;
}

export interface Numero {
  valor: number;
  prefixo?: string;
  sufixo?: string; // ex.: "+", "%"
  legenda: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

// ---- Extensões (huldra-conteudo) ----
export interface Secao {
  eyebrow: string; // rótulo HUD
  titulo: string;
  subtitulo?: string;
  saibaMais?: LinkItem;
}

/** Estado "sem cases ainda" (empresa nova). Exibido quando `cases.length === 0`. */
export interface BlocoVazio {
  eyebrow: string;
  titulo: string;
  texto: string;
  cta: LinkItem;
}

export interface PrivacidadeSecao {
  id: string;
  titulo: string;
  paragrafos: string[];
  itens?: string[];
}
