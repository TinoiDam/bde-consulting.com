import StrategyRollout from '@/components/StrategyRollout';
import ZoomableDiagram from '@/components/ZoomableDiagram';

// Proposition directly below the hero. Wide screens (xl): wordmark and title in the left column; the strategy
// roll-out diagram and below it the statement and CTAs in the wider right column. Medium (lg): title top-left,
// diagram full width, statement lower-right. Small: everything stacks.
export default function PropositionSection() {
  return (
    <section id="propositie" aria-labelledby="propositie-titel" className="relative scroll-mt-20 shadow-[0_-24px_60px_-30px_rgba(10,25,49,0.25)]">
      <div className="overflow-hidden py-24 md:py-36">
        <div data-reveal className="relative mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[55fr_45fr] lg:grid-rows-[auto_auto_auto] lg:gap-x-16 xl:max-w-[88rem] xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] xl:grid-rows-[auto_auto] xl:gap-x-20">
          <div className="lg:col-start-1 lg:row-start-1">
            <div aria-hidden="true" className="inline-flex items-start font-serif text-[2.25rem] font-bold leading-none tracking-[-0.03em] text-ink md:text-[2.75rem]">
              BDE
              <svg viewBox="0 0 10 10" className="ml-[0.08em] -mt-[0.06em] h-[0.36em] w-[0.36em] text-accent">
                <polygon points="2,0 10,0 10,8 7.6,8 7.6,2.4 2,2.4" fill="currentColor" />
              </svg>
            </div>

            <h2 id="propositie-titel" className="mt-10 max-w-[20ch] text-[1.9rem] leading-[1.2] sm:text-[2.3rem] md:mt-12 md:text-[2.75rem]">
              Partner voor de gereguleerde private sector en (semi-)overheden
            </h2>
          </div>

          {/* Strategy roll-out diagram (rebuilt from the "Van beleid naar uitvoering" slide): right column on xl, full width on
              lg; on small screens it keeps a readable width and scrolls sideways. Click to view it full screen. */}
          <figure className="mt-14 md:mt-16 lg:col-span-2 lg:row-start-2 xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:mt-0">
            <figcaption className="mb-6 md:mb-8">
              <span className="eyebrow">Begeleiding bij digitale veranderopgaven</span>
              <span className="mt-1 block font-serif text-[1.15rem] text-ink-soft md:text-[1.3rem]">
                Elke laag die vertaalt, verdient een laag die valideert.
              </span>
            </figcaption>
            <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:thin] md:mx-0 md:overflow-visible md:px-0">
              <ZoomableDiagram label="Kwartaalsturing van beleid naar uitvoering">
                <StrategyRollout />
              </ZoomableDiagram>
            </div>
            <p className="mt-2 text-xs text-muted md:hidden">Veeg horizontaal of tik om het schema te vergroten.</p>
          </figure>

          <div className="mt-14 lg:col-start-2 lg:row-start-3 lg:mt-16 lg:max-w-[520px] xl:row-start-2 xl:max-w-none">
            <p className="font-sans text-[1.05rem] md:text-[1.15rem] font-normal leading-[1.65] text-ink-soft">
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
