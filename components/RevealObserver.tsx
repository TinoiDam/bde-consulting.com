'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Reveals [data-reveal] elements once as they enter the viewport (see globals.css).
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)')];
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    root.classList.add('reveal-ready'); // normally already set by the inline head script
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
