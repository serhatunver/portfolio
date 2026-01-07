import Link from 'next/link';
import { Button } from '@/components/animate-ui/components/buttons/button';
import { NavMenu } from '@/components/common/NavMenu';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { SiGithub } from '@icons-pack/react-simple-icons';

export function DesktopNav() {
  return (
    <div className="hidden sm:flex justify-between w-full">
      {/* Navigation */}
      <div className="mx-auto">
        <NavMenu />
      </div>

      {/* Github + Theme toggle */}
      <div className="hidden sm:flex gap-3">
        <Button variant="outline" size="icon-lg">
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
  );
}
