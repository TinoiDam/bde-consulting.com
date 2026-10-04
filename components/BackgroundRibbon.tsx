'use client';

import { useEffect, useRef } from 'react';

// A very faint light-blue plane behind the homepage sections: everything on one side of a line through the middle of
// the viewport is tinted in one flat colour. The plane stays fixed and turns around that centre as the page scrolls,
// so the diagonal edge sweeps slowly across the content while reading (a half-plane, not a band, so no bar crosses
// the background). It lies over the white page background and under all content: the parent clips it (clip-path, which
// also clips fixed children) and the content follows it in a positioned element. The angle is a CSS variable updated
// per animation frame, so React does not re-render while scrolling. With reduced motion it keeps its starting angle.
const START = -14; // degrees at the top of the page
const SPEED = 0.035; // degrees per scrolled pixel

export default function BackgroundRibbon() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.setProperty('--ribbon-angle', `${START + window.scrollY * SPEED}deg`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ '--ribbon-angle': `${START}deg` } as React.CSSProperties}
      className="pointer-events-none fixed top-1/2 left-1/2 h-[200vmax] w-[400vmax] origin-top -translate-x-1/2 rotate-[var(--ribbon-angle)] bg-[#fafcfe]"
    />
  );
}
