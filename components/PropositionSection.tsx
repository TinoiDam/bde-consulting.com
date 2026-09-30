// Proposition directly below the hero: the BDE wordmark and one centred statement of what BDE does,
// set over a light-blue band that runs diagonally through the section.
export default function PropositionSection() {
  return (
    <section aria-labelledby="propositie" className="relative overflow-hidden bg-canvas py-24 md:py-36">
      {/* Diagonal band: rises from left to right, like a slanted plane cutting through the section */}
      <div aria-hidden="true" className="absolute inset-0 bg-mist [clip-path:polygon(0_40%,100%_12%,100%_62%,0_90%)]" />

      <div data-reveal className="relative mx-auto max-w-5xl px-6 text-center">
        <div aria-hidden="true" className="inline-flex items-start font-serif text-[2.25rem] font-bold leading-none tracking-[-0.03em] text-ink md:text-[2.75rem]">
          BDE
          <svg viewBox="0 0 10 10" className="ml-[0.08em] -mt-[0.06em] h-[0.36em] w-[0.36em] text-accent">
            <polygon points="2,0 10,0 10,8 7.6,8 7.6,2.4 2,2.4" fill="currentColor" />
          </svg>
        </div>

        <h2 id="propositie" className="mx-auto mt-10 max-w-[34ch] text-[1.7rem] leading-[1.3] sm:text-[2.1rem] md:mt-12 md:text-[2.6rem]">
          Gespecialiseerd in het mede-vormgeven, begeleiden en vertalen van beleid en strategie naar organisatie-inrichting en de concrete uitvoering daarvan.
        </h2>
      </div>
    </section>
  );
}
