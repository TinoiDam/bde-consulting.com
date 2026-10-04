import type { Metadata } from 'next';
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
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem] text-balance">Bespreek uw casus veilig en vrijblijvend</h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] md:text-[1.15rem] text-pretty">
              De knop opent uw e-mailprogramma met een vooraf gestructureerd bericht:
              vul uw gegevens en een korte omschrijving aan en verstuur het. Er worden via deze website geen gegevens
              opgeslagen.
            </p>

            {/* Topic, preset by the route the visitor came through; they can still switch before mailing */}
            <div className="mt-12">
              <MailTopicPicker key={initial} topics={contactTopics} initial={initial} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
