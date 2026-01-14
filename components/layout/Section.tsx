import { Button } from '@/components/animate-ui/components/buttons/button';
import Link from 'next/link';
import { ChevronsRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as React from 'react';

type SectionProps<T extends React.ElementType = 'section'> = {
  as?: T;
  title?: string;
  description?: string;
  seeAllLink?: string;
  ariaLabel?: string;
  paddingNone?: boolean;
  stickyTitle?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function Section<T extends React.ElementType = 'section'>({
  as,
  title,
  description,
  seeAllLink,
  ariaLabel,
  paddingNone = false,
  stickyTitle = true,
  className,
  children,
  ...props
}: SectionProps<T>) {
  const Component = as || 'section';
  const hasHeader = title || description || seeAllLink;

  return (
    <Component
      className={cn(
        paddingNone ? 'py-0' : 'py-4 sm:py-6 md:py-8',
        'w-full mx-auto',
        className,
      )}
      aria-label={ariaLabel ?? title}
      {...props}
    >
      {hasHeader && (
        <header
          className={cn('py-3 space-y-1', {
            'sticky top-17 z-10 bg-background': stickyTitle,
          })}
        >
          {(title || seeAllLink) && (
            <div className="flex items-center justify-between">
              {title && (
                <h2 className="flex w-full items-center text-xl font-medium tracking-tight hover-slide">
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
                  <Link href={seeAllLink}>
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

      {children}
    </Component>
  );
}

type SectionContentProps = {
  className?: string;
  children: React.ReactNode;
};

Section.Content = function SectionContent({
  className,
  children,
}: SectionContentProps) {
  return <div className={className}>{children}</div>;
};
