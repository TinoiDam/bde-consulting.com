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
      {/* Hero Section */}
      <section className="bg-[#0f1419] text-white py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
            INSIGHTS & GEDACHTEN
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
            Vooraanstaand onderzoek en expertise in governance, data en AI.
          </p>
        </div>
      </section>

      {/* Latest Insights Grid */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {insights.map((insight, i) => (
              <article
                key={i}
                className="group border-l-4 border-[#a85a5a] pl-4 md:pl-8 py-6 md:py-8 hover:shadow-lg transition cursor-pointer"
              >
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-widest font-bold text-[#a85a5a]">
                    {insight.category}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">{insight.date} • {insight.readTime}</p>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 group-hover:text-[#a85a5a] transition leading-tight">
                  {insight.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                  {insight.excerpt}
                </p>
                <button className="text-[#a85a5a] font-bold hover:text-[#8d4a4a] transition text-xs md:text-sm">
                  LEES MEER →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#f9f7f5] py-12 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              STAY AHEAD WITH<br className="hidden sm:block" />
              <span className="text-[#a85a5a]">OUR LATEST UPDATES</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Ontvang maandelijks onze nieuwe inzichten rechtstreeks in je inbox.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 md:px-6 py-3 md:py-4 bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm md:text-base"
            />
            <button
              type="submit"
              className="px-6 md:px-8 py-3 md:py-4 bg-[#a85a5a] text-white font-bold hover:bg-[#8d4a4a] transition whitespace-nowrap text-sm md:text-base"
            >
              ABONNEER
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0f1419] text-white py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">
            Klaar om dieper in te duiken?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12">
            Laten we bespreken hoe wij uw organisatie kunnen helpen.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 md:px-10 py-3 md:py-4 bg-[#a85a5a] text-white font-bold text-sm md:text-base hover:bg-[#8d4a4a] transition"
          >
            CONTACT OPNEMEN
          </a>
        </div>
      </section>
    </main>
  );
}
