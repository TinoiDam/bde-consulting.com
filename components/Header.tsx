'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2 relative py-2">
          {/* BDE in elegant script */}
          <span
            className="text-lg md:text-xl font-light text-[#4A7BA7] leading-none"
            style={{fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '300'}}
          >
            BDE
          </span>

          {/* Management Consulting with pen accent */}
          <div className="relative">
            <div className="flex flex-col gap-0 leading-none">
              <span className="text-xs md:text-sm font-serif font-bold text-gray-900 tracking-tight">MANAGEMENT</span>
              <span className="text-xs md:text-sm font-serif font-bold text-gray-900 tracking-tight">CONSULTING</span>
            </div>
            {/* Pen accent line */}
            <svg width="50" height="60" className="absolute -right-12 -top-3 fill-none stroke-[#4A7BA7] stroke-[1.5]" viewBox="0 0 50 60">
              <path d="M45 5 Q40 20, 35 50" strokeLinecap="round"/>
            </svg>
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
