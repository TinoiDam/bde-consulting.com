'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f1419] text-white border-b border-[#a85a5a]/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          BDE
        </Link>

        <ul className="hidden md:flex gap-10">
          <li>
            <Link href="/services" className="text-sm tracking-wide hover:text-[#a85a5a] transition">
              DIENSTEN
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-sm tracking-wide hover:text-[#a85a5a] transition">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/insights" className="text-sm tracking-wide hover:text-[#a85a5a] transition">
              INSIGHTS
            </Link>
          </li>
          <li>
            <a href="#contact" className="text-sm tracking-wide hover:text-[#a85a5a] transition">
              CONTACT
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#a85a5a]"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#1a1f2e] border-t border-[#a85a5a]/20 py-4 px-6">
          <ul className="space-y-4">
            <li><Link href="/services" className="block text-sm hover:text-[#a85a5a]">Diensten</Link></li>
            <li><Link href="/portfolio" className="block text-sm hover:text-[#a85a5a]">Portfolio</Link></li>
            <li><Link href="/insights" className="block text-sm hover:text-[#a85a5a]">Insights</Link></li>
            <li><a href="#contact" className="block text-sm hover:text-[#a85a5a]">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
