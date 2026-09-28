// Commercial offer: three engagement models plus the low-threshold entry route.
// Landing target of the hero button "Samenwerkingsvormen" (#samenwerkingsvormen).
const INTRO =
  'Onze flexibiliteit in inzet weerspiegelt onze visie op resultaat: wij leveren geen standaardpakketten, maar stemmen de contractvorm af op de schaal, de complexiteit en de dynamiek van het vraagstuk.';

const pillars = [
  {
    title: 'Structurele Programmaleiding & Governance',
    lead: 'Ontworpen voor langlopende transformaties, complexe projectportfolio’s en formele inkooptrajecten binnen de publieke en corporate sector.',
    rows: [
      {
        label: 'De Inzet',
        text: 'Intensieve of fulltime regie op locatie en binnen de lijnorganisatie. Wij sturen de teams aan, deblokkeren complexe IT- en data-vraagstukken en bewaken de strategische samenhang.',
      },
      {
        label: 'Toepassing',
        text: 'Ideaal voor omvangrijke transities (zoals datamigraties, Target Operating Models of compliance-programma’s) die vragen om zware, onafhankelijke programmadirectie.',
      },
      {
        label: 'Commercieel Model',
        text: 'Volledig ingericht conform de stringente kwaliteits- en screeningeisen van formele marktplaatsen, tenders en DAS-systemen. Beschikbaar op basis van een marktconform, kwalitatief uurtarief.',
      },
    ],
    cta: 'Vraag capaciteitsprofiel & tariefkaart aan',
  },
  {
    title: 'Wendbare Interventies & Strategische Sprints',
    lead: 'Ontworpen voor organisaties die snel een specifiek, afgebakend knelpunt willen oplossen zonder de overhead van een langdurig interim-contract.',
    rows: [
      {
        label: 'De Inzet',
        text: 'Kortcyclische, hoog-intensieve trajecten waarin we in een vastgesteld aantal weken een specifiek resultaat opleveren.',
      },
      {
        label: 'Toepassing',
        text: 'Het gericht vlottrekken van een vastgelopen project, het toetsen van een lopende enterprise-architectuur, of het inrichten van een AI-Governance kader.',
      },
      {
        label: 'Commercieel Model',
        text: 'Werken op basis van vaste scope, milestones of story points (fixed fee per fase). Dit biedt direct budgettaire zekerheid en snelle acceleratie door de directe inzet van beproefde BDE Playbooks.',
      },
    ],
    cta: 'Start een resultaatgerichte sprint',
  },
  {
    title: 'Fractional Management & Strategic Retainers',
    lead: 'Ontworpen voor directies en MT’s die behoefte hebben aan doorlopende, hoogwaardige begeleiding en een onafhankelijk klankbord, zonder de noodzaak van een fulltime positie.',
    rows: [
      {
        label: 'De Inzet',
        text: 'Structurele, parttime aanwezigheid (bijvoorbeeld één vaste dag of een vast aantal uren per week) als strategisch adviseur of onafhankelijk regisseur in stuurgroepen.',
      },
      {
        label: 'Toepassing',
        text: 'Continu toezicht op de samenhang tussen business en IT, het reviewen van plannen van leveranciers, en het coachen van de interne projectleiders.',
      },
      {
        label: 'Commercieel Model',
        text: 'Een vast, voorspelbaar maandelijks abonnement (retainer). Dit garandeert continue toegang tot onze senior expertise en borgt de continuïteit op de lange termijn.',
      },
    ],
    cta: 'Informeer naar fractional beschikbaarheid',
  },
];

const ENTRY_INTRO =
  'Elke samenwerking start met het scherpstellen van de werkelijke hulpvraag om papieren schijnzekerheid vooraf te elimineren:';

const entries = [
  {
    title: 'Asynchrone Verkenning',
    tag: 'Kosteloos',
    text: 'U deelt de huidige documentatie of de probleemstelling in een beveiligde omgeving. Onze adviseurs maken in eigen tijd een scherpe, inhoudelijke analyse en koppelen de eerste bottlenecks terug via een beknopte memo of video-audit.',
  },
  {
    title: 'Synchrone Deep Dive',
    tag: 'Betaald',
    text: 'Een intensieve, gezamenlijke werksessie op locatie waarin we direct de diepte ingaan, door voortgangs-window-dressing heen prikken en de basis leggen voor de concrete roadmap.',
  },
];

const pad = (n: number) => String(n).padStart(2, '0');

export default function EngagementSection() {
  return (
    <section id="samenwerkingsvormen" className="scroll-mt-20 bg-canvas-alt py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">Samenwerkingsvormen</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">Samenwerkingsvormen</h2>
          <p className="mt-6 text-[1.05rem]">{INTRO}</p>
        </div>

        {/* Three pillars: navy top rule, number, title, lead, then Inzet / Toepassing / Commercieel Model */}
        <ol className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-3 lg:gap-10">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              data-reveal
              style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
              className="flex flex-col border-t-2 border-ink pt-6"
            >
              <span className="font-sans text-[0.72rem] tabular-nums tracking-[0.2em] text-subtle">{pad(i + 1)}</span>
              <h3 className="mt-2 text-[1.5rem] text-ink">{p.title}</h3>
              <p className="mt-4 text-[0.95rem] text-muted">{p.lead}</p>

              <dl className="mt-8 space-y-6">
                {p.rows.map((r) => (
                  <div key={r.label}>
                    <dt className="eyebrow mb-2">{r.label}</dt>
                    <dd className="font-sans text-[0.92rem] font-light leading-[1.65] text-body">{r.text}</dd>
                  </div>
                ))}
              </dl>

              <a href="#contact" className="group mt-auto inline-flex items-center gap-2 self-start pt-8 font-sans text-[0.85rem] font-semibold text-ink">
                <span className="link-quiet">{p.cta}</span>
                <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
            </li>
          ))}
        </ol>

        {/* Entry route: Scope of Work orientation */}
        <div data-reveal className="mt-20 border-t border-line pt-14 md:mt-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <p className="eyebrow">De Ingang</p>
              <h3 className="text-[1.75rem] text-ink">Scope of Work Oriëntatie</h3>
              <p className="mt-4 text-[0.95rem]">{ENTRY_INTRO}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              {entries.map((e) => (
                <div key={e.title}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                    <h4 className="font-serif text-[1.2rem] text-ink">{e.title}</h4>
                    <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">{e.tag}</span>
                  </div>
                  <p className="mt-4 text-[0.92rem]">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
