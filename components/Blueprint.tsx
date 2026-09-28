// Faint architectural wireframes behind the sector headers; visible only on close inspection.
const STROKE = 'rgba(148, 163, 184, 0.15)';

export default function Blueprint({ variant }: { variant: number }) {
  return (
    <svg
      viewBox="0 0 240 140"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute top-0 right-0 h-[140px] w-[240px]"
      fill="none"
      stroke={STROKE}
      strokeWidth="0.75"
      vectorEffect="non-scaling-stroke"
    >
      {/* Shared engineering grid */}
      {Array.from({ length: 7 }, (_, i) => (
        <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="140" />
      ))}
      {Array.from({ length: 4 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40 + 10} x2="240" y2={i * 40 + 10} />
      ))}

      {variant === 0 && (
        // Network: nodes on a grid joined by straight runs (energy / utilities)
        <g>
          <polyline points="20,110 80,50 160,50 220,10" />
          <polyline points="80,50 80,130" />
          <polyline points="160,50 200,130" />
          {[[20, 110], [80, 50], [160, 50], [220, 10], [80, 130], [200, 130]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
          ))}
        </g>
      )}

      {variant === 1 && (
        // Stacked ledger frames with a diagonal (financial structure)
        <g>
          <rect x="60" y="20" width="120" height="30" />
          <rect x="80" y="50" width="120" height="30" />
          <rect x="100" y="80" width="120" height="30" />
          <line x1="60" y1="20" x2="220" y2="110" />
        </g>
      )}

      {variant === 2 && (
        // Concentric arcs with a column axis (public institutions)
        <g>
          <path d="M60,120 A60,60 0 0 1 180,120" />
          <path d="M80,120 A40,40 0 0 1 160,120" />
          <path d="M100,120 A20,20 0 0 1 140,120" />
          <line x1="120" y1="10" x2="120" y2="130" />
          <line x1="40" y1="120" x2="200" y2="120" />
        </g>
      )}
    </svg>
  );
}
