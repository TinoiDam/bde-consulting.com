import HeroVideo from '@/components/HeroVideo';
import PropositionSection from '@/components/PropositionSection';
import TrustSection from '@/components/TrustSection';
import MethodSection from '@/components/MethodSection';
import CasesSection from '@/components/CasesSection';
import AboutSection, { CertificationsSection, ProjectExperienceSection } from '@/components/AboutSection';
import PurchasingFlow from '@/components/PurchasingFlow';

export default function Home() {
  return (
    <main>
      {/* Hero Section - Video Background, pinned while the page scrolls */}
      <section
        className="sticky top-0 z-0 overflow-hidden min-h-screen supports-[min-height:100svh]:min-h-svh flex flex-col"
      >
        {/* Background video */}
        <HeroVideo />

        {/* Diagonal editorial composition on desktop: headline top-left, subtitle and CTAs lower-right; stacks on mobile.
            Wide container so there is little white at the sides. */}
        <div className="relative z-10 flex-1 flex items-center pt-28 pb-16 md:py-24">
          <div className="mx-auto w-full max-w-[110rem] px-6 lg:grid lg:grid-cols-[55fr_45fr] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:px-[4vw]">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="eyebrow text-[#0B1528]/80">
                Advies, consultancy en interim
              </p>
              <h1 className="text-left text-[#0B1528] text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem]">
                Strategie is helder, maar niet uitvoerbaar.
              </h1>
            </div>

            <div className="mt-6 lg:col-start-2 lg:row-start-2 lg:mt-20 lg:justify-self-start lg:w-full lg:max-w-[520px]">
              <p className="text-left font-sans text-[1.05rem] md:text-[1.15rem] font-light leading-[1.65] text-[#1E293B]">
                Begeleiding bij digitale strategie en realisatie
              </p>
              {/* CTAs tinted in the hero's own blue so they blend with the background (shape unchanged) */}
              <div className="mt-14 md:mt-8 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-start">
                <a
                  href="#samenwerkingsvormen"
                  className="group inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-[4px] border border-[#0B1528]/20 md:w-auto md:max-w-none bg-[#cfe2f8]/85 px-8 py-3 font-sans text-xs font-medium uppercase tracking-[0.08em] text-[#0B1528] transition-colors duration-300 hover:border-[#0B1528]/40 hover:bg-[#b9d5f5]"
                >
                  Samenwerkingsvormen
                </a>
                <a
                  href="#expertise"
                  className="group inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-[4px] border border-[#0B1528]/15 md:w-auto md:max-w-none bg-white/35 px-8 py-3 font-sans text-xs font-medium uppercase tracking-[0.08em] text-[#0B1528]/90 transition-colors duration-300 hover:border-[#0B1528]/35 hover:bg-[#e3eefb]/80"
                >
                  Expertises
                </a>
              </div>
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
        {/* Proposition: what BDE does, directly below the hero */}
        <PropositionSection />

        {/* Method: three-step roadmap */}
        <MethodSection />

        {/* About: background & vision */}
        <AboutSection />

        {/* Project experience: client logos */}
        <ProjectExperienceSection />

        {/* Certifications and trainings */}
        <CertificationsSection />

        {/* Purchasing flow: landing target of the hero button (replaces the engagement models section) */}
        <PurchasingFlow />

        {/* Trust / validation */}
        <TrustSection />

        {/* Cases: intro heading + tab dashboard (eyebrow and title are configurable) */}
        <CasesSection eyebrow="Cases & Deliverables" title="Hoe dit in de praktijk eruit ziet" />
      </div>
    </main>
  );
}
