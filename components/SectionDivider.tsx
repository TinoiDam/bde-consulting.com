// Extremely subtle transition mark between two sections: the BDE chevron (the logo's mark), very faint. It takes
// no layout space: a zero-height row whose mark straddles the boundary. Between slanted sections it is lifted by half
// of --slant, onto the middle of the slanted edge.
export default function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative h-0" style={{ top: 'calc(var(--slant, 0px) / -2)' }}>
      <svg viewBox="0 0 10 10" className="absolute top-0 left-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-ink/20">
        <polygon points="2,0 10,0 10,8 7.6,8 7.6,2.4 2,2.4" fill="currentColor" />
      </svg>
    </div>
  );
}
