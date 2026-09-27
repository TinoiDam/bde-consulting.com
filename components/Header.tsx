'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          {/* Monogram Symbol */}
          <svg className="w-8 h-8 md:w-10 md:h-10 mb-1" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* B - Left curve */}
            <path d="M16 12 L28 12 Q32 12 32 16 L32 22 Q32 26 28 26 L16 26 M16 26 L28 26 Q32 26 32 30 L32 50 Q32 54 28 54 L16 54"
                  stroke="#0052CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

            {/* D - Center curve (overlapping) */}
            <path d="M32 12 L40 12 Q48 12 48 22 L48 42 Q48 54 40 54 L32 54"
                  stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

            {/* E - Right lines (overlapping) */}
            <path d="M48 12 L56 12 M48 32 L54 32 M48 54 L56 54"
                  stroke="#0052CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold tracking-tight text-gray-900 leading-none">BDE</span>
            <span className="text-xs font-light tracking-widest text-gray-400 uppercase">Management Consulting</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10">
          <li>
            <Link href="/services" className="text-xs tracking-widest font-medium text-gray-700 hover:text-[#0052CC] transition uppercase">
              DIENSTEN
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-xs tracking-widest font-medium text-gray-700 hover:text-[#0052CC] transition uppercase">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/insights" className="text-xs tracking-widest font-medium text-gray-700 hover:text-[#0052CC] transition uppercase">
              INSIGHTS
            </Link>
          </li>
          <li>
            <a href="#contact" className="text-xs tracking-widest font-medium text-gray-700 hover:text-[#0052CC] transition uppercase">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-900 text-2xl hover:text-[#0052CC] transition"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-50 border-t border-gray-100">
          <div className="px-6 py-6 space-y-6">
            <Link href="/services" className="block text-sm font-medium text-gray-900 hover:text-[#0052CC] transition uppercase tracking-widest">
              Diensten
            </Link>
            <Link href="/portfolio" className="block text-sm font-medium text-gray-900 hover:text-[#0052CC] transition uppercase tracking-widest">
              Portfolio
            </Link>
            <Link href="/insights" className="block text-sm font-medium text-gray-900 hover:text-[#0052CC] transition uppercase tracking-widest">
              Insights
            </Link>
            <a href="#contact" className="block text-sm font-medium text-gray-900 hover:text-[#0052CC] transition uppercase tracking-widest">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
