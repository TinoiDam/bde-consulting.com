'use client';

import { useRef } from 'react';

// A detailed diagram that may render small in its column: click (or Enter) opens it in a full-screen dialog
// at reading size; Esc, the close button or a click on the backdrop closes it again. Only the zoomed view carries
// a faint BDE watermark across its centre. The diagram is passed as children and rendered in both places.
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
        <div className="w-full min-w-[860px] md:min-w-0">{children}</div>
        <span className="pointer-events-none absolute right-2 bottom-2 hidden items-center gap-2 rounded-[4px] bg-ink/85 px-3 py-1.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
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
        <div className="flex min-h-[calc(100%-2.5rem)] items-center">
          <div className="relative mx-auto w-full min-w-[1100px] max-w-[1800px]">
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
