import { STRUM_PATTERNS, type StrumStep } from '../data/patterns';
import { DRUM_PATTERNS, type DrumAction } from '../data/drums';
import { BASS_PATTERNS, type BassAction } from '../data/bass';

export interface StepInfo {
  chord: string;
  action: StrumStep;
  drumAction: DrumAction;
  bassAction: BassAction;
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
  drumPatternName: string = 'Нет',
  bassPatternName: string = 'Нет'
): StepInfo[] {
  const pattern = STRUM_PATTERNS[patternName];
  const drumPattern = DRUM_PATTERNS[drumPatternName] || DRUM_PATTERNS['Нет'];
  const bassPattern = BASS_PATTERNS[bassPatternName] || BASS_PATTERNS['Нет'];
  if (!pattern) return [];

  const result: StepInfo[] = [];
  let drumIdx = 0;
  let bassIdx = 0;


  progression.forEach((chord, rowIdx) => {
    pattern.forEach((action, stepIdx) => {
      result.push({ 
        chord, 
        action, 
        drumAction: drumPattern[drumIdx % drumPattern.length],
        bassAction: bassPattern[bassIdx % bassPattern.length],
        stepIdxInPattern: stepIdx, 
        lineId: rowIdx 
      });
      drumIdx++;
      bassIdx++;
    });
  });
  return result;
}

