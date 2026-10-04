import Link from 'next/link';
import ArchitectureLayers from '@/components/ArchitectureLayers';

// Homepage section 3: a short editorial teaser for the approach, linking to the full methodology on /aanpak.
// Title and intro, then the three enterprise architecture levels as floating planes with their explanation set
// around them. Ends in a quiet text link.
export default function ApproachTeaser() {
  return (
    <section id="aanpak" aria-labelledby="aanpak-titel" className="scroll-mt-20 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 xl:max-w-[88rem]">
        {/* Intro, then the three architecture levels as floating planes with their explanation around them */}
        <div data-reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Aanpak</p>
            <h2 id="aanpak-titel" className="max-w-[28ch] text-[1.6rem] leading-[1.25] text-ink md:text-[2rem]">
              Breng samenhang in complexe veranderopgaven.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.7] text-ink-soft">
              Complexe verandering ontstaat niet door één los initiatief. Breng samenhang tussen strategie, processen,
              mensen, data en technologie: van richtinggevende keuzes tot concrete uitvoering.
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <ArchitectureLayers />
          </div>

          <div className="mt-12 md:text-center">
            {/* Quiet text link: small caps with an arrow that slides on hover, underline drawn in by link-quiet */}
            <Link
              href="/aanpak"
              className="group inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink"
            >
              <span className="link-quiet">Bekijk de volledige methodiek &amp; opleveringen</span>
              <span aria-hidden="true" className="text-base transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
