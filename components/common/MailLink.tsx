'use client';

import type { ContactType } from '@/types/content';
import { urlFor } from '@/lib/cms/image';
import Image from 'next/image';

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
      className="flex items-center gap-1 hover:text-foreground transition-colors"
      aria-label="email"
    >
      {item.icon && (
        <Image
          src={urlFor(item.icon).url()}
          alt=""
          width={12}
          height={12}
          className="size-3 dark:invert"
        />
      )}
      <span>{item.label}</span>
    </a>
  );
}
