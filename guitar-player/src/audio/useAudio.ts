import { useCallback, useRef, useState } from 'react';
import {
  playStrum as engineStrum,
  playMute as engineMute,
  setTone as engineSetTone,
} from './engine';

export function useAudio() {
  const [tone, setToneState] = useState(35);
  const [enabled, setEnabledState] = useState(true);
  const [hardness, setHardnessState] = useState(60);

  const toneRef = useRef(tone);
  const enabledRef = useRef(enabled);
  const hardnessRef = useRef(hardness);

  // 0 → 0.3×, 100 → 1.0× — тихо, но не в ноль
  const hardnessFactor = () => 0.3 + 0.7 * (hardnessRef.current / 100);

  const setTone = useCallback((t: number) => {
    toneRef.current = t;
    setToneState(t);
    engineSetTone(t);
  }, []);

  const setEnabled = useCallback((e: boolean) => {
    enabledRef.current = e;
    setEnabledState(e);
  }, []);

  const setHardness = useCallback((h: number) => {
    hardnessRef.current = h;
    setHardnessState(h);
  }, []);

  const playStrum = useCallback(
    (frets: (number | null)[], direction: 'down' | 'up', velocity = 1) => {
      if (!enabledRef.current) return;
      engineStrum(frets, direction, velocity * hardnessFactor(), toneRef.current);
    },
    []
  );

  const playMute = useCallback((velocity = 0.75) => {
    if (!enabledRef.current) return;
    engineMute(velocity * hardnessFactor(), toneRef.current);
  }, []);

  return {
    tone, setTone,
    enabled, setEnabled,
    hardness, setHardness,
    playStrum, playMute,
  };
}