"use client";

import { create } from "zustand";

// Contrato definido em docs/PLANO.md. Dono: huldra-motion.

export interface ExperienceState {
  preloaderDone: boolean;
  soundOn: boolean;
  reducedMotion: boolean;
  setPreloaderDone: (done: boolean) => void;
  toggleSound: () => void;
  setSoundOn: (on: boolean) => void;
  setReducedMotion: (reduced: boolean) => void;
}

export const useExperience = create<ExperienceState>()((set) => ({
  preloaderDone: false,
  soundOn: false,
  reducedMotion: false,
  setPreloaderDone: (preloaderDone) => set({ preloaderDone }),
  toggleSound: () => set((s) => ({ soundOn: !s.soundOn })),
  setSoundOn: (soundOn) => set({ soundOn }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
}));
