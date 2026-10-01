import HeroVideo from '@/components/HeroVideo';
import PropositionSection from '@/components/PropositionSection';
import MethodSection from '@/components/MethodSection';
import AboutSection, { CredentialsSection } from '@/components/AboutSection';

export default function Home() {
  return (
    <main>
      {/* Hero + all sections below: the hero stays pinned only within this wrapper, so those sections slide over it as an
          inset panel (hero visible at the sides) through project experience and certifications */}
      <div className="relative">
        {/* Hero Section - Video Background, pinned while the sections below scroll over it */}
        <section
          className="sticky top-0 z-0 overflow-hidden min-h-screen supports-[min-height:100svh]:min-h-svh flex flex-col"
        >
          {/* Background video */}
          <HeroVideo />

          {/* Headline in the upper part of the hero (the large bottom padding lifts it above centre); subtitle and CTAs live in the proposition section below.
              Wide container so there is little white at the sides. */}
          <div className="relative z-10 flex-1 flex items-center pt-28 pb-[50vh] md:pt-24">
            <div className="mx-auto w-full max-w-[110rem] px-6 lg:grid lg:grid-cols-[55fr_45fr] lg:gap-x-16 lg:px-[4vw]">
              <div className="lg:col-start-1 lg:row-start-1">
                <p className="eyebrow text-[#0B1528]/80">
                  Advies, consultancy en interim
                </p>
                <h1 className="text-left text-[#0B1528] text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem]">
                  Strategie is helder, maar niet uitvoerbaar.
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Sections 2 to project experience/certifications as one inset panel that slides up over the pinned hero (hero visible at the sides) */}
        <div className="relative z-10 px-4 md:px-[4vw]">
          {/* Proposition: what BDE does */}
          <PropositionSection />

          {/* Method and About share one white backdrop */}
          <div className="bg-canvas">
            {/* Method: three-step roadmap */}
            <MethodSection />

            {/* About: background & vision */}
            <AboutSection />
          </div>

          {/* Project experience and certifications, one section */}
          <CredentialsSection />
        </div>
      </div>
    </main>
  );
}
