'use client';

import { Children, useEffect, useRef, useState } from 'react';

// One list, two layouts: a swipe carousel on mobile (full-width cards with scroll snap, the next card peeking in,
// tappable position dots) and a static layout from md up via desktopClassName. The content exists only once.
export default function SwipeCarousel({
  children,
  label,
  itemLabel = 'item',
  desktopClassName = '',
  itemDesktopClassName = '',
  rootClassName = '',
}: {
  children: React.ReactNode;
  label: string;
  itemLabel?: string;
  // From md up the same markup becomes a static layout (e.g. a grid); the swipe behaviour is mobile-only
  desktopClassName?: string;
  itemDesktopClassName?: string;
  rootClassName?: string;
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
    <div className={rootClassName}>
      <div
        ref={track}
        role="region"
        aria-roledescription="carrousel"
        aria-label={label}
        className={`-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:snap-none md:overflow-visible md:px-0 md:pb-0 ${desktopClassName}`}
      >
        {items.map((child, i) => (
          <div key={i} className={`w-[calc(100%-2rem)] shrink-0 snap-start md:w-auto md:shrink ${itemDesktopClassName}`}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2 md:hidden">
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
