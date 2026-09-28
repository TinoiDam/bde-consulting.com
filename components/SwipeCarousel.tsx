'use client';

import { Children, useEffect, useRef, useState } from 'react';

// Mobile swipe carousel: full-width cards with scroll snap; the next card peeks in from the right
// and position dots below show where you are (tappable).
export default function SwipeCarousel({
  children,
  label,
  itemLabel = 'item',
}: {
  children: React.ReactNode;
  label: string;
  itemLabel?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 24, behavior: 'smooth' });
  };

  return (
    <div>
      <div
        ref={track}
        role="region"
        aria-roledescription="carrousel"
        aria-label={label}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <div key={i} className="w-[calc(100%-2rem)] shrink-0 snap-start" aria-label={`${i + 1} van ${items.length}`}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Toon ${itemLabel} ${i + 1}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-ink' : 'w-1.5 bg-subtle/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
