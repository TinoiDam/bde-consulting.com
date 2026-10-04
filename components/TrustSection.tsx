import Link from 'next/link';
import DiagnosisCanvas from '@/components/DiagnosisCanvas';

export default function TrustSection() {
  return (
    <section id="expertise" className="scroll-mt-20 bg-canvas-alt pt-32 pb-10 md:pt-40 md:pb-14 lg:pt-44 lg:pb-16">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12 lg:px-[4vw] xl:grid-cols-[0.66fr_1.34fr] xl:gap-14">
        <div className="max-w-xl lg:py-10">
          <p className="eyebrow">Strategie · regie · realisatie</p>
          <h1 className="text-[2.35rem] leading-[1.13] sm:text-5xl lg:text-[3.35rem]">
            Complexe verandering moet werken in de organisatie.
          </h1>
          <p className="mt-6 max-w-[48ch] text-[1.02rem] leading-[1.75] text-body">
            Ik verbind strategie met eigenaarschap, regelgeving met dagelijks handelen en technologie met de praktijk. Zo wordt verandering niet alleen bedacht, maar ook uitvoerbaar.
          </p>
          <Link href="/aanpak" className="link-cta mt-7">
            <span className="link-quiet">Zo werk ik</span>
            <span aria-hidden="true" className="btn-arrow">→</span>
          </Link>
        </div>

        <DiagnosisCanvas />
      </div>
    </section>
  );
}