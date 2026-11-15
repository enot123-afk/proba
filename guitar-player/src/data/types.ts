export type ChordShape = (number | null)[];

export interface ChordEvent {
  chord: string;
  beats: number;
}

export interface SongLine {
  chords: ChordEvent[];
  text: string;
}

export interface SongSection {
  name: string;
  pattern: string;
  repeat?: number;
  lines: SongLine[];
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  capo?: number;
  sections: SongSection[];
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  pattern: string; // <-- ДОБАВИЛИ ЭТО
  capo?: number;
  sections: SongSection[];
}