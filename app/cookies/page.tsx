import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { cookies } from '@/lib/legal';

export const metadata: Metadata = {
  title: `${cookies.title} | BDE Management Consulting`,
  description: cookies.description,
};

export default function Cookies() {
  return <LegalPage doc={cookies} />;
}
