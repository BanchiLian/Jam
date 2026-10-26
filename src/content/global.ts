import type { LinkItem } from "./types";

export const site = {
  nome: "Huldra",
  assinatura: "Clareza que deixa marca",
  instagram: "@somoshuldra",
  instagramUrl: "https://www.instagram.com/somoshuldra",
  // Contatos ainda inexistentes: vazios e ocultos na UI até existirem (trocar flag para true ao preencher).
  whatsapp: "",
  whatsappUrl: "",
  whatsappDisponivel: false,
  email: "",
  emailDisponivel: false,
  url: "",
  ceo: "Matheus Biancalana",
} as const;

export const menu: LinkItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Cases", href: "/cases" },
  { label: "Contato", href: "/contato" },
];

/** Runa exibida ao lado de cada item do menu fullscreen (chave = href). */
export const menuRunas: Record<string, string> = {
  "/": "ᚼ",
  "/sobre": "ᚨ",
  "/servicos": "ᚱ",
  "/cases": "ᛏ",
  "/contato": "ᚲ",
};

export const header = {
  abrirMenu: "Abrir menu",
  fecharMenu: "Fechar menu",
  menu: "Menu",
  pularParaConteudo: "Pular para o conteúdo",
  cta: { label: "Fale com a Huldra", href: "/contato" } as LinkItem,
} as const;

export const footer = {
  chamada: "Deixe sua marca.",
  colunas: [
    {
      titulo: "Explorar",
      links: [
        { label: "Sobre", href: "/sobre" },
        { label: "Serviços", href: "/servicos" },
        { label: "Cases", href: "/cases" },
        { label: "Contato", href: "/contato" },
      ] as LinkItem[],
    },
    {
      titulo: "Legal",
      links: [{ label: "Política de privacidade", href: "/privacidade" }] as LinkItem[],
    },
  ],
  redesTitulo: "Redes",
  redes: [
    { label: "Instagram", href: site.instagramUrl, ariaLabel: "Instagram da Huldra, abre em nova aba" },
  ] as LinkItem[],
  // Token `{ano}` é substituído pelo componente pelo ano corrente (new Date().getFullYear()).
  copyright: "© {ano} Huldra. Todos os direitos reservados.",
  avisoLegal: "" as string,
  voltarAoTopo: "Voltar ao topo",
} as const;

export const hud = {
  coordenada: "N 64°08′",
  scroll: "Role para explorar",
  somLigado: "Som: ligado",
  somDesligado: "Som: desligado",
  somAriaLigar: "Ativar som ambiente",
  somAriaDesligar: "Desativar som ambiente",
  contador: (atual: number, total = 7): string =>
    `ᚼ ${String(atual).padStart(2, "0")}/${String(total).padStart(2, "0")}`,
  contadorInicial: "ᚼ 01/07",
  preloader: "Entalhando",
} as const;

export const notFound = {
  eyebrow: "Erro 404",
  titulo: "Caminho não mapeado",
  texto: "As runas desta página se apagaram. Passe o cursor sobre elas ou volte ao caminho conhecido.",
  cta: { label: "Voltar ao início", href: "/" } as LinkItem,
  meta: { title: "Caminho não mapeado", description: "A página que você procura não existe ou mudou de lugar." },
} as const;

// Lúdico: aproximação do Futhark Jovem (16 runas). Dígrafos (th, ng...) têm prioridade sobre letras.
const tabela: Record<string, string> = {
  th: "ᚦ", ng: "ᚾᚴ", ch: "ᚴ", sh: "ᛋ", lh: "ᛚ", nh: "ᚾ",
  a: "ᛅ", b: "ᛒ", c: "ᚴ", d: "ᛏ", e: "ᛁ", f: "ᚠ", g: "ᚴ", h: "ᚼ", i: "ᛁ",
  j: "ᛁ", k: "ᚴ", l: "ᛚ", m: "ᛘ", n: "ᚾ", o: "ᚬ", p: "ᛒ", q: "ᚴ", r: "ᚱ",
  s: "ᛋ", t: "ᛏ", u: "ᚢ", v: "ᚢ", w: "ᚢ", x: "ᚴᛋ", y: "ᛦ", z: "ᛋ",
  // acentos PT-BR normalizados
  á: "ᛅ", à: "ᛅ", â: "ᛅ", ã: "ᛅ", ä: "ᛅ",
  é: "ᛁ", ê: "ᛁ", è: "ᛁ", í: "ᛁ", î: "ᛁ",
  ó: "ᚬ", ô: "ᚬ", õ: "ᚬ", ò: "ᚬ",
  ú: "ᚢ", û: "ᚢ", ü: "ᚢ", ç: "ᛋ", ñ: "ᚾ",
  " ": "᛫", "-": "᛫",
};

export const runasNome = {
  eyebrow: "Easter egg",
  titulo: "Seu nome em runas",
  descricao: "Digite seu nome. Ele vira Futhark Jovem em tempo real.",
  placeholder: "Seu nome",
  inputAria: "Digite seu nome para ver em runas",
  resultadoAria: "Seu nome transliterado em runas",
  vazio: "ᚼᚢᛚᛏᚱᛅ",
  aviso:
    "Transliteração lúdica, feita só por diversão. Não é uma tradução acadêmica nem histórica do Futhark.",
  tabela,
} as const;

export const a11y = {
  logo: "Huldra, ir para a página inicial",
  simbolo: "Símbolo da Huldra: duas estrelas de seis braços levemente sobrepostas",
  vegvisir: "Vegvísir, compasso rúnico de oito braços, desenhado em linhas de luz",
  runa: "Runa decorativa",
  instagram: "Instagram da Huldra, abre em nova aba",
  whatsapp: "WhatsApp da Huldra, abre em nova aba",
  email: "Enviar e-mail para a Huldra",
  linkExterno: "abre em nova aba",
  cursor: "Cursor decorativo",
  preloader: "Carregando a experiência",
  progresso: "Progresso de rolagem da página",
} as const;
