import { z } from "zod";
import { contato } from "@/content/contato";

const e = contato.form.erros;

// Compartilhado entre o formulário (client) e a rota /api/contato (server).
export const contatoSchema = z.object({
  nome: z.string().trim().min(1, e.nomeObrigatorio).min(2, e.nomeCurto).max(120),
  email: z.string().trim().min(1, e.emailObrigatorio).pipe(z.email(e.emailInvalido)).pipe(z.string().max(200)),
  telefone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v === "" || v.replace(/\D/g, "").length >= 10, e.telefoneInvalido),
  mensagem: z.string().trim().min(1, e.mensagemObrigatoria).min(10, e.mensagemCurta).max(5000),
  consentimento: z.literal(true, { error: e.consentimento }),
  // Honeypot: precisa chegar vazio.
  website: z.string().max(0).optional(),
});

export type ContatoInput = z.infer<typeof contatoSchema>;
export type ContatoCampo = keyof ContatoInput;
