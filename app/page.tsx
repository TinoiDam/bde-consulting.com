import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section - Video Background */}
      <section
        className="relative overflow-hidden min-h-screen supports-[min-height:100svh]:min-h-svh flex flex-col"
        style={{
          backgroundColor: '#DBE8F5'
        }}
      >
        {/* Background video */}
        <HeroVideo />

        {/* Content - Top */}
        <div className="relative z-10 flex-1 flex items-center py-16 md:py-0">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-gray-900 mb-8 md:mb-6 leading-tight">
              Strategie is helder,<br />
              maar niet uitvoerbaar.
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-tight">
              Zorg voor regie<br />op samenhang.
            </h2>
          </div>
        </div>

        {/* Scroll Indicator - Visible on all screens */}
        <div className="relative z-10 flex flex-row justify-end items-center gap-3 md:gap-4 pt-8 px-6 pb-[max(5rem,calc(env(safe-area-inset-bottom)+3rem))] md:pb-0">
          <div className="w-12 h-0.5 bg-white/70"></div>
          {/* Apple-style mouse */}
          <svg className="w-5 h-7 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            {/* Mouse body */}
            <path d="M12 2C8.7 2 6 4.7 6 8v8c0 3.3 2.7 6 6 6s6-2.7 6-6V8c0-3.3-2.7-6-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Scroll wheel */}
            <path d="M12 5v3" strokeLinecap="round"/>
          </svg>
          <span className="text-xs font-bold tracking-widest text-white uppercase drop-shadow">
            Scroll Down
          </span>
        </div>
      </section>

      {/* Specialisaties Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#f8fbfc] to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Mobile: Horizontal scroll, Desktop: Horizontal flex */}
          <div className="flex overflow-x-auto md:overflow-visible md:flex-row md:justify-between md:items-center gap-4 md:gap-6 lg:gap-8 pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-sm flex-shrink-0 md:flex-shrink-1 md:flex-1 min-w-[200px] md:min-w-auto">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-serif font-bold text-gray-900 whitespace-nowrap md:whitespace-normal">
                Interim Consultancy
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-sm flex-shrink-0 md:flex-shrink-1 md:flex-1 min-w-[200px] md:min-w-auto">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-serif font-bold text-gray-900 whitespace-nowrap md:whitespace-normal">
                Project- &amp; Programmamanagement
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-sm flex-shrink-0 md:flex-shrink-1 md:flex-1 min-w-[200px] md:min-w-auto">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-serif font-bold text-gray-900 whitespace-nowrap md:whitespace-normal">
                Data, IT &amp; Transformatie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 1 - Governance */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                GOVERNANCE
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Sterke governancestructuren vormen de basis voor duurzaam succes. We helpen organisaties processen, richtlijnen en controlmechanismen op te zetten die schaalbar groeien.
              </p>
              <ul className="space-y-4">
                {['Risicoanalyse & compliancekaders', 'Bestuurstructuren & verantwoordelijkheden', 'Stakeholder management'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#0052CC] font-bold text-2xl leading-none mt-1">·</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0052CC]/10 to-[#00D4FF]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/5 via-transparent to-[#00D4FF]/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 2 - Informatievoorziening */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f8ff] via-white to-[#e8f8ff]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0052CC]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#00D4FF]/10 to-[#0052CC]/10 order-last md:order-first">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/5 via-transparent to-[#0052CC]/5"></div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                INFORMATIEVOORZIENING
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Data is een strategische asset. We transformeren informatiestromen in actionable intelligence waarmee u sneller en beter beslist.
              </p>
              <ul className="space-y-4">
                {['Data strategie & architectuur', 'Business Intelligence & Analytics', 'Reporting & performance management'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#00D4FF] font-bold text-2xl leading-none mt-1">·</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 3 - AI Context */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                AI CONTEXT
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                AI transformeert hoe organisaties werken. We helpen u dit potentieel praktisch in te zetten, afgestemd op uw doelen en organisatiebrede readiness.
              </p>
              <ul className="space-y-4">
                {['AI strategie & use-case identificatie', 'Implementatie & change management', 'Risico\'s & ethische overwegingen'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#0052CC] font-bold text-2xl leading-none mt-1">·</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0052CC]/10 to-[#00D4FF]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/5 via-transparent to-[#00D4FF]/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f8ff] via-[#f5fbff] to-[#e8f8ff]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
              Stay Ahead With
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#0052CC] to-[#00D4FF] bg-clip-text text-transparent">
              Our Latest Updates
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'De toekomst van Governance in het AI-tijdperk', date: 'September 2026', time: '8 min' },
              { title: 'Data transformatie: Van meting naar actie', date: 'Augustus 2026', time: '10 min' },
              { title: 'AI implementation: Hoe beginnen?', date: 'Juli 2026', time: '7 min' }
            ].map((insight, i) => (
              <Link
                key={i}
                href="/insights"
                className="group bg-white p-8 rounded-xl hover:shadow-lg transition cursor-pointer"
              >
                <p className="text-[#0052CC] font-semibold text-xs mb-4 uppercase tracking-widest">{insight.date}</p>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-[#0052CC] transition">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm">{insight.time} read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC] via-[#1a4fa5] to-[#0052CC]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-[#00D4FF]/10 opacity-60"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00D4FF]/20 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#00D4FF]/15 to-transparent rounded-full blur-3xl animate-float-slow-reverse"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Laten we samen transformeren
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Wij helpen organisaties hun governance, informatievoorziening en AI-capaciteiten op het volgende niveau te brengen.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 md:py-4 bg-white text-[#0052CC] font-semibold text-sm md:text-base hover:bg-blue-50 transition"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </main>
  );
}
