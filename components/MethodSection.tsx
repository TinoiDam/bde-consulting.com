import SwipeCarousel from '@/components/SwipeCarousel';

// Roadmap as an asymmetric triptych: three phases, each with what we do and what it delivers.
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

// Asymmetric triptych: each phase has its own rhythm instead of shared table rows. Phase 01 is deliberately
// dominant (without direction the rest is worthless): larger title, more air between title and copy. Phases 02 and
// 03 are tighter, as governance and embedding are by nature more concrete, and sit slightly lower, so the three
// read as a magazine spread rather than a framework. On mobile each phase is a swipe card.
const rhythm = [
  {
    col: 'md:pt-0',
    title: 'text-[1.9rem] md:text-[2.4rem] lg:text-[2.75rem]',
    gapTitle: 'md:mt-14',
    gapBlock: 'md:mt-12',
    text: 'md:text-[1.02rem] md:leading-[1.7]',
  },
  { col: 'md:pt-10 md:border-l md:pl-8', title: 'text-[1.6rem] md:text-[1.7rem]', gapTitle: 'md:mt-8', gapBlock: 'md:mt-8', text: '' },
  { col: 'md:pt-16 md:border-l md:pl-8', title: 'text-[1.6rem] md:text-[1.55rem]', gapTitle: 'md:mt-7', gapBlock: 'md:mt-7', text: '' },
];

function PhaseColumn({ step, i }: { step: Step; i: number }) {
  const r = rhythm[i];
  return (
    <article className={`flex h-full flex-col border border-line bg-canvas p-6 md:h-auto md:border-0 md:border-line md:bg-transparent md:p-0 ${r.col}`}>
      <header>
        <span className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">Fase {pad(i + 1)}</span>
        <h3 className={`mt-2 font-serif leading-[1.15] text-ink ${r.title}`}>{phaseName(step.title)}</h3>
      </header>

      <div className={`mt-8 ${r.gapTitle}`}>
        <div className="mb-3">
          <Kicker>{rows[0]}</Kicker>
        </div>
        <ul className="space-y-2">
          {step.items.map((item) => (
            <li key={item} className={`font-sans text-[0.95rem] font-normal leading-[1.6] text-ink-soft ${r.text}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={`mt-8 ${r.gapBlock}`}>
        <div className="mb-3">
          <Kicker>{rows[1]}</Kicker>
        </div>
        <ol className="space-y-2">
          {step.deliverables.map((d, n) => (
            <li key={d} className="flex gap-3">
              <span className="shrink-0 pt-[0.2em] font-sans text-[0.72rem] font-medium tabular-nums text-muted">{pad(n + 1)}</span>
              <span className="font-sans text-[0.95rem] font-medium leading-[1.5] text-ink">{d}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

// Full methodology, rendered as the /aanpak page (the homepage carries a short teaser that links here)
export default function MethodSection() {
  return (
    <section id="methodiek" className="pt-32 pb-10 md:pt-40 md:pb-14 lg:pt-44 lg:pb-16">
      {/* Same container as the homepage sections, so titles share one left edge */}
      <div className="mx-auto max-w-6xl px-6 xl:max-w-[88rem]">
        <div data-reveal>
          <p className="eyebrow">Aanpak</p>
          <h1 className="max-w-3xl text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem] text-balance">Methodiek &amp; opleveringen</h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] md:text-[1.15rem] text-pretty">
            Vanuit een bewezen framework loods ik organisaties door de drie cruciale fasen van strategie-executie: van
            het eerste gedeelde startbeeld tot de uiteindelijke overdracht naar de business.
          </p>
        </div>

        {/* Swipe cards on mobile; from md up an asymmetric 45 / 30 / 25 triptych */}
        <div data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties} className="mt-10 md:mt-16">
          <SwipeCarousel
            label="Roadmap in drie fasen"
            itemLabel="fase"
            desktopClassName="md:grid md:grid-cols-[45fr_30fr_25fr] md:items-start md:gap-x-10 lg:gap-x-14"
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
