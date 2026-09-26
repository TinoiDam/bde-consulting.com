'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0052CC] to-[#1a4fa5] text-white border-b border-[#00D4FF]/30">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide">
          BDE CONSULTING
        </Link>

        <ul className="hidden md:flex gap-12">
          <li>
            <Link href="/services" className="text-sm tracking-wide font-medium hover:text-[#00D4FF] transition">
              DIENSTEN
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-sm tracking-wide font-medium hover:text-[#00D4FF] transition">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/insights" className="text-sm tracking-wide font-medium hover:text-[#00D4FF] transition">
              INSIGHTS
            </Link>
          </li>
          <li>
            <a href="#contact" className="text-sm tracking-wide font-medium hover:text-[#00D4FF] transition">
              CONTACT
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#00D4FF] text-2xl"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#003d9f] border-t border-[#00D4FF]/20 py-6 px-6">
          <ul className="space-y-4">
            <li><Link href="/services" className="block text-sm font-medium hover:text-[#00D4FF]">Diensten</Link></li>
            <li><Link href="/portfolio" className="block text-sm font-medium hover:text-[#00D4FF]">Portfolio</Link></li>
            <li><Link href="/insights" className="block text-sm font-medium hover:text-[#00D4FF]">Insights</Link></li>
            <li><a href="#contact" className="block text-sm font-medium hover:text-[#00D4FF]">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
