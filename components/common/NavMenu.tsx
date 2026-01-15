'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/animate-ui/components/buttons/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Projects', href: '/projects' },
];

export type NavMenuProps = {
  orientation?: 'horizontal' | 'vertical';
  onItemClick?: () => void;
};

export function NavMenu({ orientation = 'horizontal', onItemClick }: NavMenuProps) {
  const pathname = usePathname();

  const isActive = (navItem: NavItem) =>
    navItem.href === '/' ? pathname === '/' : pathname === navItem.href || pathname.startsWith(`${navItem.href}/`);

  return (
    <NavigationMenu
      className={cn('max-w-full', orientation === 'vertical' ? 'flex flex-col items-stretch justify-start' : 'flex')}
    >
      <NavigationMenuList className={cn(orientation === 'horizontal' ? 'flex-row gap-4' : 'w-full flex-col gap-0')}>
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={item.title} className={cn('w-full', orientation === 'vertical' && 'border-b')}>
            <NavigationMenuLink asChild>
              <Button
                asChild
                variant={orientation === 'horizontal' ? 'link' : 'link'}
                size="lg"
                onClick={onItemClick}
                className={cn(
                  orientation === 'vertical' ? 'w-full py-8 text-left' : '',
                  'text-base font-medium transition-colors',
                  isActive(item)
                    ? 'text-foreground'
                    : `
                      text-muted-foreground
                      hover:text-foreground
                      dark:text-muted-foreground
                      dark:hover:text-foreground
                    `,
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
