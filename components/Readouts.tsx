'use client';

import { useEffect, useRef, useState } from 'react';

type Readout = { value: number; suffix?: string; label: string };

const DURATION = 1200;

// Quiet editorial metrics; numbers count up once the row scrolls into view
export default function Readouts({ items }: { items: Readout[] }) {
  const root = useRef<HTMLDListElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = root.current;
    if (!el) return;
    setProgress(0);
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          setProgress(1 - Math.pow(1 - t, 3)); // ease-out
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <dl ref={root} className="grid grid-cols-3 gap-x-6 sm:flex sm:gap-x-16">
      {items.map((r) => (
        <div key={r.label} className="flex flex-col gap-1">
          <dt className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#64748b]">{r.label}</dt>
          <dd className="order-first font-sans font-light tabular-nums text-[1.8rem] leading-none text-[#0A1931]">
            {Math.round(r.value * progress)}
            {r.suffix}
          </dd>
        </div>
      ))}
    </dl>
  );
}
