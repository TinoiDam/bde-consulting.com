// Project cases shown in the homepage dashboard and on /cases/[slug].
export type CaseStudy = {
  slug: string;
  image: string;
  sector: string;
  role: string;
  context: string;
  challenge: string;
  approach: string;
  outcome: string;
  stats: { value: string; label: string }[];
};

export const cases: CaseStudy[] = [
  {
    slug: 'energy-and-utilities',
    image: '/assets/cases/energy-case.jpg',
    sector: 'Energy & Utilities',
    role: 'Business Consultant',
    context: 'Rotterdam',
    challenge:
      'Migratie van 85.000+ grootzakelijke contracten (>€1 mld) onder een harde deadline en extreme marktvolatiliteit.',
    approach: 'Versneld opbouwen en structureren van de ketensamenwerking tussen IT, Sales en Backoffice.',
    outcome: 'Tijdige datamigratie binnen de planning en kritieke SLA-doelstellingen succesvol afgerond.',
    stats: [
      { value: '85K+', label: 'Contracten' },
      { value: '>€1 mld', label: 'Portfolio' },
      { value: '0%', label: 'Vertraging' },
    ],
  },
  {
    slug: 'banking-and-grc',
    image: '/assets/cases/banking-case.jpg',
    sector: 'Banking & GRC',
    role: 'Workstream Lead & Adviseur',
    context: 'Financial Services',
    challenge:
      'Gebrek aan gedeelde definities, risicogovernance en roadmap-overzicht binnen een internationaal AML-transformatieprogramma.',
    approach:
      'Realisatie van een Global Target Operating Model en wereldwijde datastandaardisatie (Lexicon) binnen Global GRC.',
    outcome: 'Succesvolle portfolio-structurering en roadmap-alignment van 122 projecten gerealiseerd op MT-niveau.',
    stats: [
      { value: '122', label: 'Projecten' },
      { value: 'Global', label: 'GRC framework' },
      { value: 'MT-1', label: 'Niveau alignment' },
    ],
  },
  {
    slug: 'public-sector-governance',
    image: '/assets/cases/public-case.jpg',
    sector: 'Public Sector',
    role: 'Deelprojectleider & IT Consultant',
    context: 'Overheid',
    challenge:
      'Ontbreken van sluitende procesarchitecturen en een ethisch algoritme-kader voor complexe reken- en ramingsmodellen.',
    approach:
      'Integrale sturing op het functionele ontwerp, multidisciplinaire sessies en de feitelijke end-to-end IT-integratie.',
    outcome: 'Volledige IT-borging van robuuste rekenmodellen en een organisatiebreed verankerd AI governance kader.',
    stats: [
      { value: 'End-to-end', label: 'IT-borging' },
      { value: 'AI', label: 'Governance kader' },
      { value: 'Sluitend', label: 'Raakvlakbeheer' },
    ],
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
