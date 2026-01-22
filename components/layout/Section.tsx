import { ArrowRight, ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { cn } from '@/lib/utils';

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
        paddingNone ? 'py-0' : `py-4 sm:py-6 md:py-8`,
        // `before:bg-border/64 relative mx-auto mt-8 w-full before:absolute before:inset-x-0 before:-top-px before:h-px`,
        className,
      )}
      aria-label={ariaLabel ?? title}
      {...props}
    >
      {/* <div
        aria-hidden="true"
        className="
          before:border-border before:bg-popover
          after:border-border after:bg-background
          pointer-events-none absolute inset-0 z-50 container
          before:absolute before:top-[-3.5px] before:-left-[11.5px] before:z-1 before:-ml-1 before:size-2
          before:rounded-[2px] before:border before:bg-clip-padding before:shadow-xs
          after:absolute after:top-[-3.5px] after:-right-[11.5px] after:z-1 after:-mr-1 after:size-2 after:rounded-[2px]
          after:border after:bg-clip-padding after:shadow-xs
          dark:before:bg-clip-border
          dark:after:bg-clip-border
        "
      /> */}

      {hasHeader && (
        <>
          <header className={cn('py-3', stickyTitle && 'bg-background sticky top-(--header-height) z-10')}>
            {(title || seeAllLink) && (
              <div className="flex items-center justify-between">
                {title && (
                  <h2 className="hover-slide flex w-full items-center text-xl font-medium tracking-tight">
                    <ChevronsRight size={20} />
                    <span>{title}</span>
                  </h2>
                )}

                {seeAllLink && (
                  <Button asChild variant="link" size="sm" className="px-0">
                    <Link href={seeAllLink}>
                      See all
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </header>

          {description && (
            <div className="pb-3">
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          )}
        </>
      )}

      <div className="">{children}</div>
    </Component>
  );
}

type SectionContentProps = {
  className?: string;
  children: React.ReactNode;
};

Section.Content = function SectionContent({ className, children }: SectionContentProps) {
  return <div className={cn(className)}>{children}</div>;
};
