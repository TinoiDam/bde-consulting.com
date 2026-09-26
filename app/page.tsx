import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section - Full width */}
      <section className="relative bg-[#0f1419] text-white min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#a85a5a] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
              GOVERNANCE,<br />INFORMATIEVOORZIENING<br />& AI CONTEXT
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-300 max-w-2xl">
              Vertaald naar controleerbare structuren, uitvoerbare portfolio's en heldere implementatie.
            </p>
            <div className="flex gap-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-[#a85a5a] text-white font-bold text-lg hover:bg-[#8d4a4a] transition"
              >
                ONTDEK ONZE DIENSTEN →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 1 - Governance */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="h-2 w-20 bg-[#a85a5a] mb-8"></div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                GOVERNANCE
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Sterke governancestructuren vormen de basis voor duurzaam succes. We helpen organisaties de juiste processen, richtlijnen en controlmechanismen op te zetten voor schaalbare groei.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">Risicoanalyse en compliancekaders</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">Bestuurstructuren en verantwoordelijkheden</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">Stakeholdermanagement</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#a85a5a]/15 to-[#0f1419]/10 aspect-square rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Featured Section 2 - Informatievoorziening */}
      <section className="py-32 bg-[#f9f7f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="bg-gradient-to-br from-[#0f1419]/10 to-[#a85a5a]/15 aspect-square rounded-lg order-last md:order-first"></div>
            <div>
              <div className="h-2 w-20 bg-[#a85a5a] mb-8"></div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                INFORMATIEVOORZIENING
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Data is een strategische asset. We transformeren informatiestromen in actionable intelligence waarmee u sneller en beter kunt beslissen.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">Data strategie en architectuur</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">Business Intelligence &amp; Analytics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">Reporting en performance management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 3 - AI Context */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="h-2 w-20 bg-[#a85a5a] mb-8"></div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                AI CONTEXT
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                AI transformeert hoe organisaties werken. We helpen u dit technologische potentieel praktisch in te zetten, afgestemd op uw bedrijfsdoelen en organisatiebrede readiness.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">AI-strategie en use-case identificatie</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">Implementatie en change management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#a85a5a] font-bold">→</span>
                  <span className="text-gray-600">Risico's en ethische overwegingen</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#a85a5a]/15 to-[#0f1419]/10 aspect-square rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-32 bg-[#f9f7f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">STAY AHEAD WITH</h2>
            <h2 className="text-5xl font-bold text-[#a85a5a] tracking-tight">OUR LATEST INSIGHTS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'De toekomst van Governance in het AI-tijdperk', date: 'September 2026', time: '8 min' },
              { title: 'Data transformatie: Van meting naar actie', date: 'Augustus 2026', time: '10 min' },
              { title: 'AI implementation: Hoe beginnen?', date: 'Juli 2026', time: '7 min' }
            ].map((insight, i) => (
              <Link
                key={i}
                href="/insights"
                className="bg-white p-8 hover:shadow-xl transition group cursor-pointer"
              >
                <p className="text-[#a85a5a] font-bold text-xs mb-4 uppercase tracking-widest">{insight.date}</p>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-[#a85a5a] transition">
                  {insight.title}
                </h3>
                <p className="text-gray-500 text-sm">{insight.time} leesttijd</p>
              </Link>
            ))}
          </div>
          <Link href="/insights" className="mt-12 inline-block text-[#a85a5a] font-bold hover:text-[#8d4a4a] text-lg">
            ALLE INSIGHTS →
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0f1419] text-white py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
            LATEN WE SAMEN TRANSFORMEREN
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Wij helpen organisaties hun governance, informatievoorziening en AI-capaciteiten op het volgende niveau te brengen.
          </p>
          <Link
            href="#contact"
            className="inline-block px-10 py-4 bg-[#a85a5a] text-white font-bold text-lg hover:bg-[#8d4a4a] transition"
          >
            CONTACT OPNEMEN →
          </Link>
        </div>
      </section>
    </main>
  );
}
