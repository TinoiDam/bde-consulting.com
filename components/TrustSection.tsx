// PLACEHOLDER CONTENT: replace quotes and tags with final copy
const cards: { sector?: string; quote: string; tags: string[] }[] = [
  {
    sector: 'Energy & Utilities',
    quote: 'Datamigratie voor een portfolio van 85.000+ grootzakelijke contracten onder een harde deadline',
    tags: ['Projectmanagement', 'Data', 'Procesbeheersing'],
  },
  {
    quote: 'Scherp in analyse, pragmatisch in uitvoering. Ze vertalen complexe governance naar afspraken die in de praktijk werken.',
    tags: ['Governance', 'Risk Management', 'Compliance'],
  },
  {
    quote: 'Voelde als een echte partner aan tafel. De waarde van de samenwerking was vele malen groter dan de investering.',
    tags: ['Stakeholdermanagement', 'Transformatie', 'Advies'],
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#F7F6F3]">
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-[4vw]">
        <p className="max-w-4xl mx-auto px-2 sm:px-6 md:px-0 text-center text-balance font-sans font-light text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-[1.6] tracking-[0.01em] text-[#0A1931]">
          Interim inzetbaar binnen digitale transformaties en programma&apos;s, of flexibel beschikbaar voor losse, onafhankelijke adviestrajecten. In rollen als project- en programmamanager, (workstream) lead of adviseur.
        </p>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 items-stretch gap-4 lg:gap-5">
          {cards.map((c, i) => (
            <figure
              key={i}
              className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-white px-7 py-7 md:px-8 md:py-7 shadow-[0_1px_3px_rgba(10,25,49,0.04),0_12px_32px_-8px_rgba(10,25,49,0.08)]"
            >
              <div>
                {c.sector && (
                  <p className="mb-4 flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[#0A1931]/55">
                    <span aria-hidden="true" className="h-px w-6 bg-[#1D4ED8]/60" />
                    {c.sector}
                  </p>
                )}
                <blockquote className="text-base md:text-[1.0625rem] leading-relaxed text-[#0A1931]">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption>
                <ul className="flex flex-wrap gap-2" aria-label="Thema's">
                  {c.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-[#DBE7FB] bg-[#EEF5FF] px-3 py-1.5 text-sm font-medium text-[#1D4ED8]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
