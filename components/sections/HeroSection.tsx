import Link from 'next/link';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { Section } from '@/components/layout/Section';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { getHero } from '@/lib/cms';
import { cn } from '@/lib/utils';

export async function HeroSection() {
  const hero = await getHero();

  if (!hero) return null;

  return (
    <Section as="section" aria-labelledby="hero-heading" className="mt-6">
      {/* HERO TITLE */}
      <TextShimmer
        as="h1"
        duration={2.5}
        className={cn(
          'max-w-3xl text-2xl/tight font-bold tracking-tight',
          '[--base-color:var(--color-foreground)]',
          '[--base-gradient-color:var(--color-gray-400)]',
          'dark:[--base-color:var(--color-foreground)]',
          'dark:[--base-gradient-color:var(--color-gray-500)]',
        )}
      >
        {hero.title}
      </TextShimmer>

      {/* HERO DESCRIPTION */}
      {hero.description && <p className="text-muted-foreground mt-4 max-w-xl">{hero.description}</p>}

      {/* CTA ACTIONS */}
      {hero.cta?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Hero actions">
          {hero.cta.map((item, index) => {
            const isExternal = item.href.startsWith('http');

            return (
              <Button key={`${item.href}-${index}`} asChild variant={item.type}>
                <Link
                  href={item.href}
                  {...(isExternal && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    'aria-label': `${item.label}`,
                  })}
                >
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </div>
      )}
    </Section>
  );
}
