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
        bg-background/80 sticky top-0 z-20 flex h-17 w-full items-center justify-center border-b backdrop-blur-xl
      "
    >
      <div className="mx-auto flex w-full max-w-xl items-center justify-between p-4">
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
