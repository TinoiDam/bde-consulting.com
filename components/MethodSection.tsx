const steps = [
  {
    title: 'ALIGN',
    items: ['Prioriteiten verhelderen', 'Bottlenecks identificeren', 'Leiderschap uitlijnen op de kern'],
  },
  {
    title: 'GOVERNANCE',
    items: ['Eigenaarschap vastleggen', 'Operationeel ritme inrichten', 'Heldere besluitvormingspaden definiëren'],
  },
  {
    title: 'RUN',
    items: ['Monitor voortgang', 'Voorspelbare processen', 'Transitie naar de lijn / business as usual'],
  },
];


// Step highlighted with the filled blue node
const ACTIVE = 1;

export default function MethodSection() {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="mx-auto mt-4 max-w-4xl font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-[-0.01em] text-[#0A1931] text-balance">
          Een simpele aanpak voor resultaten
        </h2>

        <ol className="relative mt-16 md:mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {/* Connector line through the nodes (desktop) */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-8 hidden h-px bg-[#e2e8f0] md:block" />
          {steps.map((step, i) => {
            const active = i === ACTIVE;
            return (
              <li key={step.title} className="relative flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className={`relative flex h-16 w-16 items-center justify-center rounded-full text-lg font-medium ${
                    active
                      ? 'bg-[#2A4BA8] text-white shadow-[0_10px_24px_-8px_rgba(42,75,168,0.55)]'
                      : 'border-2 border-[#e2e8f0] bg-white text-[#94a3b8]'
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-8 text-lg md:text-xl font-semibold text-[#0A1931]">{step.title}</h3>
                {/* Deliverable list: micro index numbers, uniform light text */}
                <ol className="mt-5 w-full max-w-[17rem] space-y-2.5 text-left text-[0.95rem] leading-[1.65]">
                  {step.items.map((item, n) => (
                    <li key={item} className="flex">
                      <span aria-hidden="true" className="mr-3 shrink-0 pt-[0.2em] font-sans text-[0.75rem] font-normal tabular-nums text-[#94a3b8]">
                        {String(n + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans font-light text-[#334155]">{item}</span>
                    </li>
                  ))}
                </ol>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
