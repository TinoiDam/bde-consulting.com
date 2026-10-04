import Link from 'next/link';
import type { LegalDocument } from '@/lib/legal';

// Shared layout for the legal documents: title with the current version and its effective date, the sections, and the
// version history at the bottom. Links to the other legal documents close the page.
const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });

const others = [
  { href: '/privacy', label: 'Privacyverklaring' },
  { href: '/cookies', label: 'Cookieverklaring' },
  { href: '/legal', label: 'Disclaimer' },
];

export default function LegalPage({ doc }: { doc: LegalDocument }) {
  const current = doc.versions[0];
  return (
    <main>
      <section className="bg-canvas pt-32 pb-10 md:pt-40 md:pb-14 lg:pt-44 lg:pb-16">
        <article className="mx-auto max-w-3xl px-6">
          <p className="eyebrow">Juridisch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl">{doc.title}</h1>
          <p className="mt-4 font-sans text-[0.8rem] text-muted">
            Versie {current.version} · geldig vanaf {formatDate(current.date)}
          </p>

          {doc.intro && <p className="mt-10 text-[1rem] leading-[1.75] text-body">{doc.intro}</p>}

          <div className="mt-10 space-y-10">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-[1.3rem] leading-[1.3] text-ink md:text-[1.45rem]">{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-[1rem] leading-[1.75] text-body">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[1rem] leading-[1.7] text-body marker:text-subtle">
                    {s.list.map((li) => (
                      <li key={li.slice(0, 40)}>{li}</li>
                    ))}
                  </ul>
                )}
                {s.after?.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-[1rem] leading-[1.75] text-body">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Version history, newest first */}
          <section aria-labelledby="versies" className="mt-14 border-t border-line pt-8">
            <h2 id="versies" className="eyebrow">Versiegeschiedenis</h2>
            <table className="mt-2 w-full text-left font-sans text-[0.85rem]">
              <thead className="text-muted">
                <tr>
                  <th className="py-2 pr-6 font-medium">Versie</th>
                  <th className="py-2 pr-6 font-medium">Geldig vanaf</th>
                  <th className="py-2 font-medium">Wijziging</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line border-t border-line text-body">
                {doc.versions.map((v) => (
                  <tr key={v.version}>
                    <td className="py-2 pr-6 tabular-nums">{v.version}</td>
                    <td className="py-2 pr-6 whitespace-nowrap">{formatDate(v.date)}</td>
                    <td className="py-2">{v.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <nav aria-label="Andere juridische documenten" className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {others
              .filter((o) => o.href !== `/${doc.slug}`)
              .map((o) => (
                <Link key={o.href} href={o.href} className="link-cta">
                  <span className="link-quiet">{o.label}</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </Link>
              ))}
          </nav>
        </article>
      </section>
    </main>
  );
}
