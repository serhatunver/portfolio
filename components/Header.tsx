import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { NavMenu } from '@/components/NavMenu';

export function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-center w-full h-16 z-10 border-b bg-background/90 backdrop-blur-md">
      <div className="flex w-full mx-auto items-center justify-between max-w-2xl p-4">
        {/* Logo + avatar */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold">
            <Avatar className="size-8">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/96500903"
                alt="@serhatunver"
              />
              <AvatarFallback>SÜ</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Navigation */}
        <div className="">
          <NavMenu />
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
