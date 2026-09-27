import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cases, getCase } from '@/lib/cases';

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  return { title: c ? `${c.sector} | BDE` : 'Case | BDE' };
}

// Basic case page; expand per case as the content grows
export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const steps = [
    { label: 'Uitdaging', text: c.challenge },
    { label: 'Aanpak', text: c.approach },
    { label: 'Resultaat', text: c.outcome },
  ];

  return (
    <main className="bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/#cases" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94a3b8] hover:text-[#0A1931] transition-colors">
          ← Alle cases
        </Link>
        <p className="mt-10 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[#0A1931]/55">
          {c.role} <span className="mx-2 text-[#0A1931]/25">|</span> {c.context}
        </p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold leading-[1.05] text-[#0A1931]">{c.sector}</h1>

        <dl className="mt-12 space-y-8">
          {steps.map((s) => (
            <div key={s.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E3A8A]">{s.label}</dt>
              <dd className="mt-2 text-lg leading-relaxed text-[#0A1931]">{s.text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {c.stats.map((s) => (
            <li key={s.label} className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-5">
              <p className="font-serif lining-nums text-3xl font-bold leading-none text-[#0A1931]">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#64748b]">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
