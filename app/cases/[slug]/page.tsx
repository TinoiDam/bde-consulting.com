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
        <Link href="/#cases" className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle hover:text-ink transition-colors">
          ← Alle cases
        </Link>
        <p className="eyebrow mt-10">
          {c.role} <span className="mx-2 text-ink/25">|</span> {c.context}
        </p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl">{c.sector}</h1>

        <dl className="mt-12 space-y-8">
          {steps.map((s) => (
            <div key={s.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{s.label}</dt>
              <dd className="mt-2 text-lg leading-relaxed text-ink">{s.text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {c.stats.map((s) => (
            <li key={s.label} className="rounded-xl border border-line bg-canvas-alt px-5 py-5">
              <p className="font-serif lining-nums text-3xl font-bold leading-none text-ink">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
