import { STRUM_PATTERNS, type StrumStep } from '../data/patterns';
import { DRUM_PATTERNS, type DrumAction } from '../data/drums';

export interface StepInfo {
  chord: string;
  action: StrumStep;
  drumAction: DrumAction;
  stepIdxInPattern: number;
  lineId: number;
}

/**
 * Прогрессия: каждый аккорд играет ровно один полный цикл паттерна.
 * lineId = индекс аккорда в прогрессии (для подсветки строки таблицы).
 */
export function buildProgressionSteps(
  progression: string[],
  patternName: string,
  drumPatternName: string = 'Нет'
): StepInfo[] {
  const pattern = STRUM_PATTERNS[patternName];
  const drumPattern = DRUM_PATTERNS[drumPatternName] || DRUM_PATTERNS['Нет'];
  if (!pattern) return [];

  const result: StepInfo[] = [];
  let drumIdx = 0;


  progression.forEach((chord, rowIdx) => {
    pattern.forEach((action, stepIdx) => {
      result.push({ 
        chord, 
        action, 
        drumAction: drumPattern[drumIdx % drumPattern.length],
        stepIdxInPattern: stepIdx, 
        lineId: rowIdx 
      });
      drumIdx++;
    });
  });
  return result;
}

