export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0f1419] text-white py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
            ONZE DIENSTEN
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
            Gespecialiseerde expertise in governance, informatievoorziening en AI.
          </p>
        </div>
      </section>

      {/* Governance Deep Dive */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
            <div>
              <div className="h-2 w-20 bg-[#a85a5a] mb-6 md:mb-8"></div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                GOVERNANCE
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                In een steeds complexere regelgeving en stakeholder-omgeving is governance geen optie maar een noodzaak. Wij helpen organisaties governancestructuren op te zetten die risico's beheersen, compliantie borgen en stakeholder vertrouwen opbouwen.
              </p>
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Wat we bieden</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { title: 'Governance raamwerken', desc: 'Op maat gesneden governance modellen afgestemd op uw organisatie en industrie' },
                  { title: 'Risico & Compliance', desc: 'Systematische analyse van compliance-vereisten en risicomitigatie' },
                  { title: 'Bestuurstructuren', desc: 'Optimalisatie van boards, commissies en rapportagestructuren' },
                  { title: 'Policy & Richtlijnen', desc: 'Ontwikkeling van beleid dat op alle niveaus wordt nageleefd' }
                ].map((item, i) => (
                  <li key={i} className="border-l-4 border-[#a85a5a] pl-4 md:pl-6">
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#a85a5a]/20 to-[#0f1419]/10 aspect-square rounded-lg h-64 md:h-80 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Informatievoorziening Deep Dive */}
      <section className="py-12 md:py-32 bg-[#f9f7f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
            <div className="bg-gradient-to-br from-[#0f1419]/10 to-[#a85a5a]/20 aspect-square rounded-lg h-64 md:h-80 hidden md:block order-last md:order-first"></div>
            <div>
              <div className="h-2 w-20 bg-[#a85a5a] mb-6 md:mb-8"></div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                INFORMATIEVOORZIENING
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Data en informatie zijn geen middelen om op te slaan, maar strategische assets om mee te werken. Wij helpen organisaties hun informatiestromen transformeren in duidelijke, betrouwbare inzichten die betere beslissingen ondersteunen.
              </p>
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Wat we bieden</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { title: 'Data Strategie', desc: 'Visie en roadmap voor data als strategische asset' },
                  { title: 'BI & Analytics', desc: 'Moderne platforms voor business intelligence en data analytics' },
                  { title: 'Reporting & KPI\'s', desc: 'Ontwerp van dashboard- en rapportagestructuren' },
                  { title: 'Data Governance', desc: 'Beheer van datakwaliteit, integriteit en beveiliging' }
                ].map((item, i) => (
                  <li key={i} className="border-l-4 border-[#a85a5a] pl-4 md:pl-6">
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Context Deep Dive */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
            <div>
              <div className="h-2 w-20 bg-[#a85a5a] mb-6 md:mb-8"></div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                AI CONTEXT
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                AI biedt enorme mogelijkheden, maar vereist ook scrupuleuze voorbereiding. We helpen u het volledige ecosysteem – strategie, technologie, mensen, ethiek – op elkaar af te stemmen zodat AI-initiatieven slagen.
              </p>
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Wat we bieden</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { title: 'AI Strategie', desc: 'Identificatie van high-impact use cases en prioriteiten' },
                  { title: 'AI Readiness', desc: 'Beoordeling van organisatorische voorbereiding en capaciteiten' },
                  { title: 'Implementation', desc: 'Practical guidance voor pilots tot schaal en adoptie' },
                  { title: 'Governance & Risico\'s', desc: 'Ethische overwegingen, risico\'s en compliance' }
                ].map((item, i) => (
                  <li key={i} className="border-l-4 border-[#a85a5a] pl-4 md:pl-6">
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#a85a5a]/20 to-[#0f1419]/10 aspect-square rounded-lg h-64 md:h-80 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#0f1419] text-white py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">
            Wij helpen u het volledige potentieel te benutten
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12">
            Laten we in gesprek gaan over uw specifieke uitdagingen.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 md:px-10 py-3 md:py-4 bg-[#a85a5a] text-white font-bold text-sm md:text-base hover:bg-[#8d4a4a] transition"
          >
            NEEM CONTACT OP
          </a>
        </div>
      </section>
    </main>
  );
}
