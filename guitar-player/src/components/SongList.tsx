import type { Song } from '../data/types';

interface Props {
  songs: Song[];
  selectedId: string;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

export function SongList({ songs, selectedId, onSelect, disabled }: Props) {
  return (
    <div className="song-list">
      <h2>Песни</h2>
      {songs.map((song) => (
        <button
          key={song.id}
          className={'song-card' + (song.id === selectedId ? ' active' : '')}
          onClick={() => onSelect(song.id)}
          disabled={disabled}
        >
          <div className="song-card__title">{song.title}</div>
          <div className="song-card__meta">{song.artist} · {song.bpm} BPM</div>
        </button>
      ))}
    </div>
  );
}