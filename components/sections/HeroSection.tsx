import Link from 'next/link';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { Section } from '@/components/layout/Section';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { getHero } from '@/lib/cms';

export async function HeroSection() {
  const hero = await getHero();

  return (
    <Section ariaLabel="Hero Section" className="mt-6">
      <TextShimmer
        duration={2.5}
        className="
          text-2xl/tight font-bold tracking-tight [--base-color:var(--color-foreground)]
          [--base-gradient-color:var(--color-gray-400)]
          dark:[--base-color:var(--color-foreground)] dark:[--base-gradient-color:var(--color-gray-500)]
        "
      >
        {hero.title}
      </TextShimmer>

      <p className="text-muted-foreground mt-4 max-w-xl">{hero.description}</p>

      <div className="mt-6 flex gap-3">
        {hero.cta.map((item) => (
          <Button key={item.label} asChild variant={item.type}>
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </div>
    </Section>
  );
}
