'use client';

import { useState } from 'react';
import { EMAIL, mailto, type MailTopic } from '@/lib/contact';

// Topic chips and one e-mail button: the chosen topic decides the subject and the pre-structured body that open in
// the visitor's own mail client. `tone` adapts the colours to a light or a dark (ink) section; `align` centres the
// chips (the surrounding text alignment does the rest).
export default function MailTopicPicker({
  topics,
  initial,
  tone = 'light',
  align = 'start',
}: {
  topics: MailTopic[];
  initial?: string;
  tone?: 'light' | 'dark';
  align?: 'start' | 'center';
}) {
  const [key, setKey] = useState(initial ?? topics[0].key);
  const topic = topics.find((t) => t.key === key) ?? topics[0];
  const dark = tone === 'dark';
  const href = mailto(topic);

  return (
    <div>
      <p className={`eyebrow ${dark ? 'text-white/60' : ''}`}>Kies uw onderwerp</p>
      <ul className={`flex flex-wrap gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
        {topics.map((t) => {
          const active = t.key === key;
          return (
            <li key={t.key}>
              <button
                type="button"
                onClick={() => setKey(t.key)}
                aria-pressed={active}
                className={`inline-flex cursor-pointer rounded-full border px-4 py-1.5 font-sans text-[0.8rem] transition-colors duration-300 ${
                  dark
                    ? active
                      ? 'border-white bg-white text-ink'
                      : 'border-white/30 text-white/80 hover:border-white/60 hover:text-white'
                    : active
                      ? 'border-ink bg-ink text-white'
                      : 'border-line text-ink-soft hover:border-ink/40 hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* The single contact point */}
      <a href={href} className={`btn mt-10 ${dark ? 'btn-inverse' : 'btn-primary'}`}>
        E-mail
        <span aria-hidden="true" className="btn-arrow">→</span>
      </a>

      {/* Plain address as a fallback for visitors without a configured mail client */}
      <p className={`mt-6 text-[0.9rem] ${dark ? 'text-white/60' : 'text-muted'}`}>
        Of mail rechtstreeks naar{' '}
        <a href={href} className={`link-quiet font-medium ${dark ? 'text-white' : 'text-ink'}`}>
          {EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
