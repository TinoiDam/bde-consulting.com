import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

// Portrait lives at public/assets/tinoi-consultant.jpg; if the file is missing a monogram is shown.
const PORTRAIT = '/assets/tinoi-consultant.jpg';
const hasPortrait = fs.existsSync(path.join(process.cwd(), 'public', PORTRAIT));

const titles = [
  'Interim Management & IT Consultant',
  'BDE Management Consulting',
];

const career = [
  { period: '2025 – heden', role: 'Business Consultant', org: 'The Future Group' },
  { period: '2024 – 2025', role: 'Adviseur / Projectleider', org: 'Vellekoop & Meesters informatiemanagement' },
  { period: '2022 – 2024', role: 'Business Consultant', org: 'Eiffel Interim & Consultancy' },
];

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
].map((c) => ({
  ...c,
  src: fs.existsSync(path.join(process.cwd(), 'public', 'assets', 'certs', c.file)) ? `/assets/certs/${c.file}` : null,
}));

const LINKEDIN = 'https://www.linkedin.com/in/tinoidam/';

const label = 'text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[#0A1931]/55';

export default function AboutSection() {
  return (
    <section id="over" className="bg-[linear-gradient(to_bottom,#f4f8ff,#ffffff)] py-20 md:py-28 lg:py-32">
      <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#1D4ED8]">Over</p>

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left: portrait, name, titles, education, certifications */}
          <div className="lg:w-[40%] lg:shrink-0">
            {/* Portrait with name and titles beside it on desktop */}
            <div className="lg:flex lg:items-end lg:gap-6">
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
              </div>
            </div>

            <div className="mt-10 lg:mt-8">
              <ul className="mt-4 space-y-2">
                {education.map((e) => (
                  <li key={e.level} className="text-sm leading-relaxed text-[#0A1931]">
                    <span className="font-semibold">{e.level}:</span> <span className="font-light">{e.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 lg:mt-8">
              <h3 className={label}>Certificeringen en trainingen</h3>
              {/* Badges in full colour (fading to grey on hover), text tags for credentials without a badge below */}
              <ul className="mt-6 flex flex-wrap items-center justify-start gap-x-8 gap-y-4">
                {certifications
                  .filter((c) => c.src)
                  .map((c) => (
                    <li
                      key={c.file}
                      className="cert-item-wrapper flex items-center transition-all duration-300 ease-out hover:[filter:grayscale(100%)_opacity(50%)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- fixed max box, width follows the badge's aspect ratio */}
                      <img
                        src={c.src!}
                        alt={c.name}
                        title={c.name}
                        loading="lazy"
                        className="h-auto w-auto max-h-[45px] max-w-[130px] object-contain"
                      />
                    </li>
                  ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {certifications
                  .filter((c) => !c.src)
                  .map((c) => (
                    <li key={c.file} className="rounded-[4px] bg-[#f1f5f9] px-3 py-1.5 text-xs font-medium text-[#0A1931]/80">
                      {c.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Right: profile and career */}
          <div className="lg:w-[60%] space-y-12">
            <p className="max-w-2xl font-sans font-light text-lg md:text-xl leading-[1.7] tracking-[0.01em] text-[#0A1931]">
              Consultant met brede ervaring in procesontwerp, procesmanagement en organisatieadvies binnen complexe en
              politiek-bestuurlijke omgevingen. Analytisch, zorgvuldig en een verbinder tussen technische specialisten en
              de business. Vertaalt strategische kaders naar concrete sturing voor multidisciplinaire teams, en realiseert
              via gerichte werksessies en governance-structuren breed gedragen oplossingen over domeinen heen.
            </p>

            <div>
              <h3 className={label}>Loopbaan</h3>
              <dl className="mt-6 divide-y divide-[#e2e8f0] border-t border-[#e2e8f0]">
                {career.map((c) => (
                  <div key={c.period} className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-8">
                    <dt className="text-xs tabular-nums tracking-[0.08em] text-[#94a3b8] sm:pt-1">{c.period}</dt>
                    <dd>
                      <p className="text-[0.9375rem] font-semibold text-[#0A1931]">{c.role}</p>
                      <p className="text-sm font-light text-[#0A1931]/75">{c.org}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Connect */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#e2e8f0] pt-8 sm:flex-row sm:items-center sm:gap-10">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 self-start sm:self-auto rounded-[4px] border border-[#0A1931] px-5 py-3 text-sm font-bold text-[#0A1931] transition-colors duration-300 hover:bg-[#0A1931] hover:text-white"
          >
            Connect op LinkedIn
            <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
          <a href="#contact" className="group inline-flex items-center gap-2 self-start sm:self-auto text-sm font-bold text-[#0A1931]">
            Neem contact op
            <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
