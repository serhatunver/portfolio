'use client';

import Image from 'next/image';

import { urlFor } from '@/lib/cms/image';
import type { ContactType } from '@/types/content';

export function MailLink({ item }: { item: ContactType }) {
  const email = item.href.replace('mailto:', '');
  const [user, domain] = email.split('@');

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${user}@${domain}`;
      }}
      className="hover:text-foreground flex items-center gap-1 transition-colors"
      aria-label="email"
    >
      {item.icon && (
        <Image src={urlFor(item.icon).url()} alt="" width={12} height={12} className="size-3 dark:invert" />
      )}
      <span>{item.label}</span>
    </a>
  );
}
