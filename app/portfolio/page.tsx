export default function Portfolio() {
  const projects = [
    {
      title: 'Governance Framework Implementatie',
      client: 'Financiële Instelling',
      description: 'Opzet van volledig governance framework voor multinational operatie',
      tags: ['Governance', 'Compliance', 'Risk']
    },
    {
      title: 'Data Intelligence Platform',
      client: 'Retail Organisatie',
      description: 'Opbouw van modern data platform voor real-time business intelligence',
      tags: ['BI', 'Data Strategy', 'Analytics']
    },
    {
      title: 'AI Transformation Program',
      client: 'Technologie Bedrijf',
      description: 'Strategische AI-implementatie met organisatorische transformatie',
      tags: ['AI', 'Transformation', 'Change Management']
    }
  ];

  return (
    <main className="bg-[#f9f7f5]">
      {/* Hero */}
      <section className="bg-[#0f1419] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Ons werk</h1>
          <p className="text-xl text-[#d4a5a5]">Succesvolle projecten en resultaten</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <div key={i} className="group">
                <div className="bg-white p-8 hover:shadow-lg transition">
                  <div className="w-12 h-1 bg-[#a85a5a] mb-6"></div>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#a85a5a] font-semibold mb-4">{project.client}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
