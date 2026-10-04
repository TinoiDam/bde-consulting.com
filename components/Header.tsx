'use client';

import Image from 'next/image';
import Link from 'next/link';
import futureGroupWhite from '@/public/logos/the-future-group-white.png';
import futureGroupNavy from '@/public/logos/the-future-group-navy.png';
import { contactHref, mainNav } from '@/lib/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(true);

  // At the very top of the homepage the bar is transparent with a white wordmark; as soon as you scroll it turns
  // frosted white
  useEffect(() => {
    const update = () => setOverHero(window.scrollY < 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  const onBlue = pathname === '/' && overHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
        onBlue && !isOpen
          ? 'bg-transparent border-transparent'
          : 'bg-white/[0.96] backdrop-blur-[12px] border-[rgba(15,23,42,0.08)]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo - BDE wordmark with Monolith Chevron brand mark */}
        <Link
          href="/"
          aria-label="BDE - home"
          className={`group py-2 inline-flex items-start font-serif font-bold leading-none tracking-[-0.03em] text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] transition-colors duration-300 ${onBlue ? 'text-white' : 'text-ink'}`}
        >
          BDE
          {/* Chevron pointing top-right; sized in em so it scales with the letters */}
          <svg
            viewBox="0 0 10 10"
            aria-hidden="true"
            focusable="false"
            className={`ml-[0.08em] -mt-[0.06em] w-[0.36em] h-[0.36em] shrink-0 transition-colors duration-300 ease-in-out ${onBlue ? 'text-white group-hover:text-[#DDEEFF] group-focus-visible:text-[#DDEEFF]' : 'text-accent'}`}
          >
            <polygon points="2,0 10,0 10,8 7.6,8 7.6,2.4 2,2.4" fill="currentColor" />
          </svg>
        </Link>

        {/* Desktop Menu (shared list with the footer) plus the membership badge */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-10">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href === '/contact' ? contactHref(pathname) : item.href} className={`link-quiet text-xs tracking-widest font-semibold uppercase transition-colors duration-300 ${onBlue && !isOpen ? 'text-white [text-shadow:0_1px_8px_rgba(11,19,41,0.45)] hover:text-white/85' : 'text-ink hover:text-ink-soft'}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* "Aangesloten bij The Future Group": follows the bar's colour change. Over the hero the label and
              lettering are white; on the white bar they turn grey and navy (the coloured strokes stay). */}
          <a
            href="https://www.thefuthttps://the-future-group.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aangesloten bij The Future Group (opent in nieuw venster)"
            className={`flex items-center gap-3 border-l pl-8 transition-colors duration-300 ${onBlue && !isOpen ? 'border-white/40' : 'border-line'}`}
          >
            <span className={`font-sans text-[0.6rem] font-medium uppercase leading-[1.3] tracking-[0.16em] transition-colors duration-300 ${onBlue && !isOpen ? 'text-white [text-shadow:0_1px_8px_rgba(11,19,41,0.45)]' : 'text-muted'}`}>
              Aangesloten
              <br />
              bij
            </span>
            <span className="relative block h-9 w-[2.55rem]">
              <Image src={futureGroupWhite} alt="" sizes="48px" className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${onBlue && !isOpen ? 'opacity-100' : 'opacity-0'}`} />
              <Image src={futureGroupNavy} alt="" sizes="48px" className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${onBlue && !isOpen ? 'opacity-0' : 'opacity-100'}`} />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden text-2xl transition-colors duration-300 ${onBlue && !isOpen ? 'text-white' : 'text-ink'}`}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-canvas-alt border-t border-line">
          <div className="px-6 py-6 space-y-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href === '/contact' ? contactHref(pathname) : item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-ink hover:text-ink transition uppercase tracking-widest"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.thefuturegroup.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-t border-line pt-6"
            >
              <span className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted">Aangesloten bij</span>
              <Image src={futureGroupNavy} alt="The Future Group" sizes="48px" className="h-9 w-auto" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
