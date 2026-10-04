import StrategyRollout from '@/components/StrategyRollout';
import ZoomableDiagram from '@/components/ZoomableDiagram';

// Expertise page: the strategy roll-out diagram (rebuilt from the "Van beleid naar uitvoering" slide) with its caption,
// full width in the same container as TrustSection. On small screens it scales to the column with a small zoom badge;
// click to view it full screen.
export default function StrategyRolloutSection() {
  return (
    <section aria-labelledby="kwartaalsturing-titel" className="bg-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[4vw]">
        <figure data-reveal>
          <figcaption className="mb-6 md:mb-8">
            <span className="eyebrow">Begeleiding bij digitale veranderopgaven</span>
            <span id="kwartaalsturing-titel" className="mt-1 block font-serif text-[1.15rem] text-ink-soft md:text-[1.3rem]">
              Elke laag die vertaalt, verdient een laag die valideert.
            </span>
          </figcaption>
          <ZoomableDiagram label="Kwartaalsturing van beleid naar uitvoering">
            <StrategyRollout />
          </ZoomableDiagram>
        </figure>
      </div>
    </section>
  );
}
