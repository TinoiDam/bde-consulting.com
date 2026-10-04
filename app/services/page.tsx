import type { Metadata } from 'next';
import PurchasingFlow from '@/components/PurchasingFlow';
import StaggerCarousel from '@/components/StaggerCarousel';
import MailTopicPicker from '@/components/MailTopicPicker';
import { serviceTopics } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Diensten & tarieven | BDE Management Consulting',
  description: 'Vier inzetvormen met heldere financiële bandbreedtes: Transformation Sprints, Strategic Retainer, Fractional IT Director en Interim Management.',
};

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
};

const services: Service[] = [
  {
    id: 'sprints',
    name: 'Deepdives & Sprints',
    price: '€15.000,- tot €35.000,-',
    priceBasis: 'Fixed-fee',
    availability: 'Beperkt aantal slots per kwartaal.',
    focus: 'Intensief traject van 2 tot 4 weken, bijvoorbeeld bij een vastgelopen project of een volwassenheidsscan.',
    audience: 'Directies en stuurgroepen die snel een onafhankelijke doorlichting en actieplan nodig hebben.',
  },
  {
    id: 'retainer',
    name: 'Retainer',
    price: '€3.500,- tot €7.500,- per maand',
    priceBasis: 'Vaste maandelijkse fee',
    availability: 'Maximaal 3 organisaties tegelijk.',
    focus: 'Continu strategisch klankbord, met directe toegang bij acute IT-, governance- of programmavraagstukken.',
    audience: 'Bestuurders en programmamanagers die een kritische sparringpartner zoeken.',
  },
  {
    id: 'fractional',
    name: 'Fractional Lead / Advisory',
    price: '€2.000,- tot €12.500,- per maand',
    priceBasis: '0,5 tot 2 dagen per week',
    availability: 'Op basis van match met het veranderportfolio.',
    focus: 'IT- en datasturing op executive niveau, inclusief AI-governance, zonder fulltime positie.',
    audience: 'Organisaties die senior regie flexibel willen inzetten.',
  },
  {
    id: 'interim',
    name: 'Interim Management',
    price: '€800,- tot €1.400,- per dag',
    priceBasis: 'Enterprise tariefstructuur',
    availability: 'Maximaal 1 transformatie tegelijk.',
    focus: "Integrale regie over grote portfolio's en transformatieprogramma's in gereguleerde sectoren.",
    audience: 'Organisaties met zware audits, crisismanagement of complexe datamigraties.',
  },
];

const GATE = {
  title: 'Bescherm uw en onze bandwidth.',
  body:
    'BDE opereert niet als een traditionele consultancyfabriek met banken vol junior adviseurs. Wij sturen uitsluitend op senior niveau vanuit schaarse, onverdeelde focus. Heeft uw organisatie een complex IT- of datavraagstuk liggen waar de spreadsheets de controle hebben overgenomen? Als het strategische belang groot is en het budget toereikend, openen we graag de verkenning.',
};

export default function Services() {
  return (
    <main>
      {/* Hero: eyebrow, headline and positioning copy */}
      <section className="bg-canvas pt-32 pb-10 md:pt-40 md:pb-14 lg:pt-44 lg:pb-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{HERO.eyebrow}</p>
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem] text-balance">{HERO.title}</h1>
            <p className="mt-8 max-w-3xl text-[1.05rem] md:text-[1.15rem] text-pretty">{HERO.intro}</p>
          </div>
        </div>
      </section>

      {/* Purchasing flow: from first contact to start (target of the homepage "Samenwerkingsvormen" button), on the
          soft light-blue glow that sits in this second position */}
      <PurchasingFlow background="bg-[linear-gradient(to_bottom,var(--color-canvas),transparent_18%,transparent_80%,var(--color-canvas)),radial-gradient(ellipse_80%_70%_at_40%_50%,#d6e8f9_0%,var(--color-mist)_50%,var(--color-canvas)_90%)]" />

      {/* Services: diagonal carousel of flat cards (each a step lower than the previous), each with price band,
          availability, focus and audience; the card in focus is shown slightly larger. Below it the topic picker opens
          a pre-filled e-mail for the chosen engagement form. */}
      <section
        id="inzetvormen"
        aria-label="Inzetvormen"
        className="scroll-mt-20 overflow-hidden bg-canvas py-10 md:py-14 lg:py-16"
      >
        <div data-reveal>
          <StaggerCarousel label="Inzetvormen" itemLabel="inzetvorm">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="flex h-full scroll-mt-28 flex-col rounded-[6px] border border-line bg-white p-7 md:p-9">
                <h2 className="text-[1.6rem] md:text-[1.85rem] leading-[1.2] text-ink">{s.name}</h2>

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

              </article>
            ))}
          </StaggerCarousel>
        </div>

        <div data-reveal className="mx-auto mt-12 max-w-[1200px] px-6 md:mt-16">
          <MailTopicPicker topics={serviceTopics} />
        </div>
      </section>

      {/* Gatekeeper qualification: dark, contrasting closing band */}
      <section className="border-b border-white/10 bg-ink py-10 md:py-14 lg:py-16">
        <div data-reveal className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">{GATE.title}</h2>
            <p className="mt-6 text-[1.05rem] md:text-[1.1rem] text-white/75 text-pretty">{GATE.body}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
