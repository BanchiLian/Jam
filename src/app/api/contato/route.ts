import { contatoSchema } from "@/lib/contato/schema";

// Entrega via webhook configurável (Formspree, Make, Zapier, e-mail transacional…).
// Sem CONTACT_WEBHOOK_URL a rota responde 503 e o formulário mostra a falha honestamente.
export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contatoSchema.safeParse(body);

  if (!parsed.success) {
    // Honeypot preenchido: finge sucesso para não dar pista ao bot.
    if (body && typeof body === "object" && "website" in body && body.website) {
      return Response.json({ ok: true });
    }
    return Response.json({ ok: false, erros: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return Response.json({ ok: false, motivo: "indisponivel" }, { status: 503 });

  const { nome, email, telefone, mensagem } = parsed.data;
  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, telefone, mensagem, origem: "site", enviadoEm: new Date().toISOString() }),
    });
    if (!res.ok) return Response.json({ ok: false, motivo: "falha" }, { status: 502 });
  } catch {
    return Response.json({ ok: false, motivo: "falha" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
