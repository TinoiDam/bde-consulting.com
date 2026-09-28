import SwipeCarousel from '@/components/SwipeCarousel';

// Roadmap matrix: columns are phases (sequence), rows are dimensions (what we do -> what it delivers -> who is involved).
// DRAFT: deliverables and stakeholders are first proposals; adjust to your own practice.
const steps = [
  {
    title: 'Richting bepalen',
    items: ['Prioriteiten scherpstellen', 'Knelpunten, afhankelijkhedenen risico\'s begrijpen', 'Leiderschap uitlijnen op de kern'],
    deliverables: ['Gedeelde start- en probleembeeld', 'Geprioriteerde roadmap', 'Werkpakketten', 'afhankelijkheden overzicht'],
    stakeholders: ['Sponsors', 'Opdrachtgever', 'Domeineigenaren', 'Specialisten'],
  },
  {
    title: 'Bestuurbaar maken',
    items: ['Eigenaarschap en mandaat vastleggen', 'Operationeel ritme inrichten', 'Heldere besluitvormingspaden definiëren'],
    deliverables: ['Governance & RACI', 'Besluitkalender', 'Overleg- en rapportageritme'],
    stakeholders: ['Stuurgroep', 'Programmamanagement', 'Business & IT-leads'],
  },
  {
    title: 'Realiseren en borgen',
    items: ['Monitor voortgang', 'Voorspelbare processen', 'Transitie naar de lijn / business as usual'],
    deliverables: ['Voortgangsrapportage & KPI-dashboard', 'Overdrachtsplan naar de lijn'],
    stakeholders: ['Lijnmanagement', 'Product owners', 'Uitvoerende teams'],
  },
];

const phaseName = (t: string) => t.charAt(0) + t.slice(1).toLowerCase();
const pad = (n: number) => String(n).padStart(2, '0');

type Step = (typeof steps)[number];

// Cell renderers per dimension; plain text, no bullets
function Activities({ step }: { step: Step }) {
  return (
    <ul className="space-y-2">
      {step.items.map((item) => (
        <li key={item} className="font-sans text-[0.92rem] font-light leading-[1.55] text-ink-soft">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Deliverables({ step }: { step: Step }) {
  return (
    <ol className="space-y-2">
      {step.deliverables.map((d, n) => (
        <li key={d} className="flex gap-3">
          <span className="shrink-0 pt-[0.2em] font-sans text-[0.72rem] tabular-nums text-subtle">{pad(n + 1)}</span>
          <span className="font-sans text-[0.92rem] font-medium leading-[1.5] text-ink">{d}</span>
        </li>
      ))}
    </ol>
  );
}

function Stakeholders({ step }: { step: Step }) {
  return (
    <p className="font-sans text-[0.7rem] font-medium uppercase leading-[2] tracking-[0.1em] text-muted">
      {step.stakeholders.map((s) => s.replace(/ /g, '\u00a0')).join('\u00a0\u00b7 ')}
    </p>
  );
}

const dimensions = [
  { label: 'Kernactiviteiten', Cell: Activities },
  { label: 'Oplevering', Cell: Deliverables },
  { label: 'Kernstakeholders', Cell: Stakeholders },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow block mb-0">{children}</span>;
}

// Solid navy phase block with paper-white text
function PhaseBlock({ step, i }: { step: Step; i: number }) {
  return (
    <div className="flex flex-col justify-center bg-ink px-6 py-5 text-white">
      <span className="font-sans text-[0.65rem] font-normal uppercase tracking-[0.2em] text-white/60">Fase {pad(i + 1)}</span>
      <h3 className="mt-1 font-sans text-[1.15rem] font-normal tracking-normal text-white">{phaseName(step.title)}</h3>
    </div>
  );
}

export default function MethodSection() {
  return (
    <section id="aanpak" className="scroll-mt-20 bg-canvas py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div data-reveal>
          <p className="eyebrow">Roadmap</p>
          <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">
            Een eenvoudige aanpak voor sneller begrip, betere besluiten en resultaat
          </h2>
        </div>

        {/* One list of phases: swipe cards on mobile; from md up the same cards become three columns that share
            four rows (phase / activities / deliverables / stakeholders) via subgrid, next to a row-label margin. */}
        <div
          data-reveal
          style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          className="mt-10 md:mt-14 md:grid md:grid-cols-[150px_repeat(3,1fr)] md:grid-rows-[auto_auto_auto_auto]"
        >
          {/* Row labels (desktop); decorative, the labels inside each card carry them for screen readers */}
          <div aria-hidden="true" className="hidden md:row-span-4 md:grid md:grid-rows-subgrid">
            <div />
            {dimensions.map(({ label }, r) => (
              <div key={label} className={`pr-6 ${r === 0 ? 'pt-10' : 'pt-8'} ${r === dimensions.length - 1 ? 'pb-2' : 'pb-8'}`}>
                <Kicker>{label}</Kicker>
              </div>
            ))}
          </div>

          <SwipeCarousel
            label="Roadmap in drie fasen"
            itemLabel="fase"
            rootClassName="md:col-span-3 md:row-span-4 md:grid md:grid-cols-subgrid md:grid-rows-subgrid"
            desktopClassName="md:col-span-3 md:row-span-4 md:grid md:grid-cols-subgrid md:grid-rows-subgrid md:gap-0"
            itemDesktopClassName="md:row-span-4 md:grid md:grid-rows-subgrid"
          >
            {steps.map((step, i) => {
              const lastCol = i === steps.length - 1;
              return (
                <article
                  key={step.title}
                  className="h-full border border-line bg-canvas pb-6 md:row-span-4 md:grid md:grid-rows-subgrid md:border-0 md:bg-transparent md:pb-0"
                >
                  <div className={lastCol ? '' : 'md:mr-2'}>
                    <PhaseBlock step={step} i={i} />
                  </div>
                  {dimensions.map(({ label, Cell }, r) => (
                    <div
                      key={label}
                      className={`px-5 pt-6 md:px-6 ${r === 0 ? 'md:pt-10' : 'md:pt-8'} ${r === dimensions.length - 1 ? 'md:pb-2' : 'md:pb-8'} ${
                        lastCol ? '' : 'md:border-r md:border-line'
                      }`}
                    >
                      <div className="mb-3 md:sr-only">
                        <Kicker>{label}</Kicker>
                      </div>
                      <Cell step={step} />
                    </div>
                  ))}
                </article>
              );
            })}
          </SwipeCarousel>
        </div>
      </div>
    </section>
  );
}
