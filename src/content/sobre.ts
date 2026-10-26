import type { ImageRef, LinkItem, PageMeta } from "./types";

export const sobre = {
  meta: {
    title: "Sobre",
    description:
      "Conheça a Huldra: tráfego pago, mídias sociais e sites para empresas. Origem do nome, propósito e liderança de Matheus Biancalana.",
  } as PageMeta,
  eyebrow: "Sobre",
  titulo: "Clareza é uma escolha.",
  subtitulo: "A Huldra cuida do tráfego pago, das mídias e do site de empresas que querem ser vistas com clareza.",
  historia: {
    titulo: "Nossa história",
    paragrafos: [
      "A Huldra é uma empresa nova, nascida da vontade de fazer a presença digital das empresas se entender à primeira vista.",
      "Reunimos em um só lugar o que faz uma empresa ser encontrada e lembrada: anúncios, redes sociais e site.",
    ],
  },
  proposito: {
    titulo: "Propósito",
    texto: "Dar clareza à presença digital das empresas para que elas deixem marca nas pessoas.",
  },
  origemNome: {
    titulo: "De onde vem o nome",
    paragrafos: [
      "Huldra é uma figura do folclore escandinavo. Segundo as histórias, é uma criatura das florestas, que vive entre as árvores e aparece a quem se aventura por elas.",
      "Escolhemos o nome pelo que ele evoca: mistério, natureza e o instante em que algo oculto se revela. É o que fazemos com marcas.",
    ],
  },
  valoresTitulo: "Valores",
  valores: [
    { runa: "ᚲ", titulo: "Clareza", texto: "Dizer o essencial, do jeito mais simples." },
    { runa: "ᚠ", titulo: "Ofício", texto: "Cuidado com cada detalhe, como quem forja." },
    { runa: "ᚨ", titulo: "Verdade", texto: "Marcas honestas duram mais." },
    { runa: "ᛏ", titulo: "Direção", texto: "Todo projeto começa sabendo para onde vai." },
  ],
  ceo: {
    titulo: "Quem lidera",
    nome: "Matheus Biancalana",
    cargo: "CEO",
    bio: "Matheus lidera a Huldra e acompanha de perto cada projeto, com foco em clareza e cuidado em cada entrega.",
    foto: { src: "", alt: "Retrato de Matheus Biancalana, CEO da Huldra" } as ImageRef,
  },
  cta: {
    titulo: "Vamos forjar algo juntos?",
    botao: { label: "Fale com a Huldra", href: "/contato" } as LinkItem,
  },
} as const;
