export default function Portfolio() {
  const projects = [
    {
      title: 'Governance Framework Transformatie',
      subtitle: 'Financiële Instelling',
      description: 'Opzet van geïntegreerd governance framework voor multinational operatie met focus op compliance en risicobeheersing.',
      impact: 'Risico\'s gemitigeerd, stakeholder vertrouwen verhoogd',
      tags: ['Governance', 'Risk Management', 'Compliance']
    },
    {
      title: 'Data Strategie & BI Platform',
      subtitle: 'Retail Organisatie',
      description: 'Ontwikkeling van data strategie en implementatie van modern analytics platform voor real-time bedrijfsinzichten.',
      impact: 'Bessere data-gedreven beslissingen, verhoogde operationele efficientie',
      tags: ['Data Strategy', 'Business Intelligence', 'Analytics']
    },
    {
      title: 'AI Transformation & Implementation',
      subtitle: 'Technologie Bedrijf',
      description: 'Strategische AI roadmap met identificatie van use cases en organisatorische voorbereiding voor implementatie.',
      impact: 'Klaar voor AI transformatie, mitigatie van implementatierisico\'s',
      tags: ['AI Strategy', 'Transformation', 'Change Management']
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0f1419] text-white py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
            ONS WERK
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
            Succesvolle projecten waarbij we organisaties hebben getransformeerd.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12 md:space-y-24">
            {projects.map((project, i) => (
              <div key={i}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-start mb-8 md:mb-12">
                  <div>
                    <div className="h-2 w-20 bg-[#a85a5a] mb-4 md:mb-6"></div>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-base md:text-lg text-[#a85a5a] font-semibold mb-4 md:mb-6">
                      {project.subtitle}
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                    <div>
                      <h4 className="font-bold mb-2 text-xs uppercase tracking-wide">Impact</h4>
                      <p className="text-gray-600 text-sm md:text-base">{project.impact}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#a85a5a]/15 to-[#0f1419]/10 aspect-square rounded-lg h-48 md:h-80 hidden md:block"></div>
                </div>
                <div className="flex gap-2 pb-8 md:pb-12 border-b border-gray-200 last:border-0 flex-wrap">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 md:px-4 py-2 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-[#f9f7f5] py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Bent u klaar voor transformatie?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Laten we kijken hoe wij uw organisatie kunnen helpen haar governance, informatievoorziening en AI-capaciteiten te moderniseren.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#a85a5a] text-white font-bold text-sm md:text-base hover:bg-[#8d4a4a] transition"
              >
                CONTACT OPNEMEN
              </a>
            </div>
            <div className="bg-gradient-to-br from-[#0f1419]/10 to-[#a85a5a]/15 aspect-square rounded-lg h-48 md:h-80 hidden md:block"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
