export default function Services() {
  return (
    <main>
      {/* Hero with Aurora Background */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-20 lg:pb-32 overflow-hidden bg-canvas">

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6">
            DIENSTEN
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-body max-w-2xl">
            Gespecialiseerde expertise in governance, informatievoorziening en AI-context.
          </p>
        </div>
      </section>

      {/* Governance Deep Dive */}
      <section className="py-12 md:py-32 bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
            <div>
              <div className="h-1 w-16 bg-accent mb-6 md:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
                GOVERNANCE
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-body mb-6 md:mb-8 leading-relaxed">
                In een steeds complexere regelgeving en stakeholder-omgeving is governance geen optie maar een noodzaak. Wij helpen organisaties governancestructuren op te zetten die risico&apos;s beheersen, compliantie borgen en stakeholder vertrouwen opbouwen.
              </p>
              <h3 className="text-lg md:text-xl mb-4 md:mb-6 text-ink">Wat we bieden</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { title: 'Governance raamwerken', desc: 'Op maat gesneden governance modellen afgestemd op uw organisatie en industrie' },
                  { title: 'Risico & Compliance', desc: 'Systematische analyse van compliance-vereisten en risicomitigatie' },
                  { title: 'Bestuurstructuren', desc: 'Optimalisatie van boards, commissies en rapportagestructuren' },
                  { title: 'Policy & Richtlijnen', desc: 'Ontwikkeling van beleid dat op alle niveaus wordt nageleefd' }
                ].map((item, i) => (
                  <li key={i} className="border-l-4 border-accent pl-4 md:pl-6">
                    <h4 className="font-bold mb-1 text-ink">{item.title}</h4>
                    <p className="text-body text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-canvas-alt border border-line aspect-square rounded-lg h-64 md:h-80 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Informatievoorziening Deep Dive */}
      <section className="py-12 md:py-32 bg-canvas-alt border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
            <div className="bg-canvas-alt border border-line aspect-square rounded-lg h-64 md:h-80 hidden md:block order-last md:order-first"></div>
            <div>
              <div className="h-1 w-16 bg-accent mb-6 md:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
                INFORMATIEVOORZIENING
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-body mb-6 md:mb-8 leading-relaxed">
                Data en informatie zijn geen middelen om op te slaan, maar strategische assets om mee te werken. Wij helpen organisaties hun informatiestromen transformeren in duidelijke, betrouwbare inzichten die betere beslissingen ondersteunen.
              </p>
              <h3 className="text-lg md:text-xl mb-4 md:mb-6 text-ink">Wat we bieden</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { title: 'Data Strategie', desc: 'Visie en roadmap voor data als strategische asset' },
                  { title: 'BI & Analytics', desc: 'Moderne platforms voor business intelligence en data analytics' },
                  { title: 'Reporting & KPI\'s', desc: 'Ontwerp van dashboard- en rapportagestructuren' },
                  { title: 'Data Governance', desc: 'Beheer van datakwaliteit, integriteit en beveiliging' }
                ].map((item, i) => (
                  <li key={i} className="border-l-4 border-accent pl-4 md:pl-6">
                    <h4 className="font-bold mb-1 text-ink">{item.title}</h4>
                    <p className="text-body text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Context Deep Dive */}
      <section className="py-12 md:py-32 bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
            <div>
              <div className="h-1 w-16 bg-accent mb-6 md:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
                AI CONTEXT
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-body mb-6 md:mb-8 leading-relaxed">
                AI biedt enorme mogelijkheden, maar vereist ook scrupuleuze voorbereiding. We helpen u het volledige ecosysteem – strategie, technologie, mensen, ethiek – op elkaar af te stemmen zodat AI-initiatieven slagen.
              </p>
              <h3 className="text-lg md:text-xl mb-4 md:mb-6 text-ink">Wat we bieden</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { title: 'AI Strategie', desc: 'Identificatie van high-impact use cases en prioriteiten' },
                  { title: 'AI Readiness', desc: 'Beoordeling van organisatorische voorbereiding en capaciteiten' },
                  { title: 'Implementation', desc: 'Practical guidance voor pilots tot schaal en adoptie' },
                  { title: 'Governance & Risico\'s', desc: 'Ethische overwegingen, risico\'s en compliance' }
                ].map((item, i) => (
                  <li key={i} className="border-l-4 border-accent pl-4 md:pl-6">
                    <h4 className="font-bold mb-1 text-ink">{item.title}</h4>
                    <p className="text-body text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-canvas-alt border border-line aspect-square rounded-lg h-64 md:h-80 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-24 bg-canvas-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
            Laten we in gesprek gaan
          </h2>
          <p className="text-base md:text-lg text-body mb-8 md:mb-12">
            Wij helpen u governance, informatievoorziening en AI-initiatieven succesvol in te richten.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 md:px-10 py-3 md:py-4 bg-accent text-white font-bold text-sm md:text-base hover:bg-ink transition"
          >
            NEEM CONTACT OP
          </a>
        </div>
      </section>
    </main>
  );
}
