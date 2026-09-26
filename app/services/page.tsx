export default function Services() {
  const services = [
    {
      title: 'Governance',
      description: 'Wij helpen organisaties sterke governancestructuren op te zetten die duurzaam zijn en schaalbaar groeien.',
      points: ['Compliance & Risk', 'Beleidsvorming', 'Stakeholdermanagement']
    },
    {
      title: 'Informatievoorziening',
      description: 'Het transformeren van data in actionable intelligence voor betere bedrijfsbeslissingen.',
      points: ['Data Strategy', 'Business Intelligence', 'Reporting & Analytics']
    },
    {
      title: 'AI Context',
      description: 'Strategische implementatie van AI-technologie afgestemd op uw bedrijfsdoelstellingen.',
      points: ['AI Readiness', 'Implementation', 'Change Management']
    }
  ];

  return (
    <main className="bg-[#f9f7f5]">
      {/* Hero */}
      <section className="bg-[#0f1419] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Onze Diensten</h1>
          <p className="text-xl text-[#d4a5a5]">Expertise in governance, data en AI</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, i) => (
            <div key={i} className="mb-20 pb-20 border-b border-gray-200 last:border-0">
              <div className="flex gap-8 items-start">
                <div className="flex-1">
                  <div className="w-16 h-1 bg-[#a85a5a] mb-6"></div>
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.points.map((point, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#a85a5a] rounded-full"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
