// Logos live in public/logos/ (trimmed, transparent PNGs).
// Optical sizing: every logo gets roughly the same visual area (AREA px²), derived from its
// aspect ratio. `weight` fine-tunes the perceived mass: < 1 for heavy/solid marks, > 1 for light or
// small-text logos (the Rijksoverheid bar logos need extra height to keep their text legible).
const AREA = 3200;

const clients = [
  { name: 'Eneco', file: 'eneco.png', ratio: 2.29, weight: 0.85 },
  { name: 'Rabobank', file: 'rabobank.png', ratio: 5.49, weight: 0.85 },
  { name: 'Rijksdienst voor Ondernemend Nederland', file: 'rvo.png', ratio: 2.55, weight: 1.35 },
  { name: 'Instituut Mijnbouwschade Groningen', file: 'img.png', ratio: 3.62, weight: 1.1 },
  { name: 'Fudura', file: 'fudura.png', ratio: 3.84, weight: 0.95 },
  { name: '4blue', file: '4blue.png', ratio: 2.39, weight: 0.9 },
  { name: 'DUO', file: 'duo.png', ratio: 2.42, weight: 1.35 },
  { name: 'Belastingdienst', file: 'belastingdienst.png', ratio: 1.57, weight: 1.2 },
  { name: 'RIVM', file: 'rivm.png', ratio: 2.35, weight: 1.35 },
];

const heightFor = (ratio: number, weight: number) => Math.round(Math.sqrt(AREA / ratio) * weight);

// 'row': full-width strip with its own centered heading; 'grid': 3x3 grid of equal cells for use inside a column
export default function ClientLogos({ variant = 'row' }: { variant?: 'row' | 'grid' }) {
  const list =
    variant === 'grid'
      ? 'grid grid-cols-3 gap-x-6 gap-y-6 md:gap-y-8 [&>li]:h-16'
      : 'mt-8 md:mt-12 flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-between gap-x-10 gap-y-8 md:gap-x-12 md:gap-y-10 xl:gap-x-6 2xl:gap-x-12';
  return (
    <div>
      {variant === 'row' && (
        <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[#0A1931]/55">
          Project ervaring
        </p>
      )}
      <ul className={list}>
        {clients.map((c) => (
          <li
            key={c.file}
            className="logo-item-wrapper flex items-center justify-center transition duration-300 ease-out hover:grayscale hover:opacity-50"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed optical height, width follows the aspect ratio */}
            <img
              src={`/logos/${c.file}`}
              alt={c.name}
              loading="lazy"
              style={{ '--logo-h': `${heightFor(c.ratio, c.weight)}px` } as React.CSSProperties}
              className="w-auto object-contain h-[calc(var(--logo-h)*0.8)] md:h-[var(--logo-h)]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
