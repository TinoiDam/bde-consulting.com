import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { privacy } from '@/lib/legal';

export const metadata: Metadata = {
  title: `${privacy.title} | BDE Management Consulting`,
  description: privacy.description,
};

export default function Privacy() {
  return <LegalPage doc={privacy} />;
}
