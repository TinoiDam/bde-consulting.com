export default function Insights() {
  const insights = [
    {
      title: 'De toekomst van Governance in het AI-tijdperk',
      category: 'Governance',
      date: 'September 2026',
      readTime: '8 min',
      excerpt: 'Hoe organisaties hun governancestructuren kunnen aanpassen voor het AI-tijdperk...'
    },
    {
      title: 'Data transformatie: Van meting naar actie',
      category: 'Informatievoorziening',
      date: 'Augustus 2026',
      readTime: '10 min',
      excerpt: 'Veel organisaties hebben data maar kunnen er niet mee handelen...'
    },
    {
      title: 'AI-readiness: Hoe bereid je je organisatie voor?',
      category: 'AI Context',
      date: 'Juli 2026',
      readTime: '7 min',
      excerpt: 'Een praktisch raamwerk voor het beoordelen van uw organisatie\'s AI-gereedheid...'
    },
    {
      title: 'Governance frameworks: Welke past bij jou?',
      category: 'Governance',
      date: 'Juni 2026',
      readTime: '9 min',
      excerpt: 'Er zijn verschillende governance modellen. We helpen je kiezen...'
    },
    {
      title: 'Informatievoorziening in de praktijk',
      category: 'Informatievoorziening',
      date: 'Mei 2026',
      readTime: '11 min',
      excerpt: 'Real-world voorbeelden hoe organisaties hun informatiestromen hebben geoptimaliseerd...'
    },
    {
      title: 'AI-ethiek: Strategische noodzaak, niet optioneel',
      category: 'AI Context',
      date: 'April 2026',
      readTime: '8 min',
      excerpt: 'Ethische overwegingen rond AI zijn niet alleen moreel juist...'
    }
  ];

  return (
    <main>
      {/* Hero Section with Aurora */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-20 lg:pb-32 overflow-hidden bg-canvas">

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6">
            INSIGHTS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-body max-w-2xl">
            Vooraanstaand onderzoek en expertise in governance, informatievoorziening en AI.
          </p>
        </div>
      </section>

      {/* Latest Insights Grid */}
      <section className="py-12 md:py-32 bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {insights.map((insight, i) => (
              <article
                key={i}
                className="group border-l-4 border-accent pl-4 md:pl-8 py-6 md:py-8 hover:bg-canvas-alt transition cursor-pointer"
              >
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-widest font-bold text-accent">
                    {insight.category}
                  </p>
                  <p className="text-xs md:text-sm text-muted mt-2">{insight.date} • {insight.readTime}</p>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 group-hover:text-accent transition text-ink">
                  {insight.title}
                </h3>
                <p className="text-sm md:text-base text-body leading-relaxed mb-6">
                  {insight.excerpt}
                </p>
                <button className="text-accent font-bold hover:text-ink transition text-xs md:text-sm">
                  LEES MEER →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-canvas-alt py-12 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-6">
              STAY AHEAD WITH<br className="hidden sm:block" />
              <span className="text-accent">OUR LATEST UPDATES</span>
            </h2>
            <p className="text-base md:text-lg text-body">
              Ontvang maandelijks onze nieuwe inzichten rechtstreeks in je inbox.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 md:px-6 py-3 md:py-4 bg-white border border-line text-ink placeholder-subtle text-sm md:text-base"
            />
            <button
              type="submit"
              className="px-6 md:px-8 py-3 md:py-4 bg-accent text-white font-bold hover:bg-ink transition whitespace-nowrap text-sm md:text-base"
            >
              ABONNEER
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-canvas py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
            Klaar om dieper in te duiken?
          </h2>
          <p className="text-base md:text-lg text-body mb-8 md:mb-12">
            Laten we bespreken hoe wij uw organisatie kunnen helpen.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 md:px-10 py-3 md:py-4 bg-accent text-white font-bold text-sm md:text-base hover:bg-ink transition"
          >
            CONTACT OPNEMEN
          </a>
        </div>
      </section>
    </main>
  );
}
