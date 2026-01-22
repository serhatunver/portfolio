import Link from 'next/link';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { DesktopNav } from '@/components/common/DesktopNav';
import { MobileNav } from '@/components/common/MobileNav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FooterType } from '@/types/content';

export function Header({ data }: { data: FooterType }) {
  return (
    <header
      className="
        bg-background
        before:bg-border/64
        sticky top-0 z-40 w-full
        before:absolute before:inset-x-0 before:bottom-0 before:h-px
      "
    >
      <div className="relative container flex h-(--header-height) w-full items-center justify-between gap-2 px-4 sm:px-6">
        <Button asChild size="icon-lg" variant="ghost" className="ring-ring rounded-full ring-1">
          <Link href="/" className="text-lg font-semibold">
            <Avatar className="size-10">
              <AvatarImage src="https://avatars.githubusercontent.com/u/96500903" alt="@serhatunver" />
              <AvatarFallback>SÜ</AvatarFallback>
            </Avatar>
          </Link>
        </Button>
        <DesktopNav />
        <MobileNav data={data} />
      </div>
    </header>
  );
}
