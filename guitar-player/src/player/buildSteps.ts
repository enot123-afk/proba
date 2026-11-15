import type { Song } from '../data/types';
import { STRUM_PATTERNS, type StrumStep } from '../data/patterns';

export interface StepInfo {
  chord: string;
  action: StrumStep;
  stepIdxInPattern: number;
  lineId: number;
}

/**
 * Прогрессия: каждый аккорд играет ровно один полный цикл паттерна.
 * lineId = индекс аккорда в прогрессии (для подсветки строки таблицы).
 */
export function buildProgressionSteps(
  progression: string[],
  patternName: string
): StepInfo[] {
  const pattern = STRUM_PATTERNS[patternName];
  if (!pattern) return [];

  const result: StepInfo[] = [];
  progression.forEach((chord, rowIdx) => {
    pattern.forEach((action, stepIdx) => {
      result.push({ chord, action, stepIdxInPattern: stepIdx, lineId: rowIdx });
    });
  });
  return result;
}

/**
 * Песня: длительность аккорда = beats * 2 шагов (1/8 ноты).
 * Паттерн идёт непрерывно по времени и просто повторяется.
 * lineId = сквозной номер строки (для подсветки строки в тексте).
 */
export function buildSongSteps(
  song: Song,
  patternName: string
): StepInfo[] {
  const pattern = STRUM_PATTERNS[patternName];
  if (!pattern) return [];

  const result: StepInfo[] = [];
  let patternIdx = 0;
  let lineId = 0;

  song.sections.forEach((section) => {
    section.lines.forEach((line) => {
      line.chords.forEach(({ chord, beats }) => {
        const stepsCount = beats * 2;
        for (let i = 0; i < stepsCount; i++) {
          const localIdx = patternIdx % pattern.length;
          result.push({
            chord,
            action: pattern[localIdx],
            stepIdxInPattern: localIdx,
            lineId,
          });
          patternIdx++;
        }
      });
      lineId++;
    });
  });
  return result;
}