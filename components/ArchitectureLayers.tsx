// Visual anchor for the approach section: the four layers of enterprise architecture (business, applications,
// information, technology) as softly floating, semi-transparent planes, each named in one word set beside it,
// alternating left and right and joined by a dotted leader, in the manner of an editorial infographic. No icons or
// connectors between the planes. One and the same drawing at every screen size, only scaled: the planes are cropped
// to their own width so the names fit right beside them.

const W = 165; // half-width of a plane's top face (SVG units)
const H = W / 2; // half-height (2:1 isometric)
const T = 7; // plane thickness

// Plane geometry: viewBox cropped to the planes' own width, horizontal centre and the vertical centre of each plane
const G = { vbW: 350, vbH: 690, cx: 175, ys: [100, 260, 420, 580] };

type Level = {
  term: string; // one word per enterprise architecture layer
  side: 'left' | 'right';
  top: [string, string];
  edge: string;
  opacity: number;
  delay: string;
};

export const levels: Level[] = [
  {
    term: 'Business',
    side: 'left',
    top: ['#f2f8fe', '#b9d8f4'],
    edge: '#9cc3ea',
    opacity: 0.85,
    delay: '0s',
  },
  {
    term: 'Applicaties',
    side: 'right',
    top: ['#a8d3e6', '#4f8fb8'],
    edge: '#3f7ea6',
    opacity: 0.8,
    delay: '-2.25s',
  },
  {
    term: 'Informatie',
    side: 'left',
    top: ['#86a9e3', '#2c5597'],
    edge: '#244a87',
    opacity: 0.85,
    delay: '-4.5s',
  },
  {
    term: 'Technologie',
    side: 'right',
    top: ['#5f85d6', '#0f2a5c'],
    edge: '#0d2350',
    opacity: 0.9,
    delay: '-6.75s',
  },
];

const poly = (pts: number[][]) => pts.map(([x, y]) => `${x},${y}`).join(' ');

function Plane({ level, i }: { level: Level; i: number }) {
  const y = G.ys[i];
  const CX = G.cx;
  const L = [CX - W, y];
  const Tp = [CX, y - H];
  const R = [CX + W, y];
  const B = [CX, y + H];
  return (
    <g className="animate-[plane-float_9s_ease-in-out_infinite] motion-reduce:animate-none" style={{ animationDelay: level.delay }}>
      <ellipse cx={CX} cy={y + H + 30} rx={W * 0.75} ry={H * 0.4} fill="#0a1931" opacity="0.08" filter={`url(#plane-blur)`} />
      <g opacity={level.opacity} strokeLinejoin="round">
        <polygon points={poly([L, B, R, [R[0], R[1] + T], [B[0], B[1] + T], [L[0], L[1] + T]])} fill={level.edge} stroke={level.edge} strokeWidth="8" />
        <polygon points={poly([L, Tp, R, B])} fill={`url(#plane-top-${i})`} stroke={`url(#plane-top-${i})`} strokeWidth="8" />
        <polygon points={poly([L, Tp, R, B])} fill={`url(#plane-sheen)`} />
        <polyline points={poly([L, Tp, R])} fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" />
      </g>
    </g>
  );
}

function Label({ level }: { level: Level }) {
  const left = level.side === 'left';
  return (
    <div className={`flex items-center gap-1.5 md:gap-2.5 ${left ? 'flex-row-reverse text-right' : ''}`}>
      <span aria-hidden="true" className="w-2 shrink-0 border-t border-dotted border-ink/40 min-[380px]:w-3 md:w-5" />
      <p className="whitespace-nowrap font-sans text-[0.75rem] font-semibold leading-snug text-ink min-[380px]:text-[0.8rem] md:text-[0.95rem] xl:text-[0.88rem]">
        {level.term}
      </p>
    </div>
  );
}

function Planes() {
  return (
    <svg
      viewBox={`0 0 ${G.vbW} ${G.vbH}`}
      aria-hidden="true"
      className="h-auto w-[5.5rem] min-[380px]:w-[7rem] md:w-[12rem] lg:w-[13rem] xl:w-[10rem] 2xl:w-[11rem]"
    >
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
  );
}

// The planes centred, each name beside its plane's outer corner, alternating left and right. --corner is the
// distance from the centre to a plane's side corner (165 / 350 of the svg width) plus a small gap, per svg size.
export default function ArchitectureLayers() {
  return (
    <div className="relative mx-auto flex justify-center [--corner:2.9rem] min-[380px]:[--corner:3.6rem] md:[--corner:6.2rem] lg:[--corner:6.6rem] xl:[--corner:5.3rem] 2xl:[--corner:5.8rem]">
      <Planes />
      {levels.map((l, i) => (
        <div
          key={l.term}
          className="absolute -translate-y-1/2"
          style={{
            top: `${(G.ys[i] / G.vbH) * 100}%`,
            ...(l.side === 'left' ? { right: 'calc(50% + var(--corner))' } : { left: 'calc(50% + var(--corner))' }),
          }}
        >
          <Label level={l} />
        </div>
      ))}
    </div>
  );
}
