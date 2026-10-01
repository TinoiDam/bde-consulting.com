import CaseDashboard from '@/components/CaseDashboard';

type Props = {
  eyebrow?: string;
  title?: string;
};

export default function CasesSection({
  eyebrow = 'Cases & Deliverables',
  title = 'Hoe dit in de praktijk eruit ziet',
}: Props) {
  return (
    <>
      {/* Section intro */}
      <section className="bg-white pt-28 pb-16 md:pt-36 md:pb-24 text-center">
        {/* Section transition: thin downward chevron, mirroring the logo mark */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className="mx-auto mb-10 md:mb-[60px] h-6 w-6 text-accent"
        >
          <polyline
            points="4,8 12,16 20,8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="miter"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div data-reveal className="max-w-4xl mx-auto px-6">
          {eyebrow && (
            <p className="eyebrow">{eyebrow}</p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] text-balance">
            {title}
          </h1>
        </div>
      </section>

      {/* Cases dashboard */}
      <section id="cases" className="bg-white pb-20 md:pb-28 lg:pb-32 scroll-mt-24">
        <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
          <div data-reveal>
            <CaseDashboard />
          </div>
        </div>
      </section>
    </>
  );
}
