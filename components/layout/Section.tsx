import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Section({
  title,
  seeAllLink,
  children,
}: {
  title: string;
  seeAllLink?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-4">
      <div className="flex w-full items-center justify-between mb-4">
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
      <div>{children}</div>
    </section>
  );
}
