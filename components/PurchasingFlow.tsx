// Purchasing flow: the four steps from first contact to project start.
// Will replace the "Samenwerkingsvormen" section; the layout is built in a next step.

export type FlowStep = {
  number: string;
  title: string;
  microcopy: string;
};

export const flowSteps: FlowStep[] = [
  {
    number: '01',
    title: 'Context Delen',
    microcopy: 'Vraagstuk en beschikbare informatie, veilig ingediend op uw moment.',
  },
  {
    number: '02',
    title: 'Eerste Verkenning',
    microcopy: 'Korte, inhoudelijke terugkoppeling over de passende vervolgstap.',
  },
  {
    number: '03',
    title: 'Het Voorstel',
    microcopy: 'Heldere scope, inzetvorm, planning en de benodigde investering.',
  },
  {
    number: '04',
    title: 'De Start',
    microcopy: 'Na akkoord, directe opstart en contract of PO volgens afspraak.',
  },
];

// Section copy (edit freely)
const EYEBROW = 'Samenwerking';
const TITLE = 'Van eerste contact naar start';

export default function PurchasingFlow() {
  const last = flowSteps.length - 1;
  return (
    <section id="samenwerkingsvormen" className="scroll-mt-20 bg-canvas-alt py-24 md:py-32 lg:py-40">
      {/* Left-weighted composition: heading and track sit left, the right side stays deliberately empty */}
      <div className="mx-auto max-w-[1200px] px-6">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">{EYEBROW}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">{TITLE}</h2>
        </div>

        {/* Desktop: the line carries the steps. Dot and number sit on the line as one mark (the number masks
            the line behind it); title and copy hang directly underneath. */}
        <ol data-reveal className="relative mt-16 hidden md:mt-24 md:grid md:grid-cols-[repeat(4,11rem)] md:grid-rows-[auto_auto_auto] md:gap-x-10 lg:grid-cols-[repeat(4,12rem)] lg:gap-x-16">
          {/* Line from the first to the last dot: 3 column widths plus 3 gaps, at the vertical centre of the marks */}
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-5 h-px w-[calc(3*(11rem+2.5rem))] bg-ink/20 lg:w-[calc(3*(12rem+4rem))]"
          />
          {flowSteps.map((step, i) => (
            // Each step spans the three shared rows (mark / title / copy) via subgrid, so every row
            // takes the height of its tallest cell and all columns end on exactly the same baseline
            <li
              key={step.number}
              className="relative row-span-3 grid grid-rows-subgrid"
              style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
            >
              <div className="relative flex h-10 items-center">
                <span
                  aria-hidden="true"
                  className={`block h-[11px] w-[11px] shrink-0 rounded-full ${
                    i === last ? 'bg-ink' : 'border border-ink/40 bg-canvas-alt'
                  }`}
                />
                <span className="bg-canvas-alt pl-3 pr-4 font-serif text-[1.9rem] leading-none tabular-nums lining-nums text-ink">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 text-[1.35rem] text-ink">{step.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-[1.7] text-pretty">{step.microcopy}</p>
            </li>
          ))}
        </ol>

        {/* Mobile: simple vertical sequence (to be refined in a next step) */}
        <ol data-reveal className="mt-12 border-l border-ink/15 md:hidden">
          {flowSteps.map((step, i) => (
            <li key={step.number} className="relative pb-8 pl-6 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[9px] w-[9px] -translate-x-1/2 rounded-full ${
                  i === last ? 'bg-ink' : 'border border-ink/40 bg-canvas-alt'
                }`}
              />
              <p className="font-sans text-[0.72rem] font-semibold tabular-nums tracking-[0.16em] text-subtle">{step.number}</p>
              <h3 className="mt-1 text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-[0.95rem]">{step.microcopy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
