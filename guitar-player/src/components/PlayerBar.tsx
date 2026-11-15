interface Props {
  isPlaying: boolean;
  onToggle: () => void;
  bpm: number;
  onBpmChange: (v: number) => void;
  loop: boolean;
  onLoopChange: (v: boolean) => void;
  hardness: number;
  onHardnessChange: (v: number) => void;
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

      <label className="loop-label">
        <input
          type="checkbox"
          checked={loop}
          onChange={(e) => onLoopChange(e.target.checked)}
        />
        🔁 Повторять
      </label>
    </div>
  );
}