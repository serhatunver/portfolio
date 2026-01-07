import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/animate-ui/components/buttons/button';
import { DesktopNav } from '@/components/common/DesktopNav';
import { MobileNav } from '@/components/common/MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-center w-full h-17 z-20 border-b bg-background/80 backdrop-blur-xl">
      <div className="flex w-full mx-auto items-center justify-between max-w-xl p-4">
        <Button
          asChild
          size="icon-lg"
          variant="ghost"
          className="rounded-full ring-1 ring-ring"
        >
          <Link href="/" className="text-lg font-semibold">
            <Avatar className="size-10">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/96500903"
                alt="@serhatunver"
              />
              <AvatarFallback>SÜ</AvatarFallback>
            </Avatar>
          </Link>
        </Button>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
