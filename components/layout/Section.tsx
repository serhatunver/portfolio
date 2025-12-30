import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Section({
  title,
  description,
  seeAllLink,
  children,
}: {
  title: string;
  description?: string;
  seeAllLink?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8">
      <div className="mb-6">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-lg font-medium">{title}</h2>
          {seeAllLink && (
            <Button asChild variant="link" size="sm">
              <Link href={seeAllLink}>
                See all
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}
