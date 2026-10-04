import type { Metadata } from 'next';
import TrustSection from '@/components/TrustSection';
import StrategyRolloutSection from '@/components/StrategyRolloutSection';
import CasesSection from '@/components/CasesSection';

export const metadata: Metadata = {
  title: 'Expertise | BDE Management Consulting',
  description: 'Strategie, regie en realisatie: complexe verandering die werkt in de organisatie, met cases uit de praktijk.',
};

export default function Expertise() {
  return (
    <main>
      <TrustSection />
      {/* Quarterly steering diagram: from policy to execution */}
      <StrategyRolloutSection />
      {/* Cases (formerly /cases): how this looks in practice; case pages live on /expertise/[slug] */}
      <CasesSection />
    </main>
  );
}
