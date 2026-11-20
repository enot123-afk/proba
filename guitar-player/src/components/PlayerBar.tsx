import { STRUM_PATTERNS } from '../data/patterns';
import { DRUM_PATTERNS } from '../data/drums';

interface Props {
  isPlaying: boolean;
  onToggle: () => void;
  bpm: number;
  onBpmChange: (v: number) => void;
  loop: boolean;
  onLoopChange: (v: boolean) => void;
  hardness: number;
  onHardnessChange: (v: number) => void;
  drumPattern: string;
  onDrumPatternChange: (v: string) => void;
  guitarEnabled: boolean;
  onGuitarChange: (v: boolean) => void;
  drumsEnabled: boolean;
  onDrumsChange: (v: boolean) => void;
}

function hardnessLabel(h: number): string {
  if (h < 25) return 'Нежно';
  if (h < 50) return 'Мягко';
  if (h < 75) return 'Средне';
  return 'Жёстко';
}

export function PlayerBar({
  isPlaying, onToggle,
  bpm, onBpmChange,
  loop, onLoopChange,
  hardness, onHardnessChange,
  drumPattern, onDrumPatternChange, 
  guitarEnabled, onGuitarChange, drumsEnabled, onDrumsChange
}: Props) {
  return (
    <div className="play-bar">
      <button
        className={'play-btn' + (isPlaying ? ' playing' : '')}
        onClick={onToggle}
      >
        {isPlaying ? '■ Stop' : '▶ Play'}
      </button>

      <div className="tempo-control">
        <span>Темп: <b>{bpm}</b> BPM</span>
        <input
          type="range" min={50} max={180} value={bpm}
          onChange={(e) => onBpmChange(+e.target.value)}
        />
      </div>

      <div className="tempo-control">
        <span>Жёсткость: <b>{hardnessLabel(hardness)}</b></span>
        <input
          type="range" min={0} max={100} value={hardness}
          onChange={(e) => onHardnessChange(+e.target.value)}
        />
      </div>

      <div className="tempo-control">
        <span>Барабаны</span>
        <select 
          value={drumPattern} 
          onChange={(e) => onDrumPatternChange(e.target.value)}
        >
          {Object.keys(DRUM_PATTERNS).map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      <label className="loop-label">
        <input
          type="checkbox"
          checked={loop}
          onChange={(e) => onLoopChange(e.target.checked)}
        />
        🔁 Повторять
      </label>

            <div style={{ display: 'flex', gap: '12px', marginLeft: '10px', background: 'var(--panel2)', padding: '6px 12px', borderRadius: '8px' }}>
        <label className="loop-label" title="Включить/выключить гитару">
          <input type="checkbox" checked={guitarEnabled} onChange={(e) => onGuitarChange(e.target.checked)} />
          🎸 Гитара
        </label>
        <label className="loop-label" title="Включить/выключить барабаны">
          <input type="checkbox" checked={drumsEnabled} onChange={(e) => onDrumsChange(e.target.checked)} />
          🥁 Барабаны
        </label>
      </div>
      
    </div>

  );
}