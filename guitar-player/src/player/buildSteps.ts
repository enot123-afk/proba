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

