// Purchasing flow (on /services): the four steps from first contact to project start.
// A step either explains (title + microcopy) or acts (cta): step 01 is the action itself.

export type FlowStep = {
  number: string;
  title?: string;
  microcopy?: string;
  cta?: { label: string; href: string; note?: string };
  // Closing step as a card: engagement options plus a prominent button
  options?: { name: string; note: string }[];
  action?: { label: string; href: string };
};

export const flowSteps: FlowStep[] = [
  {
    number: '01',
    // Contact CTA with a cost reassurance underneath; points to the contact section until a contact form exists
    cta: { label: 'Contact', href: '#contact', note: 'Uw vraag en beschikbare informatie delen is kosteloos.' },
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
    microcopy: 'Na akkoord selecteren we de best passende inzetvorm voor directe, inhoudelijke executie:',
    options: [
      { name: 'Interim Management', note: 'Enterprise regie' },
      { name: 'Deepdives & Sprints', note: '2-4 weken focus' },
      { name: 'Retainer', note: 'Sparring' },
      { name: 'Fractional', note: 'Flexibele sturing' },
    ],
    action: { label: 'Bekijk opties & tarieven', href: '#inzetvormen' },
  },
];

// Section copy (edit freely)
const EYEBROW = 'Samenwerking';
const TITLE = 'Van eerste contact naar start';

export default function PurchasingFlow() {
  const last = flowSteps.length - 1;
  return (
    <section id="samenwerkingsvormen" className="scroll-mt-20 bg-canvas py-24 md:py-32 lg:py-40">
      {/* Left-weighted composition: heading and track sit left, the right side stays deliberately empty */}
      <div className="mx-auto max-w-[1200px] px-6">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">{EYEBROW}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">{TITLE}</h2>
        </div>

        {/* One list of steps. The line carries the steps: dot and number sit on it as one mark (the number masks
            the line behind it), title and copy hang underneath. Mobile: vertical line; md+: horizontal track. */}
        <ol
          data-reveal
          className="relative mt-12 md:mt-24 md:grid md:grid-cols-[repeat(4,11rem)] md:grid-rows-[auto_auto_auto_1fr] md:gap-x-10 lg:grid-cols-[repeat(3,12rem)_15rem] lg:gap-x-16"
        >
          {/* Horizontal line (md+): from the first to the last dot, 3 column widths plus 3 gaps */}
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-5 hidden h-px w-[calc(3*(11rem+2.5rem))] bg-ink/20 md:block lg:w-[calc(3*(12rem+4rem))]"
          />
          {flowSteps.map((step, i) => (
            // md+: each step spans the three shared rows (mark / title / copy) via subgrid, so all columns
            // end on exactly the same baseline
            <li key={step.number} className="relative pb-10 last:pb-0 md:row-span-4 md:grid md:grid-rows-subgrid md:pb-0">
              {/* Vertical connector to the next step (mobile only) */}
              {i < last && <span aria-hidden="true" className="absolute left-[5px] top-5 h-full w-px bg-ink/20 md:hidden" />}
              <div className="relative flex h-10 items-center">
                <span
                  aria-hidden="true"
                  className={`relative block h-[11px] w-[11px] shrink-0 rounded-full ${
                    i === last ? 'bg-ink' : 'border border-ink/40 bg-canvas'
                  }`}
                />
                <span className="bg-canvas pl-3 pr-4 font-serif text-[1.9rem] leading-none tabular-nums lining-nums text-ink">
                  {step.number}
                </span>
              </div>
              {step.cta ? (
                // Action step: the button (plus risk reducer) takes the place of title + copy
                // md+: spans the title / copy / spare rows, so its height never stretches the rows of the other steps
                <div className="mt-3 pl-7 md:row-span-3 md:mt-5 md:pl-0">
                  <div>
                    <a
                      href={step.cta.href}
                      className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-[4px] bg-ink px-4 py-2.5 font-sans text-[0.78rem] font-semibold text-white transition-colors duration-300 hover:bg-accent"
                    >
                      {/* Mail icon for a contact action */}
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="1.5" />
                        <path d="m3.5 6 8.5 7 8.5-7" />
                      </svg>
                      {step.cta.label}
                    </a>
                  </div>
                  {step.cta.note && <p className="mt-2.5 max-w-[13rem] font-sans text-[0.72rem] leading-[1.5] text-muted text-pretty">{step.cta.note}</p>}
                </div>
              ) : step.options ? (
                // Closing step as a subtle card spanning the title / copy / spare rows; text stays aligned with the
                // other steps because the card's padding sits outside the column (-mx-5 / px-5)
                <div className="mt-3 ml-7 rounded-[6px] border border-line bg-white px-5 pb-6 md:row-span-3 md:mt-0 md:-mx-5">
                  <h3 className="pt-4 text-[1.35rem] text-ink md:pt-5">{step.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-[1.7] text-pretty md:mt-3">{step.microcopy}</p>
                  <ul className="mt-5 divide-y divide-line border-y border-line">
                    {step.options.map((o) => (
                      <li key={o.name} className="py-2.5">
                        <span className="block font-sans text-[0.85rem] font-medium text-ink">{o.name}</span>
                        <span className="block font-sans text-[0.75rem] text-muted">{o.note}</span>
                      </li>
                    ))}
                  </ul>
                  {step.action && (
                    <a
                      href={step.action.href}
                      className="group mt-6 flex w-full items-center justify-between gap-3 rounded-[4px] bg-ink px-5 py-3.5 font-sans text-[0.85rem] font-semibold text-white transition-colors duration-300 hover:bg-accent"
                    >
                      {step.action.label}
                      <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  )}
                </div>
              ) : (
                <>
                  <h3 className="mt-3 pl-7 text-[1.35rem] text-ink md:mt-5 md:pl-0">{step.title}</h3>
                  <p className="mt-2 pl-7 text-[0.9rem] leading-[1.7] text-pretty md:mt-3 md:pl-0">{step.microcopy}</p>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
