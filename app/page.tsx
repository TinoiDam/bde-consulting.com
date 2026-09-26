import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#f9f7f5]">
      {/* Hero Section */}
      <section className="bg-[#0f1419] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Governance, Informatievoorziening & AI
            </h1>
            <p className="text-xl md:text-2xl text-[#d4a5a5] mb-8 leading-relaxed">
              Vertaald naar controleerbare structuren, uitvoerbare portfolio's en heldere implementatie.
            </p>
            <div className="flex gap-4">
              <Link
                href="/services"
                className="px-8 py-3 bg-[#a85a5a] text-white font-semibold hover:bg-[#8d4a4a] transition"
              >
                Ontdek onze diensten
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 border-2 border-[#a85a5a] text-[#a85a5a] font-semibold hover:bg-[#a85a5a]/10 transition"
              >
                Ons werk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">Wat we doen</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Governance', desc: 'Structuren en processen voor duurzaam beheer' },
              { title: 'Informatievoorziening', desc: 'Data-driven inzichten voor betere beslissingen' },
              { title: 'AI Context', desc: 'Strategische implementatie van AI-technologie' }
            ].map((service, i) => (
              <div key={i} className="group">
                <div className="h-1 w-16 bg-[#a85a5a] mb-4 group-hover:w-24 transition-all"></div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0f1419] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om te transformeren?</h2>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-[#a85a5a] text-white font-semibold hover:bg-[#8d4a4a] transition"
          >
            Laten we spreken
          </Link>
        </div>
      </section>
    </main>
  );
}
