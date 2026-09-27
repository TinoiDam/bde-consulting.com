// PLACEHOLDER CONTENT: replace quotes and tags with final copy
const cards: { sector?: string; role?: string; quote: string; tags: string[] }[] = [
  {
    sector: 'Energy & Utilities',
    role: 'Business Consultant',
    quote: 'Datamigratie voor een portfolio van 85.000+ grootzakelijke contracten onder een harde deadline',
    tags: ['Projectmanagement', 'Big Data', 'Procesbeheersing'],
  },
  {
    sector: 'Financial Services',
    role: 'Adviseur',
    quote: 'Target Operating Models project portfolio stuurinformatie binnen een AML transformatieprogramma en Global Governance Risk, and Compliance (GRC)',
    tags: ['Portfolio Management', 'Projectmanagement', 'Business Intelligence'],
  },
  {
    sector: 'Publieke sector',
    role: 'Business Consultant & Projectmanager',
    quote: 'End-to-end IT borging van zowel complexe reken- en ramingsmodellen, als een AI governance kader voor algoritmen.',
    tags: ['Machine Learning en AI', 'Projectmanagement', 'Verandermanagement', 'AI Governance'],
  },
];

// Renders **text** as bold, so emphasis can be set directly in the strings above
const withBold = (text: string) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  );

export default function TrustSection() {
  return (
    <>
      {/* Positioning statement */}
      <section className="bg-[#f8fafc] pt-16 pb-12 md:pt-20 md:pb-14 lg:pt-[100px] lg:pb-[60px]">
        <p className="max-w-4xl mx-auto px-6 sm:px-12 md:px-0 text-center text-balance font-sans font-light text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-[1.6] tracking-[0.01em] text-[#0A1931]">
          <b>Interim</b> inzetbaar binnen <b>digitale</b> transformaties en programma&apos;s, of flexibel beschikbaar voor losse, onafhankelijke <b>adviestrajecten</b>. 
        </p>
      </section>
      {/* Project cards */}
      <section className="bg-[#f8fafc] py-12 md:py-16 lg:py-20">
        <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-[4vw] grid grid-cols-1 md:grid-cols-3 items-stretch gap-4 lg:gap-5">
          {cards.map((c, i) => (
            <figure
              key={i}
              className="flex h-full flex-col justify-between gap-5 rounded-2xl bg-white px-6 py-6 md:px-7 md:py-6 shadow-[0_1px_3px_rgba(10,25,49,0.04),0_12px_32px_-8px_rgba(10,25,49,0.08)]"
            >
              <div>
                {c.sector && (
                  <div className="mb-4">
                    <p className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[#0A1931]/55">
                      <span aria-hidden="true" className="h-px w-6 bg-[#1D4ED8]/60" />
                      {c.sector}
                    </p>
                    {c.role && <p className="mt-1 pl-9 text-xs text-[#0A1931]/45">{c.role}</p>}
                  </div>
                )}
                <blockquote className="text-sm md:text-[0.9375rem] leading-relaxed text-[#0A1931]">
                  {withBold(c.quote)}
                </blockquote>
              </div>
              <figcaption>
                <ul className="flex flex-wrap gap-1" aria-label="Thema's">
                  {c.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-[#DBE7FB] bg-[#F3F7FE] px-1.5 py-0.5 text-[0.6875rem] font-medium leading-4 text-[#2F5BD3]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
