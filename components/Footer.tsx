import Link from 'next/link';
import { COMPANY, KVK } from '@/lib/legal';

const LINKEDIN = 'https://www.linkedin.com/company/bde-management-consulting';

// Legal pages (content and version history in lib/legal.ts)
const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Legal', href: '/legal' },
  { label: 'Cookies', href: '/cookies' },
];

// Minimal footer: company name with KvK number left, legal links and LinkedIn right (stacks on mobile)
export default function Footer() {
  return (
    <footer className="bg-[#0b1329] text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <p className="font-sans text-[0.8rem] text-white/60">
          © {new Date().getFullYear()} {COMPANY}
          <span aria-hidden="true" className="mx-2 text-white/25">·</span>
          KvK {KVK}
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <nav aria-label="Juridisch">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-quiet font-sans text-[0.8rem] text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BDE Management Consulting op LinkedIn"
            className="text-white/75 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
