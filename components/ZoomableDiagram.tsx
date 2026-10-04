'use client';

import { useRef } from 'react';

// A detailed diagram that may render small in its column: click (or Enter) opens it in a full-screen dialog
// at reading size; Esc, the close button or a click on the backdrop closes it again. Only the zoomed view carries
// a faint BDE watermark across its centre. The diagram is passed as children and rendered in both places.
// On small screens the diagram scales down to the column width with a small zoom badge in its corner; on md+ the
// badge appears on hover.
export default function ZoomableDiagram({ label, children }: { label: string; children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label="Schema vergroten"
        className="group relative block w-full cursor-zoom-in text-left"
      >
        {children}
        {/* Zoom hint in the diagram's corner: always shown (small, quiet) on touch-sized screens, on hover from md */}
        <span className="pointer-events-none absolute right-0 bottom-0 flex items-center gap-1.5 rounded-[4px] bg-ink/75 px-2 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white md:right-2 md:bottom-2 md:gap-2 md:bg-ink/85 md:px-3 md:py-1.5 md:text-[0.7rem] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          <span aria-hidden="true">⤢</span> Vergroten
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-label={label}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto h-[calc(100dvh-2rem)] max-h-none w-[calc(100vw-2rem)] max-w-none overflow-auto rounded-[6px] bg-white p-4 backdrop:bg-ink/70 backdrop:backdrop-blur-sm md:p-8"
      >
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          className="sticky top-0 left-full z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-accent"
          aria-label="Sluiten"
        >
          <span aria-hidden="true" className="text-lg leading-none">✕</span>
        </button>
        <p className="mt-2 font-sans text-xs text-muted md:hidden">Veeg horizontaal om het hele schema te zien.</p>
        <div className="flex min-h-[calc(100%-2.5rem)] items-center">
          <div className="relative mx-auto w-full min-w-[900px] max-w-[1800px] md:min-w-[1100px]">
            {children}
            {/* Watermark: BDE wordmark with the chevron, very faint, centred over the diagram */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
            >
              <span className="inline-flex -rotate-12 items-start font-serif text-[9rem] font-bold leading-none tracking-[-0.03em] text-ink/[0.07]">
                BDE
                <svg viewBox="0 0 10 10" className="ml-[0.08em] -mt-[0.06em] h-[0.36em] w-[0.36em]">
                  <polygon points="2,0 10,0 10,8 7.6,8 7.6,2.4 2,2.4" fill="currentColor" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
