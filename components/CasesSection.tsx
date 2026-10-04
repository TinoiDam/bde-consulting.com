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
      <section className="bg-white pt-10 pb-8 md:pt-14 md:pb-10 lg:pt-16 text-center">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          {eyebrow && (
            <p className="eyebrow">{eyebrow}</p>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] text-balance">
            {title}
          </h2>
        </div>
      </section>

      {/* Cases dashboard */}
      <section id="cases" className="bg-white pb-10 md:pb-14 lg:pb-16 scroll-mt-24">
        <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
          <div data-reveal>
            <CaseDashboard />
          </div>
        </div>
      </section>
    </>
  );
}
