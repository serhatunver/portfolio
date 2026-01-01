import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { NavMenu } from '@/components/common/NavMenu';
import { Button } from '@/components/ui/button';
import { SiGithub } from '@icons-pack/react-simple-icons';

export function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-center w-full h-17 z-10 border-b bg-background/80 backdrop-blur-xl">
      <div className="flex w-full mx-auto items-center justify-between max-w-xl p-4">
        {/* Logo + avatar */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold">
            <Avatar className="size-9">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/96500903"
                alt="@serhatunver"
              />
              <AvatarFallback>SÜ</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Navigation */}
        <div className="mx-auto">
          <NavMenu />
        </div>

        {/* Github + Theme toggle */}
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Link
              href="https://github.com/serhatunver"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
