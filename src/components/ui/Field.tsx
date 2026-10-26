import type { ComponentProps, ReactNode } from "react";
import { cx } from "./cx";

const FIELD =
  "w-full rounded-xl border bg-noite-2 px-4 py-3.5 text-off-white placeholder:text-off-white-50 transition-colors duration-150 hover:border-azul-runa/40 focus-visible:border-azul-brilho";

// Erro sem cor fora da marca: ícone + texto + borda off-white (decisão do orquestrador; ver PLANO).
const ERRO = "flex items-start gap-2 text-[0.8125rem] font-medium text-off-white";
const BORDA_ERRO = "border-off-white border-2";

function ErroIcone() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="mt-px size-4 shrink-0 text-azul-brilho" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.5V8.5M8 11V11.2" />
    </svg>
  );
}

interface FieldProps {
  id: string;
  label: string;
  erro?: string;
  ajuda?: string;
  obrigatorio?: boolean;
  /** Sufixo lido por leitor de tela junto ao asterisco, ex.: "obrigatório" (vem do conteúdo). */
  obrigatorioLabel?: string;
}

function Wrapper({
  id,
  label,
  erro,
  ajuda,
  obrigatorio,
  obrigatorioLabel,
  children,
}: FieldProps & { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.9375rem] font-medium text-off-white">
        {label}
        {obrigatorio && (
          <span aria-hidden className="ml-1 text-azul-principal-claro">
            *
          </span>
        )}
        {obrigatorio && obrigatorioLabel && <span className="sr-only"> ({obrigatorioLabel})</span>}
      </label>
      {children}
      {ajuda && (
        <p id={`${id}-ajuda`} className="text-[0.8125rem] text-off-white-50">
          {ajuda}
        </p>
      )}
      {erro && (
        <p id={`${id}-erro`} role="alert" className={ERRO}>
          <ErroIcone />
          <span>{erro}</span>
        </p>
      )}
    </div>
  );
}

function describedBy(id: string, erro?: string, ajuda?: string) {
  const ids = [ajuda && `${id}-ajuda`, erro && `${id}-erro`].filter(Boolean).join(" ");
  return ids || undefined;
}

type InputProps = FieldProps & Omit<ComponentProps<"input">, "id" | "className">;

export function Input({ id, label, erro, ajuda, obrigatorio, obrigatorioLabel, ...rest }: InputProps) {
  return (
    <Wrapper {...{ id, label, erro, ajuda, obrigatorio, obrigatorioLabel }}>
      <input
        id={id}
        required={obrigatorio}
        aria-invalid={erro ? true : undefined}
        aria-describedby={describedBy(id, erro, ajuda)}
        className={cx(FIELD, erro ? BORDA_ERRO : "border-linha-forte")}
        {...rest}
      />
    </Wrapper>
  );
}

type TextareaProps = FieldProps & Omit<ComponentProps<"textarea">, "id" | "className">;

export function Textarea({ id, label, erro, ajuda, obrigatorio, obrigatorioLabel, rows = 5, ...rest }: TextareaProps) {
  return (
    <Wrapper {...{ id, label, erro, ajuda, obrigatorio, obrigatorioLabel }}>
      <textarea
        id={id}
        rows={rows}
        required={obrigatorio}
        aria-invalid={erro ? true : undefined}
        aria-describedby={describedBy(id, erro, ajuda)}
        className={cx(FIELD, "resize-y", erro ? BORDA_ERRO : "border-linha-forte")}
        {...rest}
      />
    </Wrapper>
  );
}

interface CheckboxProps extends Omit<ComponentProps<"input">, "id" | "className" | "type" | "children"> {
  id: string;
  children: ReactNode;
  erro?: string;
}

export function Checkbox({ id, children, erro, required, ...rest }: CheckboxProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          required={required}
          aria-invalid={erro ? true : undefined}
          aria-describedby={erro ? `${id}-erro` : undefined}
          className="mt-1 size-5 shrink-0 accent-azul-principal"
          {...rest}
        />
        <label htmlFor={id} className="text-[0.9375rem] leading-snug text-off-white-70">
          {children}
        </label>
      </div>
      {erro && (
        <p id={`${id}-erro`} role="alert" className={ERRO}>
          <ErroIcone />
          <span>{erro}</span>
        </p>
      )}
    </div>
  );
}
