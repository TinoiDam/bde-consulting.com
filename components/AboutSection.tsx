import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import ClientLogos from '@/components/ClientLogos';
import ExpandableText from '@/components/ExpandableText';

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

// Biography, split into titled sections; the first section is visible before expanding
const BIO: { title: string; paragraphs: string[] }[] = [
  {
      title:'BDE Management Consulting is opgericht vanuit een fundamentele overtuiging: dat echte digitale realisatie ontstaat op het snijvlak van inhoudelijke deep dives, mensgericht leiderschap en diplomatieke vaardigheden.',
      paragraphs: ['Wij zijn van mening dat effectieve digitale sturing onmogelijk is zonder de bereidheid en capaciteit om direct de inhoudelijke diepte in te gaan. Te vaak zien we in de markt dat programmamanagement vervalt in het blind sturen op nietszeggende milestones, oppervlakkige tijdlijnen en window dressing via spreadsheets. Dit is het directe gevolg van een gebrek aan inhoudelijke diepgang: wie de materie niet kan doorgronden, heeft immers geen ander sturingsmiddel dan de spreadsheet.',
      'Dit gebrek aan inhoud leidt tot kaders en opdrachten die niet alleen onrealistisch zijn qua tijd, maar inhoudelijk vaak onduidelijk zijn of simpelweg feitelijk niet kloppen. Dit is waar het fundamenteel wringt op de werkvloer: het dwingt professionals en specialisten te werken op basis van een foutieve blauwdruk. Omdat papieren milestones in het begin eenvoudig groen kleuren, blijft de werkelijke schade vaak lang gemaskeerd. De destructieve effecten van deze aanpak—zoals operationele uitval, zware technische schuld en het verlies van onderling vertrouwen—worden pas op de lange termijn onherroepelijk zichtbaar.',
    ],
  },
  {
    title: 'Technologie als ondersteuning, de mens als fundament',
    paragraphs: [
      'Technologie is in onze optiek altijd een ondersteunend hulpmiddel. De technische oplossing of architectuur is vaak het startpunt, maar de echte uitdaging zit in de duurzame verankering ervan. Binnen complexe, sterk gereguleerde matrixorganisaties is voor deze verankering meer nodig dan alleen techniek en procesbeheersing; het vraagt om scherpe diplomatieke vaardigheden en stakeholdermanagement om over afdelingsgrenzen heen draagvlak en échte beweging te creëren.',
      'Wij geloven dat een transformatie pas slaagt wanneer we door de oppervlakkige voortgangsrapportages heen prikken en de realiteit op de werkvloer verbinden met de strategische doelen. Daarom pakken wij de regie op de samenhang: analytisch scherp op de inhoud, diplomatiek in het krachtenveld, en altijd met een diep begrip van de organisatie.',
    ],
  },
  {
    title: 'Het Profiel van de Moderne Consultant',
    paragraphs: [
      'De basis van BDE Management Consulting werd gelegd door oprichter Tinoi Dam MSc. Zijn reis begon niet in de consultancy, maar in de vroege pioniersjaren van de digitale economie. Gedreven door een sterke vroege autonomie ontdekte hij al op jonge leeftijd de wetmatigheden van systemen, code en netwerken: van database-architecturen (MySQL/PHP) en cybersecurity tot vroege e-commerce en wereldwijde Google AdSense-partnerships. Deze vroege focus op technologie, later gecombineerd met internationale ervaringen en de dynamiek van financiële markten, vormde een natuurlijke kiem voor onafhankelijk ondernemerschap.',
    ],
  },
  {
    title: 'Van inhoudelijke executie naar strategische regie',
    paragraphs: [
      'De praktijk is geëvolueerd langs een steil en bewust groeipad. Begonnen in de harde consultancypraktijk met het crunchen van complexe data en het bouwen van kritische rapportages, verschoof de focus al snel naar procesbeheersing en overkoepelende sturing. Van het leiden van individuele specialistenteams groeide BDE door naar de integrale regie over complexe projectportfolio’s binnen de overheid en de financiële sector.',
      'Hiermee vertegenwoordigt BDE het profiel van de moderne consultant. Waar de traditionele adviseur vaak stopt bij abstracte managementrapportages, combineren wij inhoudelijke scherpte met de menselijke kant van verandering. Onze stijl is analytisch, resultaatgedreven en diplomatiek: we zijn eerlijk en direct (hard op de inhoud) om beweging te creëren, maar blijven altijd dicht bij de organisatie (zacht op de relatie) om duurzaam draagvlak te borgen.',
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
        <p className="mt-1 flex items-center gap-2 font-sans text-[0.8rem] text-muted">
          2K+ volgers <span aria-hidden="true" className="text-subtle">·</span> 500+ connecties
          <span aria-hidden="true" className="text-subtle">·</span>
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
      <section id="over" className="scroll-mt-20 bg-canvas py-20 md:py-28 lg:py-32">
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

      {/* Credentials band: light blue, so the change of background separates it from the profile above */}
      <section className="bg-mist py-20 md:py-28">
        <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
          <div className="mx-auto max-w-[1200px]">
            <div data-reveal>
              <ClientLogos />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
