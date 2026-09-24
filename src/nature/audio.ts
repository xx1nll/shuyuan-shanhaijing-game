export class NatureAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;

  start(): void {
    if (this.ctx) return;
    const ctx = new AudioContext();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.12;
    this.master.connect(ctx.destination);
    this.noise(ctx, 180, 0.35, 0.7);
    this.noise(ctx, 80, 0.22, 0.45);
  }

  setGain(value: number): void {
    if (this.master) this.master.gain.value = value;
  }

  private noise(ctx: AudioContext, freq: number, q: number, gain: number): void {
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = freq;
    filter.Q.value = q;
    const g = ctx.createGain();
    g.gain.value = gain;
    src.connect(filter).connect(g).connect(this.master!);
    src.start();
  }
}
