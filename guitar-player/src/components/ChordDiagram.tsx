import { useEffect, useRef } from 'react';
import type { ChordShape } from '../data/types';

const NS = 'http://www.w3.org/2000/svg';
const FRETS = 5;
const STRINGS = 6;
const PAD_TOP = 48;
const PAD_LEFT = 36;
const PAD_RIGHT = 36;
const PAD_BOT = 34;
const STR_GAP = 34;
const FRET_GAP = 46;

const BOARD_W = (STRINGS - 1) * STR_GAP;
const W = PAD_LEFT + BOARD_W + PAD_RIGHT;
const H = PAD_TOP + FRETS * FRET_GAP + PAD_BOT;

const xOf = (i: number) => PAD_LEFT + i * STR_GAP;
const yLine = (f: number) => PAD_TOP + f * FRET_GAP;
const yDot = (f: number) => PAD_TOP + (f - 0.5) * FRET_GAP;

function el(
  tag: keyof SVGElementTagNameMap,
  attrs: Record<string, string | number>,
  text?: string
): SVGElement {
  const node = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  if (text !== undefined) node.textContent = text;
  return node;
}

export function ChordDiagram({ frets, name }: { frets: ChordShape; name: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = '';

    // Номера ладов
    for (let f = 1; f <= FRETS; f++) {
      svg.appendChild(el(
        'text',
        {
          x: PAD_LEFT - 14, y: yDot(f) + 4, 'text-anchor': 'middle',
          fill: '#6b7484', 'font-size': 12, 'font-family': 'system-ui',
        },
        String(f)
      ));
    }

    // Линии ладов
    for (let f = 1; f <= FRETS; f++) {
      svg.appendChild(el('line', {
        x1: PAD_LEFT, y1: yLine(f), x2: PAD_LEFT + BOARD_W, y2: yLine(f),
        stroke: '#7a8494', 'stroke-width': 1.5,
      }));
    }

    // Верхний порожек
    svg.appendChild(el('line', {
      x1: PAD_LEFT, y1: PAD_TOP, x2: PAD_LEFT + BOARD_W, y2: PAD_TOP,
      stroke: '#cfd6e0', 'stroke-width': 5, 'stroke-linecap': 'round',
    }));

    // Струны
    for (let i = 0; i < STRINGS; i++) {
      svg.appendChild(el('line', {
        x1: xOf(i), y1: PAD_TOP, x2: xOf(i), y2: yLine(FRETS),
        stroke: '#7a8494', 'stroke-width': 1.5,
      }));
    }

    // Буквы струн
    ['E', 'A', 'D', 'G', 'B', 'E'].forEach((s, i) => {
      svg.appendChild(el(
        'text',
        {
          x: xOf(i), y: yLine(FRETS) + 20, 'text-anchor': 'middle',
          fill: '#5f6877', 'font-size': 12, 'font-family': 'system-ui',
        },
        s
      ));
    });

    // Аппликатура
    frets.forEach((v, i) => {
      const x = xOf(i);
      if (v === null) {
        svg.appendChild(el(
          'text',
          {
            x, y: PAD_TOP - 17, 'text-anchor': 'middle', fill: '#8b93a1',
            'font-size': 17, 'font-weight': 600, 'font-family': 'system-ui',
          },
          '×'
        ));
      } else if (v === 0) {
        svg.appendChild(el('circle', {
          cx: x, cy: PAD_TOP - 22, r: 6,
          fill: 'none', stroke: '#cfd6e0', 'stroke-width': 2,
        }));
      } else {
        svg.appendChild(el('circle', { cx: x, cy: yDot(v), r: 13, fill: '#ffb020' }));
      }
    });
  }, [frets]);

  return (
    <div className="chord-diagram">
      <div className="chord-diagram__name">{name}</div>
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} width={W} height={H} />
    </div>
  );
}