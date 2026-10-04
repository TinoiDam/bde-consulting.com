// Section backdrop with a slanted top (and optionally bottom) edge, for the alternating zigzag between homepage
// sections. 'up' rises left to right, 'down' falls left to right. A slanted top pulls the section up over the
// previous one by --slant (negative margin; later sections paint on top), so the triangle the slant leaves open
// shows the previous section's own background and never a gap. Padding of the same size keeps the content clear
// of the cut. --slant is set once on a parent (smaller on narrow screens, so the angle stays gentle on mobile).
type Slant = 'up' | 'down';

const TOP: Record<Slant, string> = {
  up: '0 var(--slant), 100% 0',
  down: '0 0, 100% var(--slant)',
};
const BOTTOM: Record<Slant, string> = {
  up: '100% calc(100% - var(--slant)), 0 100%',
  down: '100% 100%, 0 calc(100% - var(--slant))',
};

export default function SlantedSection({
  top,
  bottom,
  className = '',
  children,
}: {
  top?: Slant;
  bottom?: Slant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        clipPath: `polygon(${top ? TOP[top] : '0 0, 100% 0'}, ${bottom ? BOTTOM[bottom] : '100% 100%, 0 100%'})`,
        marginTop: top ? 'calc(-1 * var(--slant))' : undefined,
        paddingTop: top ? 'var(--slant)' : undefined,
        paddingBottom: bottom ? 'var(--slant)' : undefined,
      }}
    >
      {children}
    </div>
  );
}
