import { CHORDS } from '../data/chords';
import { STRUM_PATTERNS } from '../data/patterns';

interface Props {
  progression: string[];
  onChange: (next: string[]) => void;
  patternName: string;
  onPatternChange: (name: string) => void;
  highlightRowIdx: number;
  isPlaying: boolean;
  onRowClick: (idx: number) => void;
}

export function ProgressionTable({
  progression, onChange,
  patternName, onPatternChange,
  highlightRowIdx, isPlaying, onRowClick,
}: Props) {
  const updateChord = (idx: number, value: string) => {
    const next = progression.map((c, i) => (i === idx ? value : c));
    onChange(next);
  };

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const next = [...progression];
    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
    onChange(next);
  };

  const moveDown = (idx: number) => {
    if (idx === progression.length - 1) return;
    const next = [...progression];
    [next[idx + 1], next[idx]] = [next[idx], next[idx + 1]];
    onChange(next);
  };

  const remove = (idx: number) => {
    onChange(progression.filter((_, i) => i !== idx));
  };

  const addRow = () => {
    const first = Object.keys(CHORDS)[0];
    onChange([...progression, first]);
  };

  return (
    <div className="prog-wrap">
      <h2>Прогрессия</h2>
      <table className="prog-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Аккорд</th>
            <th>Бой</th>
            <th style={{ textAlign: 'right' }}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {progression.map((chord, idx) => (
            <tr
              key={idx}
              className={idx === highlightRowIdx ? 'row-current' : ''}
              onClick={(e) => {
                if (e.target instanceof HTMLElement && e.target.closest('select, button')) return;
                onRowClick(idx);
              }}
            >
              <td className="num">{idx + 1}</td>
              <td>
                <select
                  value={chord}
                  disabled={isPlaying}
                  onChange={(e) => updateChord(idx, e.target.value)}
                >
                  {Object.keys(CHORDS).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  value={patternName}
                  onChange={(e) => onPatternChange(e.target.value)}
                >
                  {Object.keys(STRUM_PATTERNS).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </td>
              <td className="ctrl-cell">
                <button
                  className="mini-btn"
                  disabled={isPlaying || idx === 0}
                  onClick={() => moveUp(idx)}
                >↑</button>
                <button
                  className="mini-btn"
                  disabled={isPlaying || idx === progression.length - 1}
                  onClick={() => moveDown(idx)}
                >↓</button>
                <button
                  className="mini-btn del"
                  disabled={isPlaying}
                  onClick={() => remove(idx)}
                >×</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-row">
        <button className="add-btn" disabled={isPlaying} onClick={addRow}>
          + Добавить строку
        </button>
      </div>
    </div>
  );
}