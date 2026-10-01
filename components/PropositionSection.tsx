// Proposition directly below the hero: the BDE wordmark and title top-left, the statement of what BDE does
// and the CTAs lower-right (diagonal editorial composition, stacks on mobile).
export default function PropositionSection() {
  return (
    <section aria-labelledby="propositie" className="relative shadow-[0_-24px_60px_-30px_rgba(10,25,49,0.25)]">
      <div className="overflow-hidden bg-canvas py-24 md:py-36">
        <div data-reveal className="relative mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[55fr_45fr] lg:grid-rows-[auto_auto] lg:gap-x-16">
          <div className="lg:col-start-1 lg:row-start-1">
            <div aria-hidden="true" className="inline-flex items-start font-serif text-[2.25rem] font-bold leading-none tracking-[-0.03em] text-ink md:text-[2.75rem]">
              BDE
              <svg viewBox="0 0 10 10" className="ml-[0.08em] -mt-[0.06em] h-[0.36em] w-[0.36em] text-accent">
                <polygon points="2,0 10,0 10,8 7.6,8 7.6,2.4 2,2.4" fill="currentColor" />
              </svg>
            </div>

            <h2 id="propositie" className="mt-10 max-w-[20ch] text-[1.9rem] leading-[1.2] sm:text-[2.3rem] md:mt-12 md:text-[2.75rem]">
              Begeleiding bij digitale strategie en realisatie
            </h2>
          </div>

          <div className="mt-8 lg:col-start-2 lg:row-start-2 lg:mt-8 lg:max-w-[520px]">
            <p className="font-sans text-[1.05rem] md:text-[1.15rem] font-light leading-[1.65] text-ink-soft">
              Gespecialiseerd in het mede-vormgeven, begeleiden en vertalen van beleid en strategie naar organisatie-inrichting en de concrete uitvoering daarvan.
            </p>
            <div className="mt-12 md:mt-14 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-start">
              <a
                href="/services#samenwerkingsvormen"
                className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-[4px] border border-ink bg-ink px-8 py-3 font-sans text-xs font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-ink-soft md:w-auto md:max-w-none"
              >
                Samenwerkingsvormen
              </a>
              <a
                href="/expertise"
                className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-[4px] border border-ink/20 bg-white/60 px-8 py-3 font-sans text-xs font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-white md:w-auto md:max-w-none"
              >
                Expertises
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
