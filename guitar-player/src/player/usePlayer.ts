import { useCallback, useEffect, useRef, useState } from 'react';
import { CHORDS, getBassFreq } from '../data/chords';
import type { useAudio } from '../audio/useAudio';
import type { StepInfo } from './buildSteps';
type AudioApi = ReturnType<typeof useAudio>;

export function usePlayer(
  steps: StepInfo[], 
  audio: AudioApi,
  guitarEnabled: boolean,
  drumsEnabled: boolean,
  bassEnabled: boolean
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGlobalIdx, setCurrentGlobalIdx] = useState(0);
  const [bpm, setBpmState] = useState(90);
  const [loop, setLoopState] = useState(true);

  const stepsRef = useRef(steps);
  const bpmRef = useRef(bpm);
  const loopRef = useRef(loop);
  const audioRef = useRef(audio);
  const guitarEnabledRef = useRef(guitarEnabled);
  const drumsEnabledRef = useRef(drumsEnabled);
  const isPlayingRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const globalIdxRef = useRef(0);
   const bassEnabledRef = useRef(bassEnabled);


  useEffect(() => { bassEnabledRef.current = bassEnabled; }, [bassEnabled]);
  useEffect(() => { stepsRef.current = steps; }, [steps]);
  useEffect(() => { bpmRef.current = bpm; }, [bpm]);
  useEffect(() => { loopRef.current = loop; }, [loop]);
  useEffect(() => { audioRef.current = audio; }, [audio]);

  useEffect(() => { guitarEnabledRef.current = guitarEnabled; }, [guitarEnabled]);
  useEffect(() => { drumsEnabledRef.current = drumsEnabled; }, [drumsEnabled]);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const stop = useCallback(() => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    clearTimer();
  }, []);

  const tick = useCallback(() => {
    if (!isPlayingRef.current) return;

    const allSteps = stepsRef.current;
    if (allSteps.length === 0) { stop(); return; }
    if (globalIdxRef.current >= allSteps.length) globalIdxRef.current = 0;

    const idx = globalIdxRef.current;
    const step = allSteps[idx];
    const frets = CHORDS[step.chord];
    
    if (guitarEnabledRef.current) {
      if (step.action === 'D' && frets) audioRef.current.playStrum(frets, 'down', 0.9);
      else if (step.action === 'U' && frets) audioRef.current.playStrum(frets, 'up', 0.5);
      else if (step.action === 'M') audioRef.current.playMute(0.75);
    }

    if (drumsEnabledRef.current) {
      if (step.drumAction === 'K') audioRef.current.playKick(1.0);
      else if (step.drumAction === 'S') audioRef.current.playSnare(1.0);
      else if (step.drumAction === 'H') audioRef.current.playHihat(1.0);
    }

    if (bassEnabledRef.current && step.bassAction === 'P') {
      const bassFreq = getBassFreq(step.chord);
      audioRef.current.playBass(bassFreq, 1.0);
    }

    setCurrentGlobalIdx(idx);

    globalIdxRef.current = idx + 1;
    if (globalIdxRef.current >= allSteps.length) {
      if (loopRef.current) globalIdxRef.current = 0;
      else { stop(); return; }
    }

    const stepMs = (60 / bpmRef.current / 2) * 1000;
    timerRef.current = window.setTimeout(tick, stepMs);
  }, [stop]);

  const start = useCallback(() => {
    if (stepsRef.current.length === 0) return;
    globalIdxRef.current = 0;
    isPlayingRef.current = true;
    setIsPlaying(true);
    setCurrentGlobalIdx(0);
    tick();
  }, [tick]);

  const toggle = useCallback(() => {
    if (isPlayingRef.current) stop();
    else start();
  }, [start, stop]);

  const setBpm = useCallback((v: number) => {
    bpmRef.current = v;
    setBpmState(v);
  }, []);

  const setLoop = useCallback((v: boolean) => {
    loopRef.current = v;
    setLoopState(v);
  }, []);

  useEffect(() => () => clearTimer(), []);

  const current = steps[currentGlobalIdx];

  return {
    isPlaying,
    currentGlobalIdx,
    currentLineId: current?.lineId ?? 0,
    currentChord: current?.chord,
    currentStepInPattern: current?.stepIdxInPattern ?? 0,
    bpm, setBpm,
    loop, setLoop,
    toggle,
    stop,
  };
}