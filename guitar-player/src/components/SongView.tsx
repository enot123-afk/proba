import { useEffect, useRef } from 'react';
import type { Song } from '../data/types';

interface Props {
  song: Song;
  currentLineId: number;
  isPlaying: boolean;
}

export function SongView({ song, currentLineId, isPlaying }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
     if (!isPlaying || !currentLineRef.current || !containerRef.current) return;

  const el = currentLineRef.current;
  const container = containerRef.current;

  const containerRect = container.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  // Позиция элемента относительно контента контейнера (с учётом текущего скролла)
  const relativeTop = elRect.top - containerRect.top + container.scrollTop;

  // Мёртвая зона: если строка уже в средней половине контейнера — не дёргаем скролл
  const visibleTop = container.scrollTop + container.clientHeight * 0.25;
  const visibleBottom = container.scrollTop + container.clientHeight * 0.75;
  if (relativeTop >= visibleTop && relativeTop + el.clientHeight <= visibleBottom) {
    return;
  }

  const offset = relativeTop - container.clientHeight / 2 + el.clientHeight / 2;
  container.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
}, [currentLineId, isPlaying]);

  let lineCounter = 0;

  return (
    <div className="song-view" ref={containerRef}>
      {song.sections.map((section, sIdx) => (
        <div key={sIdx} className="song-section">
          <div className="song-section__name">{section.name}</div>
          {section.lines.map((line, lIdx) => {
            const lineId = lineCounter++;
            const isCurrent = isPlaying && lineId === currentLineId;
            return (
              <div
                key={lIdx}
                ref={isCurrent ? currentLineRef : null}
                className={'song-line' + (isCurrent ? ' current' : '')}
              >
                <div className="song-line__chords">
                  {line.chords.map((ev, cIdx) => (
                    <span key={cIdx} className="song-chord">{ev.chord}</span>
                  ))}
                </div>
                <div className="song-line__text">{line.text}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}