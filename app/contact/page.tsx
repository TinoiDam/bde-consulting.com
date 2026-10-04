import type { Metadata } from 'next';
import { CertificationsSection } from '@/components/AboutSection';
import MailTopicPicker from '@/components/MailTopicPicker';
import { contactTopics } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Contact | BDE Management Consulting',
  description: 'Neem direct contact op met BDE Management Consulting via e-mail.',
};

// Single point of contact: no form and no data stored on this site (AVG). The e-mail button opens the visitor's own
// mail client; the route they came through (?vraag=…, set by the linking page) presets the topic, which decides the
// subject and the pre-structured body. Topics and templates live in lib/contact.ts.
export default async function Contact({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const vraag = (await searchParams).vraag;
  const initial = contactTopics.some((t) => t.key === vraag) ? (vraag as string) : 'algemeen';

  return (
    <main>
      <section className="bg-canvas pt-32 pb-10 md:pt-40 md:pb-14 lg:pt-44 lg:pb-16">
        <div className="mx-auto max-w-6xl px-6 xl:max-w-[88rem]">
          {/* Centred: title, topic picker and e-mail button, with the how-it-works note small and quiet underneath */}
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Contact</p>
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem] text-balance">Veilig en vrijblijvend</h1>

            {/* Topic, preset by the route the visitor came through; they can still switch before mailing */}
            <div className="mt-12">
              <MailTopicPicker key={initial} topics={contactTopics} initial={initial} align="center" />
            </div>

            <p className="mx-auto mt-10 max-w-xl text-[0.85rem] leading-[1.6] text-muted text-pretty">
              De knop opent uw e-mailprogramma met een vooraf gestructureerd bericht: vul uw gegevens en een korte
              omschrijving aan en verstuur het. Er worden via deze website geen gegevens opgeslagen.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications and trainings */}
      <CertificationsSection />
    </main>
  );
}
