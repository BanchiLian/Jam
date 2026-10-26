"use client";

import { useId, useState } from "react";
import { RuneGlyph } from "@/components/brand/RuneGlyph";
import { runasNome } from "@/content/global";

const tabela: Record<string, string> = runasNome.tabela;

/** Transliteração lúdica: dígrafos têm prioridade; caracteres sem equivalente são ignorados. */
export function transliterar(nome: string): string {
  const s = nome.toLowerCase();
  let out = "";
  for (let i = 0; i < s.length; ) {
    const duo = s.slice(i, i + 2);
    if (tabela[duo]) {
      out += tabela[duo];
      i += 2;
    } else {
      out += tabela[s[i]] ?? "";
      i += 1;
    }
  }
  return out;
}

export function RunasNome() {
  const [nome, setNome] = useState("");
  const id = useId();
  const resultado = transliterar(nome);
  const mostrar = resultado || runasNome.vazio;

  return (
    <div data-easter-egg="runas-nome" className="flex flex-col gap-4">
      <p className="hud-text text-azul-principal-claro">{runasNome.eyebrow}</p>
      <h2 className="t-h3">{runasNome.titulo}</h2>
      <p className="text-[0.9375rem] text-off-white-70">{runasNome.descricao}</p>
      <label htmlFor={id} className="sr-only">
        {runasNome.inputAria}
      </label>
      <input
        id={id}
        type="text"
        value={nome}
        maxLength={32}
        autoComplete="off"
        onChange={(e) => setNome(e.target.value)}
        placeholder={runasNome.placeholder}
        className="w-full rounded-xl border border-linha-forte bg-noite-2 px-4 py-3.5 text-off-white placeholder:text-off-white-50 focus-visible:border-azul-brilho"
      />
      <p
        aria-live="polite"
        aria-label={runasNome.resultadoAria}
        className={`flex min-h-[3.5rem] flex-wrap items-center gap-x-1 text-[2rem] leading-tight ${resultado ? "text-azul-brilho" : "text-azul-runa/25"}`}
      >
        <span className="sr-only">{mostrar}</span>
        {Array.from(mostrar).map((c, i) =>
          c === "᛫" ? (
            <span key={i} aria-hidden className="px-1">
              ·
            </span>
          ) : (
            <RuneGlyph key={i} char={c} className="mx-0.5" />
          ),
        )}
      </p>
      <p className="text-[0.8125rem] text-off-white-50">{runasNome.aviso}</p>
    </div>
  );
}
