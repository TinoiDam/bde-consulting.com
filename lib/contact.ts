// Contact by e-mail only: no form and no data stored on this site (AVG). Each topic opens the visitor's own mail
// client with a subject and a pre-structured body. Used on /contact and in the closing section of /services.

export const EMAIL = 'connect@bde-consulting.com';

export type MailTopic = { key: string; label: string; subject: string; body: string };

const details = 'Hieronder staan onze gegevens:\n\nNaam organisatie: \nContactpersoon: \nTelefoonnummer: \n\n';

export const mailto = (t: MailTopic) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.body)}`;

// Topics on the contact page; the linking page presets one via ?vraag=<key>
export const contactTopics: MailTopic[] = [
  {
    key: 'consultancy',
    label: 'Consultancy & Projectinzet',
    subject: 'Aanvraag: Consultancy & Projectinzet - BDE',
    body: `Beste Tinoi,\n\nGraag bespreek ik de mogelijkheden voor Consultancy & Projectinzet. ${details}Korte omschrijving van de project- of programma-opgave:\n`,
  },
  {
    key: 'strategie',
    label: 'Strategisch advies & Maatwerk',
    subject: 'Aanvraag: Strategisch advies & Maatwerk - BDE',
    body: `Beste Tinoi,\n\nGraag bespreek ik een vraagstuk met betrekking tot Strategisch advies & Maatwerk. ${details}Korte omschrijving van het strategische transformatievraagstuk:\n`,
  },
  {
    key: 'algemeen',
    label: 'Algemene vraag',
    subject: 'Aanvraag: Contact - BDE',
    body: `Beste Tinoi,\n\nGraag neem ik contact met u op. ${details}Korte omschrijving van uw vraag:\n`,
  },
];

// One topic per engagement form on /services, plus a general one
const service = (key: string, label: string, ask: string): MailTopic => ({
  key,
  label,
  subject: `Aanvraag: ${label} - BDE`,
  body: `Beste Tinoi,\n\nGraag verken ik de mogelijkheden voor ${label}. ${details}${ask}\n`,
});

export const serviceTopics: MailTopic[] = [
  service('sprints', 'Deepdives & Sprints', 'Korte omschrijving van het vraagstuk en de gewenste doorlooptijd:'),
  service('retainer', 'Retainer', 'Korte omschrijving van de rol als klankbord en de gewenste startdatum:'),
  service('fractional', 'Fractional Lead / Advisory', 'Korte omschrijving van de opgave en de gewenste inzet (dagen per week):'),
  service('interim', 'Interim Management', 'Korte omschrijving van het programma of portfolio en de gewenste startdatum:'),
  {
    key: 'algemeen',
    label: 'Weet ik nog niet',
    subject: 'Aanvraag: Verkenning inzetvorm - BDE',
    body: `Beste Tinoi,\n\nGraag verken ik welke inzetvorm past bij ons vraagstuk. ${details}Korte omschrijving van het vraagstuk:\n`,
  },
];
