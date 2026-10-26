import type { PageMeta } from "./types";

export const contato = {
  meta: {
    title: "Contato",
    description: "Fale com a Huldra pelo formulário ou pelo Instagram.",
  } as PageMeta,
  eyebrow: "Contato",
  titulo: "Deixe sua marca.",
  intro: "Conte sobre sua marca e seus planos. Respondemos o quanto antes.",
  form: {
    nome: { label: "Nome", placeholder: "Seu nome completo" },
    email: { label: "E-mail", placeholder: "voce@empresa.com.br" },
    telefone: { label: "Telefone", placeholder: "(00) 00000-0000", opcional: "opcional" },
    mensagem: { label: "Mensagem", placeholder: "Conte o que você precisa" },
    consentimento: {
      antes: "Li e concordo com a ",
      linkLabel: "política de privacidade",
      linkHref: "/privacidade",
      depois: " e autorizo o uso dos meus dados para retorno deste contato.",
    },
    enviar: "Enviar mensagem",
    enviando: "Enviando…",
    honeypotLabel: "Não preencha este campo se você é uma pessoa",
    erros: {
      nomeObrigatorio: "Informe seu nome.",
      nomeCurto: "O nome precisa ter ao menos 2 caracteres.",
      emailObrigatorio: "Informe seu e-mail.",
      emailInvalido: "Esse e-mail não parece válido.",
      telefoneInvalido: "Esse telefone não parece válido.",
      mensagemObrigatoria: "Escreva uma mensagem.",
      mensagemCurta: "A mensagem precisa ter ao menos 10 caracteres.",
      consentimento: "Para enviar, aceite a política de privacidade.",
    },
    sucesso: { titulo: "Mensagem enviada.", texto: "Recebemos sua mensagem. Em breve falamos com você." },
    falha: {
      titulo: "Não conseguimos enviar.",
      texto: "Algo falhou no caminho. Tente de novo ou fale pelo Instagram.",
      tentarNovamente: "Tentar novamente",
    },
  },
  canais: {
    titulo: "Prefere outro caminho?",
    whatsapp: { titulo: "WhatsApp", texto: "Atendimento direto pelo WhatsApp.", cta: "Chamar no WhatsApp" },
    instagram: { titulo: "Instagram", texto: "Acompanhe a Huldra em @somoshuldra.", cta: "Abrir Instagram" },
    email: { titulo: "E-mail", cta: "Enviar e-mail" },
  },
} as const;
