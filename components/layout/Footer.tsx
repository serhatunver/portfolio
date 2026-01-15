import Image from 'next/image';
import Link from 'next/link';

import { MailLink } from '@/components/common/MailLink';
import { Section } from '@/components/layout/Section';
import { urlFor } from '@/lib/cms/image';
import type { FooterType } from '@/types/content';

const BUILT_WITH_LINKS: { label: string; href: string }[] = [
  { label: 'Next.js', href: 'https://nextjs.org/' },
  { label: 'shadcn/ui', href: 'https://ui.shadcn.com/' },
  { label: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { label: 'Sanity', href: 'https://www.sanity.io/' },
];

export async function Footer({ data }: { data: FooterType }) {
  return (
    <Section
      as="footer"
      aria-label="Site footer"
      className="text-muted-foreground flex max-w-xl flex-col space-y-6 px-4 text-sm"
    >
      <section>
        <div className="text-foreground text-lg font-medium">{data.fullName}</div>
        <div>{data.title}</div>
      </section>

      <section className="text-base">{data.message}</section>

      <section>
        <nav className="mb-4 flex flex-col gap-3 sm:flex-row">
          {data.cta.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </section>

      <section className="flex flex-wrap items-center gap-2">
        {data.contact.map((item, index) => {
          const isLast = index === data.contact.length - 1;
          return (
            <span key={item.label} className="flex gap-2">
              {item.href.startsWith('mailto:') ? (
                <MailLink item={item} />
              ) : (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  {item.icon && (
                    <Image src={urlFor(item.icon).url()} alt="" width={12} height={12} className="size-3 dark:invert" />
                  )}
                  <span>{item.label}</span>
                </Link>
              )}
              {!isLast && <span>{'/'}</span>}
            </span>
          );
        })}
      </section>

      <section aria-label="Built with technologies">
        Built with{' '}
        {BUILT_WITH_LINKS.map((tech, index) => {
          const isLast = index === BUILT_WITH_LINKS.length - 1;
          const isSecondLast = index === BUILT_WITH_LINKS.length - 2;

          return (
            <span key={tech.label}>
              <a href={tech.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline">
                {tech.label}
              </a>
              {!isLast && <>{isSecondLast ? ' and ' : ', '}</>}
            </span>
          );
        })}
      </section>

      <section className="text-base">MIT Licensed © {new Date().getFullYear()} Serhat Ünver</section>
    </Section>
  );
}
