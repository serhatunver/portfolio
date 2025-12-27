import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { NavMenu } from '@/components/NavMenu';

export function Header() {
  return (
    <header className="w-full h-16 max-w-3xl mx-auto flex items-center justify-between p-4 border-b">
      {/* Logo + avatar */}
      <div className="flex items-center gap-4">
        <Link href="/" className="text-lg font-semibold">
          <Avatar className="size-10">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/96500903"
              alt="@serhatunver"
            />
            <AvatarFallback>SÜ</AvatarFallback>
          </Avatar>
        </Link>
      </div>

      {/* Navigation */}
      <div className="hidden sm:block">
        <NavMenu />
      </div>

      {/* Theme toggle */}
      <ThemeToggle />
    </header>
  );
}
