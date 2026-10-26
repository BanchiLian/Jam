/**
 * Som ambiente procedural (Web Audio) — nenhum arquivo de áudio.
 * Vento: ruído marrom filtrado com LFOs. Ressonância grave: osciladores baixos em batimento.
 * Só cria o AudioContext após clique (política de autoplay); fade in/out.
 */
import { useExperience } from "@/store/useExperience";

type AC = typeof AudioContext;

class Ambient {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private enabled = false;
  private suspendTimer: ReturnType<typeof setTimeout> | null = null;
  private visibilityBound = false;

  private build() {
    const Ctor: AC | undefined =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: AC }).webkitAudioContext;
    if (!Ctor) return false;
    const ctx = new Ctor();
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Vento
    const len = ctx.sampleRate * 4;
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const data = buf.getChannelData(c);
      let last = 0;
      for (let i = 0; i < len; i++) {
        last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
        data[i] = last * 3.5;
      }
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    noise.loop = true;
    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.frequency.value = 520;
    band.Q.value = 0.7;
    const low = ctx.createBiquadFilter();
    low.type = "lowpass";
    low.frequency.value = 1800;
    const wind = ctx.createGain();
    wind.gain.value = 0.5;
    noise.connect(band).connect(low).connect(wind).connect(master);

    const lfo1 = ctx.createOscillator();
    lfo1.frequency.value = 0.06;
    const lfo1Depth = ctx.createGain();
    lfo1Depth.gain.value = 320;
    lfo1.connect(lfo1Depth).connect(band.frequency);
    const lfo2 = ctx.createOscillator();
    lfo2.frequency.value = 0.11;
    const lfo2Depth = ctx.createGain();
    lfo2Depth.gain.value = 0.22;
    lfo2.connect(lfo2Depth).connect(wind.gain);

    // Ressonância grave
    const res = ctx.createGain();
    res.gain.value = 0.2;
    const resLow = ctx.createBiquadFilter();
    resLow.type = "lowpass";
    resLow.frequency.value = 220;
    res.connect(resLow).connect(master);
    const oscs: OscillatorNode[] = [];
    ([
      ["sine", 55, 0.5],
      ["sine", 55.7, 0.45],
      ["triangle", 82.4, 0.18],
    ] as const).forEach(([type, freq, gain]) => {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = gain;
      o.connect(g).connect(res);
      oscs.push(o);
    });
    const lfo3 = ctx.createOscillator();
    lfo3.frequency.value = 0.04;
    const lfo3Depth = ctx.createGain();
    lfo3Depth.gain.value = 0.09;
    lfo3.connect(lfo3Depth).connect(res.gain);

    [noise, lfo1, lfo2, lfo3, ...oscs].forEach((n) => n.start());
    this.ctx = ctx;
    this.master = master;

    if (!this.visibilityBound) {
      this.visibilityBound = true;
      document.addEventListener("visibilitychange", () => {
        if (!this.ctx) return;
        if (document.hidden) void this.ctx.suspend();
        else if (this.enabled) void this.ctx.resume();
      });
      // bf-cache: libera o AudioContext ao sair da página; religar exige novo clique.
      window.addEventListener("pagehide", () => this.dispose());
    }
    return true;
  }

  private dispose() {
    if (this.suspendTimer) clearTimeout(this.suspendTimer);
    const ctx = this.ctx;
    this.ctx = null;
    this.master = null;
    this.enabled = false;
    if (ctx) void ctx.close().catch(() => {});
    useExperience.getState().setSoundOn(false);
  }

  /** Deve ser chamado dentro de um gesto do usuário ao ligar. */
  setEnabled(on: boolean) {
    this.enabled = on;
    if (on) {
      if (!this.ctx && !this.build()) return;
      const ctx = this.ctx!;
      if (this.suspendTimer) clearTimeout(this.suspendTimer);
      void ctx.resume();
      this.master!.gain.cancelScheduledValues(ctx.currentTime);
      this.master!.gain.setTargetAtTime(0.45, ctx.currentTime, 0.8);
    } else if (this.ctx && this.master) {
      const ctx = this.ctx;
      this.master.gain.cancelScheduledValues(ctx.currentTime);
      this.master.gain.setTargetAtTime(0, ctx.currentTime, 0.35);
      this.suspendTimer = setTimeout(() => {
        if (!this.enabled) void ctx.suspend();
      }, 1800);
    }
  }
}

export const ambient = new Ambient();
