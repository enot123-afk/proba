import { TUNING } from '../data/chords';

let ctx: AudioContext | null = null;
let masterChain: { hp: BiquadFilterNode; lp: BiquadFilterNode } | null = null;
const pluckCache = new Map<number, AudioBuffer>();

export function getContext(): AudioContext {
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

function toneToFreq(t: number): number {
  // 0 → 1.5 кГц (очень мягко), 100 → 10 кГц (ярко)
  return 1500 * Math.pow(10000 / 1500, t / 100);
}

function getMasterChain(tone: number) {
  const c = getContext();
  if (masterChain) {
    masterChain.lp.frequency.value = toneToFreq(tone);
    return masterChain;
  }

  const hp = c.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 70;
  hp.Q.value = 0.7;

  const lp = c.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = toneToFreq(tone);
  lp.Q.value = 0.6;

  const master = c.createGain();
  master.gain.value = 0.85;

  hp.connect(lp);
  lp.connect(master);
  master.connect(c.destination);

  masterChain = { hp, lp };
  return masterChain;
}

export function setTone(tone: number): void {
  if (masterChain) {
    masterChain.lp.frequency.value = toneToFreq(tone);
  }
}

function createPluck(freq: number, duration = 2.5): AudioBuffer {
  const c = getContext();
  const sr = c.sampleRate;
  const N = Math.max(2, Math.round(sr / freq));
  const size = Math.floor(sr * duration);
  const buf = c.createBuffer(1, size, sr);
  const data = buf.getChannelData(0);

  // Мягкое возбуждение: НЧ-фильтрованный шум
  const noise = new Float32Array(N);
  let prev = 0;
  for (let i = 0; i < N; i++) {
    const n = Math.random() * 2 - 1;
    prev = prev * 0.5 + n * 0.5;
    noise[i] = prev;
  }

  let maxAbs = 0;
  for (let i = 0; i < N; i++) maxAbs = Math.max(maxAbs, Math.abs(noise[i]));
  const scale = maxAbs > 0 ? 0.9 / maxAbs : 1;

  // Позиция медиатора (comb-фильтр)
  const pickPos = Math.max(1, Math.round(N * 0.16));
  const delay = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    delay[i] = (noise[i] - noise[(i - pickPos + N) % N] * 0.55) * scale;
  }

  const decay = 0.9965;
  let idx = 0;
  for (let i = 0; i < size; i++) {
    const cur = delay[idx];
    const nxt = delay[(idx + 1) % N];
    data[i] = cur;
    delay[idx] = (cur * 0.5 + nxt * 0.5) * decay;
    idx = (idx + 1) % N;
  }

  const fadeLen = Math.min(128, Math.floor(sr * 0.004));
  for (let i = 0; i < fadeLen; i++) data[i] *= i / fadeLen;

  return buf;
}

function getPluck(freq: number): AudioBuffer {
  const key = Math.round(freq * 100) / 100;
  let buf = pluckCache.get(key);
  if (!buf) {
    buf = createPluck(freq);
    pluckCache.set(key, buf);
  }
  return buf;
}

export function playStrum(
  frets: (number | null)[],
  direction: 'down' | 'up',
  velocity: number,
  tone: number
): void {
  const c = getContext();
  const chain = getMasterChain(tone);
  const order = direction === 'down' ? [0, 1, 2, 3, 4, 5] : [5, 4, 3, 2];
  const stepTime = direction === 'down' ? 0.022 : 0.016;
  const startAt = c.currentTime + 0.02;
  let idx = 0;

  for (const i of order) {
    const fret = frets[i];
    if (fret === null) continue;

    const freq = TUNING[i] * Math.pow(2, fret / 12);
    const src = c.createBufferSource();
    src.buffer = getPluck(freq);

    const gain = c.createGain();
    const base = i < 2 ? 0.48 : 0.68;
    gain.gain.value = base * velocity;

    src.connect(gain).connect(chain.hp);
    src.start(startAt + idx * stepTime);
    idx++;
  }
}

export function playMute(velocity: number, tone: number): void {
  const c = getContext();
  const chain = getMasterChain(tone);
  const now = c.currentTime + 0.02;

  // 1. Шумовой всплеск — основа «чак»
  const dur = 0.045;
  const bufSize = Math.floor(c.sampleRate * dur);
  const noiseBuf = c.createBuffer(1, bufSize, c.sampleRate);
  const nd = noiseBuf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) {
    const t = i / bufSize;
    const env = Math.min(1, i / 40) * Math.exp(-t * 6);
    nd[i] = (Math.random() * 2 - 1) * env;
  }
  const src = c.createBufferSource();
  src.buffer = noiseBuf;

  const bp = c.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 1500 + Math.random() * 500;
  bp.Q.value = 1.1;

  const g1 = c.createGain();
  g1.gain.value = 0.6 * velocity;

  src.connect(bp).connect(g1).connect(chain.hp);
  src.start(now);

  // 2. Низкий «стук» — тело удара
  const thump = c.createOscillator();
  thump.type = 'triangle';
  thump.frequency.setValueAtTime(150, now);
  thump.frequency.exponentialRampToValueAtTime(55, now + 0.05);
  const g2 = c.createGain();
  g2.gain.setValueAtTime(0.22 * velocity, now);
  g2.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
  thump.connect(g2).connect(chain.hp);
  thump.start(now);
  thump.stop(now + 0.07);

  // 3. Короткий «щелчок» — острит атаку
  const clickBuf = c.createBuffer(1, 128, c.sampleRate);
  const cd = clickBuf.getChannelData(0);
  for (let i = 0; i < 128; i++) cd[i] = (Math.random() * 2 - 1) * Math.exp(-i / 20);
  const click = c.createBufferSource();
  click.buffer = clickBuf;
  const g3 = c.createGain();
  g3.gain.value = 0.25 * velocity;
  const hpClick = c.createBiquadFilter();
  hpClick.type = 'highpass';
  hpClick.frequency.value = 2000;
  click.connect(hpClick).connect(g3).connect(chain.hp);
  click.start(now);
}

/* ============================================================
   СИНТЕЗ БАРАБАНОВ
   ============================================================ */

// Бочка (Kick) — низкий панч
export function playKick(volume: number): void {
  const c = getContext();
  const chain = getMasterChain(35); // Барабаны не зависят от тона гитары, ставим средний
  const now = c.currentTime + 0.02;
  
  const osc = c.createOscillator();
  osc.type = 'sine';
  // Быстрое падение частоты со 150 Гц до 50 Гц создает "удар"
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);

  const gain = c.createGain();
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

  osc.connect(gain).connect(chain.hp);
  osc.start(now);
  osc.stop(now + 0.35);
}

// Малый барабан (Snare) — шум + тон
export function playSnare(volume: number): void {
  const c = getContext();
  const chain = getMasterChain(35);
  const now = c.currentTime + 0.02;

  // 1. Тональная часть
  const osc = c.createOscillator();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(200, now);
  osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
  const oscGain = c.createGain();
  oscGain.gain.setValueAtTime(volume * 0.5, now);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  osc.connect(oscGain).connect(chain.hp);
  osc.start(now);
  osc.stop(now + 0.25);

  // 2. Шумовая часть
  const bufSize = Math.floor(c.sampleRate * 0.2);
  const buf = c.createBuffer(1, bufSize, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = c.createBufferSource();
  noise.buffer = buf;
  const bp = c.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 1500;
  const noiseGain = c.createGain();
  noiseGain.gain.setValueAtTime(volume * 0.8, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

  noise.connect(bp).connect(noiseGain).connect(chain.hp);
  noise.start(now);
}

// Хэт (Hi-hat) — высокочастотный шум
export function playHihat(volume: number): void {
  const c = getContext();
  const chain = getMasterChain(35);
  const now = c.currentTime + 0.02;

  const bufSize = Math.floor(c.sampleRate * 0.05);
  const buf = c.createBuffer(1, bufSize, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = c.createBufferSource();
  noise.buffer = buf;
  const hp = c.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 7000; // Оставляем только писк

  const gain = c.createGain();
  gain.gain.setValueAtTime(volume * 0.4, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

  noise.connect(hp).connect(gain).connect(chain.hp);
  noise.start(now);
}

// Бас-гитара
export function playBass(freq: number, volume: number): void {
  const c = getContext();
  const chain = getMasterChain(35);
  const now = c.currentTime + 0.02;

  const osc = c.createOscillator();
  osc.type = 'triangle'; // Треугольная волна звучит мягче синуса
  osc.frequency.setValueAtTime(freq, now);

  const filter = c.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(400, now); 
  filter.frequency.exponentialRampToValueAtTime(150, now + 0.2);

  const gain = c.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume * 0.6, now + 0.02); // Быстрая атака
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);   // Затухание

  osc.connect(filter).connect(gain).connect(chain.hp);
  osc.start(now);
  osc.stop(now + 0.6);
}