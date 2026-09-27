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
      <section className="bg-white pt-10 pb-16 md:pt-[60px] md:pb-24 text-center">
        {/* Section transition: thin downward chevron, mirroring the logo mark */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className="mx-auto mb-10 md:mb-[60px] h-6 w-6 text-[#1E3A8A]"
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

        <div className="max-w-4xl mx-auto px-6">
          {eyebrow && (
            <p className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#1D4ED8]">{eyebrow}</p>
          )}
          <h2 className="mt-4 md:mt-5 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.02em] text-[#0A1931] text-balance">
            {title}
          </h2>
        </div>
      </section>

      {/* Cases dashboard */}
      <section id="cases" className="bg-white pb-20 md:pb-28 lg:pb-32 scroll-mt-24">
        <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
          <CaseDashboard />
        </div>
      </section>
    </>
  );
}
