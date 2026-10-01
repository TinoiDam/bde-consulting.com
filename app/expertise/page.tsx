import type { Metadata } from 'next';
import TrustSection from '@/components/TrustSection';

export const metadata: Metadata = {
  title: 'Expertise | BDE Management Consulting',
  description: 'Strategie, regie en realisatie: complexe verandering die werkt in de organisatie.',
};

export default function Expertise() {
  return (
    <main>
      <TrustSection />
    </main>
  );
}
