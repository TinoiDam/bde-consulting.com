import type { Metadata } from 'next';
import CasesSection from '@/components/CasesSection';

export const metadata: Metadata = {
  title: 'Cases | BDE Management Consulting',
  description: 'Hoe strategie, regie en realisatie er in de praktijk uitzien: cases en deliverables.',
};

export default function Cases() {
  return (
    <main>
      <CasesSection eyebrow="Cases & Deliverables" title="Hoe dit in de praktijk eruit ziet" />
    </main>
  );
}
