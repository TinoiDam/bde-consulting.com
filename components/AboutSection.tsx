import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import ClientLogos from '@/components/ClientLogos';
import Readouts from '@/components/Readouts';
import { cases } from '@/lib/cases';

// Portrait lives at public/assets/tinoi-consultant.jpg; if the file is missing a monogram is shown.
const PORTRAIT = '/assets/tinoi-consultant.jpg';
const hasPortrait = fs.existsSync(path.join(process.cwd(), 'public', PORTRAIT));

const titles = [
  'Interim Management & IT Consultant',
];

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

// One line per degree: "Level: degree, field, institution"
const education = [
  { level: 'MSc, Business Administration', detail: 'Rijksuniversiteit Groningen' },
  { level: 'BBA', detail: 'Business Administration (Marketing), Windesheim Zwolle' },
  { level: 'Exchange', detail: 'Management and Economics (Erasmus), Thomas Bata University' },
];

// Badges live in public/assets/certs/; until a file exists the name is shown as a text tag.
const certifications = [
  { name: 'PRINCE2 7 Foundation', file: 'prince2.png' },
  { name: 'IREB CPRE Foundation Level', file: 'cpre.png' },
  { name: 'Lean Six Sigma Black Belt', file: 'sixsigma.png' },
  { name: 'Professional Scrum Master (PSM I)', file: 'scrum.png' },
  { name: 'Microsoft Power BI Data Analyst (PL-300)', file: 'microsoft-pl300.png' },
  { name: 'Lean Portfolio Management', file: 'lean-portfolio.png' },
  { name: 'Data Scientist in Python', file: 'python-data.png' },
  { name: 'AI voor gevorderden', file: 'ai-advanced.png' },
  { name: 'Archimate Foundation', file: 'archimate.png' },
].map((c) => ({
  ...c,
  src: fs.existsSync(path.join(process.cwd(), 'public', 'assets', 'certs', c.file)) ? `/assets/certs/${c.file}` : null,
}));

const LINKEDIN = 'https://www.linkedin.com/in/tinoidam/';

// Console readouts, all derived from data already on the site
const CONSULTANCY_SINCE = new Date(2022, 2, 1); // continuous consultancy since March 2022 (CV)
const yearsConsultancy = Math.floor((Date.now() - CONSULTANCY_SINCE.getTime()) / (365.25 * 24 * 3600 * 1000));
const readouts = [
  { value: yearsConsultancy, suffix: '+', label: 'Jaar consultancy' },
  { value: 10, suffix: '+', label: 'Projecten' },
  { value: cases.length, label: 'Sectoren' },
];

// Sub-header for the About blocks (spacing below included)
function Label({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 w-full text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[#475569]">
      {children}
    </h3>
  );
}

export default function AboutSection() {
  return (
    <section id="over" className="scroll-mt-20 bg-[linear-gradient(to_bottom,#f4f8ff,#ffffff)] py-20 md:py-28 lg:py-32">
      <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#1D4ED8]">Over</p>

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left: portrait, name, titles, links, education */}
          <div className="lg:w-[40%] lg:shrink-0">
            {/* Portrait beside name, titles, links and education on desktop (top-aligned) */}
            <div className="lg:flex lg:items-start lg:gap-6">
              <div className="relative aspect-[4/5] w-full max-w-sm lg:w-[200px] lg:shrink-0 overflow-hidden rounded-[6px] bg-[#0A1931] ring-1 ring-inset ring-[#0A1931]/10">
                {hasPortrait ? (
                  <Image src={PORTRAIT} alt="Portret van Tinoi Dam" fill sizes="(min-width: 1024px) 200px, 90vw" className="object-cover" />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center font-serif text-6xl font-bold text-white/85">TD</span>
                )}
              </div>

              <div>
                <h2 className="mt-8 lg:mt-0 font-serif text-[2.2rem] font-bold leading-tight text-[#0A1931]">Tinoi Dam, MSc</h2>
                <ul className="mt-3 space-y-1">
                  {titles.map((t) => (
                    <li key={t} className="font-sans font-light text-[0.9375rem] leading-relaxed text-[#0A1931]/80">
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Compact connect links beside the portrait */}
                <div className="mt-4 flex items-center gap-5">
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-[4px] border border-[#0A1931]/20 px-2.5 py-1.5 text-xs font-bold text-[#0A1931] transition-colors duration-300 hover:border-[#0A1931] hover:bg-[#0A1931] hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="#contact" className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1931]">
                    Contact
                    <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Education, in the same column as the name so photo and text form one block */}
                <ul className="mt-8 lg:mt-6 space-y-1.5">
                  {education.map((e) => (
                    <li key={e.level} className="text-sm leading-relaxed text-[#0A1931]">
                      <span className="font-semibold">{e.level}:</span> <span className="font-light">{e.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: profile and readouts */}
          <div className="lg:w-[60%] space-y-12">
            <p className="max-w-2xl mb-8 lg:mb-10 font-sans font-light text-base lg:text-[1.05rem] leading-[1.65] tracking-[0.01em] text-[#0A1931]/80">
              Interim consultant met brede ervaring in organisatieadvies, project- en programmamanagement en digitale transformaties binnen complexe, politiek-bestuurlijke omgevingen.
            </p>

            {/* Readout strip */}
            <Readouts items={readouts} />
          </div>
        </div>

        {/* Career (left) beside project experience (right), same 40/60 split as the profile row */}
        <div className="mt-16 md:mt-20 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-[40%] lg:shrink-0">
            <div>
              <Label>Loopbaan</Label>
              {/* Timeline rail with markers; the current role pulses */}
              <ol className="relative border-l border-[#e2e8f0]">
                {career.map((c, i) => {
                  const current = i === 0;
                  return (
                    <li
                      key={c.period}
                      className="group relative grid gap-1 py-4 pl-7 transition-colors duration-300 hover:bg-[#f8fafc] sm:grid-cols-[9rem_1fr] sm:gap-8"
                    >
                      <span aria-hidden="true" className="absolute left-0 top-[1.4rem] -translate-x-1/2">
                        {current && (
                          <span className="absolute inset-0 rounded-full bg-[#1E3A8A]/30 motion-safe:animate-ping" />
                        )}
                        <span
                          className={`relative block h-2.5 w-2.5 rounded-full border-2 transition-colors duration-300 ${
                            current ? 'border-[#1E3A8A] bg-[#1E3A8A]' : 'border-[#cbd5e1] bg-white group-hover:border-[#1E3A8A]'
                          }`}
                        />
                      </span>
                      <p className={`text-xs tabular-nums tracking-[0.08em] sm:pt-1 ${current ? 'text-[#1E3A8A] font-semibold' : 'text-[#94a3b8]'}`}>
                        {c.period}
                      </p>
                      <div>
                        <p className="text-[0.9375rem] font-semibold text-[#0A1931]">{c.role}</p>
                        <p className="text-sm font-light text-[#0A1931]/75">
                          {c.org}
                          {c.orgNote && <span className="text-[#94a3b8]"> · {c.orgNote}</span>}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className="lg:w-[60%]">
            <Label>Project ervaring</Label>
            <div>
              <ClientLogos variant="grid" />
            </div>
          </div>
        </div>

        {/* Certifications: centered, capped at 1200px */}
        <div className="mx-auto mt-24 max-w-[1200px] md:mt-32 lg:mt-40">
          <div>
            <Label>Certificeringen en trainingen</Label>
            {/* Uniform tags: mini badge (in colour, grey on hover) plus name; a dot marks credentials without a badge */}
            <ul className="grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]/50" />
                    )}
                  </span>
                  <span className="text-xs font-medium leading-snug text-[#0A1931]">{c.name}</span>
                </li>
              ))}
            </ul>
              
        </div>
        </div>
      </div>
    </section>
  );
}
