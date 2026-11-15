import { useMemo, useState } from 'react';
import { CHORDS } from './data/chords';
import { STRUM_PATTERNS } from './data/patterns';
import { SONGS } from './data/songs';
import { ChordDiagram } from './components/ChordDiagram';
import { PatternView } from './components/PatternView';
import { PlayerBar } from './components/PlayerBar';
import { ProgressionTable } from './components/ProgressionTable';
import { SongList } from './components/SongList';
import { SongView } from './components/SongView';
import { useAudio } from './audio/useAudio';
import { usePlayer } from './player/usePlayer';
import { buildProgressionSteps, buildSongSteps } from './player/buildSteps';

type Tab = 'progression' | 'song';

export function App() {
  const [tab, setTab] = useState<Tab>('progression');
  
  // Начальный бой для прогрессии
  const [pattern, setPattern] = useState('Четвёрка+');
  
  const [progression, setProgression] = useState<string[]>(['C', 'Am', 'F', 'G']);
  
  // Выбираем первую песню по умолчанию
  const [selectedSongId, setSelectedSongId] = useState(SONGS[0].id);
  
  const [viewedChord, setViewedChord] = useState('C');
  const [viewedRowIdx, setViewedRowIdx] = useState(0);

  const audio = useAudio();

  const selectedSong = useMemo(
    () => SONGS.find((s) => s.id === selectedSongId) ?? SONGS[0],
    [selectedSongId]
  );

  const steps = useMemo(() => {
    if (tab === 'progression') return buildProgressionSteps(progression, pattern);
    return buildSongSteps(selectedSong, pattern);
  }, [tab, progression, pattern, selectedSong]);

  const player = usePlayer(steps, audio);

  const stopAndSwitch = (fn: () => void) => {
    if (player.isPlaying) player.stop();
    fn();
  };

  const handleTabChange = (newTab: Tab) => {
    if (newTab === tab) return;
    stopAndSwitch(() => setTab(newTab));
  };

  const handlePatternChange = (name: string) => {
    setPattern(name);
  };

  // НОВАЯ ФУНКЦИЯ: Выбор песни с автоподстановкой боя и BPM
  const handleSelectSong = (id: string) => {
    stopAndSwitch(() => {
      setSelectedSongId(id);
      const song = SONGS.find((s) => s.id === id);
      if (song) {
        setPattern(song.pattern); // Ставим бой песни
        player.setBpm(song.bpm);  // Ставим темп песни
      }
    });
  };

  const handlePlayToggle = () => {
    if (player.isPlaying) {
      if (tab === 'progression') {
        const lastChord = progression[player.currentLineId];
        if (lastChord) setViewedChord(lastChord);
        setViewedRowIdx(player.currentLineId);
      }
      player.stop();
    } else {
      if (tab === 'progression') setViewedRowIdx(0);
      player.toggle();
    }
  };

  const handleChordBtnClick = (name: string) => {
    if (!player.isPlaying && tab === 'progression') setViewedChord(name);
    audio.playStrum(CHORDS[name], 'down', 1);
  };

  const handleRowClick = (idx: number) => {
    if (player.isPlaying) return;
    setViewedRowIdx(idx);
    setViewedChord(progression[idx]);
  };

  // Что показать на грифе
  const progressionDisplayChord = player.isPlaying
    ? progression[player.currentLineId] ?? viewedChord
    : viewedChord;
  
  const songFirstChord =
    selectedSong.sections[0]?.lines[0]?.chords[0]?.chord ?? 'C';
  
  const songDisplayChord = player.isPlaying
    ? player.currentChord ?? songFirstChord
    : songFirstChord;

  const displayChord = tab === 'progression' ? progressionDisplayChord : songDisplayChord;
  const patternArray = STRUM_PATTERNS[pattern] ?? [];

  return (
    <div className="app">
      <h1>Guitar Player</h1>

      <div className="tabs">
        <button
          className={'tab-btn' + (tab === 'progression' ? ' active' : '')}
          onClick={() => handleTabChange('progression')}
        >
          Прогрессия
        </button>
        <button
          className={'tab-btn' + (tab === 'song' ? ' active' : '')}
          onClick={() => handleTabChange('song')}
        >
          Песни
        </button>
      </div>

      <div className="toolbar">
        <button
          className={'sound-btn' + (audio.enabled ? ' on' : '')}
          onClick={() => audio.setEnabled(!audio.enabled)}
        >
          {audio.enabled ? '🔊 Звук' : '🔇 Тихо'}
        </button>
        <div className="tempo-control">
          <span>Тон: {audio.tone}</span>
          <input
            type="range" min={0} max={100}
            value={audio.tone}
            onChange={(e) => audio.setTone(+e.target.value)}
          />
        </div>
      </div>

      <div className="board">
        <ChordDiagram name={displayChord} frets={CHORDS[displayChord]} />
      </div>

      <PlayerBar
        isPlaying={player.isPlaying}
        onToggle={handlePlayToggle}
        bpm={player.bpm}
        onBpmChange={player.setBpm}
        loop={player.loop}
        onLoopChange={player.setLoop}
        hardness={audio.hardness}
        onHardnessChange={audio.setHardness}
      />

      <PatternView
        pattern={patternArray}
        currentStep={player.currentStepInPattern}
        isPlaying={player.isPlaying}
      />

      {tab === 'progression' ? (
        <>
          <div className="chords">
            {Object.keys(CHORDS).map((name) => (
              <button
                key={name}
                className={'chord-btn' + (name === displayChord ? ' active' : '')}
                onClick={() => handleChordBtnClick(name)}
              >
                {name}
              </button>
            ))}
          </div>

          <ProgressionTable
            progression={progression}
            onChange={setProgression}
            patternName={pattern}
            onPatternChange={handlePatternChange}
            highlightRowIdx={player.isPlaying ? player.currentLineId : viewedRowIdx}
            isPlaying={player.isPlaying}
            onRowClick={handleRowClick}
          />
        </>
      ) : (
        <div className="song-layout">
          <SongList
            songs={SONGS}
            selectedId={selectedSongId}
            onSelect={handleSelectSong}
            disabled={player.isPlaying}
          />

          <div className="song-main">
            <div className="song-header">
              <div>
                <div className="song-header__title">{selectedSong.title}</div>
                <div className="song-header__meta">{selectedSong.artist}</div>
              </div>
              <div className="song-header__pattern">
                Бой:{' '}
                <select
                  value={pattern}
                  onChange={(e) => handlePatternChange(e.target.value)}
                >
                  {Object.keys(STRUM_PATTERNS).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <SongView
              song={selectedSong}
              currentLineId={player.currentLineId}
              isPlaying={player.isPlaying}
            />
          </div>
        </div>
      )}
    </div>
  );
}