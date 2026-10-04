// Visual anchor for "Van fragmentatie naar samenhang": three softly floating, semi-transparent planes (one per
// enterprise architecture level) with their explanation set around them, alternating left and right and joined by a
// dotted leader, in the manner of an editorial infographic. No background behind the visual, no icons or connectors
// between the planes. On small screens the labels move below the planes as a numbered list.

const W = 165; // half-width of a plane's top face (SVG units)
const H = W / 2; // half-height (2:1 isometric)
const T = 7; // plane thickness
const CX = 260;
const VB_W = 520;
const VB_H = 520;

type Level = {
  term: string;
  arch: string; // enterprise architecture level, shown under the term
  text: string;
  y: number;
  side: 'left' | 'right';
  top: [string, string];
  edge: string;
  opacity: number;
  delay: string;
};

export const levels: Level[] = [
  {
    term: 'Richting bepalen',
    arch: 'Strategische architectuur',
    text: 'Vertaal de koers van de organisatie naar heldere doelen, keuzes en prioriteiten.',
    y: 150,
    side: 'left',
    top: ['#f2f8fe', '#b9d8f4'],
    edge: '#9cc3ea',
    opacity: 0.85,
    delay: '0s',
  },
  {
    term: 'Samenhang organiseren',
    arch: 'Segmentarchitectuur',
    text: 'Breng samenhang in specifieke domeinen, ketens en veranderinitiatieven.',
    y: 260,
    side: 'right',
    top: ['#a8d3e6', '#4f8fb8'],
    edge: '#3f7ea6',
    opacity: 0.8,
    delay: '-3s',
  },
  {
    term: 'Realisatie borgen',
    arch: 'Capability-architectuur',
    text: 'Veranker de verandering in de benodigde capaciteiten, processen, systemen en manier van werken.',
    y: 370,
    side: 'left',
    top: ['#5f85d6', '#0f2a5c'],
    edge: '#0d2350',
    opacity: 0.9,
    delay: '-6s',
  },
];

const poly = (pts: number[][]) => pts.map(([x, y]) => `${x},${y}`).join(' ');

function Plane({ level, i }: { level: Level; i: number }) {
  const { y } = level;
  const L = [CX - W, y];
  const Tp = [CX, y - H];
  const R = [CX + W, y];
  const B = [CX, y + H];
  return (
    <g className="animate-[plane-float_9s_ease-in-out_infinite] motion-reduce:animate-none" style={{ animationDelay: level.delay }}>
      <ellipse cx={CX} cy={y + H + 30} rx={W * 0.75} ry={H * 0.4} fill="#0a1931" opacity="0.08" filter="url(#plane-blur)" />
      <g opacity={level.opacity} strokeLinejoin="round">
        <polygon points={poly([L, B, R, [R[0], R[1] + T], [B[0], B[1] + T], [L[0], L[1] + T]])} fill={level.edge} stroke={level.edge} strokeWidth="8" />
        <polygon points={poly([L, Tp, R, B])} fill={`url(#plane-top-${i})`} stroke={`url(#plane-top-${i})`} strokeWidth="8" />
        <polygon points={poly([L, Tp, R, B])} fill="url(#plane-sheen)" />
        <polyline points={poly([L, Tp, R])} fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" />
      </g>
    </g>
  );
}

function Label({ level, i }: { level: Level; i: number }) {
  const left = level.side === 'left';
  return (
    <div className={`flex items-center gap-4 ${left ? 'flex-row-reverse text-right' : ''}`}>
      <span aria-hidden="true" className="w-10 shrink-0 border-t border-dotted border-ink/40 lg:w-14" />
      <div className="max-w-[17rem]">
        <p className="font-sans text-[0.95rem] font-semibold leading-snug text-ink">
          <span className="mr-2 text-[0.72rem] font-semibold tabular-nums tracking-[0.14em] text-muted">{String(i + 1).padStart(2, '0')}</span>
          {level.term}
        </p>
        <p className="mt-0.5 font-sans text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted">{level.arch}</p>
        <p className="mt-1.5 text-[0.9rem] leading-[1.55] text-ink-soft">{level.text}</p>
      </div>
    </div>
  );
}

export default function ArchitectureLayers() {
  return (
    <div>
      {/* md+: planes centred, labels placed at each plane's height beside its outer corner. --arch-corner is the
          distance from the centre to a plane's side corner (W / VB_W of the svg width) plus a small gap. */}
      <div className="relative mx-auto flex justify-center md:[--arch-corner:7.6rem] lg:[--arch-corner:8.6rem]">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} aria-hidden="true" className="h-auto w-[19rem] sm:w-[23rem] lg:w-[26rem]">
          <defs>
            {levels.map((l, i) => (
              <linearGradient key={i} id={`plane-top-${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={l.top[0]} />
                <stop offset="1" stopColor={l.top[1]} />
              </linearGradient>
            ))}
            <radialGradient id="plane-sheen" cx="0.3" cy="0.15" r="0.75">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.38" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <filter id="plane-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>
          {[...levels].reverse().map((l) => (
            <Plane key={l.term} level={l} i={levels.indexOf(l)} />
          ))}
        </svg>

        {levels.map((l, i) => (
          <div
            key={l.term}
            className="absolute hidden -translate-y-1/2 md:block"
            style={{
              top: `${(l.y / VB_H) * 100}%`,
              ...(l.side === 'left' ? { right: 'calc(50% + var(--arch-corner))' } : { left: 'calc(50% + var(--arch-corner))' }),
            }}
          >
            <Label level={l} i={i} />
          </div>
        ))}
      </div>

      {/* Small screens: labels as a numbered list under the planes */}
      <ol className="mt-8 space-y-6 border-l border-line pl-6 md:hidden">
        {levels.map((l, i) => (
          <li key={l.term}>
            <p className="font-sans text-[0.95rem] font-semibold text-ink">
              <span className="mr-2 text-[0.72rem] tabular-nums tracking-[0.14em] text-muted">{String(i + 1).padStart(2, '0')}</span>
              {l.term}
            </p>
            <p className="mt-0.5 font-sans text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted">{l.arch}</p>
            <p className="mt-1.5 text-[0.95rem] leading-[1.6] text-ink-soft">{l.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
