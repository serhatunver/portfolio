'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

export function NavMenu() {
  const isMobile = useIsMobile();

  const pathname = usePathname();

  const isActive = (navItem: NavItem) => {
    if (navItem.href === '/') return pathname === '/';

    return navItem.href === pathname || pathname.startsWith(`${navItem.href}/`);
  };

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="gap-0 md:gap-4">
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={`transition-colors font-medium ${
                  isActive(item)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
                }`}
              >
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
