'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(true);

  // Over the homepage hero the bar is transparent with a white wordmark; elsewhere it turns frosted white
  useEffect(() => {
    const update = () => setOverHero(window.scrollY < window.innerHeight - 80);
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

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10">
          <li>
            <Link href="/services" className="text-xs tracking-widest font-medium text-body hover:text-ink transition uppercase">
              DIENSTEN
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-xs tracking-widest font-medium text-body hover:text-ink transition uppercase">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/insights" className="text-xs tracking-widest font-medium text-body hover:text-ink transition uppercase">
              INSIGHTS
            </Link>
          </li>
          <li>
            <a href="#contact" className="text-xs tracking-widest font-medium text-body hover:text-ink transition uppercase">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-ink text-2xl hover:text-ink transition"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-canvas-alt border-t border-line">
          <div className="px-6 py-6 space-y-6">
            <Link href="/services" className="block text-sm font-medium text-ink hover:text-ink transition uppercase tracking-widest">
              Diensten
            </Link>
            <Link href="/portfolio" className="block text-sm font-medium text-ink hover:text-ink transition uppercase tracking-widest">
              Portfolio
            </Link>
            <Link href="/insights" className="block text-sm font-medium text-ink hover:text-ink transition uppercase tracking-widest">
              Insights
            </Link>
            <a href="#contact" className="block text-sm font-medium text-ink hover:text-ink transition uppercase tracking-widest">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
