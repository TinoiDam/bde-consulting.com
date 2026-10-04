import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | BDE Management Consulting',
  description: 'Neem direct contact op met BDE Management Consulting via e-mail.',
};

// Single point of contact: no form and no data stored on this site (AVG). One mailto button opens the visitor's own
// mail client; the route they came through (?vraag=…, set by the linking page) decides the subject and the
// pre-structured body. The two specific hrefs are used as supplied (already URL-encoded), with the address set to connect@.
const EMAIL = 'connect@bde-consulting.com';

const general = {
  subject: 'Aanvraag: Contact - BDE',
  body: 'Beste Tinoi,\n\nGraag neem ik contact met u op. Hieronder staan onze gegevens:\n\nNaam organisatie: \nContactpersoon: \nTelefoonnummer: \n\nKorte omschrijving van uw vraag:\n',
};

const routes = {
  consultancy: {
    label: 'Consultancy & Projectinzet',
    href: 'mailto:connect@bde-consulting.com?subject=Aanvraag%3A%20Consultancy%20%26%20Projectinzet%20-%20BDE&body=Beste%20Tinoi%2C%0A%0AGraag%20bespreek%20ik%20de%20mogelijkheden%20voor%20Consultancy%20%26%20Projectinzet.%20Hieronder%20staan%20onze%20gegevens%3A%0A%0ANaam%20organisatie%3A%20%0AContactpersoon%3A%20%0ATelefoonnummer%3A%20%0A%0AKorte%20omschrijving%20van%20de%20project-%20of%20programma-opgave%3A%0A',
  },
  strategie: {
    label: 'Strategisch advies & Maatwerk',
    href: 'mailto:connect@bde-consulting.com?subject=Aanvraag%3A%20Strategisch%20advies%20%26%20Maatwerk%20-%20BDE&body=Beste%20Tinoi%2C%0A%0AGraag%20bespreek%20ik%20een%20vraagstuk%20met%20betrekking%20tot%20Strategisch%20advies%20%26%20Maatwerk.%20Hieronder%20staan%20onze%20gegevens%3A%0A%0ANaam%20organisatie%3A%20%0AContactpersoon%3A%20%0ATelefoonnummer%3A%20%0A%0AKorte%20omschrijving%20van%20het%20strategische%20transformatievraagstuk%3A%0A',
  },
  algemeen: {
    label: 'Algemene vraag',
    href: `mailto:${EMAIL}?subject=${encodeURIComponent(general.subject)}&body=${encodeURIComponent(general.body)}`,
  },
} as const;

type Route = keyof typeof routes;

export default async function Contact({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const vraag = (await searchParams).vraag;
  const key: Route = vraag === 'consultancy' || vraag === 'strategie' ? vraag : 'algemeen';
  const route = routes[key];

  return (
    <main>
      <section className="bg-canvas pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-48">
        <div className="mx-auto max-w-6xl px-6 xl:max-w-[88rem]">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem] text-balance">Bespreek uw casus veilig en vrijblijvend</h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] md:text-[1.15rem] text-pretty">
              De knop opent uw e-mailprogramma met een vooraf gestructureerd bericht:
              vul uw gegevens en een korte omschrijving aan en verstuur het. Er worden via deze website geen gegevens
              opgeslagen.
            </p>

            {/* Topic, preset by the route the visitor came through; they can still switch before mailing */}
            <div className="mt-12">
              <p className="eyebrow">Kies uw Onderwerp</p>
              <ul className="flex flex-wrap gap-2">
                {(Object.keys(routes) as Route[]).map((k) => (
                  <li key={k}>
                    <Link
                      href={k === 'algemeen' ? '/contact' : `/contact?vraag=${k}`}
                      scroll={false}
                      aria-current={k === key ? 'true' : undefined}
                      className={`inline-flex rounded-full border px-4 py-1.5 font-sans text-[0.8rem] transition-colors duration-300 ${
                        k === key ? 'border-ink bg-ink text-white' : 'border-line text-ink-soft hover:border-ink/40 hover:text-ink'
                      }`}
                    >
                      {routes[k].label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* The single contact point */}
            <a
              href={route.href}
              className="group mt-10 inline-flex items-center gap-4 rounded-[4px] border border-ink bg-ink px-8 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-ink-soft"
            >
              E-mail
              <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
            </a>

            {/* Plain address as a fallback for visitors without a configured mail client */}
            <p className="mt-6 text-[0.9rem] text-muted">
              Of mail rechtstreeks naar{' '}
              <a href={route.href} className="link-quiet font-medium text-ink">
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
