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
      {/* Hero Section with Aurora */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-20 lg:pb-32 overflow-hidden bg-canvas">

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6">
            PORTFOLIO
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-body max-w-2xl">
            Succesvolle projecten waarbij we organisaties hebben getransformeerd.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-12 md:py-32 bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12 md:space-y-24">
            {projects.map((project, i) => (
              <div key={i}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-start mb-8 md:mb-12">
                  <div>
                    <div className="h-1 w-16 bg-accent mb-4 md:mb-6"></div>
                    <h2 className="text-xl sm:text-2xl md:text-4xl mb-2">
                      {project.title}
                    </h2>
                    <p className="text-base md:text-lg text-accent font-semibold mb-4 md:mb-6">
                      {project.subtitle}
                    </p>
                    <p className="text-base md:text-lg text-body mb-6 md:mb-8 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                    <div>
                      <h4 className="font-bold mb-2 text-xs uppercase tracking-wide text-ink">Impact</h4>
                      <p className="text-body text-sm md:text-base">{project.impact}</p>
                    </div>
                  </div>
                  <div className="bg-canvas-alt border border-line aspect-square rounded-lg h-48 md:h-80 hidden md:block"></div>
                </div>
                <div className="flex gap-2 pb-8 md:pb-12 border-b border-line last:border-0 flex-wrap">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 md:px-4 py-2 bg-canvas-alt text-accent text-xs md:text-sm font-medium rounded border border-line">
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
      <section className="bg-canvas-alt py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-6">
                Bent u klaar voor transformatie?
              </h2>
              <p className="text-base md:text-lg text-body mb-6 md:mb-8 leading-relaxed">
                Laten we kijken hoe wij uw organisatie kunnen helpen haar governance, informatievoorziening en AI-capaciteiten te moderniseren.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-accent text-white font-bold text-sm md:text-base hover:bg-ink transition"
              >
                CONTACT OPNEMEN
              </a>
            </div>
            <div className="bg-canvas-alt border border-line aspect-square rounded-lg h-48 md:h-80 hidden md:block"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
