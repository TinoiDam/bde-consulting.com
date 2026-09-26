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
      <section className="bg-[#0f1419] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            ONS WERK
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Succesvolle projecten waarbij we organisaties hebben getransformeerd.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {projects.map((project, i) => (
              <div key={i}>
                <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
                  <div>
                    <div className="h-2 w-20 bg-[#a85a5a] mb-6"></div>
                    <h2 className="text-4xl font-bold mb-2 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-lg text-[#a85a5a] font-semibold mb-6">
                      {project.subtitle}
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                    <div>
                      <h4 className="font-bold mb-2 text-sm uppercase tracking-wide">Impact</h4>
                      <p className="text-gray-600">{project.impact}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#a85a5a]/15 to-[#0f1419]/10 aspect-square rounded-lg h-80"></div>
                </div>
                <div className="flex gap-2 pb-12 border-b border-gray-200 last:border-0">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded">
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
      <section className="bg-[#f9f7f5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Bent u klaar voor transformatie?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Laten we kijken hoe wij uw organisatie kunnen helpen haar governance, informatievoorziening en AI-capaciteiten te moderniseren.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-[#a85a5a] text-white font-bold hover:bg-[#8d4a4a] transition"
              >
                CONTACT OPNEMEN
              </a>
            </div>
            <div className="bg-gradient-to-br from-[#0f1419]/10 to-[#a85a5a]/15 aspect-square rounded-lg h-80"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
