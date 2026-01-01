import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { getHeroSection } from '@/lib/cms';

export async function HeroSection() {
  const heroSection = await getHeroSection();

  return (
    <Section ariaLabel="Hero Section" className="mt-6">
      <h1 className="text-2xl font-bold tracking-tight">{heroSection.title}</h1>

      <p className="mt-4 max-w-xl text-muted-foreground">
        {heroSection.description}
      </p>

      <div className="mt-6 flex gap-3">
        <Button asChild>
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/about">About Me</Link>
        </Button>
      </div>
    </Section>
  );
}
