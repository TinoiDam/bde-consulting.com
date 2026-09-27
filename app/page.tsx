import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import TrustSection from '@/components/TrustSection';
import MethodSection from '@/components/MethodSection';
import CasesSection from '@/components/CasesSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main>
      {/* Hero Section - Video Background, pinned while the page scrolls */}
      <section
        className="sticky top-0 z-0 overflow-hidden min-h-screen supports-[min-height:100svh]:min-h-svh flex flex-col"
      >
        {/* Background video */}
        <HeroVideo />

        {/* Content - Top */}
        <div className="relative z-10 flex-1 flex items-center py-16 md:py-0">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h1 className="text-[2.25rem] sm:text-[2.5rem] md:text-5xl lg:text-7xl font-serif font-extrabold text-[#0A1931] leading-[1.12] tracking-[-0.01em]">
              Strategie is helder,<br />
              maar niet uitvoerbaar.
            </h1>

            <h2 className="mt-10 md:mt-12 lg:mt-14 text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-normal text-[#0A1931] leading-snug tracking-[-0.01em]">
              Zorg voor regie<br />op samenhang.
            </h2>
          </div>
        </div>

        {/* Scroll Indicator - Visible on all screens */}
        <div className="relative z-10 flex flex-row justify-end items-center gap-3 md:gap-4 pt-8 px-6 pb-[max(1rem,calc(env(safe-area-inset-bottom)+0.5rem))] md:pb-0">
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

      {/* Everything below the pinned hero slides up over it like a curtain */}
      <div className="relative z-10">
        {/* Trust / validation */}
        <TrustSection />

        {/* Method: three-step roadmap */}
        <MethodSection />

        {/* Cases: intro heading + tab dashboard (eyebrow and title are configurable) */}
        <CasesSection eyebrow="Cases & Deliverables" title="Hoe dit in de praktijk eruit ziet" />

        {/* About */}
        <AboutSection />

        {/* CTA Section */}
        <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-white scroll-mt-20">
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
      </div>
    </main>
  );
}
