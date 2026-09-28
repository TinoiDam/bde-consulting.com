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

        {/* Asymmetric editorial split: headline left (55%), subtitle and action right (40%); stacks on mobile */}
        <div className="relative z-10 flex-1 flex items-center pt-28 pb-16 md:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:flex lg:items-start lg:justify-between lg:gap-16">
            <div className="lg:w-[55%]">
              <p className="eyebrow">
                Interim Management &amp; IT Consultancy
              </p>
              <h1 className="text-left text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem]">
                Strategie is helder, maar niet uitvoerbaar.
              </h1>
            </div>

            <div className="mt-6 lg:mt-[calc(0.75rem*1.65+1rem+0.4rem)] lg:w-[40%]">
              <p className="text-left font-sans text-[1.05rem] md:text-[1.15rem] font-light leading-[1.65] text-accent lg:mt-4">
                Zorg voor regie op samenhang.
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-[4px] border border-ink px-8 py-3 font-sans text-xs font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                Plan een strategiesessie
                <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
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
          <span className="text-xs font-bold tracking-widest text-white uppercase">
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

      </div>
    </main>
  );
}
