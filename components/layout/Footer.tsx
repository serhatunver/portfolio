import type { FooterType } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { MailLink } from '@/components/common/MailLink';
import { urlFor } from '@/lib/cms/image';

const BUILT_WITH_LINKS: { label: string; href: string }[] = [
  { label: 'Next.js', href: 'https://nextjs.org/' },
  { label: 'shadcn/ui', href: 'https://ui.shadcn.com/' },
  { label: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { label: 'Sanity', href: 'https://www.sanity.io/' },
];

export async function Footer({ footer }: { footer: FooterType }) {
  return (
    <Section
      as="footer"
      aria-label="Site footer"
      className="flex flex-col space-y-6 px-4 max-w-xl text-sm text-muted-foreground"
    >
      <section>
        <div className="font-medium text-lg text-foreground">
          {footer.fullName}
        </div>
        <div>{footer.title}</div>
      </section>

      <section className="text-base">{footer.message}</section>

      <section>
        <nav className="flex flex-col sm:flex-row gap-3 mb-4">
          {footer.cta.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </section>

      <section className="flex flex-wrap items-center gap-2">
        {footer.contact.map((item, index) => {
          const isLast = index === footer.contact.length - 1;
          return (
            <span key={item.label} className="flex gap-2">
              {item.href.startsWith('mailto:') ? (
                <MailLink item={item} />
              ) : (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-foreground transition-colors"
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
              <a
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {tech.label}
              </a>
              {!isLast && <>{isSecondLast ? ' and ' : ', '}</>}
            </span>
          );
        })}
      </section>

      <section className="text-base">
        MIT Licensed © {new Date().getFullYear()} Serhat Ünver
      </section>
    </Section>
  );
}
