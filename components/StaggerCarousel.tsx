'use client';

import { Children, useEffect, useRef, useState } from 'react';

// Horizontal card carousel with a diagonal stagger: from md up every next card sits a step lower, so the row
// descends left to right. The track bleeds off the right edge, snaps per card, and the card in focus (the one at
// the start of the track) is shown slightly larger with a soft glow; the rest step back a little.
export default function StaggerCarousel({
  children,
  label,
  itemLabel = 'item',
}: {
  children: React.ReactNode;
  label: string;
  itemLabel?: string;
}) {
  const track = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);
  const last = items.length - 1;

  // Active card = the one whose left edge is closest to the track's scroll padding (where cards snap to)
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
      const cards = Array.from(el.querySelectorAll<HTMLElement>(':scope > li[data-card]'));
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - el.scrollLeft - pad);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const goTo = (i: number) => {
    const el = track.current;
    const card = el?.querySelectorAll<HTMLElement>(':scope > li[data-card]')[i];
    if (!el || !card) return;
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
    el.scrollTo({ left: card.offsetLeft - pad, behavior: 'smooth' });
  };

  const arrow =
    'flex h-12 w-14 items-center justify-center text-ink transition-colors duration-300 hover:bg-mist disabled:cursor-default disabled:text-subtle disabled:hover:bg-transparent';

  return (
    <div>
      {/* Arrows, aligned with the page container */}
      <div className="mx-auto flex max-w-[1200px] justify-end px-6">
        <div className="flex divide-x divide-line overflow-hidden rounded-[4px] border border-ink/25 bg-white/70">
          <button type="button" aria-label={`Vorige ${itemLabel}`} disabled={active === 0} onClick={() => goTo(active - 1)} className={arrow}>
            <span aria-hidden="true" className="text-lg">←</span>
          </button>
          <button type="button" aria-label={`Volgende ${itemLabel}`} disabled={active === last} onClick={() => goTo(active + 1)} className={arrow}>
            <span aria-hidden="true" className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Track: the first card lines up with the page container, the row runs on past the right edge.
          The trailing spacer lets the last card scroll all the way to the start and become active too. */}
      <ol
        ref={track}
        role="region"
        aria-roledescription="carrousel"
        aria-label={label}
        className="mt-8 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto pt-6 pb-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-10 md:gap-10 [padding-inline-start:max(1.5rem,calc((100%-1200px)/2+1.5rem))] [scroll-padding-inline-start:max(1.5rem,calc((100%-1200px)/2+1.5rem))]"
      >
        {items.map((child, i) => (
          <li
            key={i}
            data-card
            aria-current={i === active}
            style={{ '--i': i } as React.CSSProperties}
            className={`w-[calc(100vw-3rem)] max-w-[27rem] shrink-0 snap-start origin-top-left transition-[transform,opacity,filter] duration-500 ease-out md:mt-[calc(var(--i)*3.5rem)] md:w-[27rem] ${
              i === active
                ? 'scale-100 opacity-100 drop-shadow-[0_28px_48px_rgba(59,130,246,0.22)]'
                : 'scale-[0.92] opacity-80 hover:opacity-100'
            }`}
            onFocusCapture={() => i !== active && goTo(i)}
          >
            {child}
          </li>
        ))}
        <li aria-hidden="true" className="shrink-0 w-[max(0px,calc(100vw-1.5rem-min(100vw-3rem,27rem)-1.5rem))] md:w-[max(0px,calc(100vw-max(1.5rem,calc((100vw-1200px)/2+1.5rem))-27rem-2.5rem))]" />
      </ol>
    </div>
  );
}
