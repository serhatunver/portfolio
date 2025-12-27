'use client';

import Link from 'next/link';

import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const NAV_ITEMS: { title: string; href: string }[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Projects', href: '/projects' },
];

export function NavMenu() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
