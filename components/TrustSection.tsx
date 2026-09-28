import Blueprint from '@/components/Blueprint';
import SwipeCarousel from '@/components/SwipeCarousel';

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
    sector: 'Financiële dienstverlening',
    role: 'Adviseur',
    quote: 'Target Operating Models, project portfolio management en stuurinformatie binnen een Global AML transformatieprogramma; Governance Risk, and Compliance (GRC)',
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
const COMPETENCES: string[] = [];

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

// Shared sector content: blueprint behind the title, sector name, optional title, description
function SectorContent({ c, i }: { c: (typeof cards)[number]; i: number }) {
  return (
    <>
      {/* Quiet blueprint layer, clipped to the title band and faded out downwards */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-8 -z-10 h-24 overflow-hidden opacity-40 transition-opacity duration-700 ease-out group-hover:opacity-80 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      >
        <Blueprint variant={i} />
      </div>
      {c.sector && <h3 className="mb-4 text-[1.75rem] md:text-[2rem] font-normal leading-[1.15] text-ink">{c.sector}</h3>}
      {c.title && <h3 className="mb-5 text-[1.9rem] md:text-[2.2rem] font-normal leading-[1.15] text-ink">{c.title}</h3>}
      <p className="font-sans text-[0.95rem] font-light leading-[1.6] text-body">{withBold(c.quote)}</p>
    </>
  );
}

export default function TrustSection() {
  return (
    <>
      {/* Positioning statement, with generous room above the grid (anchor for the hero "Expertises" button) */}
      <section id="expertise" className="scroll-mt-20 bg-canvas-alt pt-16 pb-10 md:pt-24 md:pb-16 lg:pt-[120px] lg:pb-20">
        {/* Same heading style as "Hoe dit in de praktijk eruit ziet", centred */}
        <h2 data-reveal className="max-w-5xl mx-auto px-6 text-center text-[1.45rem] sm:text-3xl md:text-[2.1rem] lg:text-[2.35rem] text-balance">
          Gespecialiseerd in het mede-vormgeven, begeleiden en vertalen van beleid en strategie naar organisatieinrichting en de concrete uitvoering daarvan.
        </h2>
      </section>

      {/* Project matrix: flat columns, separated by whitespace only */}
      <section className="bg-canvas-alt pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1360px] mx-auto px-6">
          {/* Desktop: three flat columns */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-x-12 lg:gap-x-20 md:pt-[100px]">
            {cards.map((c, i) => (
              <article
                key={i}
                data-reveal
                style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
                className="group relative isolate flex min-w-0 flex-col"
              >
                <SectorContent c={c} i={i} />
              </article>
            ))}
          </div>

          {/* Mobile: sectors as a horizontal swipe carousel of full-width cards */}
          <div data-reveal className="pt-12 md:hidden">
            <SwipeCarousel label="Sectoren" itemLabel="sector">
              {cards.map((c, i) => (
                <article key={i} className="group relative isolate h-full overflow-hidden border border-line bg-canvas px-5 pt-10 pb-8">
                  <SectorContent c={c} i={i} />
                </article>
              ))}
            </SwipeCarousel>
          </div>

          {/* Competence ribbon: the combined T-shaped skill set on one centered line */}
          {COMPETENCES.length > 0 && (
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
          )}
        </div>
      </section>
    </>
  );
}
