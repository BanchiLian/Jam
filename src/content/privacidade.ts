import type { PageMeta, PrivacidadeSecao } from "./types";

// Minuta genérica. Revisão jurídica obrigatória antes de publicar.
const secoes: PrivacidadeSecao[] = [
  {
    id: "controlador",
    titulo: "1. Quem é o controlador",
    paragrafos: [
      "O controlador dos dados é a Huldra.",
      "Para falar sobre seus dados, use o formulário de contato do site ou o Instagram @somoshuldra.",
    ],
  },
  {
    id: "dados",
    titulo: "2. Quais dados coletamos",
    paragrafos: ["Coletamos apenas o que você informa no formulário de contato:"],
    itens: ["Nome", "E-mail", "Telefone (opcional)", "Conteúdo da mensagem"],
  },
  {
    id: "navegacao",
    titulo: "3. Dados de navegação",
    paragrafos: [
      "Podemos registrar dados técnicos básicos, como endereço IP e tipo de navegador, para segurança e funcionamento do site.",
    ],
  },
  {
    id: "finalidade",
    titulo: "4. Para que usamos",
    paragrafos: [
      "Usamos seus dados para responder ao seu contato, enviar propostas solicitadas e proteger o site contra spam e abuso. Não vendemos dados pessoais.",
    ],
  },
  {
    id: "base-legal",
    titulo: "5. Base legal",
    paragrafos: [
      "O tratamento se apoia no seu consentimento (art. 7º, I, da LGPD), dado ao enviar o formulário, e, quando houver negociação, na execução de procedimentos preliminares de contrato (art. 7º, V).",
    ],
  },
  {
    id: "compartilhamento",
    titulo: "6. Compartilhamento",
    paragrafos: [
      "Podemos compartilhar dados com provedores que viabilizam o site e o envio de e-mails, sob dever de confidencialidade.",
    ],
  },
  {
    id: "retencao",
    titulo: "7. Por quanto tempo guardamos",
    paragrafos: [
      "Mantemos os dados pelo tempo necessário para responder ao contato e cumprir obrigações legais.",
    ],
  },
  {
    id: "direitos",
    titulo: "8. Seus direitos",
    paragrafos: ["Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:"],
    itens: [
      "Confirmação da existência de tratamento",
      "Acesso aos dados",
      "Correção de dados incompletos ou desatualizados",
      "Anonimização, bloqueio ou eliminação",
      "Portabilidade",
      "Informação sobre compartilhamento",
      "Revogação do consentimento",
    ],
  },
  {
    id: "seguranca",
    titulo: "9. Segurança",
    paragrafos: [
      "Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não autorizado, perda ou alteração.",
    ],
  },
  {
    id: "encarregado",
    titulo: "10. Encarregado (DPO)",
    paragrafos: [
      "Ainda não há encarregado (DPO) nomeado. Solicitações e dúvidas sobre seus dados podem ser feitas pelos canais do site: formulário de contato e Instagram.",
      "Você também pode contatar a Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
  {
    id: "alteracoes",
    titulo: "11. Alterações",
    paragrafos: ["Esta política pode ser atualizada. A data da última revisão fica no topo desta página."],
  },
];

export const privacidade = {
  meta: {
    title: "Política de privacidade",
    description: "Como a Huldra trata dados pessoais, conforme a Lei Geral de Proteção de Dados (LGPD).",
  } as PageMeta,
  eyebrow: "Legal",
  titulo: "Política de privacidade",
  atualizacao: "" as string,
  intro:
    "Esta política explica como a Huldra trata dados pessoais coletados neste site, em conformidade com a Lei nº 13.709/2018 (LGPD).",
  secoes,
} as const;
