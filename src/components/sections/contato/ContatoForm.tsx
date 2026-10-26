"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input, Textarea } from "@/components/ui/Field";
import { contato } from "@/content/contato";

/** Formulário estático: validação (zod) e envio virão em fase posterior. */
export function ContatoForm() {
  const f = contato.form;
  return (
    <form
      method="post"
      noValidate
      onSubmit={(e) => e.preventDefault()}
      aria-label={contato.titulo}
      className="flex flex-col gap-6"
    >
      <Input id="nome" name="nome" label={f.nome.label} placeholder={f.nome.placeholder} autoComplete="name" obrigatorio />
      <Input id="email" name="email" type="email" label={f.email.label} placeholder={f.email.placeholder} autoComplete="email" obrigatorio />
      <Input
        id="telefone"
        name="telefone"
        type="tel"
        label={`${f.telefone.label} (${f.telefone.opcional})`}
        placeholder={f.telefone.placeholder}
        autoComplete="tel"
      />
      <Textarea id="mensagem" name="mensagem" label={f.mensagem.label} placeholder={f.mensagem.placeholder} obrigatorio />
      {/* Honeypot anti-spam: invisível e fora da ordem de tabulação */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">{f.honeypotLabel}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Checkbox id="consentimento" name="consentimento" required>
        {f.consentimento.antes}
        <Link href={f.consentimento.linkHref} className="text-azul-principal-claro underline underline-offset-4 hover:text-off-white">
          {f.consentimento.linkLabel}
        </Link>
        {f.consentimento.depois}
      </Checkbox>
      <Button type="submit" className="self-start">
        {f.enviar}
      </Button>
    </form>
  );
}
