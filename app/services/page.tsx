import type { Metadata } from 'next';
import PurchasingFlow from '@/components/PurchasingFlow';
import StaggerCarousel from '@/components/StaggerCarousel';

export const metadata: Metadata = {
  title: 'Diensten & tarieven | BDE Management Consulting',
  description: 'Vier inzetvormen met heldere financiële bandbreedtes: Transformation Sprints, Strategic Retainer, Fractional IT Director en Interim Management.',
};

// Every CTA points to the contact page with the Consultancy & Projectinzet email template preset
const CONTACT = '/contact?vraag=consultancy';

// Page copy (edit freely)
const HERO = {
  eyebrow: 'Inzetvormen & samenwerking',
  title: 'Scherpte op de inhoud. Transparant in pricing.',
  intro:
    'BDE Management Consulting gelooft niet in vage offertes achteraf of spreadsheets die de realiteit maskeren. Wij leveren hardcore inhoudelijke scherpte en senior executie op het snijvlak van IT, Data en Governance. Om onze bandwidth te beschermen en absolute focus te garanderen op directieniveau, werken wij uitsluitend binnen heldere financiële bandbreedtes per inzetvorm. Wij starten pas wanneer er een substantieel veranderbudget is en de gedeelde ambitie aanwezig is om échte impact te maken.',
};

type Service = {
  id: string;
  name: string;
  price: string;
  priceBasis: string;
  availability: string;
  focus: string;
  audience: string;
  cta: string;
};

const services: Service[] = [
  {
    id: 'sprints',
    name: 'Deepdives & Sprints',
    price: '€15.000,- tot €35.000,-',
    priceBasis: 'Fixed-fee',
    availability: 'Gelimiteerd aantal slots per kwartaal beschikbaar.',
    focus:
      'Intensieve samenwerking (doorlooptijd 2 tot 4 weken) bijvoorbeeld bij een vastgelopen project, fit-gap advisory of volwassenheidsscans',
    audience:
      'Directies en stuurgroepen die binnen een kritieke deadline een onafhankelijke, diepgaande inhoudelijke doorlichting en direct toepasbaar actieplan eisen.',
    cta: 'Initialiseer Sprint-verkenning',
  },
  {
    id: 'retainer',
    name: 'Retainer',
    price: '€3.500,- tot €7.500,- per maand',
    priceBasis: 'Vaste maandelijkse fee',
    availability: 'Uitsluitend beschikbaar voor maximaal 3 organisaties parallel.',
    focus:
      "Continu strategisch klankbord en diplomatieke regie achter de schermen. Directe en prioritaire toegang tot expertise bij acute IT-vraagstukken, governance-risico's of politieke patstellingen in transformatieprogramma's.",
    audience:
      'Boardrooms, programmamanagers en directieleden die behoefte hebben aan een onafhankelijke, kritische sparringpartner zonder operationele overhead.',
    cta: 'Retainer-beschikbaarheid toetsen',
  },
  {
    id: 'fractional',
    name: 'Fractional Lead / Advisory',
    price: '€2000,- tot €12.500,- per maand',
    priceBasis: 'Op basis van 0,5 tot 2 dagen per week (flexibel in te zetten)',
    availability: 'Actuele capaciteit uitsluitend op basis van match met het veranderportfolio.',
    focus:
      'Hoogwaardige IT- en data-sturing op executive niveau. Het inrichten van datamigratie-architecturen en het borgen van wet- en regelgeving rondom algoritmen en AI-governance, zonder de noodzaak voor een fulltime positie.',
    audience:
      'Mid-market en corporate organisaties die de scherpte en het trackrecord van een zwaargewicht consultant willen inzetten voor structurele, flexibele regie.',
    cta: 'Vraag Fractional profiel aan',
  },
  {
    id: 'interim',
    name: 'Interim Management',
    price: '€800,- tot €1400,- per dag',
    priceBasis: 'Enterprise tariefstructuur',
    availability: 'Maximaal 1 actieve enterprise transformatie parallel.',
    focus:
      "Integrale, grootschalige regie over miljoenenportfolio's, vitale infrastructuur en zware transformatieprogramma's in sterk gereguleerde sectoren (overheid, financiële sector, utilities). Hard op de inhoud om beweging te creëren, zacht op de relatie om duurzaam draagvlak te borgen.",
    audience:
      'Enterprise-organisaties die te maken hebben met zware audits, crisismanagement of complexe datamigraties en behoefte hebben aan een interim-manager met diepe technologische wortels (MySQL/PHP/Python).',
    cta: 'Toets project-scope',
  },
];

const GATE = {
  title: 'Bescherm uw en onze bandwidth.',
  body:
    'BDE opereert niet als een traditionele consultancyfabriek met banken vol junior adviseurs. Wij sturen uitsluitend op senior niveau vanuit schaarse, onverdeelde focus. Heeft uw organisatie een complex IT- of datavraagstuk liggen waar de spreadsheets de controle hebben overgenomen? Als het strategische belang groot is en het budget toereikend, openen we graag de verkenning.',
  cta: 'Start de verkenning & deel uw context',
};

export default function Services() {
  return (
    <main>
      {/* Hero: eyebrow, headline and positioning copy */}
      <section className="bg-canvas pt-36 pb-16 md:pt-44 md:pb-24 lg:pt-48">
        <div className="mx-auto max-w-[1200px] px-6">
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{HERO.eyebrow}</p>
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem] text-balance">{HERO.title}</h1>
            <p className="mt-8 max-w-3xl text-[1.05rem] md:text-[1.15rem] text-pretty">{HERO.intro}</p>
          </div>
        </div>
      </section>

      {/* Services: diagonal carousel of flat cards (each a step lower than the previous), each with price band,
          availability, focus, audience and a CTA; the card in focus is shown slightly larger */}
      <section
        id="inzetvormen"
        aria-label="Inzetvormen"
        className="scroll-mt-20 overflow-hidden bg-[linear-gradient(to_bottom,var(--color-canvas),transparent_18%,transparent_80%,var(--color-canvas)),radial-gradient(ellipse_80%_70%_at_40%_50%,#d6e8f9_0%,var(--color-mist)_50%,var(--color-canvas)_90%)] py-16 md:py-24 lg:py-28"
      >
        <div data-reveal>
          <StaggerCarousel label="Inzetvormen" itemLabel="inzetvorm">
            {services.map((s, i) => (
              <article key={s.id} id={s.id} className="flex h-full scroll-mt-28 flex-col rounded-[6px] border border-line bg-white p-7 md:p-9">
                <span className="font-serif text-[1.1rem] tabular-nums lining-nums text-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-3 text-[1.6rem] md:text-[1.85rem] leading-[1.2] text-ink">{s.name}</h2>

                {/* Price band */}
                <div className="mt-6 border-y border-line py-5">
                  <p className="eyebrow mb-2">Financiële bandbreedte</p>
                  <p className="font-sans text-[1.15rem] font-semibold tabular-nums text-ink">{s.price}</p>
                  <p className="mt-1 text-[0.85rem] text-muted">{s.priceBasis}</p>
                </div>

                <dl className="mt-6 flex-1 space-y-5">
                  <div>
                    <dt className="eyebrow mb-1.5">Beschikbaarheid</dt>
                    <dd className="flex items-start gap-2.5 font-sans text-[0.95rem] font-medium leading-[1.6] text-ink">
                      <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      {s.availability}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1.5">De focus</dt>
                    <dd className="font-sans text-[0.95rem] font-normal leading-[1.65] text-body">{s.focus}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1.5">Voor wie</dt>
                    <dd className="font-sans text-[0.95rem] font-normal leading-[1.65] text-body">{s.audience}</dd>
                  </div>
                </dl>

                <a
                  href={CONTACT}
                  className="group mt-8 flex w-full items-center justify-between gap-3 rounded-[4px] bg-ink px-5 py-3.5 font-sans text-[0.85rem] font-semibold text-white transition-colors duration-300 hover:bg-accent"
                >
                  {s.cta}
                  <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            ))}
          </StaggerCarousel>
        </div>
      </section>

      {/* Purchasing flow: from first contact to start (target of the homepage "Samenwerkingsvormen" button) */}
      <PurchasingFlow />

      {/* Gatekeeper qualification: dark, contrasting closing band with the main CTA */}
      <section className="border-b border-white/10 bg-ink py-20 md:py-28 lg:py-32">
        <div data-reveal className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">{GATE.title}</h2>
            <p className="mt-6 text-[1.05rem] md:text-[1.1rem] text-white/75 text-pretty">{GATE.body}</p>
            <a
              href={CONTACT}
              className="group mt-10 inline-flex w-full items-center justify-between gap-6 rounded-[4px] bg-white px-7 py-5 font-sans text-[0.85rem] font-bold uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-mist sm:w-auto md:px-9 md:py-6 md:text-[0.9rem]"
            >
              {GATE.cta}
              <span aria-hidden="true" className="text-lg transition-transform duration-300 ease-out group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
