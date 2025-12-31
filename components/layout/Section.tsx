import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ChevronsRight,
  ChevronRight,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SectionProps = {
  title?: string;
  description?: string;
  seeAllLink?: string;
  ariaLabel?: string;
  paddingNone?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  title,
  description,
  seeAllLink,
  ariaLabel,
  paddingNone = false,
  className,
  children,
}: SectionProps) {
  const hasHeader = title || description || seeAllLink;

  return (
    <section
      className={cn(paddingNone ? 'py-0' : 'py-4 sm:py-6 md:py-8', className)}
      aria-label={ariaLabel ?? title}
    >
      {hasHeader && (
        <header className="mb-5 space-y-1">
          {(title || seeAllLink) && (
            <div className="flex items-center justify-between">
              {title && (
                <h2 className="flex items-center text-xl font-medium tracking-tight">
                  <ChevronsRight size={20} />
                  <span>{title}</span>
                </h2>
              )}

              {seeAllLink && (
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="has-[>svg]:px-0 px-0"
                >
                  <Link href={seeAllLink} className="leading-0">
                    See all
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              )}
            </div>
          )}

          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </header>
      )}

      <div>{children}</div>
    </section>
  );
}
