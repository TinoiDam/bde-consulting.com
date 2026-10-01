import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import ClientLogos from '@/components/ClientLogos';
import ExpandableText from '@/components/ExpandableText';
import { certifications } from '@/lib/certifications';

// Portrait lives at public/assets/tinoi-consultant.jpg; if the file is missing a monogram is shown.
const PORTRAIT = '/assets/tinoi-consultant.jpg';
const hasPortrait = fs.existsSync(path.join(process.cwd(), 'public', PORTRAIT));

// Role and employer per period
const career = [
  {
    period: '2025 – heden',
    role: 'Interim Consultant, Partner IT-Ondernemer',
    org: 'The Future Group',
  },
  {
    period: '2024 – 2025',
    role: 'Management Consultant / Adviseur',
    org: 'Via Boutique Consultancy in Informatiemanagement',
  },
  {
    period: '2022 – 2024',
    role: 'Business Consultant',
    org: 'Via grootste interim-, consultancy- en projectenorganisatie van Nederland',
  },
] as { period: string; role: string; org: string; orgNote?: string }[];

const LINKEDIN = 'https://www.linkedin.com/in/tinoidam/';

// Profile copy (edit freely)
const HEADLINE = 'Achtergrond & Visie';

// Biography, split into titled sections; the first section is visible before expanding.
// An optional list renders after the paragraphs as a bold term followed by its explanation.
const BIO: { title: string; paragraphs: string[]; intro?: string; list?: { term: string; text: string }[] }[] = [
  {
    title: 'De Moderne Consultant',
    paragraphs: [
      'BDE Management Consulting is opgericht door Tinoi Dam MSc. Zijn reis begon in de pioniersjaren van de digitale economie. Al op jonge leeftijd doorgrondde hij de wetmatigheden van code, netwerken en database-architecturen. Deze vroege technologiefocus – later gecombineerd met de dynamiek van financiële markten – vormde het fundament voor onafhankelijk ondernemerschap.',
      'Vanuit de harde praktijk van data crunching verschoof de focus al snel naar procesbeheersing en integrale regie. Vandaag de dag voert BDE de overkoepelende sturing over complexe projectportfolio’s binnen de overheid en de financiële sector.',
      'Waar de traditionele adviseur stopt bij abstracte managementrapportages, combineert BDE inhoudelijke diepgang met de menselijke kant van verandering. Analytisch, resultaatgedreven en diplomatiek: hard op de inhoud, zacht op de relatie.',
    ],
  },
  {
    title: 'Onze Visie: Sturing vanuit Inhoud, Niet vanuit Spreadsheets',
    paragraphs: [
      'Effectieve digitale sturing is onmogelijk zonder de bereidheid om de inhoudelijke diepte in te gaan. Veel projectmanagement vervalt in het blind sturen op nietszeggende milestones en window dressing via spreadsheets.',
    ],
    intro: 'Wanneer een adviseur de materie niet doorgrondt, is de spreadsheet vaak nog het enige sturingsmiddel. Dit leidt onherroepelijk tot:',
    list: [
      { term: 'Onrealistische kaders', text: 'die inhoudelijk simpelweg feitelijk niet kloppen.' },
      { term: 'Schijnveiligheid', text: 'omdat papieren milestones in het begin altijd eenvoudig groen kleuren.' },
      { term: 'Langetermijnschade', text: 'in de vorm van operationele uitval, zware technische schuld en verlies van vertrouwen.' },
    ],
  },
  {
    title: 'De mens als fundament',
    paragraphs: [
      'De technische architectuur is slechts het startpunt; de echte uitdaging zit in de duurzame verankering. Binnen complexe, sterk gereguleerde matrixorganisaties vraagt dit om strakke regie op de samenhang. Met diep organisatiebegrip, scherpte op de inhoud en sterk stakeholdermanagement creëert BDE draagvlak over afdelingsgrenzen heen.',
    ],
  },
];

const LINKEDIN_ICON =
  'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z';

function SignatureCard() {
  return (
    <div className="flex items-center gap-5">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-ink ring-1 ring-line">
        {hasPortrait ? (
          <Image src={PORTRAIT} alt="Portret van Tinoi Dam" fill sizes="64px" className="object-cover object-[center_20%]" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-serif text-sm text-white/85">TD</span>
        )}
      </div>
      <div className="leading-tight">
        <p className="font-sans text-[0.95rem] font-semibold text-ink">
          Tinoi Dam<span className="ml-1 text-[0.72rem] font-normal text-muted">MSc</span>
        </p>
        <p className="mt-1 font-sans text-[0.85rem] text-muted">Partner</p>
        <p className="mt-2 flex items-center gap-3 font-sans text-[0.8rem] text-muted">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn-profiel van Tinoi Dam"
            className="inline-flex items-center text-[#0A66C2] transition-opacity hover:opacity-75"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
              <path d={LINKEDIN_ICON} />
            </svg>
          </a>
          <a href="#contact" aria-label="Contact opnemen" className="inline-flex items-center text-ink transition-opacity hover:opacity-75">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="1.5" />
              <path d="m3.5 6 8.5 7 8.5-7" />
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <>
      <section id="over" className="scroll-mt-20 py-20 md:py-28 lg:py-32">
        <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
          {/* 35 / 65 split: sticky title left, collapsible biography (ending in the signature card) and career right.
              Wider container and a larger column gap: less white at the sides, more between the columns. */}
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[35fr_65fr] lg:items-start lg:gap-28">
            <div data-reveal className="lg:sticky lg:top-28">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">{HEADLINE}</h2>
            </div>

            <div data-reveal style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
              <ExpandableText>
                <div className="space-y-10">
                  {BIO.map((section) => (
                    <div key={section.title}>
                      <h3 className="mb-4 text-[1.35rem] text-ink">{section.title}</h3>
                      <div className="space-y-4">
                        {section.paragraphs.map((p) => (
                          <p key={p.slice(0, 32)} className="text-[1.02rem]">
                            {p}
                          </p>
                        ))}
                        {section.intro && <p className="text-[1.02rem]">{section.intro}</p>}
                        {section.list && (
                          <ul className="space-y-2.5 border-l border-line pl-5">
                            {section.list.map((item) => (
                              <li key={item.term} className="text-[1.02rem] font-light leading-[1.65] text-body">
                                <span className="font-medium text-ink">{item.term}</span> {item.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ExpandableText>

              {/* Signature card: always visible, between the expand arrow and the career track */}
              <div className="mt-10">
                <SignatureCard />
              </div>

              {/* Career: horizontal track under the biography */}
              <div className="mt-16">
                <p className="eyebrow">Loopbaan</p>
                <ol className="grid gap-8 border-t border-line pt-6 sm:grid-cols-3 sm:gap-6">
                  {career.map((c, i) => {
                    const current = i === 0;
                    return (
                      <li key={c.period} className="group relative">
                        <span
                          aria-hidden="true"
                          className={`absolute -top-[1.72rem] left-0 h-1.5 w-1.5 rounded-full ${current ? 'bg-accent' : 'border border-subtle/60 bg-canvas'}`}
                        />
                        <p className={`font-sans text-[0.75rem] leading-[1.4] tabular-nums ${current ? 'font-medium text-accent' : 'text-muted'}`}>
                          {c.period}
                        </p>
                        <p className="mt-1 font-sans text-[0.8rem] leading-[1.4] text-muted transition-colors duration-300 group-hover:text-ink">
                          {c.role}
                        </p>
                        <p className="mt-1 font-sans text-[0.6rem] uppercase leading-[1.5] tracking-[0.12em] text-subtle">{c.org}</p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

// Project experience and certifications in one light-blue section, kept apart by spacing:
// client logos on top, certifications and trainings (mini badge in colour, grey on hover) plus name below
export function CredentialsSection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
        <div data-reveal className="mx-auto max-w-[1200px]">
          <ClientLogos />
        </div>

        <div data-reveal className="mx-auto mt-12 max-w-[1200px] md:mt-16">
          <p className="eyebrow text-center">Certificeringen en trainingen</p>
          <ul className="mt-8 grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {certifications.map((c) => (
                  <li
                    key={c.file}
                    className="group flex h-12 items-center gap-3 rounded-[6px] px-3 transition-colors duration-300 hover:bg-white"
                  >
                    <span className="flex h-8 w-11 shrink-0 items-center justify-center">
                      {c.src ? (
                        // eslint-disable-next-line @next/next/no-img-element -- fixed max box, width follows the badge's aspect ratio
                        <img
                          src={c.src}
                          alt=""
                          loading="lazy"
                          className="h-auto w-auto max-h-8 max-w-11 object-contain transition-[filter] duration-300 group-hover:[filter:grayscale(100%)_opacity(50%)]"
                        />
                      ) : (
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                      )}
                    </span>
                    <span className="font-sans text-xs font-medium leading-snug text-ink">{c.name}</span>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
