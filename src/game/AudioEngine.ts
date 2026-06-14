export type AudioTelemetry = {
  throttle: number;
  ias: number;
  altitude: number;
  gearDown: boolean;
  flaps: number;
  stall: boolean;
  overspeed: boolean;
  onGround: boolean;
};

export class AudioEngine {
  private context?: AudioContext;
  private master?: GainNode;
  private engineOsc?: OscillatorNode;
  private engineGain?: GainNode;
  private windOsc?: OscillatorNode;
  private windGain?: GainNode;
  private warningOsc?: OscillatorNode;
  private warningGain?: GainNode;
  private gearState = true;
  private flapState = 0;

  resume() {
    const AudioContextCtor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!this.context) {
      this.context = new AudioContextCtor();
      this.master = this.context.createGain();
      this.master.gain.value = 0.65;
      this.master.connect(this.context.destination);
      this.createLoops();
    }
    if (this.context.state === 'suspended') void this.context.resume();
  }

  update(t: AudioTelemetry) {
    if (!this.context || !this.engineOsc || !this.engineGain || !this.windOsc || !this.windGain || !this.warningGain) return;
    const now = this.context.currentTime;
    const throttle = Math.max(0, Math.min(1, t.throttle));
    this.engineOsc.frequency.setTargetAtTime(45 + throttle * 118 + Math.min(t.ias, 520) * 0.04, now, 0.08);
    this.engineGain.gain.setTargetAtTime(0.035 + throttle * 0.28, now, 0.08);
    this.windOsc.frequency.setTargetAtTime(180 + Math.min(t.ias, 520) * 1.8, now, 0.12);
    this.windGain.gain.setTargetAtTime(Math.min(0.24, Math.max(0, (t.ias - 40) / 900)), now, 0.15);
    this.warningGain.gain.setTargetAtTime(t.stall || t.overspeed ? 0.18 : 0.0001, now, 0.03);
    if (t.gearDown !== this.gearState) {
      this.gearState = t.gearDown;
      this.playTransient(t.gearDown ? 110 : 180, 0.13, 0.35);
    }
    if (t.flaps !== this.flapState) {
      this.flapState = t.flaps;
      this.playTransient(95 + t.flaps * 3, 0.08, 0.22);
    }
  }

  dispose() {
    void this.context?.close();
    this.context = undefined;
  }

  private createLoops() {
    if (!this.context || !this.master) return;
    this.engineOsc = this.context.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineGain = this.context.createGain();
    this.engineGain.gain.value = 0.0001;
    const engineFilter = this.context.createBiquadFilter();
    engineFilter.type = 'lowpass';
    engineFilter.frequency.value = 520;
    this.engineOsc.connect(engineFilter).connect(this.engineGain).connect(this.master);
    this.engineOsc.start();

    this.windOsc = this.context.createOscillator();
    this.windOsc.type = 'triangle';
    this.windGain = this.context.createGain();
    this.windGain.gain.value = 0.0001;
    const windFilter = this.context.createBiquadFilter();
    windFilter.type = 'highpass';
    windFilter.frequency.value = 240;
    this.windOsc.connect(windFilter).connect(this.windGain).connect(this.master);
    this.windOsc.start();

    this.warningOsc = this.context.createOscillator();
    this.warningOsc.type = 'square';
    this.warningOsc.frequency.value = 760;
    this.warningGain = this.context.createGain();
    this.warningGain.gain.value = 0.0001;
    this.warningOsc.connect(this.warningGain).connect(this.master);
    this.warningOsc.start();
  }

  private playTransient(frequency: number, gain: number, duration: number) {
    if (!this.context || !this.master) return;
    const osc = this.context.createOscillator();
    const env = this.context.createGain();
    osc.type = 'triangle';
    osc.frequency.value = frequency;
    env.gain.setValueAtTime(0.0001, this.context.currentTime);
    env.gain.exponentialRampToValueAtTime(gain, this.context.currentTime + 0.03);
    env.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + duration);
    osc.connect(env).connect(this.master);
    osc.start();
    osc.stop(this.context.currentTime + duration + 0.03);
  }
}
