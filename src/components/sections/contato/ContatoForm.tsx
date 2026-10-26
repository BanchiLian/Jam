"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input, Textarea } from "@/components/ui/Field";
import { contato } from "@/content/contato";
import { site } from "@/content/global";
import { contatoSchema, type ContatoCampo } from "@/lib/contato/schema";

type Erros = Partial<Record<ContatoCampo, string>>;
type Estado = "ocioso" | "enviando" | "sucesso" | "indisponivel" | "falha";

const ORDEM: ContatoCampo[] = ["nome", "email", "telefone", "mensagem", "consentimento"];

function ler(form: HTMLFormElement) {
  const d = new FormData(form);
  const txt = (k: string) => String(d.get(k) ?? "");
  return {
    nome: txt("nome"),
    email: txt("email"),
    telefone: txt("telefone"),
    mensagem: txt("mensagem"),
    consentimento: d.get("consentimento") === "on",
    website: txt("website"),
  };
}

function validar(form: HTMLFormElement): Erros {
  const r = contatoSchema.safeParse(ler(form));
  if (r.success) return {};
  const erros: Erros = {};
  for (const issue of r.error.issues) {
    const k = issue.path[0] as ContatoCampo;
    if (k && !erros[k]) erros[k] = issue.message;
  }
  return erros;
}

function focarPrimeiro(erros: Erros) {
  const k = ORDEM.find((c) => erros[c]);
  if (k) document.getElementById(k)?.focus();
}

export function ContatoForm() {
  const f = contato.form;
  const formRef = useRef<HTMLFormElement>(null);
  const [erros, setErros] = useState<Erros>({});
  const [tentou, setTentou] = useState(false);
  const [estado, setEstado] = useState<Estado>("ocioso");

  function aoSair() {
    if (!tentou || !formRef.current) return;
    setErros(validar(formRef.current));
  }

  async function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "enviando") return;
    const form = e.currentTarget;
    setTentou(true);
    const v = validar(form);
    setErros(v);
    if (Object.keys(v).length) {
      focarPrimeiro(v);
      return;
    }
    setEstado("enviando");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ler(form)),
      });
      if (res.ok) {
        setEstado("sucesso");
        return;
      }
      const corpo = (await res.json().catch(() => null)) as {
        erros?: Partial<Record<ContatoCampo, string[]>>;
        motivo?: string;
      } | null;
      if (res.status === 400 && corpo?.erros) {
        const mapa: Erros = {};
        for (const c of ORDEM) {
          const m = corpo.erros[c]?.[0];
          if (m) mapa[c] = m;
        }
        setErros(mapa);
        setEstado("ocioso");
        focarPrimeiro(mapa);
        return;
      }
      setEstado(res.status === 503 || corpo?.motivo === "indisponivel" ? "indisponivel" : "falha");
    } catch {
      setEstado("falha");
    }
  }

  const ig = (
    <a
      href={site.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-azul-principal-claro underline underline-offset-4 hover:text-off-white"
    >
      {site.instagram}
    </a>
  );

  const aviso = (titulo: string, texto: string, extra?: React.ReactNode) => (
    <div className="flex flex-col gap-3 rounded-2xl border border-linha-forte p-6">
      <p className="text-[1.25rem] font-semibold tracking-tight text-off-white">{titulo}</p>
      <p className="text-[1rem] leading-relaxed text-off-white-70">{texto}</p>
      {extra}
    </div>
  );

  let status: React.ReactNode = null;
  if (estado === "sucesso") status = aviso(f.sucesso.titulo, f.sucesso.texto);
  else if (estado === "indisponivel") status = aviso(f.indisponivel.titulo, f.indisponivel.texto, <p>{ig}</p>);
  else if (estado === "falha")
    status = aviso(
      f.falha.titulo,
      f.falha.texto,
      <div className="flex flex-wrap items-center gap-4">
        <Button type="button" variant="secundario" onClick={() => setEstado("ocioso")}>
          {f.falha.tentarNovamente}
        </Button>
        {ig}
      </div>,
    );

  return (
    <div className="flex flex-col gap-6">
      <div role="status" aria-live="polite" aria-atomic="true">
        {status}
      </div>
      {estado !== "sucesso" && (
        <form
          ref={formRef}
          method="post"
          noValidate
          onSubmit={aoEnviar}
          aria-label={contato.titulo}
          aria-busy={estado === "enviando"}
          className="flex flex-col gap-6"
        >
          <Input id="nome" name="nome" label={f.nome.label} placeholder={f.nome.placeholder} autoComplete="name" obrigatorio erro={erros.nome} onBlur={aoSair} />
          <Input id="email" name="email" type="email" label={f.email.label} placeholder={f.email.placeholder} autoComplete="email" obrigatorio erro={erros.email} onBlur={aoSair} />
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            label={`${f.telefone.label} (${f.telefone.opcional})`}
            placeholder={f.telefone.placeholder}
            autoComplete="tel"
            erro={erros.telefone}
            onBlur={aoSair}
          />
          <Textarea id="mensagem" name="mensagem" label={f.mensagem.label} placeholder={f.mensagem.placeholder} obrigatorio erro={erros.mensagem} onBlur={aoSair} />
          {/* Honeypot anti-spam: invisível e fora da ordem de tabulação */}
          <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="website">{f.honeypotLabel}</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <Checkbox id="consentimento" name="consentimento" required erro={erros.consentimento} onChange={aoSair}>
            {f.consentimento.antes}
            <Link href={f.consentimento.linkHref} className="text-azul-principal-claro underline underline-offset-4 hover:text-off-white">
              {f.consentimento.linkLabel}
            </Link>
            {f.consentimento.depois}
          </Checkbox>
          <Button type="submit" className="self-start" disabled={estado === "enviando"} aria-busy={estado === "enviando"}>
            {estado === "enviando" ? f.enviando : f.enviar}
          </Button>
        </form>
      )}
    </div>
  );
}
