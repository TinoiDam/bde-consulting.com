import Link from 'next/link';
import { mainNav } from '@/lib/navigation';

const LINKEDIN = 'https://www.linkedin.com/company/bde-management-consulting';
// Company statement; add registration details (e.g. KvK-nummer) here when available
const LEGAL = 'BDE Management Consulting B.V. — interim management en IT-consultancy voor organisaties in verandering.';

const columns = [
  {
    title: 'Diensten',
    links: [
      { label: 'Transformation Sprints', href: '/services#sprints' },
      { label: 'Strategic Retainer', href: '/services#retainer' },
      { label: 'Fractional IT Director', href: '/services#fractional' },
      { label: 'Interim Management', href: '/services#interim' },
    ],
  },
  // Same items and order as the header menu (Contact is covered by the contact column)
  { title: 'Navigatie', links: mainNav.filter((item) => item.label !== 'Contact') },
];

const Heading = ({ children }: { children: React.ReactNode }) => (
  <p className="eyebrow mb-5 text-subtle">{children}</p>
);

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[#0b1329] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1fr_1.6fr] lg:gap-10">
          {/* Wordmark */}
          <Link href="/" aria-label="BDE - home" className="inline-flex items-start self-start font-serif text-[2rem] font-bold leading-none tracking-[-0.03em]">
            BDE
            <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-[0.08em] -mt-[0.06em] h-[0.36em] w-[0.36em] text-white/80">
              <polygon points="2,0 10,0 10,8 7.6,8 7.6,2.4 2,2.4" fill="currentColor" />
            </svg>
          </Link>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <Heading>{col.title}</Heading>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="link-quiet font-sans text-[0.9rem] font-light text-white/75 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Legal + social, parallel on the right */}
          <div>
            <Heading>Contact</Heading>
            <p className="max-w-sm font-sans text-[0.9rem] font-light leading-[1.7] text-white/70">{LEGAL}</p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn-profiel van Tinoi Dam"
              className="mt-6 inline-flex items-center gap-3 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-75"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              Volg op LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-16 font-sans text-[0.75rem] text-white/40">
          © {new Date().getFullYear()} BDE Management Consulting B.V.
        </p>
      </div>
    </footer>
  );
}
