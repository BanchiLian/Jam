import type { BlocoVazio, EtapaMetodo, LinkItem, Numero, PageMeta, Secao } from "./types";

export const meta: PageMeta = {
  title: "Huldra · Clareza que deixa marca",
  description:
    "Tráfego pago, mídias sociais e sites para empresas. A Huldra forja a presença digital da sua marca com clareza, precisão e uma pitada de mito.",
};

export const hero = {
  eyebrow: "Huldra · Tráfego pago, mídias e sites",
  titulo: "Clareza que deixa marca",
  subtitulo: "Anúncios, redes sociais e sites para a sua empresa ser vista, entendida e lembrada.",
  cta: { label: "Conheça a Huldra", href: "/sobre" } as LinkItem,
  ctaSecundario: { label: "Fale conosco", href: "/contato" } as LinkItem,
} as const;

export const manifesto = {
  eyebrow: "Manifesto",
  titulo: "Menos ruído. Mais marca.",
  texto:
    "A Huldra cuida dos seus anúncios, das suas redes sociais e do seu site, para a sua empresa ser vista, entendida e lembrada.",
} as const;

export const simbolo = {
  eyebrow: "O símbolo",
  titulo: "Três formas. Uma marca.",
  subtitulo: "O símbolo da Huldra nasce de uma runa, uma faísca e uma letra.",
  passos: [
    {
      glifo: "ᚼ",
      titulo: "A runa Hagall",
      texto: "Uma haste e um X. Na tradição rúnica, Hagall é a força que quebra o gelo e transforma. É a estrutura da marca.",
    },
    {
      glifo: "✦",
      titulo: "O brilho de quatro pontas",
      texto: "Uma estrela côncava, de pontas finas. É a luz que guia: a clareza que prometemos.",
    },
    {
      glifo: "H",
      titulo: "A letra H",
      texto: "Firme e arredondada. É a inicial de Huldra, o nome que assina cada entrega.",
    },
  ],
  fusao:
    "Quando as três se fundem, surgem as duas estrelas: dois brilhos lado a lado, levemente sobrepostos. Um fio condutor entre o mito e a marca.",
  saibaMais: { label: "Saiba mais", href: "/sobre" } as LinkItem,
} as const;

export const servicosSecao: Secao = {
  eyebrow: "ᚱ · As Runas",
  titulo: "Cada serviço, uma runa.",
  subtitulo: "Três caminhos para a sua empresa ser encontrada, lembrada e escolhida.",
  saibaMais: { label: "Ver todos os serviços", href: "/servicos" },
};

const etapas: EtapaMetodo[] = [
  { numero: "01", runa: "ᚲ", titulo: "Escuta", descricao: "Ouvimos a marca, o mercado e as pessoas. Sem pressa, sem achismo." },
  { numero: "02", runa: "ᚨ", titulo: "Diagnóstico", descricao: "Mapeamos o que existe, o que falta e o que sobra." },
  { numero: "03", runa: "ᚱ", titulo: "Estratégia", descricao: "Definimos posição, público e direção. O norte da marca." },
  { numero: "04", runa: "ᚠ", titulo: "Forja", descricao: "Damos forma: nome, voz, identidade, sistema visual." },
  { numero: "05", runa: "ᛏ", titulo: "Lapidação", descricao: "Testamos, ajustamos e afiamos até cada detalhe fazer sentido." },
  { numero: "06", runa: "ᛒ", titulo: "Lançamento", descricao: "Colocamos a marca no mundo, com consistência em cada ponto de contato." },
  { numero: "07", runa: "ᛗ", titulo: "Presença", descricao: "Acompanhamos, medimos e evoluímos. Marca é caminho, não chegada." },
  { numero: "08", runa: "ᛟ", titulo: "Legado", descricao: "Entregamos guias e ferramentas para a marca seguir firme sem a gente." },
];

export const metodo = {
  eyebrow: "ᚼ · O Vegvísir",
  titulo: "Um método para nunca se perder.",
  subtitulo: "Oito braços do compasso. Oito etapas do nosso caminho.",
  nota: "Etapas de referência. O caminho é ajustado a cada projeto.",
  etapas,
} as const;

// Sem cases ainda (empresa nova): o bloco `vazio` é exibido no lugar da lista.
export const casesSecao: Secao & { vazio: BlocoVazio } = {
  eyebrow: "Cases",
  titulo: "Os primeiros projetos estão na forja",
  subtitulo: "Ainda não há cases para mostrar. Há espaço para o seu.",
  saibaMais: { label: "Ver todos os cases", href: "/cases" },
  vazio: {
    eyebrow: "Cases",
    titulo: "Os primeiros projetos estão na forja",
    texto:
      "A Huldra é nova e ainda não tem cases para mostrar. Se você quer ser um dos primeiros a ter a marca forjada aqui, vamos conversar.",
    cta: { label: "Seja um dos primeiros", href: "/contato" },
  },
};

// Apenas fatos verdadeiros por definição ou compromissos de trabalho. Nada de histórico inventado.
const itens: Numero[] = [
  { valor: 3, legenda: "frentes integradas: tráfego, mídias e sites" },
  { valor: 1, legenda: "ponto de contato para tudo" },
  { valor: 100, sufixo: "%", legenda: "sob medida para a sua marca" },
];

export const numeros = {
  eyebrow: "Em números",
  titulo: "Como trabalhamos, em números.",
  nota: "Formas de trabalhar, não resultados passados.",
  itens,
} as const;

export const cta = {
  eyebrow: "Próximo passo",
  titulo: "Deixe sua marca",
  subtitulo: "Conte onde sua empresa está. Mostramos para onde ela pode ir.",
  botaoContato: { label: "Falar com a Huldra", href: "/contato" } as LinkItem,
  botaoWhatsapp: { label: "Chamar no WhatsApp", href: "" } as LinkItem, // oculto enquanto site.whatsappDisponivel === false
} as const;
