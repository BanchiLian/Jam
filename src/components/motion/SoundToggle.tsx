"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { hud } from "@/content/global";
import { ambient } from "@/lib/motion/audio";
import { useExperience } from "@/store/useExperience";

const bar = (on: boolean, i: number) =>
  ({
    transform: "scaleY(0.3)",
    transformBox: "fill-box",
    transformOrigin: "50% 100%",
    animation: on ? `huldra-eq ${0.9 + i * 0.25}s ease-in-out ${i * 0.15}s infinite alternate` : undefined,
  }) as const;
const noop = () => () => {};
const findSlot = () => document.querySelector<HTMLElement>('[data-hud-slot="sound"]');

/** Botão de som ambiente (desligado por padrão). Portal no slot do HUD. Barras animadas em CSS. */
export function SoundToggle() {
  const slot = useSyncExternalStore(noop, findSlot, () => null);
  const soundOn = useExperience((s) => s.soundOn);

  if (!slot) return null;

  const onClick = () => {
    const next = !useExperience.getState().soundOn;
    ambient.setEnabled(next); // dentro do gesto do clique (autoplay policy)
    useExperience.getState().setSoundOn(next);
  };

  return createPortal(
    <>
      <style>{"@keyframes huldra-eq{to{transform:scaleY(1)}}@media (prefers-reduced-motion:reduce){[data-sound-bars] rect{animation:none!important}}"}</style>
      <button
        type="button"
        onClick={onClick}
        aria-pressed={soundOn}
        aria-label={soundOn ? hud.somAriaDesligar : hud.somAriaLigar}
        className="hud-text inline-flex min-h-11 items-center gap-3 rounded-full px-2 text-off-white-70 transition-colors hover:text-off-white"
      >
        <svg width="16" height="14" viewBox="0 0 16 14" aria-hidden className="text-azul-brilho" fill="currentColor">
          <g data-sound-bars>
            <rect x="1" y="2" width="2" height="12" rx="1" style={bar(soundOn, 0)} />
            <rect x="7" y="2" width="2" height="12" rx="1" style={bar(soundOn, 1)} />
            <rect x="13" y="2" width="2" height="12" rx="1" style={bar(soundOn, 2)} />
          </g>
        </svg>
        <span aria-hidden>{soundOn ? hud.somLigado : hud.somDesligado}</span>
      </button>
    </>,
    slot,
  );
}
