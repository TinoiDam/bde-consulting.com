import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import ClientLogos from '@/components/ClientLogos';

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
const HEADLINE = 'Achtergrond & Regie';
const PROFILE =
  'Interim consultant met brede ervaring in organisatieadvies, project- en programmamanagement en digitale transformaties binnen complexe, politiek-bestuurlijke omgevingen.';


const LINKEDIN_ICON =
  'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z';

export default function AboutSection() {
  return (
    <>
    <section id="over" className="scroll-mt-20 bg-canvas py-20 md:py-28 lg:py-32">
      <div className="max-w-[110rem] mx-auto px-6 lg:px-[4vw]">
        {/* Executive profile: serif anchor left, one sequential reading stack right */}
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[3.5fr_6.5fr] lg:items-start lg:gap-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">{HEADLINE}</h2>

          {/* Right column: text core (6.5fr) beside a micro timeline track (3.5fr) */}
          <div className="grid gap-12 lg:grid-cols-[6.5fr_3.5fr] lg:items-start lg:gap-10">
            <div>
              {/* 1. Profile */}
              <p className="font-sans text-[1.05rem] font-light leading-[1.7] text-accent">{PROFILE}</p>

              {/* 3. Executive signature card */}
              <div className="mt-10 flex items-center gap-5">
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
                    <a
                      href="#contact"
                      aria-label="Contact opnemen"
                      className="inline-flex items-center text-ink transition-opacity hover:opacity-75"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="3" y="5" width="18" height="14" rx="1.5" />
                        <path d="m3.5 6 8.5 7 8.5-7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Career as a micro timeline running parallel to the text */}
            <div>
              <p className="eyebrow">Loopbaan</p>
              <ol className="relative border-l border-line">
                {career.map((c, i) => {
                  const current = i === 0;
                  return (
                    <li key={c.period} className="relative pb-5 pl-4 last:pb-0">
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-[0.3rem] h-1.5 w-1.5 -translate-x-1/2 rounded-full ${current ? 'bg-accent' : 'border border-subtle/60 bg-canvas'}`}
                      />
                      <p className={`font-sans text-[0.75rem] leading-[1.4] tabular-nums ${current ? 'font-medium text-accent' : 'text-muted'}`}>
                        {c.period}
                      </p>
                      <p className="font-sans text-[0.75rem] leading-[1.4] text-muted">{c.role}</p>
                      <p className="mt-0.5 font-sans text-[0.6rem] uppercase leading-[1.5] tracking-[0.12em] text-subtle">{c.org}</p>
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
        {/* Project experience: full-width logo row */}
        <div className="mx-auto max-w-[1200px]">
          <ClientLogos />
        </div>
      </div>
    </section>
    </>
  );
}
