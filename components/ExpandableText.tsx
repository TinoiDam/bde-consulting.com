'use client';

import { useEffect, useId, useRef, useState } from 'react';

// Collapsible text block: fixed height with a soft fade, expanding smoothly to its full height.
export default function ExpandableText({
  children,
  more = 'Lees volledige visie & achtergrond',
  less = 'Sluit achtergrond',
  collapsed = 280, // px visible before the toggle
  showLabel = false, // print the toggle text next to the arrow instead of only as tooltip
}: {
  children: React.ReactNode;
  more?: string;
  less?: string;
  collapsed?: number;
  showLabel?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [full, setFull] = useState<number | null>(null);
  const inner = useRef<HTMLDivElement>(null);
  const id = useId();

  // Track the natural height so max-height can animate to an exact value
  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const measure = () => setFull(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const needsToggle = full === null || full > collapsed;
  // Collapsed, the text fades out through a mask, so it works on any background (flat colour or gradient)
  const faded = !open && needsToggle;
  const mask = faded ? 'linear-gradient(to bottom, #000 calc(100% - 5rem), transparent)' : 'none';

  return (
    <div>
      <div
        id={id}
        className="relative overflow-hidden transition-[max-height] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: open || !needsToggle ? (full ?? 'none') : collapsed, maskImage: mask, WebkitMaskImage: mask }}
      >
        <div ref={inner}>{children}</div>
      </div>

      {needsToggle &&
        (showLabel ? (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen((o) => !o)}
            className="group mt-5 inline-flex cursor-pointer items-center gap-3 font-sans text-sm font-medium text-ink"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
              <span aria-hidden="true" className={`text-base transition-transform duration-500 ${open ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </span>
            {open ? less : more}
          </button>
        ) : (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? less : more}
            title={open ? less : more}
            className="mt-6 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
          >
            {/* Arrow only; the label is available to screen readers and as a tooltip */}
            <span aria-hidden="true" className={`text-base transition-transform duration-500 ${open ? 'rotate-180' : ''}`}>
              ↓
            </span>
          </button>
        ))}
    </div>
  );
}
