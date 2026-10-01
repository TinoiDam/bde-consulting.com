import SwipeCarousel from '@/components/SwipeCarousel';

// Roadmap matrix without rules: phases are columns, rows are what we do and what it delivers.
// DRAFT: deliverables are first proposals; adjust to your own practice.
const steps = [
  {
    title: 'Richting bepalen',
    items: ['Prioriteiten scherpstellen', 'Knelpunten, afhankelijkhedenen risico\'s begrijpen', 'Leiderschap uitlijnen op de kern'],
    deliverables: ['Gedeelde start- en probleembeeld', 'Geprioriteerde roadmap', 'Werkpakketten', 'afhankelijkheden overzicht'],
  },
  {
    title: 'Bestuurbaar maken',
    items: ['Eigenaarschap en mandaat vastleggen', 'Operationeel ritme inrichten', 'Heldere besluitvormingspaden definiëren'],
    deliverables: ['Governance & RACI', 'Besluitkalender', 'Overleg- en rapportageritme'],
  },
  {
    title: 'Realiseren en borgen',
    items: ['Monitor voortgang', 'Voorspelbare processen', 'Transitie naar de lijn / business as usual'],
    deliverables: ['Voortgangsrapportage & KPI-dashboard', 'Overdrachtsplan naar de lijn'],
  },
];

const phaseName = (t: string) => t.charAt(0) + t.slice(1).toLowerCase();
const pad = (n: number) => String(n).padStart(2, '0');

type Step = (typeof steps)[number];

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow mb-0 block">{children}</span>;
}

const rows = ['Kernactiviteiten', 'Oplevering'];

// One phase column; on mobile it is a card with its own row labels, from md up the labels live once in the left margin.
function PhaseColumn({ step, i }: { step: Step; i: number }) {
  return (
    <article className="flex h-full flex-col gap-8 border border-line bg-canvas p-6 md:row-span-3 md:grid md:grid-rows-subgrid md:gap-0 md:border-0 md:border-l md:bg-transparent md:p-0 md:pb-4 md:pl-7">
      <header className="md:pb-10">
        <span className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-subtle">Fase {pad(i + 1)}</span>
        <h3 className="mt-2 font-serif text-[1.65rem] leading-[1.2] text-ink">{phaseName(step.title)}</h3>
      </header>

      <div className="md:pb-10">
        <div className="mb-3 md:sr-only">
          <Kicker>{rows[0]}</Kicker>
        </div>
        <ul className="space-y-2">
          {step.items.map((item) => (
            <li key={item} className="font-sans text-[0.92rem] font-light leading-[1.6] text-body">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-3 md:sr-only">
          <Kicker>{rows[1]}</Kicker>
        </div>
        <ol className="space-y-2">
          {step.deliverables.map((d, n) => (
            <li key={d} className="flex gap-3">
              <span className="shrink-0 pt-[0.2em] font-sans text-[0.72rem] tabular-nums text-subtle">{pad(n + 1)}</span>
              <span className="font-sans text-[0.92rem] font-medium leading-[1.5] text-ink">{d}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

export default function MethodSection() {
  return (
    <section id="aanpak" className="scroll-mt-20 py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div data-reveal>
          <p className="eyebrow">Roadmap</p>
          <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">
            Een eenvoudige aanpak voor sneller begrip, betere besluiten en resultaat
          </h2>
        </div>

        {/* Swipe cards on mobile; from md up a label margin plus three phase columns sharing three rows via subgrid. */}
        <div
          data-reveal
          style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          className="mt-10 md:mt-16 md:grid md:grid-cols-[150px_repeat(3,1fr)] md:grid-rows-[auto_auto_auto] md:gap-x-10"
        >
          {/* Row labels (desktop); decorative, the sr-only labels in each column carry them for screen readers */}
          <div aria-hidden="true" className="hidden md:row-span-3 md:grid md:grid-rows-subgrid">
            <div />
            {rows.map((label) => (
              <div key={label} className="pt-1">
                <Kicker>{label}</Kicker>
              </div>
            ))}
          </div>

          <SwipeCarousel
            label="Roadmap in drie fasen"
            itemLabel="fase"
            rootClassName="md:col-span-3 md:row-span-3 md:grid md:grid-cols-subgrid md:grid-rows-subgrid"
            desktopClassName="md:col-span-3 md:row-span-3 md:grid md:grid-cols-subgrid md:grid-rows-subgrid"
            itemDesktopClassName="md:row-span-3 md:grid md:grid-rows-subgrid"
          >
            {steps.map((step, i) => (
              <PhaseColumn key={step.title} step={step} i={i} />
            ))}
          </SwipeCarousel>
        </div>
      </div>
    </section>
  );
}
