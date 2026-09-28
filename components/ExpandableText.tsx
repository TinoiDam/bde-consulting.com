'use client';

import { useEffect, useId, useRef, useState } from 'react';

const COLLAPSED = 280; // px visible before "Lees volledige visie"

// Collapsible text block: fixed height with a soft fade, expanding smoothly to its full height.
export default function ExpandableText({
  children,
  more = 'Lees volledige visie & achtergrond',
  less = 'Sluit achtergrond',
}: {
  children: React.ReactNode;
  more?: string;
  less?: string;
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

  const needsToggle = full === null || full > COLLAPSED;

  return (
    <div>
      <div
        id={id}
        className="relative overflow-hidden transition-[max-height] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: open || !needsToggle ? (full ?? 'none') : COLLAPSED }}
      >
        <div ref={inner}>{children}</div>
        {/* Soft fade at the bottom of the collapsed state */}
        <div
          aria-hidden="true"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0), #ffffff)' }}
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ${
            open || !needsToggle ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      {needsToggle && (
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
      )}
    </div>
  );
}
