'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 bg-white/90 px-3 py-2 rounded-full">
          {/* Hamburger icon */}
          <div className="flex flex-col gap-1.5">
            <div className="w-4 h-0.5 bg-gray-900"></div>
            <div className="w-4 h-0.5 bg-gray-900"></div>
            <div className="w-4 h-0.5 bg-gray-900"></div>
          </div>

          <span className="text-base md:text-lg font-bold tracking-tight text-gray-900 leading-none">BDE</span>
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
