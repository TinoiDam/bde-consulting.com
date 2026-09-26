export default function Insights() {
  const insights = [
    {
      title: 'De toekomst van Governance in de AI-era',
      date: 'September 2026',
      category: 'Governance',
      excerpt: 'Hoe organisaties hun governancestructuren kunnen aanpassen voor het AI-tijdperk...',
      readTime: '8 min'
    },
    {
      title: 'Data als strategische asset: Een roadmap',
      date: 'Augustus 2026',
      category: 'Informatievoorziening',
      excerpt: 'Stap-voor-stap gids voor het transformeren van data naar strategische waarde...',
      readTime: '10 min'
    },
    {
      title: 'AI Readiness: Waar moet u beginnen?',
      date: 'Juli 2026',
      category: 'AI Context',
      excerpt: 'Een praktisch framework voor het beoordelen van uw organisatie\'s AI-gereedheid...',
      readTime: '7 min'
    }
  ];

  return (
    <main className="bg-[#f9f7f5]">
      {/* Hero */}
      <section className="bg-[#0f1419] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Insights & Gedachten</h1>
          <p className="text-xl text-[#d4a5a5]">Vooraanstaand onderzoek en expertise</p>
        </div>
      </section>

      {/* Insights */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {insights.map((insight, i) => (
              <article key={i} className="group pb-12 border-b border-gray-200 last:border-0">
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-sm text-[#a85a5a] font-semibold uppercase tracking-wide">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-500">{insight.date}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-[#a85a5a] transition cursor-pointer">
                  {insight.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{insight.readTime} leesttijd</span>
                  <button className="text-[#a85a5a] font-semibold hover:gap-2 flex items-center gap-1 transition">
                    Lees meer →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0f1419] text-white py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Blijf geïnformeerd</h2>
          <p className="text-[#d4a5a5] mb-8">Ontvang onze laatste inzichten rechtstreeks in je inbox</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="je@email.com"
              className="flex-1 px-4 py-3 bg-[#1a1f2e] text-white placeholder-gray-500 border border-[#a85a5a]/30"
            />
            <button className="px-6 py-3 bg-[#a85a5a] hover:bg-[#8d4a4a] transition font-semibold">
              Abonneer
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
