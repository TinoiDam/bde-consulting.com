// Proposition directly below the hero, stacked at every width: title across the full width, the statement and CTA
// below it. The strategy roll-out diagram lives on /expertise (StrategyRolloutSection).
export default function PropositionSection() {
  return (
    <section id="propositie" aria-labelledby="propositie-titel" className="relative scroll-mt-20 shadow-[0_-24px_60px_-30px_rgba(10,25,49,0.25)]">
      <div className="overflow-hidden py-10 md:py-14 lg:py-16">
        <div data-reveal className="relative mx-auto max-w-6xl px-6 xl:max-w-[88rem]">
          <h2 id="propositie-titel" className="text-[1.9rem] leading-[1.2] sm:text-[2.3rem] md:text-[2.75rem]">
            Partner voor de gereguleerde private sector en (semi-)overheden
          </h2>

          {/* Statement and CTA directly under the title */}
          <div className="mt-8 max-w-[44rem] md:mt-10">
            <p className="font-sans text-[1.05rem] md:text-[1.15rem] font-normal leading-[1.65] text-ink-soft">
              Gespecialiseerd in het mede-vormgeven, begeleiden en vertalen van beleid en strategie naar organisatie-inrichting en de concrete uitvoering daarvan.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-start">
              <a
                href="/services#samenwerkingsvormen"
                className="btn btn-primary w-full max-w-xs md:w-auto md:max-w-none"
              >
                Samenwerkingsvormen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
