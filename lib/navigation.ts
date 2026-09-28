// Single source of truth for site navigation: the header menu and the footer both render this list,
// so they always show the same structure in the same order.
export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Diensten', href: '/services' },
  { label: 'Cases', href: '/#cases' },
  { label: 'Over', href: '/#over' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '#contact' },
];
