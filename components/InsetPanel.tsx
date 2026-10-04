'use client';

import { useEffect, useRef } from 'react';

// Panel that slides over the pinned hero inset from the sides (the hero shows left and right) and widens to full
// width while scrolling: the inset shrinks from its maximum when the panel's top enters the viewport to zero once half
// of the first section (section 2) has come into view. Driven by a CSS variable (--inset, 1 → 0)
// updated per animation frame, so React does not re-render while scrolling.
export default function InsetPanel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const first = el.firstElementChild as HTMLElement | null;
      const half = Math.max(1, (first?.offsetHeight ?? vh) * 0.5);
      const top = el.getBoundingClientRect().top;
      // 0 when the panel's top is at the bottom of the viewport, 1 once half of section 2 is above that edge
      const p = Math.min(1, Math.max(0, (vh - top) / half));
      el.style.setProperty('--inset', String(1 - p));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ '--inset': 1 } as React.CSSProperties}
      className="relative z-10 px-[calc(var(--inset)*1rem)] md:px-[calc(var(--inset)*4vw)]"
    >
      {children}
    </div>
  );
}
