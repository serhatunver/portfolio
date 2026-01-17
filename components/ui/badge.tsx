import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  `
    focus-visible:border-ring focus-visible:ring-ring/50
    aria-invalid:ring-destructive/20
    dark:aria-invalid:ring-destructive/40
    aria-invalid:border-destructive
    inline-flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-medium
    whitespace-nowrap transition-[color,box-shadow]
    focus-visible:ring-[3px]
    [&>svg]:pointer-events-none
  `,
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent`,
        secondary: `bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 border-transparent`,
        destructive: `
          bg-destructive
          [a&]:hover:bg-destructive/90
          focus-visible:ring-destructive/20
          dark:focus-visible:ring-destructive/40
          dark:bg-destructive/60
          border-transparent text-white
        `,
        outline: `text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground`,
      },

      size: {
        sm: `gap-1 px-2 py-1 text-xs [&>svg]:size-3`,
        md: `gap-1.5 px-3 py-1.5 text-sm [&>svg]:size-4`,
        lg: `gap-2 px-4 py-2 text-sm [&>svg]:size-5`,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return <Comp data-slot="badge" className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
