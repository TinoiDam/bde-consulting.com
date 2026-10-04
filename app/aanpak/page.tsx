import type { Metadata } from 'next';
import MethodSection from '@/components/MethodSection';

export const metadata: Metadata = {
  title: 'Aanpak | BDE Management Consulting',
  description: 'De drie fasen van strategie-executie: richting bepalen, bestuurbaar maken, realiseren en borgen.',
};

export default function Aanpak() {
  return (
    <main>
      <MethodSection />
    </main>
  );
}
