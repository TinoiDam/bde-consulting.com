// Legal documents (privacy statement, cookie statement, disclaimer) for BDE Management Consulting B.V.
// Version control: every change to a document's text gets a new entry at the top of its `versions` list (newest first)
// with a version number, the date it takes effect and a one-line summary. The page shows the current version and the
// full history. Bump the minor number (1.0 → 1.1) for small edits, the major number (1.x → 2.0) for material changes.

export const COMPANY = 'BDE Management Consulting B.V.';
export const KVK = '42008316';
export const EMAIL = 'connect@bde-consulting.com';

export type LegalVersion = { version: string; date: string; summary: string };
export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[]; after?: string[] };
export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  intro?: string;
  versions: LegalVersion[];
  sections: LegalSection[];
};

export const privacy: LegalDocument = {
  slug: 'privacy',
  title: 'Privacyverklaring',
  description: `Hoe ${COMPANY} omgaat met persoonsgegevens.`,
  versions: [{ version: '1.0', date: '2026-10-04', summary: 'Eerste publicatie.' }],
  intro: `${COMPANY} (hierna ‘BDE’, ‘wij’, ‘ons’ of ‘onze’), ingeschreven bij de Kamer van Koophandel onder nummer ${KVK}, verwerkt persoonsgegevens in de rol van verwerkingsverantwoordelijke zoals gedefinieerd in de Algemene Verordening Gegevensbescherming (de ‘AVG’).`,
  sections: [
    {
      heading: '1. Welke persoonsgegevens verwerken wij?',
      paragraphs: [
        'Persoonsgegevens zijn alle informatie die betrekking heeft op een geïdentificeerde of identificeerbare natuurlijke persoon (de betrokkene). De persoonsgegevens die wij van u kunnen verwerken (dat wil zeggen vanaf het ontvangen en opslaan tot aan het wijzigen, doorgeven en verwijderen) omvatten:',
      ],
      list: [
        'basisgegevens, zoals uw voor- en achternaam, titel, de organisatie waar u werkt of uw functietitel;',
        'contactgegevens, zoals uw postadres, (mobiel) telefoonnummer of e-mailadres;',
        'financiële informatie, zoals uw bankrekeningnummer en factuurgegevens;',
        'technische gegevens, zoals uw IP-adres en het apparaat dat u gebruikt om onze website te bezoeken;',
        'persoonsgegevens die u ons verstrekt als u bij ons solliciteert, zoals opleidings- en werkervaringsgegevens;',
        'alle overige persoonsgegevens die wij van u of over u verkrijgen en die wij gebruiken voor de hieronder genoemde doeleinden.',
      ],
    },
    {
      heading: '2. Hoe verkrijgen wij persoonsgegevens?',
      paragraphs: [
        'In de meeste gevallen verkrijgen wij uw persoonsgegevens rechtstreeks van u, bijvoorbeeld als u ons vraagt een opdracht uit te voeren, u onze website bezoekt, u ons een e-mail stuurt, u bij ons solliciteert, u ons uw visitekaartje geeft of uit informatie die wij verkrijgen tijdens (telefonische) gesprekken en e-mailcontact met u.',
        'Daarnaast kunnen wij uw persoonsgegevens ook op andere manieren verkrijgen, zoals van opdrachtgevers of samenwerkingspartners in het kader van een opdracht die wij uitvoeren, uit (openbare) registers (zoals het Handelsregister) of uit openbare bronnen en websites, waaronder LinkedIn.',
      ],
    },
    {
      heading: '3. Voor welke doeleinden verwerken wij persoonsgegevens?',
      paragraphs: [
        'Persoonsgegevens zijn noodzakelijk voor alle relaties die wij aangaan, zodat wij u een gedegen samenwerking kunnen bieden. Wij verwerken uw persoonsgegevens voor de volgende doeleinden:',
      ],
      list: [
        'Advies- en consultancydiensten: wij verwerken uitsluitend de gegevens die noodzakelijk zijn voor de voorbereiding, uitvoering en afronding (inclusief facturatie) van de betreffende opdracht, zoals advies, interim-management, programma- of projectregie.',
        'Naleven van wettelijke verplichtingen: wij verwerken persoonsgegevens om te voldoen aan wettelijke verplichtingen, zoals de fiscale bewaarplicht en andere administratieve verplichtingen.',
        'Relatiebeheer: om contact met onze relaties te onderhouden, kunnen wij u benaderen met relevante kennis, nieuws of uitnodigingen. U kunt hier op elk moment bezwaar tegen maken.',
        'Beheer en beveiliging van onze website: om onze website goed en veilig te laten werken, worden technische gegevens verwerkt door onze hostingpartij. Wij gebruiken geen analytische of marketingcookies. Lees voor meer informatie onze cookieverklaring.',
        'Sollicitaties en werving: de gegevens die u ons verstrekt via e-mail en tijdens (telefonische) gesprekken worden uiterlijk vier weken na afloop van de sollicitatieprocedure verwijderd. Als wij u in de toekomst voor een opdracht of functie willen benaderen, vragen wij uw toestemming om uw persoonsgegevens langer te bewaren. Die periode bedraagt nooit langer dan één jaar.',
      ],
    },
    {
      heading: '4. Op welke grondslag verwerken wij uw persoonsgegevens?',
      paragraphs: [
        'Wij mogen uitsluitend persoonsgegevens verwerken als daarvoor een rechtsgrondslag bestaat. De bovenvermelde verwerkingen vinden plaats op basis van de volgende rechtsgrondslagen uit de AVG:',
      ],
      list: [
        'voor de uitvoering van een overeenkomst;',
        'op grond van een wettelijke verplichting;',
        'met uw toestemming;',
        'op grond van een gerechtvaardigd belang.',
      ],
    },
    {
      heading: '5. Met wie delen wij uw persoonsgegevens?',
      paragraphs: ['Soms is het noodzakelijk om uw persoonsgegevens te delen met derden. Dat kan onder meer in de volgende situaties:'],
      list: [
        'voor het uitvoeren van een opdracht, bijvoorbeeld met de opdrachtgever of een samenwerkingspartner die bij de opdracht betrokken is;',
        'voor het nakomen van wettelijke verplichtingen, bijvoorbeeld richting de Belastingdienst;',
        'met externe leveranciers die wij inschakelen voor de verwerking zoals beschreven in deze privacyverklaring, waaronder onze IT-, e-mail-, hosting- en administratieleveranciers.',
      ],
      after: [
        `Derden aan wie wij uw persoonsgegevens verstrekken, zijn zelf ook verantwoordelijk voor de verwerking van die gegevens en voor naleving van de AVG. Als een derde uw persoonsgegevens als verwerker namens BDE verwerkt, sluiten wij een verwerkersovereenkomst die voldoet aan de vereisten van de AVG. Indien nodig sluiten wij met niet-verwerkers schriftelijke afspraken. Als persoonsgegevens buiten de Europese Economische Ruimte worden verwerkt, zorgen wij voor passende waarborgen zoals voorgeschreven door de AVG.`,
      ],
    },
    {
      heading: '6. Hoe lang bewaren wij uw persoonsgegevens?',
      paragraphs: [
        'Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor wij de gegevens hebben verzameld en vastgelegd. Als er een wettelijke verplichting bestaat tot bewaring van gegevens, zoals de fiscale bewaarplicht van zeven jaar, dan houden wij ons aan die termijn.',
      ],
    },
    {
      heading: '7. Hoe beveiligen wij de persoonsgegevens?',
      paragraphs: [
        `Wij hebben passende maatregelen getroffen om misbruik, verlies, ongeoorloofde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging van uw persoonsgegevens te voorkomen. Als u vragen heeft over de beveiliging van uw persoonsgegevens of als u misbruik vermoedt, neem dan contact met ons op via ${EMAIL}.`,
      ],
    },
    {
      heading: '8. Wat zijn uw rechten?',
      paragraphs: [
        'U kunt inzage krijgen in de persoonsgegevens die wij van u hebben vastgelegd. U heeft recht op rectificatie of verwijdering van uw persoonsgegevens als de gegevens niet (meer) juist zijn, of als de verwerking niet (meer) gerechtvaardigd is. Onder bepaalde omstandigheden kunt u de verwerking beperken, ons verzoeken uw gegevens over te dragen of bezwaar maken tegen de verwerking. Als u toestemming heeft gegeven, kunt u die op elk moment intrekken. Wij zullen beoordelen of wij aan uw verzoek kunnen voldoen conform de wet.',
        `U kunt uw verzoek of klacht sturen naar ${EMAIL}. Wij reageren binnen 30 dagen. Dit kan langer duren, afhankelijk van de complexiteit van uw verzoek; in dat geval laten wij u dat binnen 30 dagen weten.`,
        'Soms kunnen wij niet (volledig) aan uw verzoek voldoen. Dit kan komen doordat de verwerking van bepaalde persoonsgegevens vereist is om te voldoen aan onze wettelijke verplichtingen, of vanwege andere uitzonderingen, zoals de rechten en vrijheden van derden. Als wij niet aan een bepaald verzoek kunnen voldoen, zullen wij u dat motiveren. U heeft ook het recht om een klacht in te dienen bij de toezichthoudende autoriteit, de Autoriteit Persoonsgegevens.',
      ],
    },
    {
      heading: '9. Contact met ons opnemen',
      paragraphs: [
        `Wilt u meer weten of heeft u vragen of klachten over onze verwerking van uw persoonsgegevens? Neem dan contact met ons op via ${EMAIL}. Omdat wij deze verklaring van tijd tot tijd kunnen wijzigen, raden wij u aan deze pagina regelmatig te raadplegen. Bovenaan deze pagina staan de actuele versie en de datum waarop die is ingegaan; onderaan vindt u de versiegeschiedenis. Maken wij ingrijpende wijzigingen in onze privacyverklaring, dan maken wij dat kenbaar via een duidelijke mededeling op onze website.`,
      ],
    },
  ],
};

export const cookies: LegalDocument = {
  slug: 'cookies',
  title: 'Cookieverklaring',
  description: `Welke cookies de website van ${COMPANY} gebruikt.`,
  versions: [{ version: '1.0', date: '2026-10-04', summary: 'Eerste publicatie.' }],
  sections: [
    {
      heading: '1. Inleiding',
      paragraphs: [
        `Deze cookieverklaring informeert u over het gebruik van cookies op de website van ${COMPANY}. Wij vinden het belangrijk dat bezoekers weten of en welke cookies wij plaatsen, met welk doel en hoe u hierover uw voorkeuren kunt beheren. Wij waarborgen uw privacy en houden ons aan de toepasselijke wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG), de Telecommunicatiewet en de richtlijnen van de Autoriteit Persoonsgegevens.`,
      ],
    },
    {
      heading: '2. Wat zijn cookies?',
      paragraphs: [
        'Cookies zijn kleine tekstbestanden die bij het bezoeken van websites op uw computer, tablet of mobiele telefoon worden geplaatst. Ze worden door uw browser opgeslagen en zorgen ervoor dat uw toestel bij een volgend bezoek kan worden herkend. Cookies kunnen persoonsgegevens bevatten, zoals een IP-adres of unieke identificatiecodes.',
      ],
    },
    {
      heading: '3. Welke cookies gebruiken wij en waarom?',
      paragraphs: [
        'Onze website plaatst geen analytische cookies en geen marketing- of trackingcookies. Wij volgen uw surfgedrag niet, tonen geen advertenties en gebruiken geen cookies van derden, zoals van sociale media of analysepartijen. Lettertypen worden vanaf onze eigen website geladen, zodat daarbij geen gegevens naar derden gaan.',
        'Onze hostingpartij kan, zoals bij elke website, technische gegevens (zoals uw IP-adres) kortstondig verwerken om de website te kunnen tonen en te beveiligen. Daarvoor worden geen cookies op uw apparaat geplaatst.',
        'Gaan wij in de toekomst wel cookies gebruiken, dan passen wij deze verklaring aan en plaatsen wij cookies waarvoor toestemming nodig is pas nadat u die toestemming heeft gegeven.',
      ],
    },
    {
      heading: '4. Hoe vragen wij uw toestemming?',
      paragraphs: [
        'Omdat wij geen cookies plaatsen waarvoor toestemming nodig is, toont onze website geen cookiebanner. Gaan wij zulke cookies gebruiken, dan vragen wij bij uw eerste bezoek om toestemming. Wij gebruiken dan geen vooraf aangevinkte selectievakjes of misleidende ontwerpen; u kunt cookies dan altijd net zo eenvoudig weigeren als accepteren, en uw toestemming op elk moment intrekken.',
      ],
    },
    {
      heading: '5. Cookies beheren of verwijderen',
      paragraphs: [
        'U kunt cookies altijd verwijderen of uw instellingen wijzigen via uw browser. Raadpleeg hiervoor de helpfunctie van uw browser.',
      ],
    },
    {
      heading: '6. Uw rechten',
      paragraphs: ['U heeft het recht om:'],
      list: [
        'informatie te krijgen over welke persoonsgegevens wij verwerken;',
        'uw gegevens in te zien, aan te passen of te laten verwijderen;',
        'een eerder gegeven toestemming voor cookies in te trekken.',
      ],
      after: [
        `Voor vragen of het uitoefenen van uw privacyrechten kunt u contact opnemen via ${EMAIL}. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens. Meer informatie vindt u in onze privacyverklaring.`,
      ],
    },
    {
      heading: '7. Wijzigingen',
      paragraphs: [
        'Wij behouden ons het recht voor deze cookieverklaring te wijzigen, bijvoorbeeld bij wetswijzigingen of aanpassingen aan onze website. De meest actuele versie vindt u altijd op deze pagina; onderaan staat de versiegeschiedenis.',
      ],
    },
    {
      heading: '8. Vragen',
      paragraphs: [`Heeft u vragen over deze cookieverklaring of onze omgang met cookies? Neem dan contact met ons op via ${EMAIL}.`],
    },
  ],
};

export const disclaimer: LegalDocument = {
  slug: 'legal',
  title: 'Disclaimer',
  description: `Juridische informatie over de website en publicaties van ${COMPANY}.`,
  versions: [{ version: '1.0', date: '2026-10-04', summary: 'Eerste publicatie.' }],
  sections: [
    {
      heading: 'Gebruik van onze publicaties',
      paragraphs: [
        `Gebruikers en ontvangers van de publicaties van ${COMPANY} (‘BDE’) mogen deze niet kopiëren, verspreiden, doorsturen of tegen betaling aan derden aanbieden, tenzij BDE daarvoor uitdrukkelijk schriftelijke toestemming heeft gegeven.`,
        'Deze disclaimer is van toepassing op alle externe uitingen van BDE, zoals de inhoud van onze website (de ‘Website’), onze berichten op sociale media en documenten die wij publiek beschikbaar stellen. Deze worden gezamenlijk aangeduid als de ‘BDE Publicaties’.',
      ],
    },
    {
      heading: 'Geen advies',
      paragraphs: [
        'Via de BDE Publicaties delen wij algemene informatie over onze organisatie, onze diensten en onderwerpen als strategie, besturing, informatievoorziening en verandermanagement. Dit vormt geen advies voor individuele situaties. Wij bereiden de inhoud zorgvuldig voor, maar bieden geen garantie op juistheid of volledigheid. BDE aanvaardt geen aansprakelijkheid voor onjuistheden of onvolledigheden, noch voor beslissingen die op basis van de BDE Publicaties worden genomen.',
      ],
    },
    {
      heading: 'Links naar externe websites',
      paragraphs: [
        'Links naar externe websites of bronnen die wij niet beheren, zijn alleen bedoeld als informatieve verwijzing voor bezoekers. Wij kunnen niet instaan voor hun inhoud, betrouwbaarheid, functionaliteit of de kwaliteit van eventuele producten en diensten daarop.',
      ],
    },
    {
      heading: 'Gegevens',
      paragraphs: [`${COMPANY} · KvK ${KVK} · ${EMAIL}`],
    },
  ],
};
