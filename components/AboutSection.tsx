import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import ClientLogos from '@/components/ClientLogos';
import { certifications } from '@/lib/certifications';

// Portrait lives at public/assets/tinoi-consultant.jpg; if the file is missing a monogram is shown.
const PORTRAIT = '/assets/tinoi-consultant.jpg';
const hasPortrait = fs.existsSync(path.join(process.cwd(), 'public', PORTRAIT));

// Role and employer per period
const career = [
  {
    period: '2025 – heden',
    role: 'Consultant, Samenwerkingspartner',
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
const HEADLINE = 'De Moderne Consultant';

// Biography, split into titled sections. The full background lives on /over (app/over/page.tsx).
// An optional list renders after the paragraphs as a bold term followed by its explanation.
export type BioSection = { title?: string; paragraphs: string[]; intro?: string; list?: { term: string; text: string }[] };

const BIO: BioSection[] = [
  {
    paragraphs: [
      'BDE Management Consulting helpt organisaties grip te krijgen op veranderopgaven waarin mensen, IT, data en organisatie samenkomen. Vaak gaat het om vraagstukken met meerdere belangen, bestuurlijke dynamiek en afhankelijkheden; van besluitvorming aan de top tot een uitvoerbare verandering op de werkvloer.', 
      'Met ervaring in politiek-bestuurlijke transformaties combineer ik snelle inhoudelijke verdieping met regie, heldere besluitvorming en een pragmatische aanpak. Ik beweeg soepel tussen directie, management en uitvoering en vertaal strategische richting naar gedragen, uitvoerbare verandering.',
    ]
  }
];

const LINKEDIN_ICON =
  'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z';

// Titled biography sections; shared by the homepage section and the /over page
export function BioSections({ sections }: { sections: BioSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section.title ?? section.paragraphs[0].slice(0, 32)}>
          {section.title && <h3 className="mb-4 text-[1.35rem] text-ink">{section.title}</h3>}
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
                  <li key={item.term} className="text-[1.02rem] font-normal leading-[1.65] text-body">
                    <span className="font-medium text-ink">{item.term}</span> {item.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

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
        <p className="mt-1 font-sans text-[0.85rem] text-muted">Consultant</p>
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
          <a href="/contact" aria-label="Contact opnemen" className="inline-flex items-center text-ink transition-opacity hover:opacity-75">
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
      <section id="over" className="scroll-mt-20 py-10 md:py-14 lg:py-16">
        {/* Same container as section 2 and Roadmap, so the section titles share one left edge */}
        <div className="mx-auto max-w-6xl px-6 xl:max-w-[88rem]">
          {/* Diagonal: the title top left, the biography, signature card and career below it in the right column
              (35 / 65 split from lg, stacked below) */}
          <div className="grid gap-8 lg:grid-cols-[35fr_65fr] lg:gap-x-28 lg:gap-y-10">
            <div data-reveal className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">{HEADLINE}</h2>
            </div>

            <div data-reveal className="lg:col-start-2" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
              <BioSections sections={BIO} />

              {/* Signature card and career on one row (stacked on small screens): card left, a compact horizontal
                  career track right, separated by a thin rule */}
              <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-start md:gap-10">
                <div className="shrink-0 md:border-r md:border-line md:pr-10 md:pt-1">
                  <SignatureCard />
                </div>

                {/* Career: compact horizontal track */}
                <div className="min-w-0 flex-1">
                  <p className="eyebrow">Loopbaan</p>
                  <ol className="grid gap-6 border-t border-ink/15 pt-6 sm:grid-cols-3 sm:gap-5">
                    {career.map((c, i) => {
                      const current = i === 0;
                      return (
                        <li key={c.period} className="group relative">
                          <span
                            aria-hidden="true"
                            className={`absolute -top-[1.72rem] left-0 h-1.5 w-1.5 rounded-full ${current ? 'bg-ink' : 'border border-ink/45 bg-canvas'}`}
                          />
                          <p className={`font-sans text-[0.75rem] leading-[1.4] tabular-nums ${current ? 'font-semibold text-ink' : 'font-medium text-ink-soft'}`}>
                            {c.period}
                          </p>
                          <p className="mt-1 font-sans text-[0.78rem] leading-[1.4] text-body transition-colors duration-300 group-hover:text-ink">
                            {c.role}
                          </p>
                          <p className="mt-1 font-sans text-[0.6rem] uppercase leading-[1.5] tracking-[0.12em] text-muted">{c.org}</p>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

// Project experience on a light-blue band: client logos (homepage)
export function CredentialsSection() {
  return (
    <section className="bg-sky-hue py-10 md:py-14 lg:py-16">
      <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
        <div data-reveal className="mx-auto max-w-[1200px]">
          <ClientLogos />
        </div>
      </div>
    </section>
  );
}

// Certifications and trainings on the same light-blue band (on /over and /contact): mini badge in colour (grey on
// hover) plus name
export function CertificationsSection() {
  return (
    <section className="bg-sky-hue py-10 md:py-14 lg:py-16">
      <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
        <div data-reveal className="mx-auto max-w-[1200px]">
          <p className="eyebrow text-center text-ink/70">Certificeringen en trainingen</p>
          <ul className="mt-5 grid gap-x-4 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {certifications.map((c) => (
              <li
                key={c.file}
                className="group flex h-11 items-center gap-3 rounded-[6px] px-3 transition-colors duration-300 hover:bg-white"
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
