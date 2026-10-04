import type { Metadata } from 'next';
import { BioSections, CertificationsSection, type BioSection } from '@/components/AboutSection';

export const metadata: Metadata = {
  title: 'Over | BDE Management Consulting',
  description: 'Achtergrond en visie van BDE Management Consulting: sturing vanuit inhoud, met de mens als fundament.',
};

// Full background and vision (edit freely); the homepage "Over" section links here
const BACKGROUND: BioSection[] = [
  {
    title: 'De Moderne Consultant',
    paragraphs: [
      'BDE Management Consulting is opgericht door Tinoi Dam MSc. Zijn reis begon in de pioniersjaren van de digitale economie. Al op jonge leeftijd doorgrondde hij de wetmatigheden van code, netwerken en database-architecturen. Deze vroege technologiefocus – later gecombineerd met de dynamiek van financiële markten – vormde het fundament voor onafhankelijk ondernemerschap.',
      'Vanuit de harde praktijk van data crunching verschoof de focus al snel naar procesbeheersing en integrale regie. Vandaag de dag voert BDE de overkoepelende sturing over complexe projectportfolio’s binnen de overheid en de financiële sector.',
      'Waar de traditionele adviseur stopt bij abstracte managementrapportages, combineert BDE inhoudelijke diepgang met de menselijke kant van verandering. Analytisch, resultaatgedreven en diplomatiek: hard op de inhoud, zacht op de relatie.',
    ],
  },
  {
    title: 'Onze Visie: Sturing vanuit Inhoud, Niet vanuit Spreadsheets',
    paragraphs: [
      'Effectieve digitale sturing is onmogelijk zonder de bereidheid om de inhoudelijke diepte in te gaan. Veel projectmanagement vervalt in het blind sturen op nietszeggende milestones en window dressing via spreadsheets.',
    ],
    intro: 'Wanneer een adviseur de materie niet doorgrondt, is de spreadsheet vaak nog het enige sturingsmiddel. Dit leidt onherroepelijk tot:',
    list: [
      { term: 'Onrealistische kaders', text: 'die inhoudelijk simpelweg feitelijk niet kloppen.' },
      { term: 'Schijnveiligheid', text: 'omdat papieren milestones in het begin altijd eenvoudig groen kleuren.' },
      { term: 'Langetermijnschade', text: 'in de vorm van operationele uitval, zware technische schuld en verlies van vertrouwen.' },
    ],
  },
  {
    title: 'De mens als fundament',
    paragraphs: [
      'De technische architectuur is slechts het startpunt; de echte uitdaging zit in de duurzame verankering. Binnen complexe, sterk gereguleerde matrixorganisaties vraagt dit om strakke regie op de samenhang. Met diep organisatiebegrip, scherpte op de inhoud en sterk stakeholdermanagement creëert BDE draagvlak over afdelingsgrenzen heen.',
    ],
  },
];

export default function Over() {
  return (
    <main>
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 lg:pt-44 lg:pb-16">
        {/* Same container and 35 / 65 split as the homepage "Over" section */}
        <div className="mx-auto max-w-6xl px-6 xl:max-w-[88rem]">
          <div className="grid gap-12 lg:grid-cols-[35fr_65fr] lg:items-start lg:gap-28">
            <div className="lg:sticky lg:top-28">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">Over BDE</h1>
            </div>
            <BioSections sections={BACKGROUND} />
          </div>
        </div>
      </section>

      {/* Certifications and trainings */}
      <CertificationsSection />
    </main>
  );
}
