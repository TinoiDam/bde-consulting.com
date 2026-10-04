import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { disclaimer } from '@/lib/legal';

export const metadata: Metadata = {
  title: `${disclaimer.title} | BDE Management Consulting`,
  description: disclaimer.description,
};

export default function Legal() {
  return <LegalPage doc={disclaimer} />;
}
