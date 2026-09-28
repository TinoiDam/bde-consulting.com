'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cases } from '@/lib/cases';

const AUTOPLAY_MS = 7000;
const pad = (n: number) => String(n).padStart(2, '0');

export default function CaseDashboard() {
  const [active, setActive] = useState(0);
  // Autoplay runs until the visitor takes control (click, key, swipe)
  const [autoplay, setAutoplay] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchX = useRef<number | null>(null);
  const mounted = useRef(false);

  const c = cases[active];
  const running = autoplay && !reducedMotion;
  const paused = hovering || !inView;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    if (root.current) observer.observe(root.current);
    return () => {
      mq.removeEventListener('change', update);
      observer.disconnect();
    };
  }, []);

  // Keep the active tab visible in the horizontal swipe menu on mobile (without scrolling the page on load)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const tab = tabs.current[active];
    const list = tab?.parentElement;
    if (tab && list && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: tab.offsetLeft - 24, behavior: 'smooth' });
    }
  }, [active]);

  const select = (i: number, byUser = true) => {
    const next = (i + cases.length) % cases.length;
    setActive(next);
    if (byUser) setAutoplay(false);
    return next;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const moves: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next: number | null = null;
    if (e.key in moves) next = select(active + moves[e.key]);
    else if (e.key === 'Home') next = select(0);
    else if (e.key === 'End') next = select(cases.length - 1);
    if (next === null) return;
    e.preventDefault();
    tabs.current[next]?.focus();
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) select(active + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      ref={root}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="flex flex-col md:grid md:grid-cols-[1fr_3fr] md:gap-x-8"
    >
      {/* Sector tabs: vertical rail on desktop, horizontal swipe menu on mobile */}
      <div
        role="tablist"
        aria-label="Projectsectoren"
        onKeyDown={onKeyDown}
        className="mb-8 md:mb-0 flex md:flex-col gap-6 md:gap-0 overflow-x-auto md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0 border-b md:border-b-0 md:border-l border-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cases.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.slug}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`case-tab-${item.slug}`}
              role="tab"
              type="button"
              tabIndex={selected ? 0 : -1}
              aria-selected={selected}
              aria-controls="case-panel"
              onClick={() => select(i)}
              className={`group/tab relative shrink-0 whitespace-nowrap text-left uppercase tracking-[0.18em] transition-colors duration-300 pb-3 md:pb-0 md:py-4 md:pl-5 ${
                selected ? 'text-ink' : 'text-subtle hover:text-ink'
              }`}
            >
              <span
                className={`mr-3 text-[0.625rem] tabular-nums transition-colors duration-300 ${
                  selected ? 'text-accent' : 'text-subtle/60 group-hover/tab:text-subtle'
                }`}
              >
                {pad(i + 1)}
              </span>
              <span className={`text-xs md:text-sm ${selected ? 'font-bold' : 'font-medium'}`}>{item.sector}</span>

              {/* Marker on the rail (desktop) or under the tab (mobile); fills up while autoplay runs */}
              {selected && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-accent/20 md:inset-x-auto md:-left-0.5 md:top-0 md:h-auto md:w-[3px]"
                >
                  <span
                    key={`${active}-${running}`}
                    onAnimationEnd={() => select(active + 1, false)}
                    className={`absolute inset-0 origin-left md:origin-top bg-accent ${running ? 'case-progress' : ''}`}
                    style={
                      running
                        ? ({ '--case-duration': `${AUTOPLAY_MS}ms`, animationPlayState: paused ? 'paused' : 'running' } as React.CSSProperties)
                        : undefined
                    }
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Content viewport: stacked images crossfade; the whole card links to the active case */}
      <div
        id="case-panel"
        role="tabpanel"
        aria-labelledby={`case-tab-${c.slug}`}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={onTouchEnd}
      >
        <Link
          href={`/cases/${c.slug}`}
          aria-label={`Bekijk case study: ${c.sector}`}
          className="group relative block aspect-[16/10] overflow-hidden rounded-[6px] bg-ink"
        >
          {cases.map((item, i) => (
            <Image
              key={item.slug}
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 768px) 70vw, 100vw"
              className={`object-cover transition-[opacity,transform] duration-700 ease-out ${
                i === active ? 'opacity-100 scale-100 group-hover:scale-[1.03]' : 'opacity-0 scale-[1.02]'
              }`}
            />
          ))}

          {/* HUD: index counter and sector */}
          <span
            aria-hidden="true"
            className="absolute left-4 top-4 md:left-6 md:top-6 flex items-center gap-3 rounded-[4px] bg-ink/55 px-3 py-1.5 text-[0.625rem] md:text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white/90"
          >
            <span className="tabular-nums">
              {pad(active + 1)} <span className="text-white/40">/ {pad(cases.length)}</span>
            </span>
            <span className="h-3 w-px bg-white/25" />
            <span key={c.slug} className="animate-[case-fade-in_0.5s_ease-out]">
              {c.sector}
            </span>
          </span>

          {/* Ultra-subtle border overlay, drawn above the image */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[6px] ring-1 ring-inset ring-ink/10" />
          {/* Arrow overlay on hover */}
          <span
            aria-hidden="true"
            className="absolute right-5 bottom-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg text-ink opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
          >
            →
          </span>
        </Link>

        {/* Mobile: tappable position dots */}
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {cases.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              aria-label={`Toon ${item.sector}`}
              onClick={() => select(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-accent' : 'w-1.5 bg-subtle/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Text link sits in its own row, so the tab rail ends exactly at the image edge */}
      <div className="mt-5 flex justify-end md:col-start-2">
        <Link href={`/cases/${c.slug}`} className="group inline-flex items-center gap-2 text-sm font-bold text-ink">
          Bekijk volledige case study
          <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
