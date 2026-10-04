import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import PropositionSection from '@/components/PropositionSection';
import BackgroundRibbon from '@/components/BackgroundRibbon';
import ApproachTeaser from '@/components/ApproachTeaser';
import AboutSection, { CredentialsSection } from '@/components/AboutSection';

export default function Home() {
  return (
    <main>
      {/* Hero + all sections below: the hero stays pinned only within this wrapper, so those sections slide over it as one
          full-width panel through project experience and certifications */}
      <div className="relative">
        {/* Hero Section - Video Background, pinned while the sections below scroll over it */}
        <section
          className="sticky top-0 z-0 overflow-hidden min-h-screen supports-[min-height:100svh]:min-h-svh flex flex-col"
        >
          {/* Background video */}
          <HeroVideo />

          {/* Soft navy shade at the top of the hero so the white menu (and wordmark) stay legible over light frames */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0b1329]/70 via-[#0b1329]/30 to-transparent md:h-60" />

          {/* Headline in the upper part of the hero (the large bottom padding lifts it above centre); subtitle and CTAs live in the proposition section below.
              Wide container so there is little white at the sides. */}
          <div className="relative z-10 flex-1 flex items-center pt-28 pb-[38vh] md:pt-24">
            <div className="mx-auto w-full max-w-[110rem] px-6 lg:grid lg:grid-cols-[55fr_45fr] lg:gap-x-16 lg:px-[4vw]">
              <div className="lg:col-start-1 lg:row-start-1">
                <p className="eyebrow text-[#0B1528]/80">
                  Advies, consultancy en interim
                </p>
                <h1 className="text-left text-[#0B1528] text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem]">
                  Strategie is helder, maar niet uitvoerbaar.
                </h1>
                {/* Two CTAs, left-aligned under the headline: the primary (deep blue, not black, so it sits with the
                    hero's colours) for consultancy and project work, the secondary (ghost: transparent, white text,
                    thin white border) for strategic advice */}
                <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap md:mt-12">
                  <a
                    href="/services#inzetvormen"
                    className="btn btn-primary w-full max-w-xs sm:w-auto sm:max-w-none"
                  >
                    Consultancy en Advies
                  </a>
                  <Link
                    href="/expertise"
                    className="btn btn-ghost w-full max-w-xs sm:w-auto sm:max-w-none"
                  >
                    Maatwerk advies
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row of the hero: scroll indicator right */}
          <div className="relative z-10 flex items-end justify-end px-6 pb-[max(1.25rem,calc(env(safe-area-inset-bottom)+0.75rem))] md:px-[4vw] md:pb-8">
            {/* Scroll indicator, also a link to section 2 */}
            <a
              href="#propositie"
              aria-label="Scroll naar de volgende sectie"
              className="flex items-center gap-3 pb-1 md:gap-4"
            >
              <span aria-hidden="true" className="h-0.5 w-12 bg-white/70" />
              {/* Apple-style mouse */}
              <svg aria-hidden="true" className="h-7 w-5 animate-bounce text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path d="M12 2C8.7 2 6 4.7 6 8v8c0 3.3 2.7 6 6 6s6-2.7 6-6V8c0-3.3-2.7-6-6-6z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5v3" strokeLinecap="round" />
              </svg>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-white">Scroll down</span>
            </a>
          </div>
        </section>

        {/* Sections 2 to project experience/certifications as one full-width panel that slides up over the pinned hero */}
        <div className="relative z-10">
          {/* Proposition, Approach and About on one white backdrop, with a faint light-blue half-plane behind their
              content that turns as the page scrolls; clip-path keeps the fixed plane inside this backdrop */}
          <div className="relative bg-canvas [clip-path:inset(0)]">
            <BackgroundRibbon />

            <div className="relative">
              {/* Proposition: what BDE does */}
              <PropositionSection />

              {/* Approach: short teaser, the full methodology lives on /aanpak */}
              <ApproachTeaser />

              {/* About: background & vision */}
              <AboutSection />
            </div>
          </div>

          {/* Project experience: client logos (certifications live on /over and /contact) */}
          <CredentialsSection />
        </div>
      </div>
    </main>
  );
}
