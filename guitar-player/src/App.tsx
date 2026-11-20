import { useMemo, useState } from 'react';
import { CHORDS } from './data/chords';
import { STRUM_PATTERNS } from './data/patterns';
import { ChordDiagram } from './components/ChordDiagram';
import { PatternView } from './components/PatternView';
import { PlayerBar } from './components/PlayerBar';
import { ProgressionTable } from './components/ProgressionTable';
import { useAudio } from './audio/useAudio';
import { usePlayer } from './player/usePlayer';
import { buildProgressionSteps} from './player/buildSteps';
import { DRUM_PATTERNS } from './data/drums';


export function App() {
  
  const [pattern, setPattern] = useState('Четвёрка+');

  const [drumPattern, setDrumPattern] = useState('Нет');
  
  const [progression, setProgression] = useState<string[]>(['C', 'Am', 'F', 'G']);
  
  const [viewedChord, setViewedChord] = useState('C');
  const [viewedRowIdx, setViewedRowIdx] = useState(0);

  const [guitarEnabled, setGuitarEnabled] = useState(true);
  const [drumsEnabled, setDrumsEnabled] = useState(true);

  const audio = useAudio();

  const steps = useMemo(() => {
    return buildProgressionSteps(progression, pattern, drumPattern);
  }, [progression, pattern, drumPattern]);

  const player = usePlayer(steps, audio, guitarEnabled, drumsEnabled);

  const handlePatternChange = (name: string) => {
    setPattern(name);
  };

  const handlePlayToggle = () => {
    if (player.isPlaying) {
        const lastChord = progression[player.currentLineId];
        if (lastChord) setViewedChord(lastChord);
        setViewedRowIdx(player.currentLineId);
      player.stop();
    } else {
      setViewedRowIdx(0);
      player.toggle();
    }
  };

  const handleChordBtnClick = (name: string) => {
    if (!player.isPlaying ) setViewedChord(name);
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
  
  const displayChord = progressionDisplayChord;
  const patternArray = STRUM_PATTERNS[pattern] ?? [];

  return (
    <div className="app">
      <h1>Guitar Player</h1>

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
        drumPattern={drumPattern}
        onDrumPatternChange={setDrumPattern}
        guitarEnabled={guitarEnabled}
        onGuitarChange={setGuitarEnabled}
        drumsEnabled={drumsEnabled}
        onDrumsChange={setDrumsEnabled}
      />

      <PatternView
        pattern={patternArray}
        currentStep={player.currentStepInPattern}
        isPlaying={player.isPlaying}
      />

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
        </div>
  );
}