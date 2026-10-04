// "Van beleid naar uitvoering": quarterly steering from board to teams, rebuilt from the slide with its flat colours
// (navy band, blue planning steps, pale review steps, yellow team step, grey row labels with the board in black) in
// the site's typography. Laid out on a fixed 1500 x 580 grid and sized in container units, so it scales as one piece
// like an image (also in the zoom dialog).

const VB_W = 1500;
const VB_H = 580;

// Flat fills taken from the slide. Text colour targets the inner <p>s, which carry a base colour.
const TONES = {
  light: { fill: '#edf3fc', text: '[&_p]:text-ink' },
  yellow: { fill: '#fdf2cc', text: '[&_p]:text-ink' },
  blue: { fill: '#3a5fb6', text: '[&_p]:text-white' },
  band: { fill: '#0f1527', text: '[&_p]:text-white' },
} as const;

type Tone = keyof typeof TONES;
type Box = [x1: number, y1: number, x2: number, y2: number];

const rows = ['Bestuur', 'Programma en portfolio', 'Afdelingen (lijn)', 'Ketens en processen', 'Teams'];
const ROW_Y: [number, number][] = [
  [102, 182],
  [200, 280],
  [298, 378],
  [396, 476],
  [495, 575],
];

// Top-down: plan and prioritise, one step further right per level
const plan: { title: string; sub: string; x: [number, number] }[] = [
  { title: 'Beleidsdoelen en portfolio-prioriteiten vaststellen', sub: 'Strategische sessie', x: [205, 517] },
  { title: 'Doelen vertalen naar strategische thema’s en informatie', sub: 'Strategische planning', x: [272, 584] },
  { title: 'Thema’s vertalen naar afdelingsdoelen (Epics) Q+1', sub: 'Tactische planning', x: [340, 652] },
  { title: 'Ketenafspraken en procesinrichting bepalen', sub: 'Ketenplanning', x: [407, 720] },
];

// Bottom-up: resolve bottlenecks, one step further right per level going up
const resolve: { title: string; sub: string; x: [number, number] }[] = [
  { title: 'Beleidseffect en verantwoording', sub: 'Kwartaalreview bestuur (P&C)', x: [1187, 1500] },
  { title: 'Stuurinformatie en realisatie', sub: 'Portfolioreview', x: [1120, 1432] },
  { title: 'Doelen evalueren en prioriteiten bijsturen', sub: 'Afdelingsreview', x: [1052, 1364] },
  { title: 'Ketenknelpunten signaleren en oplossen', sub: 'Ketenreview', x: [985, 1297] },
];

const place = ([x1, y1, x2, y2]: Box): React.CSSProperties => ({
  left: `${(x1 / VB_W) * 100}%`,
  top: `${(y1 / VB_H) * 100}%`,
  width: `${((x2 - x1) / VB_W) * 100}%`,
  height: `${((y2 - y1) / VB_H) * 100}%`,
});

// Flat-left chevron in a flat fill
function Chevron({ box, tone, children }: { box: Box; tone: Tone; children: React.ReactNode }) {
  const t = TONES[tone];
  return (
    <div
      className={`absolute flex items-center justify-center pr-[2.6cqw] pl-[1.2cqw] text-center ${t.text}`}
      style={{
        ...place(box),
        clipPath: 'polygon(0 0, calc(100% - 2.6cqw) 0, 100% 50%, calc(100% - 2.6cqw) 100%, 0 100%)',
        background: t.fill,
      }}
    >
      {children}
    </div>
  );
}

function Step({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <p className="text-[1.02cqw] leading-[1.25] font-semibold">{title}</p>
      <p className="mt-[0.2cqw] text-[0.88cqw] leading-[1.25] italic opacity-80">{sub}</p>
    </div>
  );
}

export default function StrategyRollout() {
  return (
    <div className="@container w-full font-sans">
      <div className="relative w-full" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
        {/* Movement lines and the dashed alignment marker, drawn on the same grid */}
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
          <g stroke="#0a1931" strokeOpacity="0.45" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="562" y1="113" x2="732" y2="365" />
            <polyline points="717,353 732,365 731,346" />
            <line x1="920" y1="365" x2="1085" y2="115" />
            <polyline points="1072,128 1085,115 1086,134" />
          </g>
          <path
            d="M690 400 H815 L850 436 L815 472 H690"
            fill="none"
            stroke="#0a1931"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="7 6"
            strokeLinejoin="round"
          />
        </svg>

        {/* Quarterly band and the two phases */}
        <Chevron box={[0, 3, 1500, 40]} tone="band">
          <p className="text-[1.1cqw] font-medium tracking-[0.02em]">Kwartaalsturing</p>
        </Chevron>
        <Chevron box={[205, 47, 825, 82]} tone="blue">
          <p className="text-[1.02cqw]">Plannen en prioriteren</p>
        </Chevron>
        <Chevron box={[815, 47, 1500, 82]} tone="light">
          <p className="text-[1.02cqw]">Knelpunten oplossen*</p>
        </Chevron>

        {/* Row labels: grey blocks, the board in black */}
        {rows.map((r, i) => (
          <div
            key={r}
            className={`absolute flex items-center justify-center px-[1cqw] text-center ${i === 0 ? 'bg-black [&_p]:text-white' : 'bg-[#f2f2f2] [&_p]:text-ink'}`}
            style={place([0, ROW_Y[i][0], 185, ROW_Y[i][1]])}
          >
            <p className="text-[1.08cqw] leading-[1.25] font-semibold">{r}</p>
          </div>
        ))}

        {plan.map((s, i) => (
          <Chevron key={s.title} box={[s.x[0], ROW_Y[i][0], s.x[1], ROW_Y[i][1]]} tone="blue">
            <Step {...s} />
          </Chevron>
        ))}
        {resolve.map((s, i) => (
          <Chevron key={s.title} box={[s.x[0], ROW_Y[i][0], s.x[1], ROW_Y[i][1]]} tone="light">
            <Step {...s} />
          </Chevron>
        ))}
        <Chevron box={[690, ROW_Y[4][0], 1003, ROW_Y[4][1]]} tone="yellow">
          <Step title="Stories plannen en opleveren per sprint" sub="Teamplanning en review" />
        </Chevron>

        <p className="absolute -translate-y-1/2 text-[1.02cqw] text-ink" style={{ left: `${(728 / VB_W) * 100}%`, top: `${(436 / VB_H) * 100}%` }}>
          Alignment
        </p>
        <p className="absolute -translate-x-1/2 -translate-y-1/2 text-center text-[1.08cqw] leading-[1.3] text-muted" style={{ left: `${(735 / VB_W) * 100}%`, top: `${(240 / VB_H) * 100}%` }}>
          <span className="font-semibold">Top-down</span>
          <br />
          richting geven
        </p>
        <p className="absolute -translate-x-1/2 -translate-y-1/2 text-center text-[1.08cqw] leading-[1.3] text-muted" style={{ left: `${(925 / VB_W) * 100}%`, top: `${(240 / VB_H) * 100}%` }}>
          <span className="font-semibold">Bottom-up</span>
          <br />
          prioriteren
        </p>
      </div>

      <p className="mt-[1.6cqw] border-t border-line pt-[0.8cqw] text-[0.85cqw] text-muted">
        *Knelpunten = prioriteitsconflicten en capaciteitsknelpunten
      </p>
    </div>
  );
}
