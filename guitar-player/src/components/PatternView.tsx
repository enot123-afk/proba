import type { StrumStep } from '../data/patterns';

interface Props {
  pattern: StrumStep[];
  currentStep: number;
  isPlaying: boolean;
}

export function PatternView({ pattern, currentStep, isPlaying }: Props) {
  return (
    <div className="pattern-view">
      {pattern.map((step, i) => {
        const active = isPlaying && i === currentStep;
        let cls = 'pat-step';
        let text = '·';
        if (step === 'D') text = '↓';
        else if (step === 'U') text = '↑';
        else if (step === 'M') { text = '×'; cls += ' mute'; }
        else cls += ' rest';
        if (active) cls += ' active';
        return <div key={i} className={cls}>{text}</div>;
      })}
    </div>
  );
}