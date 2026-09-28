import Blueprint from '@/components/Blueprint';

// PLACEHOLDER CONTENT: replace quotes and tags with final copy
// Card anatomy: eyebrow (sector) -> optional title -> outcome copy -> scope tags (role is not shown)
const cards: { sector?: string; role?: string; title?: string; quote: string; tags: string[] }[] = [
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

// Consolidated competences, shown once as a full-width ribbon under the sector grid
const COMPETENCES = [
  'Projectmanagement',
  'Data Governance',
  'Procesbeheersing',
  'Portfolio Management',
  'Business Intelligence',
  'Machine Learning & AI',
  'Verandermanagement',
  'AI Governance',
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
      {/* Positioning statement, with generous room above the grid */}
      <section className="bg-canvas-alt pt-16 pb-10 md:pt-24 md:pb-16 lg:pt-[120px] lg:pb-20">
        <p data-reveal className="max-w-4xl mx-auto px-6 sm:px-12 md:px-0 text-center text-balance font-sans font-light text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-[1.6] tracking-[0.01em] text-ink">
          <b>Interim</b> inzetbaar binnen <b>digitale</b> transformaties en programma&apos;s, of flexibel beschikbaar voor losse, onafhankelijke <b>adviestrajecten</b>. 
        </p>
      </section>

      {/* Project matrix: flat columns, separated by whitespace only */}
      <section className="bg-canvas-alt pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-12 lg:gap-x-20 pt-12 md:pt-[100px]">
            {cards.map((c, i) => {
              return (
                <article
                  key={i}
                  data-reveal
                  style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
                  className="group relative isolate flex min-w-0 flex-col py-10 first:pt-0 last:pb-0 md:py-0"
                >
                  {/* Quiet blueprint layer behind the header */}
                  {/* Clipped to the title band and faded out downwards, so body text always sits on a clean background */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-8 -z-10 h-24 overflow-hidden opacity-40 transition-opacity duration-700 ease-out group-hover:opacity-80 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
                  >
                    <Blueprint variant={i} />
                  </div>
                  {c.sector && (
                    <h3 className="mb-4 text-[1.75rem] md:text-[2rem] font-normal leading-[1.15] text-ink">{c.sector}</h3>
                  )}
                  {c.title && (
                    <h3 className="mb-5 text-[1.9rem] md:text-[2.2rem] font-normal leading-[1.15] text-ink">{c.title}</h3>
                  )}
                  <p className="font-sans text-[0.95rem] font-light leading-[1.6] text-body">{withBold(c.quote)}</p>
                </article>
              );
            })}
          </div>

          {/* Competence ribbon: the combined T-shaped skill set on one centered line */}
          <ul
            aria-label="Competenties"
            data-reveal
            className="mt-16 flex w-full flex-wrap justify-center gap-x-2 gap-y-2 text-center font-sans text-[0.7rem] font-normal uppercase tracking-[0.15em] text-muted min-[1400px]:-mx-6 min-[1400px]:w-[calc(100%+3rem)] min-[1400px]:flex-nowrap min-[1400px]:gap-x-1.5 min-[1400px]:tracking-[0.12em]"
          >
            {COMPETENCES.map((c, n) => (
              <li key={c} className="whitespace-nowrap transition-colors duration-300 hover:text-ink">
                {c}
                {n < COMPETENCES.length - 1 && (
                  <span aria-hidden="true" className="ml-2 text-subtle">
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
