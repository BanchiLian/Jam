import type { LinkItem, PageMeta, Servico } from "./types";

// Os 3 serviços são confirmados pelo cliente. Entregáveis definidos com o cliente no início de cada projeto.
export const servicos: Servico[] = [
  {
    slug: "trafego-pago",
    nome: "Tráfego pago",
    runa: "ᚱ",
    runaNome: "Raidō",
    runaPorque: "Raidō é a runa da jornada e do caminho certo. Anúncio bom leva a pessoa certa até a sua porta.",
    resumo: "Anúncios que colocam a sua empresa diante de quem já procura o que você vende.",
    descricao: [
      "Verba sem direção vira ruído. Planejamos e gerenciamos campanhas pagas com objetivo claro, público definido e acompanhamento constante.",
      "Medimos o que importa, cortamos o que não funciona e afiamos o que dá resultado. Você sabe para onde vai cada real investido.",
    ],
    entregaveis: [
      "Planejamento de campanhas",
      "Criação e gestão de anúncios",
      "Configuração de mensuração",
      "Relatórios periódicos",
    ],
  },
  {
    slug: "midias-sociais",
    nome: "Mídias sociais",
    runa: "ᛗ",
    runaNome: "Mannaz",
    runaPorque: "Mannaz é a runa do ser humano e da comunidade. Rede social existe para conectar pessoas.",
    resumo: "Gestão de redes e conteúdo com constância, voz própria e foco em quem importa.",
    descricao: [
      "Presença não é volume, é consistência. Cuidamos das redes da sua empresa com linha editorial, formato e ritmo definidos.",
      "Cada publicação reforça a mesma voz, sem virar ruído, para a sua marca ser reconhecida e lembrada.",
    ],
    entregaveis: [
      "Linha editorial",
      "Calendário de conteúdo",
      "Criação de peças e publicação",
      "Relatórios de desempenho",
    ],
  },
  {
    slug: "sites",
    nome: "Sites",
    runa: "ᛏ",
    runaNome: "Tiwaz",
    runaPorque: "Tiwaz é a seta que aponta o rumo. Um bom site guia a pessoa até onde ela quer chegar.",
    resumo: "Sites rápidos, claros e bonitos que levam o visitante à ação.",
    descricao: [
      "O site é a casa da empresa. Projetamos com clareza de navegação, velocidade e acessibilidade.",
      "Cada página tem um papel: explicar, convencer e levar ao contato. Sem enfeite que não serve a isso.",
    ],
    entregaveis: [
      "Estrutura e design das páginas",
      "Desenvolvimento responsivo",
      "SEO básico e acessibilidade",
      "Publicação e suporte inicial",
    ],
  },
];

export const servicosPage = {
  meta: {
    title: "Serviços",
    description:
      "Tráfego pago, mídias sociais e sites para empresas que querem ser vistas com clareza. Conheça os três serviços da Huldra.",
  } as PageMeta,
  eyebrow: "ᚱ · As Runas",
  titulo: "Serviços",
  subtitulo: "Três frentes, cada uma com sua runa e seu porquê.",
  runaLabel: "Runa",
  entregaveisTitulo: "O que você recebe",
  porqueTitulo: "Por que esta runa",
  saibaMais: "Saiba mais",
  voltar: { label: "Todos os serviços", href: "/servicos" } as LinkItem,
  ctaTitulo: "Vamos conversar sobre este serviço?",
  cta: { label: "Fale com a Huldra", href: "/contato" } as LinkItem,
  proximo: "Próximo serviço",
} as const;
