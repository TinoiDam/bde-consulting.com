// Roadmap matrix: columns are phases (sequence), rows are dimensions (what we do -> what it delivers -> who is involved).
// DRAFT: deliverables and stakeholders are first proposals; adjust to your own practice.
const steps = [
  {
    title: 'ALIGN',
    items: ['Prioriteiten verhelderen', 'Bottlenecks identificeren', 'Leiderschap uitlijnen op de kern'],
    deliverables: ['Nulmeting & gedeeld probleembeeld', 'Geprioriteerde roadmap'],
    stakeholders: ['Directie / MT', 'Opdrachtgever', 'Domeineigenaren'],
  },
  {
    title: 'GOVERNANCE',
    items: ['Eigenaarschap vastleggen', 'Operationeel ritme inrichten', 'Heldere besluitvormingspaden definiëren'],
    deliverables: ['Besluitvormingsstructuur & RACI', 'Overleg- en rapportageritme'],
    stakeholders: ['Stuurgroep', 'Programmamanagement', 'Business & IT-leads'],
  },
  {
    title: 'RUN',
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
    <ol className="space-y-2">
      {step.items.map((item, n) => (
        <li key={item} className="flex gap-3">
          <span className="shrink-0 pt-[0.2em] font-sans text-[0.72rem] tabular-nums text-subtle">{pad(n + 1)}</span>
          <span className="font-sans text-[0.92rem] font-light leading-[1.55] text-ink-soft">{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Deliverables({ step }: { step: Step }) {
  return (
    <ul className="space-y-2">
      {step.deliverables.map((d) => (
        <li key={d} className="font-sans text-[0.92rem] font-medium leading-[1.5] text-ink">
          {d}
        </li>
      ))}
    </ul>
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
  { label: 'Stakeholders', Cell: Stakeholders },
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
        <p className="eyebrow">Roadmap</p>
        <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">
          Van abstracte strategie naar een uitvoerbare aanpak.
        </h2>

        {/* Desktop: navy phase blocks over flat columns; only hairline dividers between phases */}
        <div className="mt-14 hidden md:grid md:grid-cols-[150px_repeat(3,1fr)] md:gap-x-0">
          <div />
          {steps.map((step, i) => (
            <div key={step.title} className={i < steps.length - 1 ? 'pr-2' : ''}>
              <PhaseBlock step={step} i={i} />
            </div>
          ))}

          {dimensions.map(({ label, Cell }, r) => (
            <div key={label} className="contents">
              <div className={`pr-6 ${r === 0 ? 'pt-10' : 'pt-8'} ${r === dimensions.length - 1 ? 'pb-2' : 'pb-8'}`}>
                <Kicker>{label}</Kicker>
              </div>
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className={`px-6 ${r === 0 ? 'pt-10' : 'pt-8'} ${r === dimensions.length - 1 ? 'pb-2' : 'pb-8'} ${
                    i < steps.length - 1 ? 'border-r border-line' : ''
                  }`}
                >
                  <Cell step={step} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile: each phase as a navy block with the three dimensions underneath */}
        <ol className="mt-10 space-y-10 md:hidden">
          {steps.map((step, i) => (
            <li key={step.title}>
              <PhaseBlock step={step} i={i} />
              <div className="space-y-6 pt-6">
                {dimensions.map(({ label, Cell }) => (
                  <div key={label}>
                    <div className="mb-3">
                      <Kicker>{label}</Kicker>
                    </div>
                    <Cell step={step} />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
