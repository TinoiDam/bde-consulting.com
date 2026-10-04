import Link from 'next/link';
import ArchitectureLayers from '@/components/ArchitectureLayers';

// Homepage section 3: a short editorial teaser for the approach, with a button to the expertise page.
// Split layout from xl, after the reference: title, intro and the expertise button in the left half,
// aligned with the page container; the right half is a panel with a soft two-way sky-blue gradient whose left edge is
// a straight vertical line on the page centre and whose right corners are rounded; its right edge lines up with the
// page container, mirroring the left margin.
// It holds the four enterprise architecture layers with their explanation alternating left and right. Below xl the
// text and a rounded panel stack inside the container.
export default function ApproachTeaser() {
  return (
    <section id="aanpak" aria-labelledby="aanpak-titel" className="scroll-mt-20 py-10 md:py-14 lg:py-16 xl:py-3">
      <div className="mx-auto max-w-6xl px-6 xl:grid xl:max-w-none xl:grid-cols-2 xl:px-0">
        {/* Left half: the left padding lines the text up with the 88rem page container */}
        <div
          data-reveal
          className="xl:flex xl:items-center xl:py-16 xl:pr-16 xl:pl-[max(1.5rem,calc((100vw-88rem)/2+1.5rem))]"
        >
          <div>
            <h2 id="aanpak-titel" className="max-w-[28ch] text-[1.6rem] leading-[1.25] text-ink md:text-[2rem]">
              Breng samenhang in grote veranderopgaven.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.7] text-ink-soft">
              Verandering ontstaat niet door één los initiatief. Breng samenhang tussen strategie, processen,
              mensen, data en technologie: van richtinggevende keuzes tot concrete uitvoering.
            </p>
            {/* CTA to the expertise page (moved here from the proposition section) */}
            <Link href="/expertise" className="btn btn-secondary mt-8 w-full max-w-xs md:w-auto md:max-w-none">
              Expertises
            </Link>
          </div>
        </div>

        {/* Right half: sky blue from top left (#a1cdf6) to lilac grey top right (#c1cced), lighter towards the bottom
            (colours from the reference). xl: straight left edge, rounded right corners, right margin equal to the page
            container's (same formula as the left half's padding). */}
        <div
          data-reveal
          style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
          className="mt-10 rounded-[24px] bg-sky-hue px-3 py-10 md:px-10 md:py-14 xl:mt-0 xl:mr-[max(1.5rem,calc((100vw-88rem)/2+1.5rem))] xl:rounded-l-none xl:px-6 xl:py-20"
        >
          <ArchitectureLayers />
        </div>
      </div>
    </section>
  );
}
