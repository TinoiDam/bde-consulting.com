// Single source of truth for the site navigation rendered by the header menu (desktop and mobile).
export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Diensten', href: '/services' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Cases', href: '/cases' },
  { label: 'Over', href: '/#over' },
  { label: 'Contact', href: '/contact' },
];

// The contact page has one mailto button; the route the visitor comes from presets its email template
// (services = Consultancy & Projectinzet, expertise = Strategisch advies & Maatwerk, elsewhere a general one)
export function contactHref(pathname: string | null): string {
  if (pathname?.startsWith('/services')) return '/contact?vraag=consultancy';
  if (pathname?.startsWith('/expertise')) return '/contact?vraag=strategie';
  return '/contact';
}
